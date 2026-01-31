import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "bg1.png",
    title: "Blue",
    heading: "Kota Blue",
    desc: "Ranges From Greenish-Grey To Bluish Tones, Known For Its Calming Effect.",
  },
  {
    id: 2,
    image: "bg2.png",
    title: "Brown",
    heading: "Kota Brown",
    desc: "Features Earthy Tones Ideal For Artistic And Traditional Applications",
  },
  {
    id: 3,
    image: "bg3.png",
    title: "Other",
    heading: "Other Colours",
    desc: "Includes Black, Pink, Grey, Beige, And Yellowish Variants",
  },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = slides.length;

  // --- NEW: Navigation Functions ---
  const nextSlide = () => {
    setCurrent(current === totalSlides - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? totalSlides - 1 : current - 1);
  };

  // --- NEW: Auto-Switch Functionality (3 seconds) ---
  useEffect(() => {
    // Only enable auto-switch if we assume a small screen, or let CSS manage visibility.
    // For simplicity, we apply auto-switch globally, but it's mainly for the carousel view.
    const autoSwitch = setInterval(() => {
      nextSlide();
    }, 3000); // 3000ms = 3 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(autoSwitch);
  }, [current]); // Re-run effect when 'current' changes to reset the timer

  return (
    <div className="slider-container">
      {/* Top Pagination Dots - Visible on all screens */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`dot ${current === index ? "active" : ""}`}
          ></span>
        ))}
      </div>

      {/* NEW: Left/Right Navigation Arrows - Only visible on small screens */}
      <div className="carousel-nav-arrows">
        <button onClick={prevSlide} className="nav-arrow left-arrow">
          &#10094; {/* Left chevron */}
        </button>
        <button onClick={nextSlide} className="nav-arrow right-arrow">
          &#10095; {/* Right chevron */}
        </button>
      </div>

      {/* Image Cards */}
      <div className="card-grid">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`card ${index === current ? "active-slide" : "inactive-slide"}`}
            onClick={() => setCurrent(index)}
          >
            <div className="image-container">
              <img src={slide.image} alt={slide.title} className="image" />
              <div className="image-reflection"></div>
              <div className="overlay-text">{slide.title}</div>
            </div>
            <div className="text-section">
              <h3>{slide.heading}</h3>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CSS Styling with Responsive Overrides */}
      <style>{`
        /* --- Base Styles (Larger Screens) --- */
        .slider-container {
          width: 80%;
          margin: 0 auto;
          padding: 30px 0;
          font-family: 'Arial', sans-serif;
          background-color: #fff;
          position: relative; /* For arrow positioning */
        }

        .dots {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 20px;
          gap: 15px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ccc;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .dot.active {
          width: 25px;
          border-radius: 8px;
          background: #6F4E37;
          height: 10px;
          margin: 0 5px;
        }

        /* Large Screen: Grid Layout (Default) */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          opacity: 1; /* Default visibility */
          position: relative;
        }

        .image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          width: 100%;
          height: 380px;
          aspect-ratio: 4 / 3;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          z-index: 1;
        }

        @media (min-width: 1024px) {
          .image-container {
            max-height: 450px;
            height: 560px;
            width: 100%;
          }
          .text-section {
            max-width: 450px;
          }
        }
        
        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease-out;
        }
        
        .card:hover .image {
          transform: scale(1.05);
        }

        /* Reflection/Shine CSS (unmodified) */
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
        }
        .card:hover .image-reflection {
            opacity: 1;
            animation: shine-sweep 1.2s ease-in-out infinite;
        }

        .overlay-text {
          position: absolute;
          bottom: 15px;
          left: 20px;
          font-size: 24px;
          color: white;
          font-weight: 500;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
          z-index: 2;
        }
        .text-section {
          text-align: left;
          margin-top: 12px;
          width: 100%;
        }
        .text-section h3 {
          font-size: 18px;
          font-weight: 600;
          color: #2b5a4a;
          margin: 0 0 5px;
        }
        .text-section p {
          font-size: 14px;
          color: #4f4f4f;
          line-height: 1.6;
          margin: 0;
        }

        /* --- NEW: Small Screen (Mobile) Overrides --- */
        @media (max-width: 768px) {
          .slider-container {
            width: 90%; /* Increase width for more space on mobile */
          }
          
          /* Change card-grid to a simple flex container for single-slide view */
          .card-grid {
            display: flex;
            overflow: hidden; /* Hide inactive slides */
            position: relative;
            /* Allow vertical scrolling outside the slider, but not horizontal */
          }

          /* Inactive slides are completely hidden on small screens */
          .card {
            min-width: 100%; /* Important: Make the card take full width of the grid */
            position: absolute;
            top: 0;
            left: 0;
            transform: translateX(100%); /* Start off-screen right */
            transition: opacity 0.4s ease-out, transform 0.4s ease-out;
            pointer-events: none; /* Disable interaction on hidden slides */
          }

          /* Active slide */
          .card.active-slide {
            position: static; /* Take up space in the flex container */
            opacity: 1;
            transform: translateX(0); /* Bring to center */
            pointer-events: all; /* Enable interaction */
          }

          /* Hide other slides, but make sure they don't jump */
          .card.inactive-slide {
             opacity: 0;
             /* The 'position: absolute' prevents it from affecting layout flow */
          }


          /* Navigation Arrows */
          .carousel-nav-arrows {
            display: block; /* Show arrows on small screens */
          }

          .nav-arrow {
            position: absolute;
            top: 50%; /* Center vertically */
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px 15px;
            cursor: pointer;
            z-index: 10;
            border-radius: 5px;
            font-size: 20px;
            line-height: 1;
            user-select: none;
            transition: background 0.2s;
          }

          .nav-arrow:hover {
            background: rgba(0, 0, 0, 0.8);
          }

          .left-arrow {
            left: 10px;
          }

          .right-arrow {
            right: 10px;
          }
        }

        /* Hide arrows on large screens */
        @media (min-width: 769px) {
            .carousel-nav-arrows {
                display: none;
            }
        }
            @media (min-width: 769px) {
    .dots {
        display: none;
    }
}
      `}</style>
    </div>
  );
};

export default ImageSlider;