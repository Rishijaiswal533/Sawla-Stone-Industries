import React, { useState, useRef } from "react";

// --- DATA FOR Endless Possibilities ---
const applicationData = {
    indoor: [
        { name: "Luxury Flooring", type: "indoor", desc: "Experience the timeless beauty of Kota Stone flooring – durable, elegant, and ideal for living rooms, bedrooms, and hallways." },
        { name: "Wall Cladding", type: "indoor", desc: "Enhance your interiors with rich natural textures. Kota Stone cladding adds depth and sophistication to every wall." },
        { name: "Kitchen Countertops", type: "indoor", desc: "Built for strength and style, Kota Stone countertops offer a heat-resistant and easy-to-maintain surface for modern kitchens." },
        { name: "Bathroom Tiles", type: "indoor", desc: "Slip-resistant and water-resistant, Kota Stone ensures both safety and elegance in wet areas." },
        { name: "Stair Treads", type: "indoor", desc: "Designed for durability and refined aesthetics, Kota Stone provides secure and stylish staircase solutions." },
    ],
    outdoor: [
        { name: "Patio & Deck Flooring", type: "outdoor", desc: "Create lasting outdoor impressions with Kota Stone's weather-resistant surface, perfect for patios and decks." },
        { name: "Garden Walkways", type: "outdoor", desc: "Add natural charm to your landscape with Kota Stone walkways — durable, non-slip, and beautifully textured." },
        { name: "Building Facades", type: "outdoor", desc: "Make a statement with architectural facades that combine strength and natural beauty for a timeless look." },
        { name: "Pool Surrounds", type: "outdoor", desc: "Non-slip and cool underfoot, Kota Stone is the ideal choice for pool decks and outdoor leisure areas." },
        { name: "Driveway Pavers", type: "outdoor", desc: "Built to handle heavy use with grace, Kota Stone pavers bring durability and elegance to driveways and entryways." },
    ]
};

// --- DATA FOR Project Scale Section ---
const scaleData = [
    { 
        title: "Residential Projects", 
        features: [
            "Homes, villas, apartments, and private estates",
            "Custom sizing available",
            "Installation support",
            "Design consultation"
        ] 
    },
    { 
        title: "Commercial Spaces", 
        features: [
            "Hotels, restaurants, offices, and retail spaces",
            "Bulk pricing",
            "Project management",
            "Technical support"
        ] 
    },
    { 
        title: "Institutional Works", 
        features: [
            "Schools, hospitals, government buildings",
            "Compliance certification",
            "Large volume supply",
            "Extended warranty"
        ] 
    }
];

// --- COLOR CONSTANTS ---
const DIVIDER_COLOR = '#E6E6E6'; 
const DARK_BROWN_COLOR = '#4D3E33'; 
const PRIMARY_ACCENT_COLOR = '#699484'; 
const PRIMARY_ACCENT_COLOR_DARK = '#4a6a5e'; 

// =========================================================================
//                             Utility function to generate image file name
// =========================================================================
const getImageUrl = (name) => {
    return name.replace(/[\s&]/g, '_') + '.png';
};

