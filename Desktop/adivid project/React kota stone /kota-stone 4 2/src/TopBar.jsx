import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineBell, AiOutlineSearch, AiOutlineInfoCircle, AiOutlineLogout, AiOutlineHome } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi'; // For the gear icon

// --- CSS Specific to Dropdowns/Panels ---
const PANEL_CSS = `
/* Common Dropdown/Panel Styling */
.dropdown-panel {
    position: absolute;
    top: 55px; /* Aligns just below the 60px Top Bar */
    right: 10px;
    width: 280px;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 1100; /* Higher than TopBar */
    overflow: hidden;
    padding: 10px 0;
}

/* User Profile Dropdown Styling */
.user-dropdown-item {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 0.95em;
    color: #4A5568;
    transition: background-color 0.15s ease;
}
.user-dropdown-item:hover {
    background-color: #F3F4F6;
}
.user-dropdown-item svg {
    margin-right: 10px;
}
.logout-item {
    color: #F87171; /* Highlight logout */
    border-top: 1px solid #e0e0e0;
    margin-top: 5px;
    padding-top: 10px;
}

/* Notification Panel Styling */
.notification-panel {
    min-height: 100px; /* Ensure visibility */
}
.notification-header {
    font-weight: 600;
    padding: 10px 20px 5px;
    border-bottom: 1px solid #e0e0e0;
    color: #4A5568;
}
.notification-content {
    padding: 20px;
    text-align: center;
    color: #9CA3AF;
    font-style: italic;
    font-size: 0.9em;
}

/* Settings Panel Styling */
@media (min-width: 769px) {
    .settings-panel {
        right: calc(10px + 38px + 10px); /* Adjust position for icon */
        border-top: 1px solid #e0e0e0; 
        padding-top: 0;
    }
}
.settings-content {
    padding: 15px 20px;
}
.settings-content p {
    margin: 5px 0;
    color: #6B7280;
}
`;

// --- CSS Specific to TopBar and Shared Layout ---
const TOPBAR_CSS = `
/* Global reset/body style for fixed layout visibility (optional, for demo) */
body { margin-top: 60px; } 

/* Top Bar Styling */
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; 
  height: 60px; 
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
  box-sizing: border-box; 
}
@media (min-width: 769px) {
    .top-bar {
        left: 250px; 
        width: calc(100% - 250px); 
    }
}

/* Ensure no element inside forces overflow, especially the search input */
.top-bar-left, .top-bar-right {
    display: flex;
    align-items: center;
    height: 100%; 
    min-width: 0;
}

/* Styling for the fixed icon display */
.brand-logo-topbar { 
    display: flex;
    align-items: center;
    font-weight: 600; 
    font-size: 1.2em;
    color: #333; 
    margin-left: 20px; 
    display: flex; 
}

/* Styling for the icon inside the brand-logo-topbar */
.current-view-icon {
    font-size: 1.8em; /* Increased size to stand alone */
    margin-right: 0; 
    color: #347474; 
}


.search-container {
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 15px;
}
.search-input {
    padding: 8px 15px 8px 35px; 
    border: none; 
    border-radius: 20px;
    background-color: #F3F4F6; 
    width: 150px; 
    max-width: 250px; 
    font-size: 0.9em;
    color: #4A5568;
    transition: width 0.3s ease;
}
@media (min-width: 769px) {
    .search-input {
        width: 250px; 
    }
}
.search-icon {
    position: absolute;
    left: 12px;
    color: #9CA3AF; 
    font-size: 1.1em;
}
@media (max-width: 480px) {
    .search-container {
        display: none;
    }
}


.top-bar-icon-button {
    background: #F3F4F6; 
    border: none;
    border-radius: 50%; 
    width: 38px;
    height: 38px;
    flex-shrink: 0; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 10px;
    color: #6B7280; 
    transition: background-color 0.2s ease;
}
.top-bar-icon-button:hover, .active-button {
    background-color: #E5E7EB;
}

.notification-icon {
    color: #F87171; 
}

.user-avatar {
    width: 38px;
    height: 38px;
    flex-shrink: 0; 
    border-radius: 50%;
    object-fit: cover;
    margin-left: 5px; 
    cursor: pointer;
    border: 2px solid transparent; /* Added for active state */
    transition: border-color 0.15s ease;
}
.user-avatar.active-avatar {
    border-color: #4A5568;
}

/* Hamburger Menu */
.hamburger-menu {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 15px;
  color: #333; 
  flex-shrink: 0; 
}
@media (min-width: 769px) {
  .hamburger-menu {
    display: none;
  }
}
`;
// --- End of CSS ---

