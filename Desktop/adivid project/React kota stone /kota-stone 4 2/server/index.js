import express from 'express';
import mysql from 'mysql2/promise';
import jwt from 'jsonwebtoken';
import process from 'process';

// ====================================================================
// 1. CONFIGURATION & CONSTANTS (Merging .env variables here)
// ====================================================================

const config = {
    // Server/Application Details
    SERVER_HOST: 'localhost',
    SERVER_PORT: 3000, // Note: This is the client app port, but the API runs on the next one.

    // Backend API Configuration
    API_HOST: '127.0.0.1', // Remains '0.0.0.0' to ensure the server listens on all network interfaces
    API_PORT: 5000,
    TOKEN_EXPIRY_HOURS: '24h',

    
    DB_HOST: '127.0.0.1',
    DB_NAME: 'kotastone_erp',
    DB_USER: 'kotastone_user',
    // Set to blank if your MySQL root user has no password
    DB_PASSWORD: 'KotaStoneDb@2025!',

    // JWT Secret Key (MUST be long and random)
    JWT_SECRET: 'SUPER_SECURE_RANDOM_STRING_2025_KOTASTONE',
};

const hostname = config.API_HOST;
const port = config.API_PORT;
const JWT_SECRET = config.JWT_SECRET;
const TOKEN_EXPIRY_HOURS = config.TOKEN_EXPIRY_HOURS;

if (!config.DB_NAME) {
    console.error("FATAL ERROR: DB_NAME missing");
    process.exit(1);
}
if (!JWT_SECRET) {
    console.error("FATAL ERROR: JWT_SECRET missing");
    process.exit(1);
}

// Database Pool
const dbPool = mysql.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Express App
const app = express();
app.use(express.json());

// --- Basic CORS ---
app.use((req, res, next) => {
    // ⬇️ MODIFIED: Set the header to the specific domain to restrict access
    res.setHeader('Access-Control-Allow-Origin', 'https://sawlastoneindustries.com'); 
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') return res.sendStatus(200);
    next();
});

// ====================================================================
// 2. HELPER FUNCTIONS & MIDDLEWARE
// ====================================================================

const handleError = (res, error, msg = 'Internal Server Error') => {
  console.error(error);
  return res.status(500).json({ message: msg, error: String(error) });
};

async function logSession(userId, token, ip, deviceInfo) {
    try {
        const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
        await dbPool.execute(
            `INSERT INTO sessions (session_id, user_id, expiry_time, ip_address, device_info, is_active)
             VALUES (?, ?, ?, ?, ?, TRUE)`,
            [token, userId, expiryDate, ip, deviceInfo]
        );
    } catch (error) {
        console.error("Error logging session:", error);
    }
}

/**
 * Ensures the value is not undefined, null, or an empty/whitespace string.
 * Returns the original value or null if it's considered empty/missing.
 */
const cleanString = (val) => (val && String(val).trim() !== '') ? val : null;
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    // Format: "Bearer TOKEN"
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.status(401).json({ message: 'Authentication required. Token missing.' }); // Unauthorized
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            console.error("JWT Verification failed:", err.message);
            // 403 Forbidden - token is invalid or expired
            return res.status(403).json({ message: 'Token invalid or expired.' });
        }
        req.user = user; // Attach decoded user info to the request
        next();
    });
}

// ====================================================================
// 3. AUTHENTICATION API
// ====================================================================

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    let connection;

    if (!username || !password) {
        return res.status(400).json({ message: 'Missing username or password' });
    }

    try {
        connection = await dbPool.getConnection();

        const [rows] = await connection.execute(
            'SELECT user_id, username, password_hash AS password_text FROM users WHERE username = ?',
            [username]
        );

        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const user = rows[0];

        // This line assumes password_text is the plain text password for simple check
        const isMatch = (password === user.password_text);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign(
            { user_id: user.user_id, username: user.username },
            JWT_SECRET,
            { expiresIn: TOKEN_EXPIRY_HOURS }
        );

        const ipAddress = req.ip || req.connection.remoteAddress;
        const deviceInfo = req.headers['user-agent'] || 'Unknown Device';
        await logSession(user.user_id, token, ipAddress, deviceInfo);

        await connection.execute(
            'UPDATE users SET last_login_at = CURRENT_TIMESTAMP WHERE user_id = ?',
            [user.user_id]
        );

        res.status(200).json({ message: 'Login Successful', token });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        if (connection) connection.release();
    }
});

// ====================================================================
// 4. ORDERS CRUD API
// ====================================================================

// 1️⃣ GET ALL ORDERS
app.get('/api/orders', async (req, res) => {
    try {
        const [rows] = await dbPool.execute('SELECT * FROM Orders ORDER BY order_id DESC');
        res.json(rows);
    } catch (error) {
        console.error("Fetch Orders Error:", error);
        res.status(500).json({ message: 'Error fetching orders' });
    }
});

// 2️⃣ GET SINGLE ORDER BY ID
app.get('/api/orders/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await dbPool.execute('SELECT * FROM Orders WHERE order_id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error("Fetch Order Error:", error);
        res.status(500).json({ message: 'Error fetching order' });
    }
});

