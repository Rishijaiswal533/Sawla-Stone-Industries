import React, { useState, useEffect, useMemo } from "react";
import CompanyFooter from "./CompanyFooter";

const API_BASE_URL = 'https://ops.sawlastoneindustries.com/api';

// --- SVG Icons ---
const ArrowLeftIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: 'currentColor', width: '1em', height: '1em' }}>
    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.2l105.7-105.7c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
  </svg>
);

const CubesIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: 'currentColor', width: '1em', height: '1em' }}>
    <path d="M239.1 63.1c9.2-9.2 21.6-14.9 35.3-15.8c-1.3-.2-2.6-.4-3.9-.4H64C28.7 48 0 76.7 0 112V400c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V272c0-1.4 0-2.8-.1-4.2c-.8-13.6-6.6-26.1-15.9-35.3L239.1 63.1zM64 432c-17.7 0-32-14.3-32-32V112c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32V256c0 17.7-14.3 32-32 32H96c-17.7 0-32 14.3-32 32V432zm303.8-151.7L448 358.5V400c0 17.7-14.3 32-32 32H400V368c0-17.7-14.3-32-32-32H336c-17.7 0-32 14.3-32 32v64H272c-17.7 0-32-14.3-32-32V358.5L304.3 280c7.3-7.3 17.2-11.4 27.5-11.4s20.2 4.1 27.5 11.4z"/>
  </svg>
);

const BuildingIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{ fill: 'currentColor', width: '1em', height: '1em' }}>
    <path d="M16 112c0-17.7 14.3-32 32-32H336c17.7 0 32 14.3 32 32V400c0 17.7-14.3 32-32 32H200c-17.7 0-32 14.3-32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V464H16c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zM336 224H48V128H336v96zM48 320H336V256H48v64zM336 400H48V352H336v48z"/>
  </svg>
);

const TruckIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ fill: 'currentColor', width: '1em', height: '1em' }}>
    <path d="M304 32c0-17.7-14.3-32-32-32H64C28.7 0 0 28.7 0 64V336c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM288 320H32V64H288V320zM640 128c0-17.7-14.3-32-32-32H352c-17.7 0-32 14.3-32 32v320h288V128zM352 416V160H576l64 64V416H352z"/>
    <circle cx="104" cy="440" r="40" fill="currentColor"/>
    <circle cx="536" cy="440" r="40" fill="currentColor"/>
  </svg>
);

// --- Formatting Helper ---
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(amount);
};

