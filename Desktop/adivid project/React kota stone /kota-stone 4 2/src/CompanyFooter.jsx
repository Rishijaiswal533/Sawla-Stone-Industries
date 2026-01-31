import React from 'react';
// ⚠️ ASSUMPTION: You have the 'react-icons' package installed.
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdCall, MdEmail, MdLocationOn } from 'react-icons/md';

// --- Data for Navigation Links ---
const navLinks = {
    about: ["Benefits", "Styles", "Uses", "Collection"],
};

// Helper component for social icons (Now using React Icons)
const SocialIcon = ({ type, href }) => {
    let IconComponent;
    if (type === 'facebook') IconComponent = FaFacebookF;
    else if (type === 'instagram') IconComponent = FaInstagram;
    else if (type === 'twitter') IconComponent = FaTwitter;
    else if (type === 'linked-in') IconComponent = FaLinkedinIn;

    return (
        // Updated to use the 'href' prop
        <a href={href} className="footer-social-icon" aria-label={`Follow us on ${type}`} target="_blank" rel="noopener noreferrer">
            <IconComponent size={18} />
        </a>
    );
};

// Helper component for contact icons (Now using React Icons)
const ContactIcon = ({ icon }) => {
    let IconComponent;
    if (icon === 'phone') IconComponent = MdCall;
    else if (icon === 'email') IconComponent = MdEmail;
    else if (icon === 'location') IconComponent = MdLocationOn;
    
    return (
        <span className="footer-contact-icon">
            <IconComponent size={20} />
        </span>
    );
};