// 3️⃣ CREATE NEW ORDER (FIXED BINDING AND ADDED SPECIFIC VALIDATION LOG)
app.post('/api/orders', async (req, res) => {
    const {
        customer_name, mobile_number, stone_level, stone_size,
        quantity, area, delivery_to, third_party_name,
        third_party_mobile, permanent_address, postal_code,
        payment_mode, amount
    } = req.body;

    // ✨ FIX: Apply robust cleanup to prevent 'undefined' values from reaching MySQL.

    // Convert numerical inputs to numbers, or use 0 if missing/invalid
    const final_quantity = Number(quantity) || 0;
    const final_amount = Number(amount) || 0;

    // Apply cleanup to all string fields
    const final_customer_name = cleanString(customer_name);
    const final_mobile_number = cleanString(mobile_number);
    const final_stone_level = cleanString(stone_level);
    const final_stone_size = cleanString(stone_size);
    const final_area = cleanString(area);
    const final_delivery_to = cleanString(delivery_to);
    const final_payment_mode = cleanString(payment_mode);

    // New fields
    const final_permanent_address = cleanString(permanent_address);
    const final_postal_code = cleanString(postal_code);

    // Optional fields (will be null if not provided or empty string)
    const final_third_party_name = cleanString(third_party_name);
    const final_third_party_mobile = cleanString(third_party_mobile);

    // --- 🚨 CRITICAL VALIDATION CHECK WITH SPECIFIC LOGGING 🚨 ---
    let missingField = null;
    if (!final_customer_name) missingField = 'customer_name';
    else if (!final_mobile_number) missingField = 'mobile_number';
    else if (!final_permanent_address) missingField = 'permanent_address';
    else if (final_amount <= 0) missingField = 'amount (or is zero)'; // Assuming amount must be > 0

    if (missingField) {
        console.error(`Validation Error: Required field [${missingField}] is missing or empty after cleanup.`);
        return res.status(400).json({
            message: `Missing required order information: ${missingField}.`
        });
    }
    // -----------------------------------------------------------

    try {
        const sql = `INSERT INTO Orders
            (customer_name, mobile_number, stone_level, stone_size, quantity, area, delivery_to,
             third_party_name, third_party_mobile, permanent_address, postal_code, payment_mode, amount,
             submitted_date, submitted_time)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_DATE(), CURRENT_TIME())`;

        const values = [
            final_customer_name,
            final_mobile_number,
            final_stone_level,
            final_stone_size,
            final_quantity,
            final_area,
            final_delivery_to,
            final_third_party_name,
            final_third_party_mobile,
            final_permanent_address,
            final_postal_code,
            final_payment_mode,
            final_amount
        ];

        console.log("Values array for INSERT (checking for undefined):", values);

        const [result] = await dbPool.execute(sql, values);

        res.status(201).json({
            message: 'Order created successfully',
            order_id: result.insertId
        });

    } catch (error) {
        // This is where a MySQL 'Column X cannot be null' error would appear if you
        // failed to provide a required field that wasn't caught by the pre-check.
        console.error("Create Order Error:", error);
        res.status(500).json({ message: 'Error creating order' });
    }
});

// 4️⃣ UPDATE ORDER (FIXED BINDING)
app.put('/api/orders/:id', async (req, res) => {
    const { id } = req.params;

    const {
        customer_name, mobile_number, stone_level, stone_size,
        quantity, area, delivery_to, third_party_name,
        third_party_mobile, permanent_address, postal_code,
        payment_mode, amount
    } = req.body;

    // ✨ FIX: Apply same null-safe conversion for the update route
    const final_quantity = Number(quantity) || 0;
    const final_amount = Number(amount) || 0;

    const final_customer_name = cleanString(customer_name);
    const final_mobile_number = cleanString(mobile_number);
    const final_stone_level = cleanString(stone_level);
    const final_stone_size = cleanString(stone_size);
    const final_area = cleanString(area);
    const final_delivery_to = cleanString(delivery_to);
    const final_payment_mode = cleanString(payment_mode);
    const final_permanent_address = cleanString(permanent_address);
    const final_postal_code = cleanString(postal_code);

    const final_third_party_name = cleanString(third_party_name);
    const final_third_party_mobile = cleanString(third_party_mobile);

    // --- Validation Check for Update ---
    let missingField = null;
    if (!final_customer_name) missingField = 'customer_name';
    else if (!final_mobile_number) missingField = 'mobile_number';
    else if (!final_permanent_address) missingField = 'permanent_address';
    else if (final_amount <= 0) missingField = 'amount (or is zero)';

    if (missingField) {
        console.error(`Validation Error on Update: Required field [${missingField}] is missing or empty after cleanup.`);
        return res.status(400).json({
            message: `Missing required update information: ${missingField}.`
        });
    }
    // -----------------------------------

    try {
        const sql = `UPDATE Orders SET
            customer_name=?, mobile_number=?, stone_level=?, stone_size=?, quantity=?, area=?, delivery_to=?,
            third_party_name=?, third_party_mobile=?, permanent_address=?, postal_code=?, payment_mode=?, amount=?
            WHERE order_id=?`;

        const values = [
            final_customer_name, final_mobile_number, final_stone_level, final_stone_size,
            final_quantity, final_area, final_delivery_to,
            final_third_party_name, final_third_party_mobile,
            final_permanent_address, final_postal_code,
            final_payment_mode, final_amount, id
        ];

        await dbPool.execute(sql, values);

        res.json({ message: 'Order updated successfully' });

    } catch (error) {
        console.error("Update Order Error:", error);
        res.status(500).json({ message: 'Error updating order' });
    }
});

// 5️⃣ DELETE ORDER
app.delete('/api/orders/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await dbPool.execute('DELETE FROM Orders WHERE order_id = ?', [id]);
        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.error("Delete Order Error:", error);
        res.status(500).json({ message: 'Error deleting order' });
    }
});

// ====================================================================
// 5. CRUD Operations for /api/ledger (mines_ledger)
// ====================================================================

/**
 * POST /api/ledger
 * CREATE - Add a new transaction to the mines_ledger table.
 */