const App = () => {
  // --- States ---
  const [lookups, setLookups] = useState({ stones: [], finishes: [], sizes: [], thicknesses: [] });
  const [form, setForm] = useState({
    stoneType: '', status: '', quantity: 0, size: '', thickness: '', rate: 0,
    loadingChargeType: 'per_quintal', fixedLoadingCharge: 0,
    freightRatePerQuintal: 0, destination: '',
    fullName: '', companyName: '', mobile: '', email: '', address: '', gstNumber: '',
  });

  // --- API Data Fetching ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({}) };
        const [stones, finishes, sizes, thicknesses] = await Promise.all([
          fetch(`${API_BASE_URL}/stone_data/fetch`, payload).then(res => res.json()),
          fetch(`${API_BASE_URL}/stone_finishing/fetch`, payload).then(res => res.json()),
          fetch(`${API_BASE_URL}/stone_sizes/fetch`, payload).then(res => res.json()),
          fetch(`${API_BASE_URL}/stone_thicknesses/fetch`, payload).then(res => res.json())
        ]);

        setLookups({
          stones: Array.isArray(stones) ? stones : (stones.rows || stones.data || []),
          finishes: Array.isArray(finishes) ? finishes : (finishes.rows || finishes.data || []),
          sizes: Array.isArray(sizes) ? sizes : (sizes.rows || sizes.data || []),
          thicknesses: Array.isArray(thicknesses) ? thicknesses : (thicknesses.rows || thicknesses.data || [])
        });
      } catch (err) {
        console.error("API Fetch Error:", err);
      }
    };
    fetchData();
  }, []);

  // --- Auto-Calculation Logic ---
  const isTile = form.stoneType.toLowerCase().includes('tile');
  const gstRate = isTile ? 0.18 : 0.05;

  // Find the weight factor based on selected thickness string
  const weightFactor = useMemo(() => {
    const match = lookups.thicknesses.find(t => String(t.thickness) === String(form.thickness));
    return match ? parseFloat(match.weight) : 0;
  }, [lookups.thicknesses, form.thickness]);

  const calculations = useMemo(() => {
    const Q = parseFloat(form.quantity) || 0;
    const R = parseFloat(form.rate) || 0;
    const F_Rate = parseFloat(form.freightRatePerQuintal) || 0;

    const subtotal = Q * R;
    const gstAmount = subtotal * gstRate;
    const totalWeightKg = Q * weightFactor;
    const quintals = totalWeightKg / 100;

    let loadingCharge = 0;
    if (form.loadingChargeType === 'fixed') {
      loadingCharge = parseFloat(form.fixedLoadingCharge) || 0;
    } else {
      loadingCharge = quintals * 100; // Auto-calculate ₹100 per quintal
    }

    const freightCost = quintals * F_Rate;
    const totalWithoutFreight = subtotal + gstAmount + loadingCharge;
    const grandTotal = totalWithoutFreight + freightCost;

    return { subtotal, gstAmount, loadingCharge, totalWeightKg, quintals, freightCost, totalWithoutFreight, grandTotal };
  }, [form, weightFactor, gstRate]);

  // --- Input Handler ---
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'number' ? parseFloat(value) || 0 : value }));
  };

  return (
    <>
      <style>{`
        * { font-family: "Inter", sans-serif; box-sizing: border-box; }
        .quote-page { background: #f7f8f6; padding: 30px 20px; min-height: 100vh; display: flex; flex-direction: column; align-items: center; }
        .content-wrapper { width: 100%; max-width: 850px; }
        .navigation-row { display: flex; justify-content: space-between; margin-bottom: 12px; width: 100%; }
        .back-link, .home-link { display: flex; align-items: center; gap: 6px; color: #656d63; cursor: pointer; font-size: 14px; text-decoration: none; }
        .page-title { font-size: 30px; font-weight: 600; color: #114c36; margin: 10px 0 5px 0; }
        .page-desc { color: #737b72; margin-bottom: 25px; }
        .card, .summary-card { background: white; padding: 25px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 3px 12px rgba(0,0,0,0.08); }
        .card-title { display: flex; align-items: center; gap: 8px; margin-bottom: 15px; font-weight: 600; color: #114c36; font-size: 18px; }
        .icon { color: #2d8a5b; font-size: 20px; }
        .form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
        .input-group { display: flex; flex-direction: column; }
        .input-label { font-size: 13px; color: #363c35; font-weight: 500; margin-bottom: 4px; }
        .input { padding: 12px; border: 1px solid #ccd3cc; border-radius: 8px; font-size: 14px; outline: none; }
        .input:focus { border-color: #2d8a5b; box-shadow: 0 0 0 2px rgba(45, 138, 91, 0.1); }
        .input:disabled { background: #f9f9f9; color: #888; }
        .full { grid-column: 1 / -1; }
        .shipment-box { background: #eef3ed; padding: 15px; border-radius: 8px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; text-align: center; }
        .shipment-item h4 { font-size: 11px; color: #737b72; margin: 0 0 4px 0; text-transform: uppercase; }
        .shipment-item p { font-size: 16px; font-weight: 600; color: #114c36; margin: 0; }
        .freight-display { background: #e9f4ec; padding: 15px; border-radius: 8px; color: #2d8a5b; font-weight: 700; text-align: right; font-size: 24px; }
        .freight-display span { font-size: 13px; color: #185f42; display: block; font-weight: 400; }
        .summary-row { display: flex; justify-content: space-between; margin: 10px 0; font-size: 15px; color: #444; }
        .summary-total { display: flex; justify-content: space-between; background: #e9f4ec; padding: 18px; border-radius: 8px; font-size: 22px; font-weight: 800; color: #114c36; margin-top: 15px; }
        .btn { padding: 12px 25px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; border: none; transition: 0.2s; }
        .submit { background: #114c36; color: white; }
        .submit:hover { background: #0d3828; }
        @media (max-width: 600px) { .shipment-box { grid-template-columns: 1fr; } .form-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="quote-page">
        <div className="content-wrapper">
          <div className="navigation-row">
            <a href="#" className="back-link" onClick={(e) => { e.preventDefault(); window.history.back(); }}><ArrowLeftIcon /> Back</a>
            <a href="/" className="home-link">Home</a>
          </div>

          <h1 className="page-title">Quotation Generator</h1>
          <p className="page-desc">The prices and weights below are automatically calculated based on your inputs.</p>

          {/* Section 1: Stone Details */}
          <div className="card">
            <div className="card-title"><CubesIcon className="icon" /> Stone Requirements</div>
            <div className="form-grid">
              <div className="input-group">
                <label className="input-label">Stone Type *</label>
                <select className="input" name="stoneType" value={form.stoneType} onChange={handleChange}>
                  <option value="">Select Stone</option>
                  {lookups.stones.map((s, i) => <option key={i} value={s.stone_type}>{s.stone_type}</option>)}
                </select>
              </div>
              <div className="input-group">
                <label className="input-label">Finish *</label>
                <select className="input" name="status" value={form.status} onChange={handleChange}>
                  <option value="">Select Finish</option>
                  {lookups.finishes.map((f, i) => <option key={i} value={f.finishing_type}>{f.finishing_type}</option>)}
                </select>
              </div>
              <div className="input-group">
                <label className="input-label">Dimensions *</label>
                <select className="input" name="size" value={form.size} onChange={handleChange}>
                  <option value="">Select Size</option>
                  {lookups.sizes.map((sz, i) => <option key={i} value={sz.size_ft_square}>{sz.size_ft_square}</option>)}
                </select>
              </div>
              <div className="input-group">
                <label className="input-label">Thickness *</label>
                <select className="input" name="thickness" value={form.thickness} onChange={handleChange}>
                  <option value="">Select Thickness</option>
                  {lookups.thicknesses.map((t, i) => <option key={i} value={t.thickness}>{t.thickness} inch</option>)}
                </select>
              </div>
              <div className="input-group">
                <label className="input-label">Quantity (Sq. Ft.) *</label>
                <input className="input" type="number" name="quantity" placeholder="Enter area" onChange={handleChange} />
              </div>
              <div className="input-group">
                <label className="input-label">Base Rate (₹/Sq. Ft.) *</label>
                <input className="input" type="number" name="rate" placeholder="Enter rate" onChange={handleChange} />
              </div>
              <div className="input-group">
                <label className="input-label">Loading Mode</label>
                <select className="input" name="loadingChargeType" value={form.loadingChargeType} onChange={handleChange}>
                  <option value="per_quintal">₹100/Quintal (Auto)</option>
                  <option value="fixed">Fixed Amount</option>
                </select>
              </div>
              {form.loadingChargeType === 'fixed' && (
                <div className="input-group">
                  <label className="input-label">Loading Amount (₹)</label>
                  <input className="input" type="number" name="fixedLoadingCharge" onChange={handleChange} />
                </div>
              )}
            </div>
          </div>

          {/* Section 2: Client Details */}
          <div className="card">
            <div className="card-title"><BuildingIcon className="icon" /> Customer Information</div>
            <div className="form-grid">
              <div className="input-group"><label className="input-label">Customer Name *</label><input className="input" name="fullName" onChange={handleChange} /></div>
              <div className="input-group"><label className="input-label">Mobile *</label><input className="input" name="mobile" onChange={handleChange} /></div>
              <div className="input-group"><label className="input-label">Email</label><input className="input" name="email" onChange={handleChange} /></div>
              <div className="input-group full"><label className="input-label">Delivery Address *</label><input className="input" name="address" onChange={handleChange} /></div>
            </div>
          </div>

          {/* Section 3: Logistics */}
          <div className="card">
            <div className="card-title"><TruckIcon className="icon" /> Logistics & Weight</div>
            <div className="form-grid">
              <div className="input-group">
                <label className="input-label">Freight Rate (₹/Quintal)</label>
                <input className="input" type="number" name="freightRatePerQuintal" placeholder="Rate" onChange={handleChange} />
              </div>
              <div className="input-group">
                <label className="input-label">Destination</label>
                <input className="input" name="destination" placeholder="City, State" onChange={handleChange} />
              </div>
              <div className="input-group full">
                <label className="input-label">Shipment Analysis</label>
                <div className="shipment-box">
                  <div className="shipment-item"><h4>Factor</h4><p>{weightFactor} kg/ft²</p></div>
                  <div className="shipment-item"><h4>Total Weight</h4><p>{calculations.totalWeightKg.toFixed(1)} kg</p></div>
                  <div className="shipment-item"><h4>Quintals</h4><p>{calculations.quintals.toFixed(2)}</p></div>
                </div>
              </div>
              <div className="input-group full">
                <div className="freight-display">
                  <span>Estimated Freight Charges</span>
                  {formatCurrency(calculations.freightCost)}
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Final Summary */}
          <div className="summary-card">
            <div className="card-title">Billing Summary</div>
            <div className="summary-row"><span>Stone Cost</span><span>{formatCurrency(calculations.subtotal)}</span></div>
            <div className="summary-row"><span>Loading Charges</span><span>{formatCurrency(calculations.loadingCharge)}</span></div>
            <div className="summary-row"><span>GST ({gstRate * 100}%)</span><span>{formatCurrency(calculations.gstAmount)}</span></div>
            <div className="summary-row" style={{borderTop:'1px solid #eee', paddingTop:'10px', marginTop:'10px'}}>
              <span>Subtotal (Excl. Freight)</span><span>{formatCurrency(calculations.totalWithoutFreight)}</span>
            </div>
            <div className="summary-row"><span>Transportation</span><span>+ {formatCurrency(calculations.freightCost)}</span></div>
            <div className="summary-total">
              <span>Grand Total</span>
              <span>{formatCurrency(calculations.grandTotal)}</span>
            </div>
          </div>

          <div style={{display:'flex', justifyContent:'flex-end', gap:'12px', marginBottom:'50px'}}>
            <button type="button" className="btn" style={{background:'#fff', border:'1px solid #ddd'}}>Reset</button>
            <button type="button" className="btn submit" onClick={() => window.print()}>Save & Print</button>
          </div>
        </div>
      </div>
      <CompanyFooter />
    </>
  );
};

export default App;