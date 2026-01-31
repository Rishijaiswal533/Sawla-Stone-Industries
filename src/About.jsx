import React, { useState, useEffect, useRef } from 'react';

// --- 1. Custom Hook for Counting Up (UPDATED for Viewport Animation) ---
/**
 * Animates a number from 0 up to endValue over a specified duration, 
 * starting only when the element enters the viewport.
 * @param {number} endValue - The target value.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @returns {{count: number, ref: React.RefObject<HTMLDivElement>}} - The current animated count and the ref to attach.
 */
const useCountUp = (endValue, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  // Ref for the DOM element to observe
  const ref = useRef(null); 

  // --- Intersection Observer Logic (New) ---
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Options: rootMargin is used to define a margin around the root element's bounding box
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is intersecting (in view) and we haven't started counting yet (count is 0)
        if (entry.isIntersecting && count === 0) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [count]); // Dependency on count ensures observer is set up once

  // --- Animation Logic (Modified to depend on 'inView') ---
  useEffect(() => {
    if (!inView || count === endValue) return; // Only start if in view and not finished

    let startTimestamp = null;
    let frameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      
      const percentage = Math.min(progress / duration, 1);
      const currentCount = percentage * endValue;
      
      setCount(currentCount);

      if (progress < duration) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [endValue, duration, inView]); // Added inView as dependency

  // Return the count and the ref
  return { count, ref }; 
};

// --- 2. Component to Display the Animated Stat (UPDATED to use ref) ---
/**
 * Displays an animated counter, handling suffixes like k+, +, and %.
 */
const CountUpStat = ({ end, label, duration = 2000, className }) => {
    // 1. Determine the numeric target and the desired suffix for the counting logic
    let numericEnd;
    let displaySuffix = '';

    const endStr = String(end).toLowerCase();
    
    if (endStr.endsWith('k+')) {
        numericEnd = parseFloat(endStr.slice(0, -2)) * 1000;
        displaySuffix = 'k+';
    } else if (endStr.endsWith('+')) {
        numericEnd = parseFloat(endStr.slice(0, -1));
        displaySuffix = '+';
    } else if (endStr.endsWith('%')) {
        numericEnd = parseFloat(endStr.slice(0, -1));
        displaySuffix = '%';
    } else {
        numericEnd = parseFloat(end);
    }
    
    // Get the count and the ref from the custom hook
    const { count, ref } = useCountUp(numericEnd, duration); 

    // 2. Format the number for display during and after the animation
    let displayedValue;

    if (count >= numericEnd) {
        // If animation is complete, show the original string value
        displayedValue = end;
    } else if (displaySuffix === 'k+') {
        // Display k-notation during the count for smoother transition
        if (count >= 1000) {
            displayedValue = (Math.floor(count / 100) / 10).toFixed(1) + 'k'; // e.g., 5.0k
        } else {
            displayedValue = Math.floor(count);
        }
    } else if (displaySuffix === '%') {
        // Append % sign
        displayedValue = Math.floor(count) + '%';
    } else {
        // Plain integer with or without +
        displayedValue = Math.floor(count) + displaySuffix;
    }

    // Special case for '29+' to make sure it only displays + when done
    if (end === '29+' && count < 29) {
        displayedValue = Math.floor(count);
    }
    
    // --- CRITICAL UPDATE: Apply the ref here ---
    return (
        <div ref={ref} className={className}> 
            <span className="statNumber">{displayedValue}</span>
            <span className="statLabel">{label}</span>
        </div>
    );
};