app.post('/api/ledger', authenticateToken, async (req, res) => {
    const {
        stoneLevel, size, quantity, area, to, // Common fields
        thirdPartyName, mobileNumber, modeOfPayment, amount // Specific fields
    } = req.body;

    const partyType = to === 'Self' ? 'Self Factory' : 'Third Party';
    const transactionDate = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

    if (!stoneLevel || !size || !quantity || !amount) {
        return res.status(400).json({ message: 'Missing required fields: stoneLevel, size, quantity, and amount.' });
    }

    let connection;
    try {
        connection = await dbPool.getConnection();
        const sql = `
            INSERT INTO mines_ledger (
                transaction_date, stone_level, size, quantity, area_location, party_type,
                party_name, mobile_number, mode_of_payment, amount
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            transactionDate, stoneLevel, size, quantity, area, partyType,
            partyType === 'Third Party' ? thirdPartyName : null,
            partyType === 'Third Party' ? mobileNumber : null,
            partyType === 'Third Party' ? modeOfPayment : null,
            amount
        ];

        const [result] = await connection.execute(sql, values);

        res.status(201).json({
            message: 'Transaction successfully created.',
            id: result.insertId
        });

    } catch (error) {
        console.error("Database Error during CREATE operation:", error);
        res.status(500).json({ message: 'An internal server error occurred while creating the transaction.' });
    } finally {
        if (connection) connection.release();
    }
});


/**
 * GET /api/ledger
 * READ - Fetch all transactions from the mines_ledger table.
 */
app.get('/api/ledger', authenticateToken, async (req, res) => {
    let connection;
    try {
        connection = await dbPool.getConnection();
        const [rows] = await connection.execute('SELECT * FROM mines_ledger ORDER BY transaction_date DESC, id DESC');

        res.status(200).json({
            message: 'Transactions successfully fetched.',
            data: rows
        });

    } catch (error) {
        console.error("Database Error during READ operation:", error);
        res.status(500).json({ message: 'An internal server error occurred while fetching transactions.' });
    } finally {
        if (connection) connection.release();
    }
});


/**
 * PUT /api/ledger/:id
 * UPDATE - Modify an existing transaction.
 */
app.put('/api/ledger/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const {
        stoneLevel, size, quantity, area, to,
        thirdPartyName, mobileNumber, modeOfPayment, amount
    } = req.body;

    const partyType = to === 'Self' ? 'Self Factory' : 'Third Party';

    if (!stoneLevel || !size || !quantity || !amount) {
        return res.status(400).json({ message: 'Missing required fields for update.' });
    }

    let connection;
    try {
        connection = await dbPool.getConnection();
        const sql = `
            UPDATE mines_ledger SET
                stone_level = ?, size = ?, quantity = ?, area_location = ?, party_type = ?,
                party_name = ?, mobile_number = ?, mode_of_payment = ?, amount = ?
            WHERE id = ?
        `;
        const values = [
            stoneLevel, size, quantity, area, partyType,
            partyType === 'Third Party' ? thirdPartyName : null,
            partyType === 'Third Party' ? mobileNumber : null,
            partyType === 'Third Party' ? modeOfPayment : null,
            amount,
            id
        ];

        const [result] = await connection.execute(sql, values);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Transaction ID not found for update.' });
        }

        res.status(200).json({
            message: 'Transaction successfully updated.',
            id: id
        });

    } catch (error) {
        console.error("Database Error during UPDATE operation:", error);
        res.status(500).json({ message: 'An internal server error occurred while updating the transaction.' });
    } finally {
        if (connection) connection.release();
    }
});


/**
 * DELETE /api/ledger/:id
 * DELETE - Remove a transaction from the table.
 */
app.delete('/api/ledger/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;

    let connection;
    try {
        connection = await dbPool.getConnection();
        const [result] = await connection.execute('DELETE FROM mines_ledger WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Transaction ID not found for deletion.' });
        }

        res.status(200).json({
            message: 'Transaction successfully deleted.',
            id: id
        });

    } catch (error) {
        console.error("Database Error during DELETE operation:", error);
        res.status(500).json({ message: 'An internal server error occurred while deleting the transaction.' });
    } finally {
        if (connection) connection.release();
    }
});


// ====================================================================
// 6. CRUD Operations for /api/stone_data (stone_quotation)
// ====================================================================

// R: READ (GET all data)
app.get('/api/stone_data', async (req, res) => {
    try {
        // NOTE: Table name 'stone_quotation' is used here, matching the original SQL
        const sql = 'SELECT id, stone_type, price FROM stone_quotation ORDER BY id DESC';
        const [rows] = await dbPool.execute(sql);
        res.json(rows);
    } catch (error) {
        console.error('Database Error during GET /api/stone_data:', error);
        res.status(500).json({ message: 'Error fetching stone data.', details: error.message });
    }
});

// C: CREATE (POST new data)
app.post('/api/stone_data', async (req, res) => {
    const { stone_type, price } = req.body;

    if (!stone_type || price === undefined || price === null) {
        return res.status(400).json({ message: 'Stone type and price are required.' });
    }

    try {
        const sql = 'INSERT INTO stone_quotation (stone_type, price) VALUES (?, ?)';
        const [result] = await dbPool.execute(sql, [stone_type, price]);
        res.status(201).json({ message: 'Record created successfully', id: result.insertId });
    } catch (error) {
        console.error('Database Error during POST /api/stone_data:', error);
        res.status(500).json({ message: 'Error creating record.', details: error.message });
    }
});

// U: UPDATE (PUT existing data)
app.put('/api/stone_data/:id', async (req, res) => {
    const { id } = req.params;
    const { stone_type, price } = req.body;

    if (!stone_type || price === undefined || price === null) {
        return res.status(400).json({ message: 'Stone type and price are required for update.' });
    }

    try {
        const sql = 'UPDATE stone_quotation SET stone_type = ?, price = ? WHERE id = ?';
        const [result] = await dbPool.execute(sql, [stone_type, price, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Record not found.' });
        }
        res.json({ message: 'Record updated successfully' });
    } catch (error) {
        console.error('Database Error during PUT /api/stone_data:', error);
        res.status(500).json({ message: 'Error updating record.', details: error.message });
    }
});

// D: DELETE (DELETE data)
app.delete('/api/stone_data/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const sql = 'DELETE FROM stone_quotation WHERE id = ?';
        const [result] = await dbPool.execute(sql, [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Record not found.' });
        }
        res.json({ message: 'Record deleted successfully' });
    } catch (error) {
        console.error('Database Error during DELETE /api/stone_data:', error);
        res.status(500).json({ message: 'Error deleting record.', details: error.message });
    }
});

// ====================================================================
// 7. CRUD Operations for /api/stone_finishing (stone_finishing)
// ====================================================================

// R: READ (GET all finishing data)
app.get('/api/stone_finishing', async (req, res) => {
    try {
        const sql = 'SELECT id, finishing_type, price_difference FROM stone_finishing ORDER BY id DESC';
        const [rows] = await dbPool.execute(sql);
        res.json(rows);
    } catch (error) {
        console.error('Database Error during GET /api/stone_finishing:', error);
        res.status(500).json({ message: 'Error fetching finishing data.', details: error.message });
    }
});

// C: CREATE (POST new finishing detail)
app.post('/api/stone_finishing', async (req, res) => {
    const { finishing_type, price_difference } = req.body;

    if (!finishing_type || price_difference === undefined || price_difference === null) {
        return res.status(400).json({ error: 'Missing finishing_type or price_difference' });
    }

    try {
        const sql = 'INSERT INTO stone_finishing (finishing_type, price_difference) VALUES (?, ?)';
        const [result] = await dbPool.execute(sql, [finishing_type, price_difference]);

        res.status(201).json({
            id: result.insertId,
            message: 'Finishing detail created successfully',
            finishing_type,
            price_difference
        });
    } catch (error) {
        console.error('Database Error during POST /api/stone_finishing:', error);
        res.status(500).json({ message: 'Error creating finishing record.', details: error.message });
    }
});

// U: UPDATE (PUT existing finishing detail)
app.put('/api/stone_finishing/:id', async (req, res) => {
    const { id } = req.params;
    const { finishing_type, price_difference } = req.body;

    if (!finishing_type || price_difference === undefined || price_difference === null) {
        return res.status(400).json({ message: 'Finishing type and price difference are required for update.' });
    }

    try {
        const sql = `UPDATE stone_finishing SET finishing_type = ?, price_difference = ? WHERE id = ?`;
        const [result] = await dbPool.execute(sql, [finishing_type, price_difference, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Finishing detail not found' });
        }
        res.json({ message: 'Finishing detail updated successfully', id });
    } catch (error) {
        console.error('Database Error during PUT /api/stone_finishing:', error);
        res.status(500).json({ message: 'Error updating finishing record.', details: error.message });
    }
});

// D: DELETE (DELETE finishing detail)
app.delete('/api/stone_finishing/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const sql = `DELETE FROM stone_finishing WHERE id = ?`;
        const [result] = await dbPool.execute(sql, [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Finishing detail not found' });
        }
        res.json({ message: 'Finishing detail deleted successfully', id });
    } catch (error) {
        console.error('Database Error during DELETE /api/stone_finishing:', error);
        res.status(500).json({ message: 'Error deleting finishing record.', details: error.message });
    }
});

// ====================================================================
// 8. CRUD Operations for /api/stone_sizes (stone_sizes)
// ====================================================================

/**
 * R: READ (GET all size data)
 * GET /api/stone_sizes
 */
app.get('/api/stone_sizes', async (req, res) => {
    try {
        const sql = 'SELECT id, size, price FROM stone_sizes ORDER BY id DESC';
        const [rows] = await dbPool.execute(sql);
        res.json(rows);
    } catch (error) {
        console.error('Database Error during GET /api/stone_sizes:', error);
        res.status(500).json({ message: 'Error fetching stone size data.', details: error.message });
    }
});

/**
 * C: CREATE (POST new size detail)
 * POST /api/stone_sizes
 */
app.post('/api/stone_sizes', async (req, res) => {
    const { size, price } = req.body;

    if (!size || price === undefined || price === null) {
        return res.status(400).json({ message: 'Size and price are required.' });
    }

    try {
        const sql = 'INSERT INTO stone_sizes (size, price) VALUES (?, ?)';
        const [result] = await dbPool.execute(sql, [size, price]);
        res.status(201).json({ id: result.insertId, message: 'Stone size created successfully', size, price });
    } catch (error) {
        console.error('Database Error during POST /api/stone_sizes:', error);
        res.status(500).json({ message: 'Error creating stone size record.', details: error.message });
    }
});

/**
 * U: UPDATE (PUT existing size detail)
 * PUT /api/stone_sizes/:id
 */
app.put('/api/stone_sizes/:id', async (req, res) => {
    const { id } = req.params;
    const { size, price } = req.body;

    if (!size || price === undefined || price === null) {
        return res.status(400).json({ message: 'Size and price are required for update.' });
    }

    try {
        const sql = `UPDATE stone_sizes SET size = ?, price = ? WHERE id = ?`;
        const [result] = await dbPool.execute(sql, [size, price, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Stone size record not found' });
        }
        res.json({ message: 'Stone size updated successfully', id });
    } catch (error) {
        console.error('Database Error during PUT /api/stone_sizes:', error);
        res.status(500).json({ message: 'Error updating stone size record.', details: error.message });
    }
});

/**
 * D: DELETE (DELETE size detail)
 * DELETE /api/stone_sizes/:id
 */
app.delete('/api/stone_sizes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const sql = `DELETE FROM stone_sizes WHERE id = ?`;
        const [result] = await dbPool.execute(sql, [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Stone size record not found' });
        }
        res.json({ message: 'Stone size deleted successfully', id });
    } catch (error) {
        console.error('Database Error during DELETE /api/stone_sizes:', error);
        res.status(500).json({ message: 'Error deleting stone size record.', details: error.message });
    }
});

// ====================================================================
// 9. CRUD Operations for /api/stone_thicknesses
// ====================================================================

/**
 * R: READ (GET all stone thickness details)
 * GET /api/stone_thicknesses
 */
app.get('/api/stone_thicknesses', async (req, res) => {
    try {
        // UPDATED: Include 'weight' column in select
        const sql = 'SELECT id, thickness, price, weight FROM stone_thicknesses ORDER BY id DESC';
        const [rows] = await dbPool.execute(sql);
        res.json(rows);
    } catch (error) {
        console.error('Database Error during GET /api/stone_thicknesses:', error);
        res.status(500).json({ message: 'Error fetching stone thickness data.', details: error.message });
    }
});

/**
 * C: CREATE (POST new thickness detail)
 * POST /api/stone_thicknesses
 */
app.post('/api/stone_thicknesses', async (req, res) => {
    // UPDATED: Destructure the new 'weight' field
    const { thickness, price, weight } = req.body;

    // UPDATED: Validate all three required fields
    if (!thickness || price === undefined || price === null || weight === undefined || weight === null) {
        return res.status(400).json({ message: 'Thickness, price, and weight are required.' });
    }

    try {
        // UPDATED: Include 'weight' column in INSERT SQL
        const sql = 'INSERT INTO stone_thicknesses (thickness, price, weight) VALUES (?, ?, ?)';
        const [result] = await dbPool.execute(sql, [thickness, price, weight]);

        res.status(201).json({
            id: result.insertId,
            message: 'Stone thickness created successfully',
            thickness,
            price,
            weight
        });
    } catch (error) {
        console.error('Database Error during POST /api/stone_thicknesses:', error);
        res.status(500).json({ message: 'Error creating stone thickness record.', details: error.message });
    }
});

/**
 * U: UPDATE (PUT existing thickness detail)
 * PUT /api/stone_thicknesses/:id
 */
app.put('/api/stone_thicknesses/:id', async (req, res) => {
    const { id } = req.params;
    // UPDATED: Destructure the new 'weight' field
    const { thickness, price, weight } = req.body;

    // UPDATED: Validate all three required fields
    if (!thickness || price === undefined || price === null || weight === undefined || weight === null) {
        return res.status(400).json({ message: 'Thickness, price, and weight are required for update.' });
    }

    try {
        // UPDATED: Include 'weight = ?' in the UPDATE SQL
        const sql = `UPDATE stone_thicknesses SET thickness = ?, price = ?, weight = ? WHERE id = ?`;
        const [result] = await dbPool.execute(sql, [thickness, price, weight, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Stone thickness record not found' });
        }
        res.json({ message: 'Stone thickness updated successfully', id });
    } catch (error) {
        console.error('Database Error during PUT /api/stone_thicknesses:', error);
        res.status(500).json({ message: 'Error updating stone thickness record.', details: error.message });
    }
});

/**
 * D: DELETE (DELETE thickness detail)
 * DELETE /api/stone_thicknesses/:id
 */
app.delete('/api/stone_thicknesses/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const sql = `DELETE FROM stone_thicknesses WHERE id = ?`;
        const [result] = await dbPool.execute(sql, [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Stone thickness record not found' });
        }
        res.json({ message: 'Stone thickness deleted successfully', id });
    } catch (error) {
        console.error('Database Error during DELETE /api/stone_thicknesses:', error);
        res.status(500).json({ message: 'Error deleting stone thickness record.', details: error.message });
    }
});

// ====================================================================
// 10. APP SETTINGS (SettingsForm.jsx)
// ====================================================================

/**
 * R: READ (GET /api/settings/1) - Fetch fixed configuration row
 */
app.get('/api/settings/:id', async (req, res) => {
    // Only allow fetching the fixed configuration row (ID 1)
    if (req.params.id !== '1') {
        return res.status(403).json({ message: 'Only configuration ID 1 can be fetched.' });
    }
    try {
        const sql = `SELECT * FROM app_settings WHERE id = 1`;
        const [rows] = await dbPool.execute(sql);

        if (rows.length === 0) {
            // Return defaults if the row doesn't exist yet
            return res.json({
                id: 1,
                default_quantity: 0,
                fixed_loading_charge: 0,
                freight_rate_per_quintal_usd: 0
            });
        }

        // Map database name 'default_quantity' back to client name 'quantity'
        const settings = rows[0];
        const clientSettings = {
            id: settings.id,
            quantity: settings.default_quantity, // Mapped name
            fixed_loading_charge: settings.fixed_loading_charge,
            freight_rate_per_quintal_usd: settings.freight_rate_per_quintal_usd
        };

        res.json(clientSettings);

    } catch (error) {
        console.error("Fetch Settings Error:", error);
        res.status(500).json({ message: 'Error fetching application settings' });
    }
});

/**
 * U: UPDATE (PUT /api/settings/1) - Update or Insert fixed configuration row
 * (We expect :id to be 1)
 *
 * FIX: Ensure 'quantity' from payload is correctly mapped to 'default_quantity' in DB.
 * FIX: Use connection.execute for better resource management.
 */
app.put('/api/settings/:id', async (req, res) => {
    // Only allow updates to the fixed configuration row (ID 1)
    if (req.params.id !== '1') {
        return res.status(403).json({ message: 'Only configuration ID 1 can be updated.' });
    }
    // Expect keys from the client-side component structure:
    const { quantity, fixed_loading_charge, freight_rate_per_quintal_usd } = req.body;
    // Map 'quantity' back to the database column name 'default_quantity'
    const default_quantity = quantity;

    // Validation (ensure values are present and numeric)
    if (
        default_quantity === undefined || isNaN(default_quantity) ||
        fixed_loading_charge === undefined || isNaN(fixed_loading_charge) ||
        freight_rate_per_quintal_usd === undefined || isNaN(freight_rate_per_quintal_usd)
    ) {
        return res.status(400).json({ message: 'All required numerical fields must be provided.' });
    }
    let connection;
    try {
        connection = await dbPool.getConnection();
        // Use INSERT OR UPDATE to ensure the row exists (upsert pattern)
        const sql = `
            INSERT INTO app_settings (id, default_quantity, fixed_loading_charge, freight_rate_per_quintal_usd)
            VALUES (1, ?, ?, ?)
            ON DUPLICATE KEY UPDATE
                default_quantity = VALUES(default_quantity),
                fixed_loading_charge = VALUES(fixed_loading_charge),
                freight_rate_per_quintal_usd = VALUES(freight_rate_per_quintal_usd)
        `;
        const values = [default_quantity, fixed_loading_charge, freight_rate_per_quintal_usd];

        await connection.execute(sql, values);

        res.json({ message: 'Settings updated successfully' });

    } catch (error) {
        console.error("Update Settings Error:", error);
        res.status(500).json({ message: 'Error updating application settings' });
    } finally {
        if (connection) connection.release();
    }
});

// ====================================================================
// 11. QUOTATION API (Quotations.jsx)
// ====================================================================

/**
 * C: CREATE (POST /api/quotations) - Add a new quotation.
 */
app.post('/api/quotations', async (req, res) => {
    const {
        typeOfStone, statusOfStone, size, quantity, thickness, ratePer, rateValue, gstPercent,
        ownerName, companyName, mobileNo, emailAddress, address,
        estimatedWeight, quintals, tonnes, selectedState, selectedDistrict, selectedCity,
        freightRate, freightCost, invoiceNo, date,
        customerName, customerMobileNo, permanentAddress, postalCode, customerGst,
        subTotal, gstAmount, totalWithoutFreight, freightCharges, grandTotal
    } = req.body;

    let connection;
    try {
        // 1. Get a pool connection
        connection = await dbPool.getConnection();
        // 2. Start a transaction for reliability
        await connection.beginTransaction();

        const sql = `
            INSERT INTO quotations (
                type_of_stone, status_of_stone, size, quantity, thickness, rate_per, rate_value, gst_percent,
                owner_name, company_name, mobile_no, email_address, address,
                estimated_weight, quintals, tonnes, selected_state, selected_district, selected_city,
                freight_rate, freight_cost, invoice_no, date,
                customer_name, customer_mobile_no, permanent_address, postal_code, customer_gst,
                sub_total, gst_amount, total_without_freight, freight_charges, grand_total
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        // 3. Prepare values array (must match SQL columns exactly)
        const values = [
            typeOfStone, statusOfStone, size, quantity, thickness, ratePer, rateValue, gstPercent,
            ownerName, companyName, mobileNo, emailAddress, address,
            estimatedWeight, quintals, tonnes, selectedState, selectedDistrict, selectedCity,
            freightRate, freightCost, invoiceNo, date,
            customerName, customerMobileNo, permanentAddress, postalCode, customerGst,
            subTotal, gstAmount, totalWithoutFreight, freightCharges, grandTotal
        ];

        // 4. Execute the insertion query
        const [result] = await connection.execute(sql, values);
        const generatedId = result.insertId;

        // 5. Commit the transaction (guarantees data is written)
        await connection.commit();

        res.status(201).json({
            message: 'Quotation created successfully',
            id: generatedId
        });

    } catch (error) {
        // If anything goes wrong, roll back the transaction
        if (connection) {
            await connection.rollback();
        }
        console.error("Create Quotation Error:", error);
        res.status(500).json({ message: 'Error creating quotation' });
    } finally {
        if (connection) connection.release();
    }
});

/**
 * R: READ - Get all quotations (GET /api/quotations)
 */
app.get('/api/quotations', async (req, res) => {
    try {
        const [rows] = await dbPool.execute('SELECT * FROM quotations ORDER BY id DESC');
        res.status(200).json(rows);
    } catch (error) {
        console.error("Fetch All Quotations Error:", error);
        res.status(500).json({ message: 'Error fetching quotations' });
    }
});

/**
 * R: READ - Get last quotation ID (GET /api/quotations/lastId)
 */
app.get('/api/quotations/lastId', async (req, res) => {
    try {
        const [rows] = await dbPool.execute('SELECT MAX(id) as last_id FROM quotations');
        const lastId = rows.length > 0 && rows[0].last_id !== null ? rows[0].last_id : 0;
        console.log(`[API] Fetched last quotation ID: ${lastId}`);
        res.status(200).json({ last_id: lastId });
    } catch (error) {
        console.error("Fetch Last ID Error:", error);
        res.status(500).json({ message: 'Error fetching last quotation ID' });
    }
});

/**
 * R: READ - Get a single quotation by ID (GET /api/quotations/:id)
 */
app.get('/api/quotations/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await dbPool.execute('SELECT * FROM quotations WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: `Quotation with ID ${id} not found.` });
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        console.error("Fetch Single Quotation Error:", error);
        res.status(500).json({ message: 'Error fetching quotation' });
    }
});

