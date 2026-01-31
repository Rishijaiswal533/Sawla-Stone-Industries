import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Background image (make sure bg.jpg is inside /public folder)
const BG_IMAGE = "bg.jpg";

// Stone color swatches (Updated to use image names)
const colorSwatches = [
  { name: 'b1', image: 'b1.png', label: 'Beige Stone' },
  { name: 'b2', image: 'b2.png', label: 'Light Teal' },
  { name: 'b3', 'image': 'b3.png', label: 'Muted Coral' },
];

// Updated image paths
const CARD_IMAGE_ONE = "g1.png"; // Your top image path
const CARD_IMAGE_TWO = "g2.png"; // Your bottom image path

// --- MAILTO CONSTANT ---
const CONTACT_EMAIL = "sawlastoneindustries@gmail.com";
// -------------------------

// Define a function to handle the smooth scroll
const handleScroll = (e, hash) => {
    e.preventDefault(); 
    
    // Check if the hash part exists (e.g., 'about' from '/#about')
    const hashPart = hash.split('#')[1]; 

    if (hashPart) {
        // Scroll to the element
        const element = document.getElementById(hashPart); 
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        // Update the URL hash manually for history
        window.history.pushState(null, null, `#${hashPart}`);
    } else {
        // Scroll to the top of the page if the link is just '/' or '/#'
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, null, '/');
    }
};


// UPDATED NavLink to handle both internal anchors (using <a> tag for scroll) and external routes (using Link)
const NavLink = ({ to, onClick, children }) => {
    // Check if it's an internal anchor link (starts with /# or #)
    const isAnchor = to.includes('#');

    if (isAnchor) {
        // For internal anchors, use an anchor tag and the custom scroll handler
        return (
            <a 
                href={to} 
                className="nav-link" 
                onClick={(e) => {
                    handleScroll(e, to);
                    if (onClick) onClick(); // Run the mobile menu close function
                }}
            >
                {children}
            </a>
        );
    } else {
        // For actual route changes (like /get-quote), use Link
        return (
            <Link to={to} className="nav-link" onClick={onClick}>
                {children}
            </Link>
        );
    }
};

const OverlappingSwatch = ({ image, index }) => {
  const offsetStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 10 - index,
    marginLeft: index > 0 ? '-1.2vmin' : '0', 
    animationDelay: `${index * 1.0}s`, // 0s, 1s, 2s delay
  };
  // Added image-effect class
  return <div className="overlapping-swatch bouncing-swatch image-effect-container" style={offsetStyle} />;
};

// Added an 'animated' prop to control the animation state
const RotatedImageCard = ({ image, size = '14vmin', rotate = '10deg', zIndex = 1, showLabel = false, animated = false }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    width: size,
    height: size,
    transform: `rotate(${rotate})`, 
    zIndex: zIndex,
    borderRadius: '1.8vmin', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden', 
    boxShadow: '0 0.8vmin 2vmin rgba(0,0,0,0.4)', // Slightly adjusted shadow size
  };

  // Conditionally add the animation class
  const animationClass = animated ? 'floating-card' : '';

  return (
    // Added image-effect class
    <div className={`rotated-image-card ${animationClass} image-effect-container`} style={cardStyle}>
      {showLabel && (
        <div className="image-label">
          
          <div className="resize-handle top-left"></div>
          <div className="resize-handle top-right"></div>
          <div className="resize-handle bottom-left"></div>
          <div className="resize-handle bottom-right"></div>
        </div>
      )}
       <div className="resize-handle top-left"></div>
       <div className="resize-handle top-right"></div>
       <div className="resize-handle bottom-left"></div>
       <div className="resize-handle bottom-right"></div>
    </div>
  );
};

// Define the base style for the button to include no underline
const buttonStyle = {
  // 1. Base Styles
  display: 'inline-block',
  padding: '2vmin 6vmin', 
  borderRadius: '9999px', 
  fontWeight: '600',
  cursor: 'pointer',
  textAlign: 'center',
  transition: 'all 0.3s ease', 
  fontSize: '1.8vmin', 
  
  // 2. Initial State (White Button)
  backgroundColor: 'white',
  color: 'black', 
  border: '0.1vmin solid white', 

  // 3. The requested "no underline" style
  textDecoration: 'none', 
  
  zIndex: 10,
  position: 'relative',
};
// Define a unique class name for the embedded CSS hover effect
const collaborateButtonClassName = "animated-collaborate-button";


