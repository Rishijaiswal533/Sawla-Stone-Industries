import React, { useState, useEffect, useMemo } from "react";

// --- START: Data for the finishes list and slider (Updated with imageName) ---
const finishesData = [
  {
    id: 1,
    name: "Uncut / Natural",
    desc: "Freshly extracted from the mines, this stone retains its natural texture, color, and beauty. It offers a raw, earthy charm that perfectly complements rustic and outdoor spaces.",
    designCount: "30+ Design",
    imageName: "uncut.jpg",
  },
  {
    id: 2,
    name: "River Finish",
    desc: "This finish undergoes the first level of polishing to smoothen the surface while keeping its natural look intact. It provides a balanced texture ideal for pathways and open areas.",
    designCount: "30+ Design",
    imageName: "river-polished.jpg",
  },
  {
    id: 3,
    name: "Honed Finish / Semi Polished",
    desc: "A smooth, non-reflective surface that highlights the stone’s natural color and patterns. Perfect for interiors where you want a refined look without too much shine.",
    designCount: "30+ Design",
    imageName: "honed.jpg",
  },
  {
    id: 4,
    name: "Mirror Polished",
    desc: "This finish brings out the ultimate gloss and reflection, offering a sleek, elegant, and luxurious look. Ideal for premium interiors, lobbies, and modern architectural spaces.",
    designCount: "30+ Design",
    imageName: "mirror.jpg", // Path will now be /e1.png
  },
  {
    id: 5,
    name: "Tiles (Calibrated Finish)",
    desc: "These stones are precisely cut and calibrated into uniform sizes and thickness, ready for easy installation. A great choice for flooring and wall cladding with a clean, contemporary appeal.",
    designCount: "30+ Design",
    imageName: "Tiles.webp",
  },
  {
    id: 6,
    name: "Leather Finish / Sandblasted",
    desc: "A textured surface achieved through advanced finishing techniques, giving the stone a matte and tactile feel. It’s durable, slip-resistant, and perfect for outdoor or high-traffic areas.",
    designCount: "30+ Design",
    imageName: "leather.jpg",
  }
];
// --- END: Data for the finishes list and slider ---

// Define the mobile breakpoint consistently
const MOBILE_BREAKPOINT = 1024;

// --- Image Fader Component for Cross-Fade Effect ---
const ImageFader = ({ activeIndex }) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [failedImages, setFailedImages] = useState([]);

    useEffect(() => {
        let loadedCount = 0;
        const totalImages = finishesData.length;
        const failed = [];

        finishesData.forEach((finish) => {
            const img = new Image();
            const imagePath = `/${finish.imageName}`; 
            
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalImages) {
                    setImagesLoaded(true);
                }
            };

            img.onerror = () => {
                failed.push(finish.name);
                setFailedImages(failed);
                loadedCount++;
                if (loadedCount === totalImages) {
                    setImagesLoaded(true);
                }
            };
            
            img.src = imagePath; 
        });
        
        if (totalImages === 0) setImagesLoaded(true);
    }, []);

    return (
        <div className="image-fader-container">
            {!imagesLoaded && (
                <div className="image-loading-indicator">
                    Loading stone finishes...
                </div>
            )}

            {finishesData.map((finish, index) => {
                const imagePath = `/${finish.imageName}`;
                const isFailed = failedImages.includes(finish.name);
                
                return (
                    <div 
                        key={finish.id}
                        className={`fader-image ${activeIndex === index ? 'active' : ''} ${isFailed ? 'failed-load' : ''}`}
                        style={{ backgroundImage: `url(${imagePath})` }}
                    >
                        {isFailed && (
                            <div className="image-fallback-text">
                                ❌ Image Failed to Load
                                <br/>
                                Check path: `public/${finish.imageName}`
                            </div>
                        )}
                        
                        <div className="image-reflection"></div>
                        
                    </div>
                );
            })}
        </div>
    );
};
// --- END: Image Fader Component ---