/**
 * U: UPDATE - Update a quotation by ID (PUT /api/quotations/:id)
 * Note: Only updates the customer and pricing details for simplicity.
 */
app.put('/api/quotations/:id', async (req, res) => {
    const id = req.params.id;
    const {
        // Note: The fields listed here must match the fields being passed by the client component's update logic
        typeOfStone, statusOfStone, size, quantity, thickness, ratePer, rateValue, gstPercent,
        ownerName, companyName, mobileNo, emailAddress, address,
        estimatedWeight, quintals, tonnes, selectedState, selectedDistrict, selectedCity,
        freightRate, freightCost, invoiceNo, date,
        customerName, customerMobileNo, permanentAddress, postalCode, customerGst,
        subTotal, gstAmount, totalWithoutFreight, freightCharges, grandTotal
    } = req.body;

    try {
        const sql = `
            UPDATE quotations SET
                type_of_stone=?, status_of_stone=?, size=?, quantity=?, thickness=?, rate_per=?, rate_value=?, gst_percent=?,
                owner_name=?, company_name=?, mobile_no=?, email_address=?, address=?,
                estimated_weight=?, quintals=?, tonnes=?, selected_state=?, selected_district=?, selected_city=?,
                freight_rate=?, freight_cost=?, invoice_no=?, date=?,
                customer_name=?, customer_mobile_no=?, permanent_address=?, postal_code=?, customer_gst=?,
                sub_total=?, gst_amount=?, total_without_freight=?, freight_charges=?, grand_total=?
            WHERE id=?
        `;
        const values = [
            typeOfStone, statusOfStone, size, quantity, thickness, ratePer, rateValue, gstPercent,
            ownerName, companyName, mobileNo, emailAddress, address,
            estimatedWeight, quintals, tonnes, selectedState, selectedDistrict, selectedCity,
            freightRate, freightCost, invoiceNo, date,
            customerName, customerMobileNo, permanentAddress, postalCode, customerGst,
            subTotal, gstAmount, totalWithoutFreight, freightCharges, grandTotal,
            id
        ];

        const [result] = await dbPool.execute(sql, values);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: `Quotation with ID ${id} not found.` });
        }

        res.status(200).json({ message: 'Quotation updated successfully' });

    } catch (error) {
        console.error("Update Quotation Error:", error);
        res.status(500).json({ message: 'Error updating quotation' });
    }
});

