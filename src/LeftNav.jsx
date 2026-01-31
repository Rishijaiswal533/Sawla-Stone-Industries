import React from 'react';
import { IoHomeOutline, IoLeafOutline } from 'react-icons/io5'; // Using react-icons for easy icons

const LeftNav = ({ activeSection, setActiveSection }) => {
    
    const navItems = [
        { key: 'dashboard', label: 'Dashboard', icon: IoHomeOutline },
        { key: 'mines', label: 'Mines', icon: IoLeafOutline },
    ];

    return (
        <div style={styles.navContainer}>
            <div style={styles.logoContainer}>
                <span style={styles.logoText}>⛏️ Kota Stone</span>
            </div>
            
            <div style={styles.navItems}>
                {navItems.map(item => {
                    const isActive = activeSection === item.key;
                    return (
                        <div 
                            key={item.key}
                            style={{
                                ...styles.navItem,
                                ...(isActive ? styles.navItemActive : {}),
                            }}
                            onClick={() => setActiveSection(item.key)}
                        >
                            <item.icon size={22} style={{ marginRight: '10px' }} />
                            {item.label}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const styles = {
    navContainer: {
        width: '250px',
        backgroundColor: '#ffffff',
        padding: '20px 0',
        boxShadow: '2px 0 5px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    logoContainer: {
        padding: '0 20px 30px',
        borderBottom: '1px solid #f0f0f0',
        marginBottom: '20px',
    },
    logoText: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    navItems: {
        padding: '0 10px',
    },
    navItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px 20px',
        margin: '5px 0',
        cursor: 'pointer',
        fontSize: '0.95rem',
        color: '#667085',
        borderRadius: '8px',
        transition: 'background-color 0.2s, color 0.2s',
    },
    navItemActive: {
        backgroundColor: '#e7f0ee', // Light green background
        color: '#44776c', // Dark green text
        fontWeight: '600',
    },
};

export default LeftNav;