// --- 3. Main About Component (UPDATED CSS) ---
const About = ({ id }) => { 
  const PRIMARY_COLOR = '#437060';
  const SECONDARY_HEADING_COLOR = '#4D3E33';
  const BUTTON_TEXT_COLOR = '#000000';
  
  const BUTTON_BG_COLOR = '#f0f0f0'; 
  const BUTTON_BORDER_COLOR = '#d0d0d0'; 
  const BODY_TEXT_COLOR = '#4a4a4a'; 

  return (
    <>
      {/* 1. CSS Styles (UPDATED) */}
      <style jsx="true">{`
        /* --- Base Styles for All Screens (Mobile-First) --- */
        .aboutUsContainer {
          display: flex;
          flex-direction: column; 
          /* CHANGE 1 & 2: Set padding to 5% left/right and 80px top/bottom */
          padding: 80px 5%; 
          /* Remove max-width and margin auto here to let 5% padding be the boundary */
          /* max-width: 80vw; */ 
          /* margin: 0 auto; */
          font-family: 'Inter', sans-serif;
          color: ${BODY_TEXT_COLOR}; 
          line-height: 1.6;
          background-color: white;
          /* CHANGE: Height set to auto to fit content */
          height: auto; 
        }
        .ctaButton.getQuote {
          text-decoration: none;
        }

        /* --- Text Content Styles --- */
        .aboutTextContent {
          margin-bottom: 50px;
          /* CHANGE 1: Set text alignment to LEFT for small screens */
          text-align: left; 
        }

        .mainHeading, .sinceYear {
          color: ${PRIMARY_COLOR}; 
          font-weight: 500; 
          font-size: 4.5vw; 
          margin-bottom: 0;
          line-height: 1.1;
        }

        .sinceYear {
          margin-top: 5px;
          margin-bottom: 30px;
        }

        .introParagraph, .masterySection p {
          font-size: 1.5vw;
          /* Reset centering for the text block itself on small screen */
          margin: 0 0 20px 0; 
          max-width: none; /* Let text flow naturally up to container width */
        }
        
        .subHeading {
          color: ${SECONDARY_HEADING_COLOR};
          font-weight: 600; 
          font-size: 2.2vw;
          margin-top: 0;
          margin-bottom: 20px;
        }

        /* --- CTA and Stats Container (Right Side) --- */
        .aboutStatsCta {
          display: flex;
          flex-direction: column; 
          /* CHANGE 3 & 4: Center everything horizontally */
          align-items: center; 
          min-width: 280px;
          width: 100%; 
        }

        /* --- CTA Buttons - Centered for Mobile (Only one button now) --- */
        .ctaButtons {
          display: flex; 
          flex-direction: row; 
          /* CHANGE 3: Ensure button container is centered */
          justify-content: center; 
          gap: 15px; 
          width: 100%; 
          max-width: 400px; 
          margin-bottom: 50px;
        }

        .ctaButton {
          padding: 15px 25px; 
          cursor: pointer;
          text-align: center;
          font-size: 1.5vw;
          font-weight: 500; 
          border-radius: 8px; 
          border: 1px solid ${BUTTON_BORDER_COLOR}; 
          background-color: ${BUTTON_BG_COLOR}; 
          color: ${BUTTON_TEXT_COLOR};
          transition: background-color 0.3s, border-color 0.3s;
          white-space: nowrap; 
        }
        
        .ctaButton:hover {
            background-color: #e0e0e0; 
            border-color: #c0c0c0;
        }

        /* --- Statistics Grid: Two columns on Mobile (Base styles) --- */
        .statsGrid {
          display: flex; 
          flex-direction: row; 
          flex-wrap: wrap; 
          /* CHANGE 4: Center the grid items within the container */
          justify-content: center; 
          gap: 20px 10px; 
          width: 100%;
          max-width: 600px; 
          padding: 20px 0; 
          /* CHANGE 4: Use auto margins to center the block element itself */
          margin: 0 auto;
        }
        
        .statItem {
          text-align: center; 
          flex-basis: 45%; 
          max-width: 45%; 
          margin-top: 0 !important; 
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, border 0.3s;
          cursor: default;
          padding: 20px 10px; 
          border-radius: 12px;
          border: 1px solid transparent; 
        }
        
        .statItem:hover {
            transform: translateY(-5px); 
            box-shadow: 0 10px 20px rgba(67, 112, 96, 0.25);
            border: 1px solid rgba(67, 112, 96, 0.5); 
        }

        .statNumber {
          display: block;
          font-size: 3.3vw;
          font-weight: 500; 
          color: ${PRIMARY_COLOR}; 
          line-height: 1.1;
          margin-bottom: 5px;
        }

        .statLabel {
          display: block;
          font-size: 1.3vw;
          color: #666;
          font-weight: 400;
        }


        /* --- MEDIA QUERY for Larger Screens (Desktop - NO CHANGES) --- */
        @media (min-width: 992px) {
          .aboutUsContainer {
            flex-direction: row; 
            align-items: flex-start; 
            /* REVERT: Reset padding for large screen */
            padding: 80px 0; 
            max-width: 80vw;
            margin: 0 auto;
          }

          .aboutTextContent {
            flex: 3; 
            padding-right: 100px; 
            margin-bottom: 0;
            /* REVERT: Reset to left-align on desktop */
            text-align: left; 
          }

          /* Reset paragraph block centering for desktop */
          .introParagraph, .masterySection p {
            font-size: 16px; 
            margin-left: 0; 
            margin-right: 0;
            margin-bottom: 20px;
            max-width: 600px; /* Restore max-width for desktop paragraphs */
          }
          
          .aboutStatsCta {
            flex: 2; 
            min-width: 350px;
            align-items: flex-end; /* Align right on desktop */
          }
          
          /* Single button stacked, aligned right on desktop */
          .ctaButtons {
              flex-direction: column; 
              align-items: flex-end; 
              justify-content: flex-end; 
              gap: 10px;
              width: 250px; 
              max-width: none;
          }

          .ctaButton {
              font-size: 16px; 
              width: 100%; 
          }

          /* Stats Grid: Two columns using grid layout on desktop */
          .statsGrid {
            display: grid; 
            grid-template-columns: 1fr 1fr; 
            gap: 50px 30px; 
            width: 250px; 
            max-width: none;
            padding: 0; 
            justify-content: flex-start; 
            /* REVERT: Remove auto margin for desktop */
            margin: 0;
          }
          
          .statItem {
            text-align: left; 
            flex-basis: auto; 
            max-width: none; 
            margin-top: 0;
          }

          /* Reverting to slightly larger, fixed text sizes on large screens */
          .mainHeading, .sinceYear { font-size: 48px; }
          .introParagraph, .masterySection p { font-size: 16px; }
          .subHeading { font-size: 20px; }
          .statNumber { font-size: 36px; }
          .statLabel { font-size: 14px; }
        }

        /* Smaller mobile adjustments for very narrow screens */
        @media (max-width: 480px) {
            .ctaButtons {
                max-width: 100%;
            }
            .ctaButton {
                width: 80%; 
                font-size: 16px; 
            }
            .statsGrid {
                justify-content: space-around; /* Use space-around again for better distribution */
                padding: 20px 0; 
            }
            .statItem {
                /* Keeping 45% to encourage two items per row */
            }
            /* Adjust text sizes for very small screens to avoid being too small */
            .mainHeading, .sinceYear { font-size: 8vw; }
            .introParagraph, .masterySection p { font-size: 3.5vw; }
            .subHeading { font-size: 5vw; }
            .statNumber { font-size: 7vw; }
            .statLabel { font-size: 4vw; }
        }
      `}</style>

      {/* 2. JSX Content (No Change Needed) */}
      <section id={id} className="aboutUsContainer">
        <div className="aboutTextContent">
          <h1 className="mainHeading">Crafting Excellence</h1>
          <h1 className="sinceYear">Since 1995</h1>
          
          <p className="introParagraph">
            Sawla Stone Industries Has Been The Trusted Name In Premium Kota Stone Supply, Delivering Unmatched Quality And Service To Clients Across India And Beyond.
          </p>

          <div className="masterySection">
            <h2 className="subHeading">Three Decades Of Stone Mastery</h2>
            
            <p>
              From Our Quarries In Kota, Rajasthan, We Source And Supply The Finest Quality Natural Stones. Our Expertise Spans Across Greenish-Blue Kota, Brown Kota, Red Mandana, And Premium Polished Varieties.
            </p>
            <p>
              What Sets Us Apart Is Our Commitment To Quality, Timely Delivery, And Personalized Service. Every Stone Is Carefully Selected And Processed To Meet The Highest Standards Of Durability And Aesthetic Appeal.
            </p>
          </div>
        </div>

        <div className="aboutStatsCta">
          <div className="ctaButtons">
            {/* The 'Get Quote' button */}
            <a 
              className="ctaButton getQuote" 
              href="/get-quote" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get Quote
            </a>
          </div>
          
          <div className="statsGrid">
            {/* The CountUpStat component now handles the Intersection Observer */}
            <CountUpStat end="29+" label="Years Of Excellence" className="statItem" />
            <CountUpStat end="5k+" label="Clients" className="statItem" />
            <CountUpStat end="10k+" label="Projects Delivered" className="statItem" />
            <CountUpStat end="100%" label="Quality Guarantee" className="statItem" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;