/**
 * D: DELETE - Delete a quotation by ID (DELETE /api/quotations/:id)
 */
app.delete('/api/quotations/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const [result] = await dbPool.execute('DELETE FROM quotations WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: `Quotation with ID ${id} not found.` });
        }

        res.status(200).json({ message: 'Quotation deleted successfully' });
    } catch (error) {
        console.error("Delete Quotation Error:", error);
        res.status(500).json({ message: 'Error deleting quotation' });
    }
});

// ====================================================================
// 12. STONE LEDGER API (StoneLedger.jsx)
// ====================================================================

/**
 * C: CREATE (POST /api/stone_ledger_data) - Add a new stone entry
 */
app.post('/api/stone_ledger_data', async (req, res) => {
    const { stone_type, stone_finish, stone_size, stone_slabs } = req.body;

    // Basic Validation
    if (!stone_type || !stone_finish || !stone_size || stone_slabs === undefined || stone_slabs === null) {
        return res.status(400).json({ message: 'Missing required fields: stone_type, stone_finish, stone_size, or stone_slabs.' });
    }

    const final_slabs = Number(stone_slabs);
    if (isNaN(final_slabs)) {
        return res.status(400).json({ message: 'Stone slabs must be a number.' });
    }

    try {
        const sql = `
            INSERT INTO stone_ledger_data (stone_type, stone_finish, stone_size, stone_slabs)
            VALUES (?, ?, ?, ?)
        `;
        const values = [stone_type, stone_finish, stone_size, final_slabs];
        const [result] = await dbPool.execute(sql, values);

        res.status(201).json({ message: 'Stone entry created successfully', id: result.insertId });

    } catch (error) {
        console.error("Database Error during CREATE /api/stone_ledger_data:", error);
        res.status(500).json({ message: 'An internal server error occurred while creating the entry.' });
    }
});