// Component receives the id prop for external navigation (smooth scroll target)
const TextureAndFinishesSlider = ({ id }) => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false); 

  const isActive = (index) => index === current;

  // Get the current active finish object
  const activeFinish = finishesData[current];

  // --- Mobile Reordering Logic (Active item to top) ---
  const reorderedFinishes = useMemo(() => {
    if (!isMobile) {
      // On desktop, keep the original order
      return finishesData;
    }

    const activeItem = finishesData[current];
    const otherItems = finishesData.filter((_, index) => index !== current);
    
    // On mobile, put the active item first
    return [activeItem, ...otherItems];
  }, [current, isMobile]);

  // Handler for item click (manual selection)
  const handleItemClick = (originalIndex) => {
    setCurrent(originalIndex);
    
    // On manual click, pause auto-switching on desktop
    if (!isMobile) {
        setUserInteracted(true);
    }
    
    // NEW: If on mobile, scroll the entire section to the top
    if (isMobile) {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
  };

  // --- Auto-Switching & Screen Size Detection Logic ---
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    let intervalId;
    
    // Auto-switch only on desktop AND only if the user hasn't interacted
    if (!isMobile && !userInteracted) {
      intervalId = setInterval(() => {
        setCurrent(prevCurrent => 
          (prevCurrent + 1) % finishesData.length
        );
      }, 3000); // Switch every 3 seconds
    }

    // Cleanup function
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isMobile, userInteracted]); 
  

  return (
    // Apply the id prop here for the smooth scroll feature
    <div id={id} className="finish-section-wrapper">
      <div className="finish-container">
        <h2 className="main-heading animated-heading ">Texture And Finishes</h2>
        <p className="sub-heading">
          The Texture And Finish Of Kota Stone Can Be Tailored To Specific Needs:
        </p>

        <div className="content-grid">
          {/* Left Side: Display Card (Slider Viewport) */}
          <div className="display-card-wrapper">
            <div className="display-card">
              
              <div className="image-placeholder-container">
                  <ImageFader activeIndex={current} /> 
                  
                  {activeFinish && (
                    <button className="finish-name-button">
                      {activeFinish.name}
                    </button>
                  )}
              </div>
            </div>

            {/* Pagination Dots - Conditionallly render on Desktop only */}
            {!isMobile && (
                <div className="dots-pagination">
                {finishesData.map((_, index) => (
                    <span
                    key={index}
                    onClick={() => handleItemClick(index)} // Use the new handler
                    className={`dot ${isActive(index) ? "active" : ""}`}
                    ></span>
                ))}
                </div>
            )}
          </div>

          {/* Right Side: Finishes List */}
          <div className="finishes-list">
            {/* Use the reordered list here */}
            {reorderedFinishes.map((finish) => {
              const originalIndex = finish.id - 1;
              const isItemActive = isActive(originalIndex);

              return (
                <div
                  key={finish.id}
                  className={`finish-item ${isItemActive ? "active" : ""}`}
                  // Always use the original index (original array position) for setting state
                  onClick={() => handleItemClick(originalIndex)}
                >
                  <div className="finish-details">
                    <img src="/linked_camera.png" alt="camera" className="camera-icon" />
                    <div>
                      <h3 className="finish-name">{finish.name}</h3>
                      {/* Description only visible for the ACTIVE item */}
                      {isItemActive && (
                        <p className="finish-desc">{finish.desc}</p>
                      )}
                    </div>
                  </div>

                  <div className="finish-meta">
                    <span className="design-count">{finish.designCount}</span>
                    <img src="/arrow_outward.png" alt="arrow" className="arrow-icon" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    
      <style>{`
        /* --- CSS Variables --- */
        :root {
            --primary-stone-color: #55756C; /* Main accent color */
            --secondary-stone-color: #735345; /* Dot accent color */
            --dark-text: #333;
            --light-text: #777;
        }

        /* --- General Styling & Container --- */
       .finish-section-wrapper {
  width: 100%;
  background: #fff;
  padding: 80px 20px;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  /* Change this: */
  min-height: auto; 
}

        .finish-container {
          max-width: 1300px;
          margin: 0 auto;
          text-align: center;
        }

        .main-heading {
          font-size: 38px;
          font-weight: 600;
          color: var(--primary-stone-color); 
          margin-bottom: 8px;
        }

        .sub-heading {
          font-size: 16px;
          color: var(--light-text);
          margin-bottom: 50px;
        }

        /* --- Content Grid Layout (45% Left, 55% Right) --- */
        .content-grid {
  display: grid;
  grid-template-columns: 0.45fr 0.55fr; 
  gap: 40px;
  text-align: left;
  /* Change this: */
  align-items: start; 
}
        
        /* --- Left Side: Display Card (Slider Viewport) --- */
        .display-card-wrapper {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%; 
            padding-top: 20px; 
        }
        
        .display-card {
          width: 100%;
          flex-grow: 1; 
          background: #f0f0f0; 
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .image-placeholder-container {
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
        }

        /* --- Image Fader Styles --- */
        .image-fader-container {
            width: 100%;
            height: 100%;
            position: absolute; 
        }
        
        .fader-image {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-size: cover; 
            background-position: center center; 
            opacity: 0; 
            transition: opacity 0.8s ease-in-out; 
            z-index: 1; 
            box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1); 
            background-color: #f0f0f0; 
        }

        .fader-image.active {
            opacity: 1; 
            z-index: 2; 
        }

        @keyframes shine-sweep {
            0% { transform: skewX(-25deg) translateX(-150%); }
            100% { transform: skewX(-25deg) translateX(250%); }
        }

        .image-reflection {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none; 
            background: linear-gradient(
                90deg, 
                transparent, 
                rgba(255, 255, 255, 0.5) 50%, 
                transparent
            );
            transform: skewX(-25deg) translateX(-150%);
            opacity: 0; 
            transition: opacity 0.3s ease;
            z-index: 5; 
        }

        .display-card:hover .image-reflection {
            opacity: 1;
            animation: shine-sweep 1.2s ease-in-out infinite; 
        }

        /* Debugging Styles */
        .fader-image.failed-load {
            background-image: none !important;
            background-color: #ffcccc; 
            box-shadow: inset 0 0 10px rgba(255, 255, 0, 0.5); 
        }
        
        .image-fallback-text {
            color: #cc0000;
            font-weight: bold;
            text-align: center;
            padding: 20px;
            font-size: 16px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 8px;
        }
        
        .image-loading-indicator {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: var(--primary-stone-color);
            font-weight: 600;
            z-index: 3;
            animation: pulse 1.5s infinite alternate;
        }
        
        @keyframes pulse {
            0% { opacity: 0.5; }
            100% { opacity: 1; }
        }

        /* --- END Image Fader Styles --- */

        .finish-name-button {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: black;
            color: white;
            padding: 12px 25px; 
            border: none;
            border-radius: 30px; 
            font-size: 16px; 
            font-weight: 600; 
            cursor: pointer;
            z-index: 10; 
            white-space: nowrap; 
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        /* Pagination Dots */
        .dots-pagination {
          display: flex;
          justify-content: center;
          margin-top: 30px;
          gap: 15px;
          flex-shrink: 0; 
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ccc;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .dot.active {
          width: 25px; 
          border-radius: 8px; 
          background: var(--secondary-stone-color); 
          height: 8px; 
        }

        /* --- Right Side: Finishes List (Table) --- */
        .finishes-list {
          display: flex;
          flex-direction: column;
          gap: 0; 
          background: white; 
          border-radius: 0;
          overflow: hidden; /* Prevent list from overflowing its container */
          padding: 0;
          box-shadow: none; 
          height: 100%; 
        }

        .finish-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 25px; 
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 1px solid #e0e0e0; 
          position: relative; 
          z-index: 1; 
        }
        
        .finishes-list > .finish-item:last-child {
            border-bottom: none; 
        }

        /* --- Hover Animations (Desktop) --- */
        .finish-item:hover {
            background: #fcfcfc; 
            transform: translateY(-3px); 
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); 
            z-index: 2; 
        }
        
        .finish-item:hover .finish-name {
            color: var(--secondary-stone-color); 
            letter-spacing: 0.5px; 
        }

        .finish-item:hover .arrow-icon {
            transform: translateX(8px); 
            border-color: var(--primary-stone-color);
            background-color: #e6e6e6; 
        }

        .finish-item.active {
          padding-top: 30px; 
          padding-bottom: 30px;
          padding-left: 25px;
          padding-right: 25px;
          background: white;
          border-left: 5px solid var(--primary-stone-color); 
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); 
        }
        
        .finish-item.active .finish-name {
            color: var(--primary-stone-color); 
        }
        
        .finish-details {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            flex-grow: 1;
        }
        
        .camera-icon {
            width: 24px; 
            height: 24px;
            opacity: 0.7; 
            flex-shrink: 0;
            margin-top: 2px;
        }
        
        .finish-name {
            font-size: 16px;
            font-weight: 600;
            color: var(--dark-text);
            margin: 0;
            transition: all 0.3s; 
        }
        
        .finish-desc {
            font-size: 14px;
            color: var(--light-text);
            margin-top: 5px;
            line-height: 1.5;
            max-width: 90%; 
            display: block; 
            max-height: 100px; 
            overflow: hidden;
            transition: max-height 0.4s ease-in-out;
        }

        .finish-item:not(.active) .finish-desc {
            max-height: 0; 
            padding: 0;
            margin: 0;
        }
        
        .finish-meta {
            display: flex;
            align-items: center;
            gap: 15px;
            flex-shrink: 0;
        }
        
        .design-count {
            font-size: 14px;
            color: var(--light-text);
        }
        
        .arrow-icon {
            width: 19px; 
            height: 19px;
            opacity: 0.8; 
            border: 1px solid var(--dark-text); 
            border-radius: 50%; 
            padding: 5px; 
            box-sizing: content-box; 
            transition: all 0.3s; 
        }

        /* --- Responsiveness --- */
        @media (max-width: ${MOBILE_BREAKPOINT}px) {
            /* Mobile breakpoint */
            .content-grid {
                grid-template-columns: 1fr;
                gap: 30px;
                align-items: flex-start; 
            }
          
            .display-card { aspect-ratio: 16 / 9; flex-grow: 0; }
            .finish-item { padding: 15px 20px; }
            .finish-item.active { 
                padding: 20px 20px; 
                border-left: 4px solid var(--primary-stone-color); 
                border-bottom: 1px solid #e0e0e0;
            }

            /* Disable 3D lift on smaller screens */
            .finish-item:hover {
                transform: none; 
                box-shadow: none;
                background: #f9f9f9;
            }
            
            /* UPDATED: Remove scroll properties from finishes-list on mobile */
            .finishes-list {
                max-height: none; /* Show the full list */
                overflow-y: visible; /* Remove inner scrolling */
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); /* Keep a subtle shadow */
            }

            /* Ensure the very last item in the list does not have a bottom border */
            .finishes-list > .finish-item:last-child {
                border-bottom: none !important; 
            }
        }
        
        @media (max-width: 600px) {
            .main-heading { font-size: 30px; }
            .sub-heading { font-size: 14px; margin-bottom: 30px; }
            .finish-item { padding: 15px 15px; }
            .finish-meta { gap: 10px; }
            .finish-name-button {
                font-size: 14px;
                padding: 10px 20px;
                bottom: 20px;
            }
        }
      `}</style>
    </div>
  );
};

export default TextureAndFinishesSlider;