export default function HeroComponent() { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
 

  const lineOne = "Strong. Elegant.";
  const lineTwo = "Everlasting.";
  
  // We need exactly 3 for the sequence (slice(0, 3) is correct)
  const featuredSwatches = colorSwatches.slice(0, 3);

  // Calculation for responsive card sizes
  const originalSizeOne = 15; // vmin
  const originalSizeTwo = 15; // vmin
  
  const reducedSizeOne = originalSizeOne * 0.85; // 15% reduction
  const reducedSizeTwo = originalSizeTwo * 0.85; // 15% reduction

  // Assuming original wrapper width was 30vmin, reducing by roughly 15%
  const reducedWrapperWidth = 30 * 0.85; // Approx 25.5vmin
  const reducedWrapperHeight = 35 * 0.85; // Approx 29.75vmin

  // Total duration: (3 swatches * 1s bounce) + 3s rest = 6s
  const totalAnimationDuration = 6.0;
  
  // Function to handle 'Let's Collaborate' button click (now uses Link)
 

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Italianno&display=swap"
        rel="stylesheet"
      />

    <style>{`
        * {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-size: 1.8vmin; 
          scroll-behavior: smooth; /* Add smooth scrolling for hash links */
        }

        /* 1. Define Image Shine Keyframes */
        @keyframes image-shine {
          0% { transform: skewX(-20deg) translateX(-100%); }
          100% { transform: skewX(-20deg) translateX(200%); }
        }
        
        /* 2. Shine Container Setup (applies to both cards and swatches) */
        .image-effect-container {
            position: relative;
            overflow: hidden; /* Crucial to contain the shine */
            transition: transform 0.3s ease-out, box-shadow 0.3s ease-out; /* Add transition for hover effects */
        }
        
        /* 3. Shine Pseudo-element Base */
        .image-effect-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              to right,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.4) 50%, /* Shine intensity */
              rgba(255, 255, 255, 0) 100%
            );
            /* Initial placement off-screen left */
            transform: skewX(-20deg) translateX(-150%); 
            transition: transform 0.7s ease-in-out;
            pointer-events: none; /* Allows clicks on the element underneath */
            z-index: 5; /* Above the image/background */
        }
        
        /* 4. Shine Animation on Hover */
        .image-effect-container:hover::before {
            /* Move shine across the element */
            animation: image-shine 0.7s ease-in-out forwards;
        }


        @keyframes sparkle-in {
            0% { opacity: 0; transform: scale(0.5); }
            100% { opacity: 1; transform: scale(1); }
        }

        a svg {
            opacity: 0; 
            transform: scale(0.5); 
            animation: sparkle-in 0.5s ease-out 1 forwards;
        }
        a svg:nth-child(1) { animation-delay: 0s; }
        a svg:nth-child(2) { animation-delay: 0.1s; }
        a svg:nth-child(3) { animation-delay: 0.2s; }
        a svg:nth-child(4) { animation-delay: 0.3s; }
        a svg:nth-child(5) { animation-delay: 0.4s; }
        
        @keyframes bounce-up-down {
            0%, 50%, 100% { transform: translateY(0); }
            25% { transform: translateY(-2vmin); }
        }

        @keyframes simple-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-2vmin); }
        }


        .hero-background {
          position: relative;
          width: 98%;
          height: 98vh;
          margin: 1%; 
          border-radius: 1.8vw;
          overflow: hidden;
          background: url(${BG_IMAGE}) center/cover no-repeat;
          box-shadow: 0 0.6vmin 1.2vmin -0.3vmin rgba(0,0,0,0.25);
          cursor: default;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.35);
        }

        .top-header {
          position: absolute;
          top: 0; left: 0; right: 0;
          padding: 3vmin 4vmin; 
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
          z-index: 20;
        }

        .logo-text {
          color: transparent;
          font-size: 3vmin; 
          font-weight: 700;
          letter-spacing: 0.1em;
          display: block; 
          align-items: center;
        }
        
        .logo-container {
            display: flex;
            align-items: center;
            gap: 1.2vmin;
        }

        .main-nav { display: none; }
        @media(min-width:768px){
          .main-nav { display: flex; gap: 6vmin; }
        }

        .nav-link {
          color: white;
          font-weight: 500;
          text-decoration: none;
          font-size: 2.2vmin; 
          transition: color .2s;
        }
        .nav-link:hover { color: #86efac; }

        /* CONTACT US BUTTON STYLES (now using anchor tag) */
        .contact-button {
          background: #4B7062; /* Primary Green/Teal */
          color: white;
          border: 0.1vmin solid #4B7062;
          padding: 1.5vmin 2.5vmin; 
          border-radius: 2.5vmin;
          font-size: 2.2vmin; 
          cursor: pointer;
          box-shadow: 0vmin 0.3vmin 0.7vmin rgba(0,0,0,0.2);
          transition: all 0.3s ease;
          text-decoration: none; /* Ensure it looks like a button, not a link */
          display: inline-block;
        }
        .contact-button:hover {
          background: #5E8777; /* Lighter Hover Green/Teal */
          transform: scale(1.05);
        }

        .hamburger-icon {
          display: block;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 5vmin; 
        }
        @media(min-width:768px){ .hamburger-icon { display: none; } }

        .mobile-nav {
          position: absolute;
          top: 0; right: 0;
          width: 80vmin; 
          max-width: 40vw; 
          height: 100vh;
          background: rgba(0,0,0,0.95);
          transform: translateX(100%);
          transition: transform .3s ease;
          display: flex;
          flex-direction: column;
          padding-top: 12vh; 
          z-index: 30;
        }
        .mobile-nav.open { transform: translateX(0); }
        .mobile-nav .nav-link {
          padding: 4vmin 6vmin; 
          border-bottom: 0.1vmin solid rgba(255,255,255,.2);
          font-size: 3vmin; 
        }

        .hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center; 
          align-items: center;
          color: white;
          text-align: center;
          z-index: 10;
        }
        
        @media (max-width: 767px) {
            .detail-text-left {
                bottom: 5vh; 
            }
        }


        .script-title {
          font-family: 'Italianno', cursive;
          font-size: 6vw; 
          font-weight: 400;
          line-height: 0.8; 
          margin-bottom: 1vmin; 
          text-shadow: 0 0.5vmin 0.8vmin rgba(0,0,0,0.5);
          white-space: normal;
        }
        
        @media (max-width: 668px) {
          .script-title {
            font-size: 12vw;
            margin: 10px; 
          }
          .script-title span {
            display: inline !important;
            margin-top: 0 !important;
          }
        }

        .action-buttons {
        margin-top: 4vmin;
          display: flex;
          gap: 2.5vmin; 
        }
          
          
        .white-button, .transparent-button {
          padding: 2vmin 6vmin; 
          border-radius: 9999px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: background .2s, border-color .2s, padding .2s, font-size .2s;
          font-size: 1.8vmin; 
          text-decoration: none !important; 
        }

        @media (max-width: 768px) {
            .white-button, .transparent-button {
                font-size: 3vmin; 
                padding: 3vmin 8vmin; 
            }
        }
        .white-button {
          background: white;
          color: black;
          /* Adjusted border for the white button to enable the color swap */
          border: 0.1vmin solid white; 
        }
        
        .transparent-button {
          border: 0.1vmin solid white;
          background: transparent;
          color: white;
        }
        .transparent-button:hover {
          background: rgba(255,255,255,0.1);
        }

        /* === COLLABORATE BUTTON STYLES: MATCHING CONTACT US HOVER === */
        .${collaborateButtonClassName} {
            transition: all 0.3s ease !important;
        }

        .${collaborateButtonClassName}:hover {
            /* 1. Color Swap to match Contact Us background */
            background-color: #5E8777 !important; 
            color: white !important; 
            /* Match Contact Us Border (since the Contact Us border uses the same color as background) */
            border-color: #5E8777 !important; 

            /* 2. Gentle Lift (Same as Contact Us hover) */
            transform: scale(1.05) !important;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4) !important;
        }
        /* === END COLLABORATE BUTTON STYLES === */


        .detail-base {
          position: absolute;
          padding: 2vmin;
          color: white;
          z-index: 20;
          line-height: 2;
        }

        .detail-text-left {
          bottom: 2vh;
          left: 2vw;
          border-radius: 1.2vmin;
          padding: 2vmin 2.5vmin;
          text-align: left;
          display: flex;
          flex-direction: column; 
          align-items: flex-start;
          line-height: 1.5; 
        }

        .detail-text-left p {
          font-size: 1.8vmin; 
          margin: 0;
          margin-top: 0vmin; 
        }

        .rotated-cards-wrapper {
          position: relative; 
          width: ${reducedWrapperWidth}vmin; 
          height: ${reducedWrapperHeight}vmin; 
          display: flex; 
          flex-direction: column; 
          align-items: flex-start; 
          gap: 4vmin; 
          margin-left:5vmin;
          transform: translateY(-8vmin); 
        }


        .rotated-image-card {
          position: relative; 
          border-radius: 1.8vmin;
          background-size: cover;
          background-position: center;
          cursor: pointer;
          background-color: transparent; 
          box-shadow: 0 1vmin 3vmin rgba(0,0,0,0.4); 
          transition: transform 0.3s ease; 
        }
        
        /* Mirror effect on hover for rotated cards (Flipping effect) */
        .rotated-image-card:hover {
          /* ScaleX(-1) flips the image horizontally (mirror effect) */
          transform: rotate(0deg) scaleX(-1) !important; 
        }

        .image-label {
          position: absolute;
          bottom: -2.5vmin; 
          left: 50%;
          transform: translateX(-50%);
          background: #4285F4; 
          color: white;
          padding: 0.5vmin 1.2vmin;
          border-radius: 0.5vmin;
          font-size: 1.2vmin; 
          white-space: nowrap;
          z-index: 25; 
        }

        .resize-handle {
          position: absolute;
          width: 1.5vmin; 
          height: 1.5vmin;
          background: white;
          border: 0.2vmin solid #4285F4;
          border-radius: 50%; 
          z-index: 30; 
        }
        .resize-handle.top-left { top: -0.75vmin; left: -0.75vmin; }
        .resize-handle.top-right { top: -0.75vmin; right: -0.75vmin; }
        .resize-handle.bottom-left { bottom: -0.75vmin; left: -0.75vmin; }
        .resize-handle.bottom-right { bottom: -0.75vmin; right: -0.75vmin; }
        
        .swatch-details-container {
          bottom: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 2vmin;
        }
          

        .overlapping-swatch-wrapper {
          display: flex;
          align-items: flex-end;
          margin-bottom: -1.2vmin; 
        }

        .overlapping-swatch {
          width: 7vmin; 
          height: 7vmin;
          border-radius: 1.2vmin;
          box-shadow: 0 0.6vmin 1.8vmin rgba(0,0,0,0.3);
          cursor: pointer;
          transition: transform 0.3s ease; 
        }
        
        /* Mirror effect on hover for swatches (Flipping effect) */
        .overlapping-swatch:hover {
          transform: scaleX(-1); 
        }
        
        /* Bounce Animation Application for Swatches: */
        @keyframes sequential-bounce-loop {
            0.0000% { transform: translateY(0); } 
            16.6666% { transform: translateY(-2vmin); } 
            50.0000% { transform: translateY(0); } 
            50.0001%, 100.0000% { transform: translateY(0); }
        }
        .bouncing-swatch {
          animation: sequential-bounce-loop ${totalAnimationDuration}s ease-in-out infinite;
        }
        .bouncing-swatch:nth-child(1) { animation-delay: 0s; }
        .bouncing-swatch:nth-child(2) { animation-delay: 1s; }
        .bouncing-swatch:nth-child(3) { animation-delay: 2s; }


        .detail-box-bg {
          background: rgba(0,0,0,0.5);
          border-radius: 1.8vmin;
          padding: 2.5vmin 4vmin; 
          width: max-content;
          box-shadow: 0 1.2vmin 3.5vmin rgba(0,0,0,0.7);
          text-align: center;
          margin: 0 1.5vmin 5vmin 1.5vmin; 
        }

        .featured-finish-text {
          font-size: 2.5vmin; 
          font-weight: 200;
          margin: 0;
          padding-bottom: 0vmin;
        }
        
        /* Floating Animation Keyframes */
        @keyframes drift-float {
            0% { transform: translate(-0.5vmin, -0.5vmin); } 
            50% { transform: translate(0.5vmin, 0.5vmin); } 
            100% { transform: translate(-0.5vmin, -0.5vmin); }
        }

        /* Applying the floating animation */
        .rotated-image-card.floating-card {
            animation: drift-float 8s ease-in-out infinite alternate;
        }
        
        .rotated-cards-wrapper .floating-card:nth-child(1) {
            animation: drift-float 10s ease-in-out infinite alternate-reverse;
            transform: rotate(-5deg); 
        }

        .rotated-cards-wrapper .floating-card:nth-child(2) {
            animation: drift-float 8s ease-in-out infinite alternate;
            transform: rotate(-5deg); 
        }
      `}</style>
      

      <div className="app-wrapper">
        <div className="hero-background">
          <div className="overlay"></div>

          <header className="top-header">
            <div className="logo-text">
              <button className="hamburger-icon" onClick={toggleMenu}>
                <svg width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                  {isMenuOpen ? (
                    <path d="M18 6L6 18M6 6l12 12" />
                  ) : (
                    <path d="M3 6h18M3 12h18M3 18h18" />
                  )}
                </svg>
              </button>
              <div className="logo-container">
                LOGO
              </div>
            </div>

            <nav className="main-nav">
              {/* Links use /#anchor for in-page scroll */}
              <NavLink to="/#home-content-wrapper">Home</NavLink> 
              <NavLink to="/#about">About us</NavLink>
              <NavLink to="/#style">Style</NavLink>
              <NavLink to="/#collection">Collection</NavLink>
            </nav>

            {/* --- UPDATED CONTACT US BUTTON TO MAILTO LINK --- */}
            <a 
                href={`mailto:${CONTACT_EMAIL}`} 
                className="contact-button"
                // No need for onClick={handleContactUsClick} now
            >
                Contact Us
            </a>
            {/* ------------------------------------------------ */}
          </header>

          <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
             {/* Links use /#anchor for in-page scroll */}
            <NavLink to="/#home-content-wrapper" onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/#about" onClick={toggleMenu}>About us</NavLink>
            <NavLink to="/#style" onClick={toggleMenu}>Style</NavLink>
            <NavLink to="/#collection" onClick={toggleMenu}>Collection</NavLink>
          </nav>

          <div className="hero-content">
            <h1 className="script-title">
              Crafting Spaces That Last{" "}
              {/* This style forces a line break on large screens */}
              <span
                className="script-title"
                style={{ display: "block", marginTop: "10px" }}
              >
                A Lifetime.
              </span>
            </h1>

            <div className="action-buttons">
              {/* UPDATED: Changed from <a> with onClick to React Router Link */}
              <Link 
                to="/get-quote"
                className={`white-button ${collaborateButtonClassName}`}
                style={buttonStyle}
              >
                Let's Collaborate
              </Link>
            </div>
          </div>

          <div className="detail-base detail-text-left">
            <div className="rotated-cards-wrapper">
              <RotatedImageCard 
                image={CARD_IMAGE_ONE} 
                rotate="-5deg" 
                size={`${reducedSizeOne}vmin`} 
                zIndex={2} 
                animated={true} 
              />
              <RotatedImageCard 
                image={CARD_IMAGE_TWO} 
                rotate="-5deg" 
                size={`${reducedSizeTwo}vmin`} 
                zIndex={3} 
                showLabel={true} 
                animated={true} 
              />
            </div>
            
            <p>Experience the natural durability and </p>
            <p>elegance of premium Kota Stone.</p>
          </div>

          <div className="detail-base swatch-details-container">
            <div className="overlapping-swatch-wrapper">
              {featuredSwatches.map((s, index) => (
                <OverlappingSwatch key={s.name} image={s.image} index={index} />
              ))}
            </div>
            <div className="detail-box-bg">
              <p className="featured-finish-text">{lineOne}</p>
              <p className="featured-finish-text">{lineTwo}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}