/**
 * R: READ (GET /api/stone_ledger_data) - Fetch all stone entries
 */
app.get('/api/stone_ledger_data', async (req, res) => {
    try {
        const [rows] = await dbPool.execute('SELECT * FROM stone_ledger_data ORDER BY id DESC');
        res.status(200).json(rows);
    } catch (error) {
        console.error("Database Error during READ /api/stone_ledger_data:", error);
        res.status(500).json({ message: 'An internal server error occurred while fetching entries.' });
    }
});

/**
 * U: UPDATE (PUT /api/stone_ledger_data/:id) - Modify a stone entry
 */
app.put('/api/stone_ledger_data/:id', async (req, res) => {
    const { id } = req.params;
    const { stone_type, stone_finish, stone_size, stone_slabs } = req.body;

    if (!stone_type || !stone_finish || !stone_size || stone_slabs === undefined || stone_slabs === null) {
        return res.status(400).json({ message: 'Missing required fields for update.' });
    }

    const final_slabs = Number(stone_slabs);
    if (isNaN(final_slabs)) {
        return res.status(400).json({ message: 'Stone slabs must be a number.' });
    }

    try {
        const sql = `
            UPDATE stone_ledger_data SET
                stone_type = ?, stone_finish = ?, stone_size = ?, stone_slabs = ?
            WHERE id = ?
        `;
        const values = [stone_type, stone_finish, stone_size, final_slabs, id];
        const [result] = await dbPool.execute(sql, values);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Stone entry ID not found for update.' });
        }

        res.status(200).json({ message: 'Stone entry successfully updated.', id: id });

    } catch (error) {
        console.error("Database Error during UPDATE /api/stone_ledger_data:", error);
        res.status(500).json({ message: 'An internal server error occurred while updating the entry.' });
    }
});

