import React, { useEffect, useState, useRef } from 'react';

// NOTE: You must ensure 'video.mp4' is located in a public/accessible folder
const VIDEO_SOURCE_PATH = '/video.mp4';
const POSTER_IMAGE_PATH = '/placeholder-image.jpg';

// Define the final values and labels for the stats
const STATS_DATA = [
    { label: 'Calcium Carbonate', max: 40, display: '38-40%' },
    { label: 'Magnesium Oxide', max: 5, display: '4-5%' },
    { label: 'Silica', max: 25, display: '24-25%' },
];

// Helper component for the Counting Effect
const CountingStat = ({ max, display, label }) => {
    // The animated value (starts at 0)
    const [count, setCount] = useState(0);
    // Reference to the DOM element to check for visibility (Intersection Observer is better, but this is simpler)
    const statRef = useRef(null);

    useEffect(() => {
        // Simple scroll-based trigger (better alternatives exist for production)
        const checkVisibilityAndStartCount = () => {
            if (statRef.current) {
                const rect = statRef.current.getBoundingClientRect();
                // Check if the element is in the viewport (or close to it)
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

                if (isVisible && count === 0) {
                    let startTimestamp = null;
                    const duration = 1500; // 1.5 seconds animation

                    const step = (timestamp) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = timestamp - startTimestamp;
                        const percentage = Math.min(progress / duration, 1); // 0 to 1
                        
                        // Use the displayed percentage for the animated value
                        // Max value used for animation is the 'max' prop (e.g., 40, 5, 25)
                        const currentCount = Math.floor(percentage * max);
                        setCount(currentCount);

                        if (percentage < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                             // Once animation is complete, set the final value to trigger the correct display
                             setCount(max); 
                        }
                    };

                    window.requestAnimationFrame(step);
                    // Remove the event listener once the animation has started
                    window.removeEventListener('scroll', checkVisibilityAndStartCount);
                }
            }
        };

        // Add a scroll listener to detect when the user arrives at the section
        window.addEventListener('scroll', checkVisibilityAndStartCount);
        // Also run once on mount in case the component is already visible
        checkVisibilityAndStartCount();

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', checkVisibilityAndStartCount);
        };
    }, [max, count]);

    // Determine the value to display: the animated 'count' followed by a '%', 
    // or the final 'display' string when the animation is complete.
    const displayValue = count < max ? `${count}%` : display;

    return (
        <div className="cc-stat-item" ref={statRef}>
            {/* The displayValue is what must be prevented from wrapping */}
            <span className="cc-stat-value">{displayValue}</span>
            <span className="cc-stat-label">{label}</span>
        </div>
    );
};


const ChemicalComposition = () => {
    return (
        <div className="cc-section-wrapper">
            <div className="cc-container">
                <h2 className="cc-main-heading">Chemical Composition</h2>
                <p className="cc-sub-heading">Kota Stone Primarily Consists Of:</p>

                {/* Stat Grid with Counting Effect */}
                <div className="cc-stats-grid">
                    {STATS_DATA.map((stat) => (
                        <CountingStat 
                            key={stat.label} 
                            max={stat.max} 
                            display={stat.display} 
                            label={stat.label} 
                        />
                    ))}
                </div>

                {/* The HTML5 Video container structure with autoPlay */}
                <div className="cc-video-container">
                    <video 
                        className="cc-video-player"
                        controls
                        poster={POSTER_IMAGE_PATH} // Thumbnail image
                        preload="metadata"
                        autoPlay // *** Added for auto-play ***
                        muted // *** Recommended for autoplay in most browsers ***
                        loop // Optional: loop the video
                    >
                        <source src={VIDEO_SOURCE_PATH} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Note: Video must be muted to autoplay in most modern browsers. */}
                    {/* Add an overlay text if you keep it muted, e.g., "Click to unmute" */}
                </div>

            </div>

            {/* In-component styling for simplicity, adjust for real-world projects */}
            <style>{`
                .cc-section-wrapper {
                   padding: 80px 20px;
                    font-family: 'Arial', sans-serif;
                    box-sizing: border-box;
                    margin-left: 10%;
                    margin-right: 10%;
                }

                .cc-container {
                    max-width: 1200px; 
                    margin: 0 auto;
                    text-align: left;
                }

                .cc-main-heading {
                    font-size: 38px;
                    font-weight: 600;
                    color: #333;
                    margin-bottom: 8px;
                }

                .cc-sub-heading {
                    font-size: 16px;
                    color: #777;
                    margin-bottom: 50px; 
                }

                /* --- Stats Grid Styling (Single Row on All Screens) --- */
                .cc-stats-grid {
                    display: grid;
                    /* Ensures 3 columns at all times for responsiveness */
                    grid-template-columns: repeat(3, 1fr); 
                    gap: 30px; 
                    margin-bottom: 70px; 
                }

                .cc-stat-item {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start; 
                }

                .cc-stat-value {
                    /* SOLUTION: Force the percentage string onto a single line */
                    white-space: nowrap; 
                    
                    /* Font size adjustments for responsiveness */
                    /* Min size adjusted slightly lower to ensure fit on very small screens */
                    font-size: clamp(22px, 4.5vw, 32px); 
                    font-weight: 700;
                    color: #55756C; 
                    margin-bottom: 5px;
                    /* Ensure the animated text doesn't cause layout shift */
                    min-height: 1.2em; 
                }

                .cc-stat-label {
                    font-size: clamp(14px, 2vw, 15px);
                    color: #666;
                }
                /* --- END Stats Grid Styling --- */


                /* --- STYLES FOR HTML5 VIDEO CONTAINMENT --- */
                .cc-video-container {
                    position: relative;
                    width: 100%;
                    /* Standard 16:9 aspect ratio */
                    padding-bottom: 56.25%; 
                    background-color: #000;
                    border-radius: 10px;
                    overflow: hidden; 
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1); 
                }

                .cc-video-player {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover; 
                }
                /* --- END STYLES --- */

                /* Responsive Adjustments (General Layout) */
                @media (max-width: 1200px) {
                    .cc-section-wrapper {
                        margin-left: 5%;
                        margin-right: 5%;
                    }
                }

                @media (max-width: 768px) {
                    .cc-section-wrapper {
                        margin-left: 0;
                        margin-right: 0;
                        padding: 60px 20px;
                    }
                    .cc-main-heading {
                        font-size: 30px;
                    }
                    .cc-sub-heading {
                        margin-bottom: 30px;
                    }
                    .cc-stats-grid {
                        /* Retains 3 columns on all screen sizes */
                        gap: 15px;
                        margin-bottom: 50px;
                    }
                }

                @media (max-width: 480px) {
                    .cc-main-heading {
                        font-size: 26px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ChemicalComposition;