const CompanyFooter = () => {
    const contactInfo = [
        { 
            icon: 'phone', 
            text: '+91-9829039690, +91-9799235966' 
        },
        { 
            icon: 'email', 
            text: 'sawlastoneindustries@gmail.com' 
        },
        { 
            icon: 'location', 
            text: <>
                Sawla Stone Industries <br/>
                Industrial Area, Kudayala <br/>
                Ramganjmandi, Kota, Rajasthan -326519 <br/>
                India
            </>
        }
    ];

    return (
        <footer className="footer-wrapper">
            <div className="footer-container">
                {/* Top Section: Main Content - Two Primary Columns */}
                <div className="footer-content-grid">
                    
                    {/* Column 1: Company Details */}
                    <div className="footer-col footer-col-info">
                        <h3 className="footer-company-title">Sawla Stone Industries</h3>
                        <p className="footer-description">
                            Since 1995, we’ve been the trusted source for premium Kota stone, <br/>
                            delivering exceptional quality and unmatched service to clients across <br/>
                            India and beyond.
                        </p>
                        
                        {/* Contact Items - Using React Icons */}
                        <div className="footer-contact-group">
                            {contactInfo.map((item, index) => (
                                <div key={index} className={`footer-contact-item ${item.icon === 'location' ? 'footer-address' : ''}`}>
                                    <ContactIcon icon={item.icon} /> 
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Navigation and Get Quote (Sub-columns inside Column 2) */}
                    <div className="footer-col footer-col-nav-group">
                        <div className="nav-sub-grid">
                            
                            {/* Sub-Column 1: About Us */}
                            <div className="footer-col footer-col-nav">
                                <h4 className="footer-nav-heading">About Us</h4>
                                <ul className="footer-nav-list">
                                    {navLinks.about.map((link, index) => (
                                        <li key={index}><a href="#">{link}</a></li>
                                    ))}
                                </ul>
                            </div>

                            {/* Sub-Column 2: Get Quote + Socials */}
                            <div className="footer-col footer-col-quote">
                                <h4 className="footer-nav-heading footer-quote-heading">Get Quote</h4>
                                
                                {/* Social Icons - Updated with Instagram Link */}
                                <div className="footer-socials">
                                    <SocialIcon type="facebook" href="#" />
                                    {/* --- Instagram Link Added Here --- */}
                                    <SocialIcon type="instagram" href="https://www.instagram.com/sawlastoneind/" />
                                    <SocialIcon type="twitter" href="#" />
                                    <SocialIcon type="linked-in" href="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright and Auxiliary Links */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © Copyright 2025, All Rights Reserved by **Sawla Stone Industries**
                    </p>
                    <div className="footer-aux-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Sitemap</a>
                    </div>
                </div>
            </div>

            <style>{`
                .footer-wrapper {
                    /* Color matched from the image: Dark olive green */
                    background-color: #58796E; 
                    color: #D3DCD4; 
                    padding: 60px 20px 20px 20px;
                    font-family: 'Arial', sans-serif;
                    box-sizing: border-box;
                }

                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                /* --- Top Section Grid Layout (Desktop: 2 Main Columns) --- */
                .footer-content-grid {
                    display: grid;
                    /* 60/40 split for Company Info and Nav/Quote */
                    grid-template-columns: 3fr 2fr; 
                    gap: 80px;
                    padding-bottom: 50px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1); 
                }

                /* Inner grid for Navigation/Quote columns */
                .nav-sub-grid {
                    display: grid;
                    /* 50/50 split for About Us and Get Quote */
                    grid-template-columns: 1fr 1fr; 
                    gap: 40px;
                }
                
                /* Column 1: Info */
                .footer-company-title {
                    font-size: 20px;
                    font-weight: 600;
                    color: white; 
                    margin-bottom: 20px;
                }

                .footer-description {
                    font-size: 14px;
                    line-height: 1.6;
                    margin-bottom: 20px;
                }
                
                .footer-contact-group {
                    display: flex;
                    flex-direction: column;
                    gap: 10px; 
                }

                .footer-contact-item {
                    font-size: 14px;
                    line-height: 1.6;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }
                
                .footer-contact-item span {
                    /* Base font size for contact text */
                    font-size: 14px; 
                }

                .footer-contact-icon {
                    margin-right: 15px; 
                    display: flex;
                    align-items: center;
                    flex-shrink: 0; 
                }
                
                .footer-address {
                    align-items: flex-start;
                }

                /* Columns 2, 3, 4: Navigation & Quote */
                .footer-nav-heading {
                    font-size: 18px;
                    font-weight: 600;
                    color: white;
                    margin-bottom: 25px;
                }

                .footer-quote-heading {
                    text-align: left;
                }

                .footer-nav-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    /* Default: Stacked (desktop/tablet) */
                    display: block; 
                }

                .footer-nav-list li {
                    margin-bottom: 12px;
                    display: block; /* Default: Stacked */
                }

                .footer-nav-list a {
                    color: #D3DCD4;
                    text-decoration: none;
                    font-size: 14px;
                    transition: color 0.2s;
                }

                .footer-nav-list a:hover {
                    color: white;
                }

                /* Social Icons Styling */
                .footer-socials {
                    display: flex;
                    gap: 15px;
                    justify-content: flex-start; 
                }

                .footer-social-icon {
                    width: 32px;
                    height: 32px;
                    background-color: rgba(255, 255, 255, 0.15); 
                    border-radius: 50%; 
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    transition: background-color 0.2s, color 0.2s;
                }

                .footer-social-icon:hover {
                    background-color: white;
                    color: #58796E; 
                }

                /* --- Bottom Section --- */
                .footer-bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 20px;
                    font-size: 13px;
                }

                .footer-copyright {
                    color: #90A09A; 
                    margin: 0;
                    /* Base font size */
                    font-size: 13px;
                }
                
                .footer-aux-links a {
                    color: #90A09A;
                    text-decoration: none;
                    margin-left: 25px;
                    transition: color 0.2s;
                    /* Base font size */
                    font-size: 13px;
                }
                
                .footer-aux-links a:hover {
                    color: white;
                }


                /* --- Responsive Adjustments (Tablet) --- */
                @media (max-width: 768px) {
                    .footer-content-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                        padding-bottom: 40px;
                    }
                    .nav-sub-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 20px;
                    }
                    .footer-col-nav, .footer-col-quote {
                        text-align: left;
                    }
                    .footer-bottom {
                        flex-direction: column;
                        text-align: center;
                    }
                    .footer-copyright {
                        margin-bottom: 15px;
                    }
                    .footer-aux-links a {
                        margin: 0 10px;
                    }
                    
                    /* --- UPDATE: 5% decrease for contact text (13px from 14px) --- */
                    .footer-contact-item span {
                        font-size: 13px; 
                    }
                    
                    /* --- UPDATE: 4% decrease for bottom text (12px from 13px) --- */
                    .footer-copyright,
                    .footer-aux-links a {
                        font-size: 12px;
                    }
                }
                
                /* --- Responsive Adjustments (Mobile - 480px and below) --- */
                @media (max-width: 480px) {
                    .footer-wrapper {
                        padding: 40px 15px 15px 15px;
                    }
                    
                    /* Company Info Alignment (Keep Left) */
                    .footer-col-info, .footer-description {
                        text-align: left; 
                    }
                    .footer-contact-item, .footer-socials {
                        justify-content: flex-start; 
                    }
                    .footer-address {
                        align-items: flex-start;
                    }
                    
                    /* Navigation Group: Vertical Stacking */
                    .nav-sub-grid {
                        grid-template-columns: 1fr; 
                        gap: 30px;
                    }
                    
                    /* Navigation Links: SINGLE ROW MODIFICATION */
                    .footer-col-nav {
                        text-align: center; 
                    }
                    .footer-nav-heading {
                        text-align: left; 
                    }
                    
                    .footer-nav-list {
                        display: flex; 
                        justify-content: space-between; 
                        flex-wrap: wrap; 
                        text-align: center;
                        gap: 10px;
                        margin-bottom: 0; 
                    }
                    .footer-nav-list li {
                        display: inline-block; 
                        margin-bottom: 0; 
                        padding: 5px 0;
                    }

                    /* Get Quote Alignment (Keep Left) */
                    .footer-col-quote {
                        text-align: left; 
                    }
                    
                    /* Re-applying size reduction for small mobile */
                    
                    /* --- UPDATE: 5% decrease for contact text (13px) --- */
                    .footer-contact-item span {
                        font-size: 13px; 
                    }
                    
                    /* --- UPDATE: 4% decrease for bottom text (12px) --- */
                    .footer-copyright,
                    .footer-aux-links a {
                        font-size: 12px;
                    }
                }
            `}</style>
        </footer>
    );
};

export default CompanyFooter;