/**
 * D: DELETE (DELETE /api/stone_ledger_data/:id) - Remove a stone entry
 */
app.delete('/api/stone_ledger_data/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await dbPool.execute('DELETE FROM stone_ledger_data WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Stone entry ID not found for deletion.' });
        }

        res.status(200).json({ message: 'Stone entry successfully deleted.', id: id });

    } catch (error) {
        console.error("Database Error during DELETE /api/stone_ledger_data:", error);
        res.status(500).json({ message: 'An internal server error occurred while deleting the entry.' });
    }
});

// ====================================================================
// 13. MACHINERY LEDGER API (NEW ROUTES)
// ====================================================================

/**
 * R: READ (GET /api/machinery_ledger_data) - Fetch all machinery entries
 * C: CREATE (POST /api/machinery_ledger_data) - Add a new machinery entry
 */
app.route('/api/machinery_ledger_data')
    .get(async (req, res) => {
        try {
            // Note: purchase_date is returned as a JS Date object by mysql2/promise,
            // which converts cleanly to JSON.
            const [rows] = await dbPool.execute('SELECT * FROM machinery ORDER BY id DESC');
            res.status(200).json({
                message: 'Machinery entries successfully fetched.',
                data: rows
            });
        } catch (error) {
            console.error("Database Error during GET /api/machinery_ledger_data:", error);
            res.status(500).json({ message: 'An internal server error occurred while fetching entries.' });
        }
    })
    .post(async (req, res) => {
        const { machine_name, model_number, purchase_date, current_status } = req.body;

        if (!machine_name || !model_number || !purchase_date || !current_status) {
            return res.status(400).json({ message: 'Missing required fields for creation.' });
        }

        try {
            const sql = 'INSERT INTO machinery (machine_name, model_number, purchase_date, current_status) VALUES (?, ?, ?, ?)';
            const values = [machine_name, model_number, purchase_date, current_status];
            const [result] = await dbPool.execute(sql, values);

            console.log(`[API] Created machinery entry ID: ${result.insertId}`);
            res.status(201).json({
                message: 'Machinery entry successfully created.',
                id: result.insertId
            });

        } catch (error) {
            console.error("Database Error during POST /api/machinery_ledger_data:", error);
            res.status(500).json({ message: 'An internal server error occurred while creating the entry.' });
        }
    });

/**
 * U: UPDATE (PUT /api/machinery_ledger_data/:id) - Modify an existing machinery entry
 * D: DELETE (DELETE /api/machinery_ledger_data/:id) - Remove a machinery entry
 */