// =========================================================================
//                             Project Scale Card Component
// =========================================================================
const ScaleCard = ({ title, features }) => (
    <div className="ps-card">
        <h3 className="ps-card-title">{title}</h3>
        <ul className="ps-features-list">
            {features.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
        </ul>
        <button className="ps-button">
            View More <span className="ps-arrow">→</span>
        </button>
    </div>
);


// =========================================================================
//                             Endless Possibilities Component
// =========================================================================

const EndlessPossibilities = () => {
    // 1. STATE MANAGEMENT
    const [selectedIndoor, setSelectedIndoor] = useState(applicationData.indoor[0]);
    const [selectedOutdoor, setSelectedOutdoor] = useState(applicationData.outdoor[0]);

    // 2. REF MANAGEMENT for scrolling
    const indoorRef = useRef(null);
    const outdoorRef = useRef(null);

    // Helper component for the image cards (Feature Cards)
    const Card = ({ title, imageSrc, className, description }) => ( 
        <div className={`ep-card ${className}`}>
            <div className="ep-image-wrapper">
                <img 
                    src={imageSrc} 
                    alt={`${title} - ${description}`} 
                    className="ep-image" 
                    style={{backgroundColor: '#e0e0e0'}} 
                />
                
                <div className="image-reflection"></div> 
                
                <div className="ep-overlay">
                    <h3 className="ep-card-title">{title}</h3>
                    <p className="ep-card-desc">{description}</p> 
                    <button className="ep-button">
                        View More Projects 
                    </button>
                </div>
            </div>
        </div>
    );
    
    // Helper component for the application list sections
    const AppListSection = ({ data, className, selectedItem, setItem }) => {

        // Click handler function
        const handleListClick = (item) => {
            setItem(item);
            
            // --- SCROLL LOGIC ---
            const targetRef = item.type === 'indoor' ? indoorRef : outdoorRef;
            
            // Check if we are on a small screen (where reordering/scrolling is needed)
            if (window.innerWidth <= 1024 && targetRef.current) {
                targetRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start', // Scroll to align the top of the element to the top of the viewport
                });
            }
            // --- END SCROLL LOGIC ---
        };

        return (
            <div className={`ep-list-section-wrapper ${className}`}>
                <div className="ep-divider"></div>
                <ul className="ep-app-list"> 
                    {data.map((item, index) => {
                        const isSelected = selectedItem && selectedItem.name === item.name;

                        return (
                            <li 
                                key={index} 
                                className={`ep-list-item ${isSelected ? 'is-selected' : ''}`}
                                onClick={() => handleListClick(item)} 
                            >
                                <span className="ep-list-name">{item.name}</span>
                                <span className="ep-list-desc">{item.desc}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };
    
    // Helper Component for Headings (Ref is added here)
    const SectionHeading = ({ title, className, ref }) => (
        <h3 className={`ep-section-heading ${className}`} ref={ref}>{title}</h3>
    );


    return (
        <div className="ep-full-wrapper">
            {/* ----------------- Endless Possibilities Section ----------------- */}
            <div className="ep-section-wrapper">
                <div className="ep-container">
                    <h2 className="ep-main-heading">Endless Possibilities</h2>
                    <p className="ep-sub-heading">
                        From intimate interior spaces to grand architectural projects, Kota stone adapts <br/>
                        Beautifully to every application and environment.
                    </p>

                    <div className="ep-content-grid">
                        
                        {/* 1. INDOOR HEADING (Attached Ref for scrolling) */}
                        <SectionHeading 
                            title="Interior Applications" 
                            className="ep-indoor-heading" 
                            ref={indoorRef}
                        />

                        {/* 2. INDOOR CARD */}
                        <Card 
                            title={selectedIndoor.name} 
                            imageSrc={getImageUrl(selectedIndoor.name)} 
                            className="ep-indoor-card"
                            description={selectedIndoor.desc} 
                        />
                        
                        {/* 3. INDOOR LIST */}
                        <AppListSection
                            data={applicationData.indoor}
                            className="ep-indoor-list"
                            selectedItem={selectedIndoor}
                            setItem={setSelectedIndoor}
                        />

                        {/* 4. OUTDOOR HEADING (Attached Ref for scrolling) */}
                        <SectionHeading 
                            title="Exterior Applications" 
                            className="ep-outdoor-heading" 
                            ref={outdoorRef}
                        />
                        
                        {/* 5. OUTDOOR CARD */}
                        <Card 
                            title={selectedOutdoor.name}
                            imageSrc={getImageUrl(selectedOutdoor.name)} 
                            className="ep-outdoor-card"
                            description={selectedOutdoor.desc} 
                        />
                        
                        {/* 6. OUTDOOR LIST */}
                        <AppListSection
                            data={applicationData.outdoor}
                            className="ep-outdoor-list"
                            selectedItem={selectedOutdoor}
                            setItem={setSelectedOutdoor}
                        />
                    </div>
                </div>
            </div>
            
            {/* ----------------- Project Scale Section ----------------- */}
            <div className="project-scale-section">
                <div className="ep-container">
                    <h2 className="ps-main-heading">Perfect for Every Project Scale</h2>
                    <div className="ps-cards-grid">
                        {scaleData.map((data, index) => (
                            <ScaleCard key={index} title={data.title} features={data.features} />
                        ))}
                    </div>
                </div>
            </div>
            

            <style>{`
                /* --- CSS Variables (Updated for consistency with new dark color) --- */
                :root {
                    --primary-color: ${PRIMARY_ACCENT_COLOR}; 
                    --primary-color-dark: ${PRIMARY_ACCENT_COLOR_DARK}; 
                    --heading-color: ${DARK_BROWN_COLOR}; 
                    --secondary-color: #2b463c; 
                    --dark-text: #333;
                    --light-text: #777;
                    --shadow-low: 0 1px 8px rgba(0, 0, 0, 0.05);
                    --shadow-high: 0 10px 20px rgba(0, 0, 0, 0.1);
                }
                
                /* Reflection Animation Keyframes */
                @keyframes shine-sweep {
                    0% {
                        transform: skewX(-20deg) translateX(-150%);
                    }
                    100% {
                        transform: skewX(-20deg) translateX(250%);
                    }
                }

                /* Combined Wrapper for overall section */
                .ep-full-wrapper {
                    width: 100%;
                    font-family: 'Inter', sans-serif; 
                }

                /* Ensure all key text elements inherit or use Inter explicitly */
                h2, h3, p, li, button, span {
                    font-family: 'Inter', sans-serif; 
                }
                
                /* Global Container for 10% Margin */
                .ep-container {
                    width: 80%; 
                    max-width: 1300px; 
                    margin: 0 auto;
                    text-align: center;
                }
                
                /* Endless Possibilities Section Styles */
                .ep-section-wrapper {
                    background: #fff;
                    padding: 80px 0; 
                    box-sizing: border-box;
                }
                
                .ep-main-heading {
                    font-size: 38px;
                    font-weight: 700; 
                    color:#437061; 
                    margin-bottom: 8px;
                }
                
                .ep-sub-heading {
                    font-size: 16px;
                    color: #777;
                    margin-bottom: 60px;
                    line-height: 1.5;
                }
                
                /* Default (Large Screen) Layout: Two columns 60%/40% */
                .ep-content-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr; 
                    gap: 60px;
                    text-align: left;
                    align-items: stretch; 
                    
                    /* Large screen order: List -> Card in two columns (Headings sit above lists) */
                    grid-template-areas: 
                        "indoor-heading ."
                        "indoor-list indoor-card"
                        "outdoor-heading ."
                        "outdoor-list outdoor-card";
                }
                
                /* Assign areas */
                .ep-indoor-heading { grid-area: indoor-heading; margin-bottom: 10px;}
                .ep-outdoor-heading { grid-area: outdoor-heading; margin-bottom: 10px; margin-top: 30px;} /* Add top margin for separation */

                .ep-indoor-list { grid-area: indoor-list; }
                .ep-indoor-card { grid-area: indoor-card; }
                .ep-outdoor-list { grid-area: outdoor-list; }
                .ep-outdoor-card { grid-area: outdoor-card; }
                
                .ep-indoor-list, .ep-outdoor-list {
                    padding-right: 20px;
                    justify-content: flex-start; 
                }
                
                .ep-outdoor-list {
                    margin-top: 0; 
                }
                
                .ep-list-section-wrapper {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 0; 
                }
                
                .ep-section-heading {
                    font-size: 18px;
                    font-weight: 600;
                    color: var(--heading-color); 
                    margin-bottom: 10px;
                    margin-top: 0; 
                }
                
                .ep-divider {
                    height: 1px;
                    background-color: ${DIVIDER_COLOR}; 
                    margin-bottom: 25px;
                    width: 100%;
                }
                
                .ep-list-section-wrapper ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .ep-app-list {
                    display: block; /* Default for large screens (not flex) */
                }
                
                .ep-list-item {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 15px; 
                    padding-left: 15px;
                    position: relative;
                    cursor: pointer; 
                    transition: background-color 0.2s, color 0.2s, transform 0.3s, order 0.3s ease; 
                    padding: 8px 15px 8px 15px; 
                    margin-left: -15px; 
                    border-radius: 5px;
                    order: initial; 
                }
                
                .ep-list-item:hover {
                    background-color: #f5fcf9; 
                    transform: translateX(5px); 
                }
                
                .ep-list-item.is-selected {
                    padding-left: 15px; 
                }

                .ep-list-item::before {
                    content: '•';
                    color: var(--primary-color); 
                    font-size: 20px;
                    position: absolute;
                    left: 0;
                    top: 50%; 
                    transform: translateY(-50%);
                    line-height: 1;
                }
                
                .ep-list-name {
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--heading-color); 
                    line-height: 1.2;
                    margin-bottom: 2px;
                }

                .ep-list-item.is-selected .ep-list-name {
                    color: var(--primary-color-dark); 
                }
                
                .ep-list-desc {
                    font-size: 14px;
                    color: #777;
                }
                
                /* Card Styling */
                .ep-card {
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: var(--shadow-low);
                    flex: 1; 
                    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.6s ease;
                    transform-style: preserve-3d;
                    transform: translateZ(0);
                }

                /* 3D Hover Effect */
                .ep-card:hover {
                    transform: translateY(-8px) rotateY(1deg) translateZ(10px); 
                    box-shadow: var(--shadow-high); 
                }
                
                .ep-indoor-card, .ep-outdoor-card {
                    min-height: 224px;
                }
                
                /* Image Wrapper: CRITICAL for reflection containment */
                .ep-image-wrapper {
                    position: relative;
                    width: 100%;
                    height: 100%; 
                    overflow: hidden; 
                }
                
                .ep-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; 
                }
                
                /* Reflection Element Styling */
                .image-reflection {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50%; 
                    height: 100%;
                    background: linear-gradient(
                        to right, 
                        rgba(255, 255, 255, 0) 0%, 
                        rgba(255, 255, 255, 0.4) 50%, 
                        rgba(255, 255, 255, 0) 100%
                    );
                    z-index: 10; 
                    opacity: 0; 
                    pointer-events: none; 
                    transform: skewX(-20deg) translateX(-150%);
                    transition: opacity 0.3s ease;
                }

                /* Activate the animation on card hover */
                .ep-card:hover .image-reflection {
                    opacity: 1;
                    animation: shine-sweep 1.2s ease-in-out forwards; 
                }
                
                .ep-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 20px; 
                    color: white;
                    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
                    border-radius: 0 0 15px 15px;
                    z-index: 15; 
                }
                
                .ep-card-title {
                    font-size: 20px; 
                    font-weight: 700;
                    margin: 0 0 5px 0;
                    color: white; 
                }
                
                .ep-card-desc {
                    font-size: 12px; 
                    font-weight: 300;
                    margin: 0 0 10px 0; 
                }
                
                .ep-button {
                    background: white;
                    color: var(--primary-color-dark); 
                    padding: 8px 16px; 
                    border: none;
                    border-radius: 5px;
                    font-size: 12px; 
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s;
                }
                
                .ep-button:hover {
                    background: var(--primary-color);
                    color: white;
                }

                /* ----------------- Project Scale Section Styles ----------------- */
                .project-scale-section {
                    background: #f8f8f8; 
                    padding: 80px 0; 
                    box-sizing: border-box;
                    text-align: center;
                }

                .ps-main-heading {
                    font-size: 28px;
                    font-weight: 700;
                    color: var(--heading-color); 
                    margin-bottom: 40px;
                }

                .ps-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    text-align: left;
                    align-items: stretch; 
                }

                .ps-card {
                    background-color: var(--primary-color); 
                    border-radius: 10px;
                    padding: 35px;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between; 
                    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
                    min-height: 250px; 
                    
                    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.3s, box-shadow 0.6s ease;
                    transform-style: preserve-3d;
                    transform: translateZ(0); 
                }

                .ps-card:hover {
                    background-color: var(--primary-color-dark); 
                    transform: translateY(0) translateZ(0); 
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3); 
                }

                .ps-card-title {
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 15px;
                    color: white; 
                }

                .ps-features-list {
                    list-style: none;
                    padding: 0;
                    margin-bottom: 30px;
                }

                .ps-features-list li {
                    font-size: 14px;
                    color: #E6EFEA; 
                    line-height: 1.6;
                    margin-bottom: 5px;
                    padding-left: 15px;
                    position: relative;
                }

                .ps-features-list li::before {
                    content: '•';
                    color: white; 
                    font-size: 16px;
                    position: absolute;
                    left: 0;
                    top: 0;
                }

                .ps-button {
                    background: white;
                    color: var(--primary-color); 
                    padding: 12px 20px;
                    border: none;
                    border-radius: 5px;
                    font-size: 14px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s;
                    text-align: center;
                    width: 100%;
                    margin-top: auto; 
                }

                .ps-button:hover {
                    background: #e0e0e0;
                    color: var(--primary-color-dark);
                }

                .ps-arrow {
                    margin-left: 8px;
                    font-weight: 700;
                }
                
                /* Responsive Adjustments for Small Screens */
                @media (max-width: 1024px) {
                    /* Global: Set 5vw padding for 5% left/right margin on mobile (UPDATED) */
                    .ep-container {
                        width: 100%;
                        padding: 0 5vw; 
                        box-sizing: border-box;
                    }

                    .ep-section-wrapper {
                        padding: 50px 0; 
                    }
                    
                    /* ---------------------------------------------------- */
                    /* 1. OVERALL REORDERING: Heading -> Card -> List */
                    /* ---------------------------------------------------- */

                    .ep-content-grid {
                        grid-template-columns: 1fr; 
                        gap: 30px; 
                        
                        /* NEW ORDER: Heading -> Card -> List -> Heading -> Card -> List */
                        grid-template-areas: 
                            "indoor-heading"
                            "indoor-card"
                            "indoor-list"
                            "outdoor-heading"
                            "outdoor-card"
                            "outdoor-list";
                    }
                    
                    /* Adjust heading margin for mobile */
                    .ep-indoor-heading { margin-bottom: 15px; }
                    .ep-outdoor-heading { margin-bottom: 15px; margin-top: 30px;}
                    
                    /* ---------------------------------------------------- */
                    /* 2. SELECTED ITEM TO TOP OF LIST (Using Flex Order) */
                    /* ---------------------------------------------------- */
                    
                    .ep-app-list {
                        display: flex; 
                        flex-direction: column;
                    }
                    
                    .ep-list-item.is-selected {
                        order: -1; 
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
                    }
                    
                    .ep-list-item {
                        order: 0; 
                    }
                    
                    /* Disable 3D lift/shadows on small screens */
                    .ep-card:hover, .ps-card:hover {
                        transform: translateY(0) translateZ(0); 
                        box-shadow: var(--shadow-low);
                    }

                    /* Disable reflection animation on small screens */
                    .ep-card:hover .image-reflection {
                        animation: none;
                        opacity: 0;
                    }

                    .ep-indoor-card, .ep-outdoor-card {
                        min-height: 200px; 
                    }
                    
                    /* Project Scale Section */
                    .ps-cards-grid {
                        grid-template-columns: 1fr; 
                        gap: 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default EndlessPossibilities;