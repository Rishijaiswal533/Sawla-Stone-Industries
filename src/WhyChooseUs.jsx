import React, { useState, useEffect, useRef } from "react";
import { 
  FaShieldHalved,
  FaGem,
  FaStar,
  FaHouse,
  FaTree,
  FaClock,
} from 'react-icons/fa6'; 

// --- Stat Counter Component (Remains for counting/visibility logic) ---
const Counter = ({ end,  label, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer Logic to trigger count
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  // Counting Animation Logic
  useEffect(() => {
    if (isVisible) {
      // Small delay to let other animations start
      const timer = setTimeout(() => {
        const duration = 1500; // 1.5 seconds for counting
        
        const startTime = Date.now();

        const animate = () => {
          const currentTime = Date.now();
          const progress = Math.min(1, (currentTime - startTime) / duration);
          
          let currentValue;
          if (end === 'Zero') {
             // 'Zero' is a special case (no counting needed)
             currentValue = 'Zero';
             setCount(currentValue);
             return;
          } else if (end.includes('%')) {
             // Count for percentages
             currentValue = Math.floor(progress * parseInt(end.replace('%', ''), 10));
             setCount(`${currentValue}%`);
          } else {
             // Count for numbers (like '25+')
             currentValue = Math.floor(progress * parseInt(end.replace('+', ''), 10));
             setCount(`${currentValue}+`);
          }


          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            // Set the final value
            setCount(end);
          }
        };

        requestAnimationFrame(animate);
      }, delay); 

      return () => clearTimeout(timer);
    }
  }, [end, isVisible, delay]);


  // Unique Class for custom CSS animations
  const uniqueClass = `stat-box-${label.replace(/\s/g, '-').toLowerCase()}`;

  return (
    <div className={`stat-item ${uniqueClass} ${isVisible ? 'animate-in' : ''}`} ref={ref}>
      <h4>{count}</h4>
      <span>{label}</span>
    </div>
  );
};
// --- End Stat Counter Component ---