app.route('/api/machinery_ledger_data/:id')
    .put(async (req, res) => {
        const { id } = req.params;
        const { machine_name, model_number, purchase_date, current_status } = req.body;

        if (!machine_name || !model_number || !purchase_date || !current_status) {
            return res.status(400).json({ message: 'Missing required fields for update.' });
        }

        try {
            const [result] = await dbPool.execute(
                'UPDATE machinery SET machine_name = ?, model_number = ?, purchase_date = ?, current_status = ? WHERE id = ?',
                [machine_name, model_number, purchase_date, current_status, id]
            );

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Machinery entry ID not found for update.' });
            }

            console.log(`[API] Updated machinery entry ID: ${id}`);
            res.status(200).json({ message: 'Machinery entry successfully updated.', id: id });

        } catch (error) {
            console.error("Database Error during PUT /api/machinery_ledger_data:", error);
            res.status(500).json({ message: 'An internal server error occurred while updating the entry.' });
        }
    })
    .delete(async (req, res) => {
        const { id } = req.params;
        try {
            const [result] = await dbPool.execute('DELETE FROM machinery WHERE id = ?', [id]);

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Machinery entry ID not found for deletion.' });
            }

            console.log(`[API] Deleted machinery entry ID: ${id}`);
            res.status(200).json({ message: 'Machinery entry successfully deleted.', id: id });

        } catch (error) {
            console.error("Database Error during DELETE /api/machinery_ledger_data:", error);
            res.status(500).json({ message: 'An internal server error occurred while deleting the entry.' });
        }
    });

// ====================================================================
// 14. EMPLOYEE CRUD API (HREmployees.jsx)
// ====================================================================

// R: READ all employees
app.get('/api/employees', async (req, res) => {
    try {
        // Calculate 'due' field based on 'salary' and 'saved' for the frontend
        const sql = `
            SELECT
                *,
                (salary - saved) as due
            FROM employees
            ORDER BY name ASC
        `;
        const [rows] = await dbPool.execute(sql);
        return res.json(rows);
    } catch (err) {
        return handleError(res, err, 'Error fetching employees');
    }
});


// C: CREATE new employee
app.post('/api/employees', async (req, res) => {
    const {
        name, mobile, work_type, employee_code, pf,
        advance, advance_amount, salary_type, salary, saved
    } = req.body;

    if (!name || name.trim() === '') {
        return res.status(400).json({ message: 'Name is a required field.' });
    }

    try {
        const sql = `
            INSERT INTO employees
            (name, mobile, work_type, employee_code, pf,
             advance, advance_amount, salary_type, salary, saved)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const [result] = await dbPool.execute(
            sql,
            [
                name,
                mobile || null,
                work_type || null,
                employee_code || null,
                pf || null,
                (advance === 'Yes' ? 'Yes' : 'No'),
                Number(advance_amount) || 0,
                (salary_type === 'Variable' ? 'Variable' : 'Fixed'),
                Number(salary) || 0,
                Number(saved) || 0
            ]
        );
        const insertedId = result.insertId;

        // Fetch the newly created record with the calculated 'due' field
        const [rows] = await dbPool.execute(
            `SELECT *, (salary - saved) as due FROM employees WHERE id = ?`,
            [insertedId]
        );
        return res.status(201).json(rows[0]);
    } catch (err) {
        return handleError(res, err, 'Error creating employee');
    }
});

// U: UPDATE employee
app.put('/api/employees/:id', async (req, res) => {
    const { id } = req.params;
    const {
        name, mobile, work_type, employee_code, pf,
        advance, advance_amount, salary_type, salary, saved
    } = req.body;

    if (!name || name.trim() === '') {
        return res.status(400).json({ message: 'Name is a required field.' });
    }

    try {
        const sql = `
            UPDATE employees SET
            name = ?, mobile = ?, work_type = ?, employee_code = ?, pf = ?,
            advance = ?, advance_amount = ?, salary_type = ?, salary = ?, saved = ?
            WHERE id = ?
        `;
        const [result] = await dbPool.execute(
            sql,
            [
                name,
                mobile || null,
                work_type || null,
                employee_code || null,
                pf || null,
                (advance === 'Yes' ? 'Yes' : 'No'),
                Number(advance_amount) || 0,
                (salary_type === 'Variable' ? 'Variable' : 'Fixed'),
                Number(salary) || 0,
                Number(saved) || 0,
                id
            ]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        // Fetch the updated record to return the calculated 'due' field
        const [rows] = await dbPool.execute(
            `SELECT *, (salary - saved) as due FROM employees WHERE id = ?`,
            [id]
        );
        return res.json(rows[0]);

    } catch (err) {
        return handleError(res, err, 'Error updating employee');
    }
});

// D: DELETE employee
app.delete('/api/employees/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await dbPool.execute('DELETE FROM employees WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' });
    return res.json({ message: 'Employee deleted' });
  } catch (err) {
    return handleError(res, err, 'Error deleting employee');
  }
});

// HEALTH
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// ====================================================================
// SERVER START
// ====================================================================
app.listen(port, hostname, () => {
    console.log('--- SERVER STATUS ---');
    console.log(`✅ Server connected! Running at https://${hostname}:${port}/`);
    console.log(`CORS is restricted to: https://sawlastoneindustries.com`); // ⬅️ IMPORTANT NOTE
    console.log(`API endpoints ready:`);
    console.log("GET/POST/PUT/DELETE /api/employees (NEW)");
    console.log("GET/POST/PUT/DELETE /api/orders");
    console.log("GET/POST/PUT/DELETE /api/ledger");
    console.log("GET/POST/PUT/DELETE /api/stone_data");
    console.log("GET/POST/PUT/DELETE /api/stone_finishing");
    console.log("GET/POST/PUT/DELETE /api/stone_sizes");
    console.log("GET/POST/PUT/DELETE /api/stone_thicknesses");
    console.log("GET/PUT /api/settings/:id");
    console.log("GET/POST/PUT/DELETE /api/quotations");
    console.log("GET/POST/PUT/DELETE /api/stone_ledger_data");
    console.log("GET/POST/PUT/DELETE /api/machinery_ledger_data/:id");
});