// Custom hook for style injection
const useInjectStyles = (id, css) => {
  useEffect(() => {
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.innerHTML = css;
    document.head.appendChild(style);
    return () => {
      const existingStyle = document.getElementById(id);
      if (existingStyle) document.head.removeChild(existingStyle);
    };
  }, [id, css]);
};

// Define the login path constant
const LOGIN_PATH = 'http://localhost:5173/admin';

function TopBar({ isSidebarOpen, onToggleSidebar }) {
  // Inject both sets of styles
  useInjectStyles('topbar-styles', TOPBAR_CSS);
  useInjectStyles('panel-styles', PANEL_CSS);
    
  // State for managing panel visibility
  const [activePanel, setActivePanel] = useState(null); 

  // Dummy Avatar URL
  const DUMMY_AVATAR = "https://placehold.co/38x38/20B2AA/FFFFFF?text=AV"; 

  // --- Session Check Logic ---
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    if (!authToken) {
        console.log("No active session found. Redirecting to login page.");
        window.location.href = LOGIN_PATH; 
    }
  }, []); 

  // --- Handlers ---
  const handleTogglePanel = (panelName) => {
    setActivePanel(activePanel === panelName ? null : panelName);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('rememberUser'); 
    console.log("Logout successful. Redirecting to login page.");
    setActivePanel(null);
    window.location.href = LOGIN_PATH;
  };

  const handleAbout = () => {
    console.log("Opening About page (simulated)");
    setActivePanel(null);
  };
    
  const handleSettingsClick = () => {
    handleTogglePanel('settings');
  };
  
  const handleNotificationsClick = () => {
    handleTogglePanel('notifications');
  };

  return (
    <header className="top-bar">
      {/* Left Section: Hamburger/Close icon and FIXED Home Icon */}
      <div className="top-bar-left">
        <button className="hamburger-menu" onClick={onToggleSidebar}>
          {isSidebarOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
        
        {/* FIXED ICON: Always AiOutlineHome, no text. */}
        <div className="brand-logo-topbar">
            <AiOutlineHome className="current-view-icon" title="Home" />
        </div>
      </div>

      <div className="top-bar-center">
        {/* Center content (currently empty) */}
      </div>

      {/* Right Section: Search, Settings, Notifications, Avatar */}
      <div className="top-bar-right">
        {/* Search Container - Hidden on small screens via CSS */}
        <div className="search-container">
            <AiOutlineSearch className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
        </div>
        
        {/* Settings Button */}
        <button 
            className={`top-bar-icon-button ${activePanel === 'settings' ? 'active-button' : ''}`} 
            aria-label="Settings"
            onClick={handleSettingsClick}
        >
            <FiSettings size={20} />
        </button>
        
        {/* Notification Button */}
        <button 
            className={`top-bar-icon-button ${activePanel === 'notifications' ? 'active-button' : ''}`} 
            aria-label="Notifications"
            onClick={handleNotificationsClick}
        >
            <AiOutlineBell size={20} className="notification-icon" />
        </button>
        
        {/* User Avatar */}
        <img 
            src={DUMMY_AVATAR}
            alt="User Avatar" 
            className={`user-avatar ${activePanel === 'profile' ? 'active-avatar' : ''}`} 
            title="User Profile"
            onClick={() => handleTogglePanel('profile')}
        />
        
        {/* --- Dynamic Panels --- */}

        {/* 1. User Profile Dropdown */}
        {activePanel === 'profile' && (
            <div className="dropdown-panel user-dropdown-panel">
                <div className="user-dropdown-item" onClick={handleAbout}>
                    <AiOutlineInfoCircle size={18} />
                    <span>About</span>
                </div>
                <div className="user-dropdown-item logout-item" onClick={handleLogout}>
                    <AiOutlineLogout size={18} />
                    <span>Logout</span>
                </div>
            </div>
        )}

        {/* 2. Notification Panel */}
        {activePanel === 'notifications' && (
            <div className="dropdown-panel notification-panel">
                <div className="notification-header">Notifications</div>
                <div className="notification-content">
                    No new notifications.
                </div>
            </div>
        )}

        {/* 3. Settings Panel */}
        {activePanel === 'settings' && (
            <div className="dropdown-panel settings-panel">
                <div className="notification-header">Settings</div>
                <div className="settings-content">
                    <p>Theme: Dark/Light Mode Switch (Simulated)</p>
                    <p>Language: English (Simulated)</p>
                    <p>Preferences (Simulated)</p>
                </div>
            </div>
        )}
      </div>
    </header>
  );
}

export default TopBar;