// --- Main Component ---
const WhyChooseUs = () => {
  const features = [
    {
      icon: FaShieldHalved,
      title: "Exceptional Durability",
      desc: "Natural strength and resistance to wear, making it perfect for high-traffic areas and outdoor applications.",
    },
    {
      icon: FaGem,
      title: "Natural Texture & Fineness",
      desc: "Unique grain patterns and smooth texture provide an elegant, sophisticated appearance that ages beautifully.",
    },
    {
      icon: FaStar,
      title: "Premium Glossy Finish",
      desc: "Available in polished, honed, and natural finishes to suit any design aesthetic and functional requirement.",
    },
    {
      icon: FaHouse,
      title: "Interior Excellence",
      desc: "Perfect for flooring, wall cladding, countertops, and decorative elements in residential and commercial spaces.",
    },
    {
      icon: FaTree,
      title: "Outdoor Versatility",
      desc: "Weather-resistant properties makes it ideal for patios, walkways, facades, and landscape architecture.",
    },
    {
      icon: FaClock,
      title: "Timeless Appeal",
      desc: "Classic beauty that transcends trends, ensuring your investment maintains its value and appeal over decades.",
    },
  ];

  const primaryColor = "#699484"; 


  return (
    <div className="outer-section-wrapper">
      <div className="why-container">
        {/* Animated Main Title */}
        <h2 className="animated-heading" style={{ color: '#437060' }}>
  Why Choose Kota Stone?
</h2>
        <p className="subtitle animated-subtitle">
          Discover the unique advantages that make Kota stone the preferred choice
          for architects, <br /> designers, and homeowners worldwide.
        </p>

        <div className="features-grid-wrapper">
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i} data-index={i}>
                <div 
                  className="icon-wrapper" 
                  style={{ backgroundColor: primaryColor }}
                >
                  <span className="icon-rotate continuous-rotate">
                    <f.icon size={28} color="white" />
                  </span>
                </div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-box-wrapper">
          <div className="experience-box">
            <h3>Experience the Kota Stone Difference</h3>
            <p>
              Join thousands of satisfied customers who have chosen Kota stone for
              their projects. From luxury residences to commercial complexes, our
              stones deliver unmatched quality and beauty.
            </p>

            {/* --- Stats are now using the Counter Component --- */}
            <div className="stats">
              <Counter end="25+" label="Years Lifespan" delay={0} />
              <Counter end="100%" label="Natural Stone" delay={200} />
              <Counter end="Zero" label="Maintenance" delay={400} />
            </div>
            {/* ------------------------------------------------ */}

          </div>
        </div>
      </div>

      
      <style>{`
        /* --- CSS Variable Definitions (10 lines) --- */
        :root {
          --outer-margin: 20px; 
          --container-bg: #fafafa;
          --inner-content-max-width: 1200px;
          --primary-color: #699484;
          --primary-color-dark: #4a6a5e;
          --secondary-color: #2b463c;
          --text-color-dark: #333;
          --text-color-light: #555;
          --shadow-low: 0 1px 8px rgba(0, 0, 0, 0.05);
          --shadow-high: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        
        /* --- Base & Layout Styles (40 lines) --- */
        .outer-section-wrapper {
          padding: var(--outer-margin);
          box-sizing: border-box;
          width: 100%;
          background-color: white; 
        }

        .why-container {
          width: 100%;
          padding: 80px 20px;
          text-align: center;
          font-family: "Arial", sans-serif;
          color: var(--text-color-dark);
          background: var(--container-bg);
          box-sizing: border-box;
          overflow: hidden; 
        }

        .why-container h2 {
          font-size: 32px;
          font-weight: 700;
          color: var(--secondary-color);
          margin-bottom: 10px;
          position: relative;
        }
        
        /* Animated line under H2 */
        .why-container h2::after {
          content: '';
          display: block;
          width: 0;
          height: 3px;
          background: var(--primary-color);
          margin: 5px auto 0;
          transition: width 0.5s ease-out;
        }
        
        /* H2 Hover Animation */
        .why-container:hover h2::after {
          width: 80px; 
        }

        .subtitle {
          color: #777;
          font-size: 16px;
          margin-bottom: 50px; 
          line-height: 1.6;
        }

        .features-grid-wrapper,
        .experience-box-wrapper {
          max-width: var(--inner-content-max-width);
          margin: 0 auto;
          padding: 0 10px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px; 
          margin-bottom: 60px;
          perspective: 1500px; 
          /* --- FIX: Establish stacking context for children --- */
          position: relative; 
          z-index: 1; 
        }

        /* --- Feature Card Base Styles & 3D Setup --- */
        .feature-card {
          background: #fff;
          border-radius: 12px;
          border: 1px solid #eee;
          box-shadow: var(--shadow-low);
          padding: 30px 25px;
          text-align: left;
          cursor: pointer;
          
          /* 3D Animation Setup */
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.6s ease;
          transform-style: preserve-3d; 
          transform: translateZ(0); 
          position: relative; 
          z-index: 1; /* Initial z-index */
          overflow: hidden; 
        }

        /* HOVER: 3D Rotation and Lift */
        .feature-card:hover {
          transform: translateY(-8px) rotateY(5deg) translateZ(50px); 
          box-shadow: var(--shadow-high); 
          z-index: 10; /* Elevate on hover */
        }
        
        /* Apply smooth transition to internal elements */
        .feature-card h3, .feature-card p, .feature-card .icon-wrapper {
          transition: all 0.4s ease-out;
        }
        
        /* HOVER: Text Animation (Slide Up/Fade) */
        .feature-card:hover .feature-title {
          color: var(--primary-color-dark);
          transform: translateY(-5px); 
        }

        .feature-card:hover .feature-desc {
          opacity: 0.85; 
          transform: translateX(5px); 
        }


        /* --- Icon & Rotation Animation --- */
        .icon-wrapper {
          width: 60px; 
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%; 
          margin-bottom: 20px;
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          position: relative;
          overflow: hidden;
          background-color: var(--primary-color); 
        }
        
        /* HOVER: Icon Wrapper Glow and Color Change */
        .feature-card:hover .icon-wrapper {
          background-color: var(--primary-color-dark); 
          box-shadow: 0 0 0 5px rgba(105, 148, 132, 0.5), 0 0 20px rgba(105, 148, 132, 0.9); 
        }
        
        /* Pseudo-element for inner reflection on hover */
        .icon-wrapper::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.3); 
          transform: skewX(-20deg);
          transition: all 0.8s ease-in-out;
        }

        /* HOVER: Reflection Animation (Slide across) */
        .feature-card:hover .icon-wrapper::before {
          left: 100%;
        }

        /* Inner Icon Wrapper for Rotation */
        .icon-rotate {
          display: inline-block; 
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        /* HOVER: Icon Bounce/Slam Rotation */
        .feature-card:hover .icon-rotate {
          transform: rotate(360deg) scale(1.15); 
        }
        
        /* KEYFRAME: Continuous 360-degree Spin Animation */
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .continuous-rotate {
          animation: spin 10s linear infinite; 
        }

        .feature-card:hover .continuous-rotate {
          animation: spin 0.8s linear infinite; 
        }

        /* --- Text Styles (REDUCED SIZE) --- */
        .feature-card h3 {
          font-size: 18px; 
          font-weight: 600;
          margin-bottom: 10px;
          color: var(--secondary-color);
        }

        .feature-card p {
          font-size: 14.5px; 
          line-height: 1.6;
          color: var(--text-color-light);
        }


        /* --- Experience Box & Stats (UPDATED) --- */
        .experience-box {
          background: #fff;
          border-radius: 12px;
          border: 1px solid #eee;
          box-shadow: var(--shadow-low);
          padding: 40px 20px;
          margin: 0 auto;
          max-width: 900px;
          transition: all 0.5s ease;
          position: relative;
        }
        
        /* HOVER: Experience Box Bouncing Shadow */
        .experience-box:hover {
          box-shadow: 0 0 30px rgba(43, 70, 60, 0.3);
          transform: scale(1.01);
        }

        .experience-box h3 {
          font-size: 24px;
          font-weight: 600;
          color: var(--secondary-color);
          margin-bottom: 10px;
        }

        .experience-box p {
          color: #666;
          font-size: 15px;
          margin-bottom: 30px;
          line-height: 1.6;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }

        /* Base Stat Item Styles */
        .stat-item {
          transition: transform 0.3s ease, color 0.3s ease, opacity 0.5s, transform 0.5s, background 0.3s;
          opacity: 0; 
          transform: translateY(30px) scale(0.8);
          padding: 5px; 
          border-radius: 8px;
        }
        
        /* Stat Entry Animation (Triggered by JS) */
        @keyframes stat-entry {
            0% { opacity: 0; transform: translateY(30px) scale(0.8); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .stat-item.animate-in {
            opacity: 1;
            transform: translateY(0) scale(1);
            animation: stat-entry 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .stat-box-years-lifespan.animate-in { animation-delay: 0.1s; }
        .stat-box-natural-stone.animate-in { animation-delay: 0.3s; }
        .stat-box-maintenance.animate-in { animation-delay: 0.5s; }


        /* --- UNIFIED PRIMARY COLOR for H4 --- */
        .stat-item h4 { 
            font-size: 28px; 
            font-weight: 700;
            margin-bottom: 5px;
            color: var(--primary-color-dark); /* Unified Green Color */
            padding: 5px;
            border-radius: 5px;
            transition: color 0.3s ease, box-shadow 0.3s ease; 
        }

        /* Stat Pulse Keyframe (Using only the green one, renamed) */
        @keyframes stat-pulse-hover {
          0%, 100% { 
            box-shadow: 0 0 0 0px rgba(105, 148, 132, 0.5); 
          }
          50% { 
            box-shadow: 0 0 10px 5px rgba(105, 148, 132, 0.9); 
          }
        }
        
        /* Stat 3: Maintenance Zero Shake Keyframe */
        @keyframes zero-shake {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(2deg); }
            75% { transform: rotate(-2deg); }
        }
        
        /* --- HOVER ANIMATIONS (PULSE & SHAKE) --- */
        
        .stat-item:hover h4 {
            animation: stat-pulse-hover 1.5s infinite ease-in-out;
            transform: scale(1.05);
        }

        /* Apply ZERO SHAKE animation only on hover for the last item */
        .stat-box-maintenance:hover h4 {
            animation: stat-pulse-hover 1.5s infinite ease-in-out, zero-shake 0.5s infinite alternate;
        }


        .stat-item span {
          font-size: 14px;
          color: #777;
        }

        /* General Hover Effect for Item Container */
        .stat-item:hover {
          transform: scale(1.1); /* Slight Scale up for the whole box */
          background: rgba(255, 255, 255, 0.5);
          z-index: 5; /* Ensure it overlaps neighbors */
        }


        /* --- Other existing keyframes --- */
        @keyframes fadeInSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animated-heading { animation: fadeInSlideUp 0.8s ease-out; }
        .animated-subtitle { animation: fadeInSlideUp 0.8s ease-out 0.2s backwards; }
        
        @keyframes cardEntry {
          0% { opacity: 0; transform: rotateX(90deg) scale(0.8); }
          70% { opacity: 1; transform: rotateX(-5deg) scale(1.05); }
          100% { transform: rotateX(0deg) scale(1); opacity: 1; }
        }
        
        .feature-card {
          opacity: 0;
          transform: rotateX(90deg) scale(0.8); 
          animation: cardEntry 1s ease-out forwards;
        }
        
        /* Staggered delay */
        .features-grid .feature-card[data-index="0"] { animation-delay: 0.3s; }
        .features-grid .feature-card[data-index="1"] { animation-delay: 0.4s; }
        .features-grid .feature-card[data-index="2"] { animation-delay: 0.5s; }
        .features-grid .feature-card[data-index="3"] { animation-delay: 0.6s; }
        .features-grid .feature-card[data-index="4"] { animation-delay: 0.7s; }
        .features-grid .feature-card[data-index="5"] { animation-delay: 0.8s; }
        
        /* --- Responsive Styles (FIXED & REDUCED) --- */
        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .feature-card:hover { 
            transform: translateY(-8px) rotateY(0deg) translateZ(10px) scale(1.05); 
            z-index: 10; 
          }
          .stats { justify-content: space-around; gap: 10px; }
        }

        @media (max-width: 768px) {
          .why-container { padding: 40px var(--outer-margin); }
          
          /* Feature Grid Adjustments (from previous fix) */
          .features-grid { 
            grid-template-columns: repeat(2, 1fr); 
            gap: 15px; 
          } 
          
          .feature-card { 
            text-align: center; /* Important: Centers text content */
            padding: 20px 15px;
            transform: translateY(0) rotateY(0) translateZ(0) !important; 
          }

          /* --- FIX 1: Icon Centering in Small Screen --- */
          .icon-wrapper { 
            width: 45px;
            height: 45px;
            margin-bottom: 10px; 
            margin-left: auto; /* Center the icon wrapper */
            margin-right: auto; /* Center the icon wrapper */
          }
          
          .feature-card h3 { 
            font-size: 16px; 
            margin-bottom: 5px;
          }
          .feature-card p {
            font-size: 13.5px; 
            line-height: 1.4;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          /* --- FIX 2 & 3: Ensure All Hover Effects Work on Small Screen and are Fast --- */
          .feature-card:hover { 
            transform: translateY(-5px) rotateY(0deg) scale(1.02); 
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); 
            z-index: 10; 
          }

          /* Speed up reflection */
          .feature-card:hover .icon-wrapper::before {
             left: 100%;
             transition: all 0.4s ease-in-out; /* Reduced from 0.8s */
          }
          
          /* Apply Icon Glow/Color change on hover */
          .feature-card:hover .icon-wrapper {
            background-color: var(--primary-color-dark); 
            box-shadow: 0 0 0 5px rgba(105, 148, 132, 0.5), 0 0 15px rgba(105, 148, 132, 0.7); 
          }

          /* Speed up continuous rotation */
          .feature-card:hover .continuous-rotate { 
            animation: spin 0.5s linear infinite; /* Reduced from 0.8s */
          }
          
          .stats { 
            flex-direction: row; 
            gap: 5px; 
            justify-content: space-between; 
            padding: 0 5px; 
          }
          
          .stat-item {
              padding: 5px 2px; 
          }
          
          .stat-item h4 { 
            font-size: 18px; 
            margin-bottom: 2px;
          }
          .stat-item span { 
              font-size: 11px; 
          }
          
          /* Reset hover scale for better touch usability */
          .stat-item:hover {
            transform: scale(1.05); 
          }
          
          :root {
          --outer-margin: 4px; }
        }
      `}</style>
   
   
    </div>
  );
};

export default WhyChooseUs;