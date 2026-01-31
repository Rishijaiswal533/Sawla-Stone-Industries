import React, { useState } from 'react';

// --- DATA FOR PROJECT CAROUSEL (Derived from the 3 screenshots) ---
const projectData = [
    {
        client: 'Ar. Mehul Shah, Interior Designer',
        heading: 'Have A Space In Mind? Let\'s Bring It To Life',
        subheading: 'We\'re Here To Help You Choose The Perfect Kota Stone For Your Next Project.',
        quote: '"They perfectly understood our vision and delivered Kota Stone that enhanced both beauty and durability in every corner of our project."',
        projectTitle: 'Residential Villa Project, Ahmedabad',
        projectDetails: 'Featuring Kota Stone Blue Flooring And Wall Cladding With Semi-Polished Finish.',
        backgroundColor: '#ffffff', // First card background is white
        headingColor: '#55756C', // Green heading color
        isSmallHeading: false,
    },
    {
        client: 'K. Patel, Real Estate Developer',
        heading: 'Have A Project Or Just Want To Chat About Your Idea?',
        subheading: '', // No specific subheading in the image
        quote: '"The quality of Kota Stone from Sawla Stone Industries is unmatched. It\'s been over five years, and the finish still looks as new as day one."',
        projectTitle: 'Luxury Apartment Project, Jaipur',
        projectDetails: 'Kota Stone Brown Used For Staircases, Flooring, And Outdoor Paving.',
        backgroundColor: '#EAEAEA', // Light grey background
        headingColor: '#333333',
        isSmallHeading: true,
    },
    {
        client: 'Amit Construction Co.',
        heading: 'Have A Project Or Just Want To Chat About Your Idea?',
        subheading: '', // No specific subheading in the image
        quote: '"Strong, elegant, and reliable — Sawla Stone\'s quality speaks for itself. Our clients love the finish."',
        projectTitle: 'Resort Project, Kota',
        projectDetails: 'Leather Finish Kota Stone For Outdoor Decks And Pool Surrounds.',
        backgroundColor: '#EAEAEA', // Light grey background
        headingColor: '#333333',
        isSmallHeading: true,
    },
];

const ProjectIdeaCallout = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
    };

    const currentProject = projectData[currentImageIndex];

    return (
        <div 
            className="pjc-section-wrapper" 
            // Dynamic background color from data
            style={{ backgroundColor: currentProject.backgroundColor }}
        >
            <div className="pjc-container">
                {/* Left Section: Testimonial & Image Card - Now using CSS grid-order */}
                <div className="pjc-left-content">
                    <p className="pjc-client-info">{currentProject.client}</p>
                    
                    <div className="pjc-card-stack">
                        {/* The placeholder cards from the original design */}
                        <div className="pjc-card-stack-item pjc-card-bg-light"></div>
                        <div className="pjc-card-stack-item pjc-card-bg-medium"></div>
                        
                        {/* Main Card - We'll use a placeholder for the image area */}
                        <div className="pjc-card-stack-item pjc-card-main">
                            {/* NOTE: If you have dynamic images for the project itself, 
                                you would add an <img> tag here. For now, we keep the gray square look.
                            */}
                        </div>
                    </div>
                    
                    <p className="pjc-quote">
                        {currentProject.quote}
                    </p>
                    
                    <div className="pjc-pagination-dots">
                        {projectData.map((_, index) => (
                            <span 
                                key={index}
                                className={`pjc-dot ${index === currentImageIndex ? 'pjc-dot-active' : ''}`}
                                onClick={() => handleDotClick(index)}
                                // Dot color based on current card's style
                                style={{ 
                                    backgroundColor: index === currentImageIndex ? '#555' : '#ccc', 
                                }}
                            ></span>
                        ))}
                    </div>
                </div>

                {/* Right Section: Headline and Description - Now using CSS grid-order */}
                <div className="pjc-right-content">
                    {/* Main Headline */}
                    <h2 
                        className="pjc-main-heading"
                        style={{ color: currentProject.headingColor }}
                    >
                        {currentProject.heading}
                    </h2>
                    
                    {/* Subheading/Call-to-Action */}
                    {currentProject.subheading && (
                        <p 
                            className="pjc-sub-heading" 
                            style={{ color: currentProject.headingColor }}
                        >
                            {currentProject.subheading}
                        </p>
                    )}
                    
                    {/* Separator for Project Details */}
                    {currentProject.isSmallHeading && (
                        <>
                            <p className="pjc-project-title-small">{currentProject.projectTitle}</p>
                            <p className="pjc-project-details-small">
                                {currentProject.projectDetails}
                            </p>
                        </>
                    )}
                    
                    {/* Project Details for the first card (larger style) */}
                    {!currentProject.isSmallHeading && (
                        <>
                            <p className="pjc-project-title-large">
                                {currentProject.projectTitle}
                            </p>
                            <p className="pjc-project-details-large">
                                {currentProject.projectDetails}
                            </p>
                        </>
                    )}
                </div>
            </div>

            <style>{`
                /* Base Styles & Font */
                .pjc-section-wrapper {
                    padding: 100px 0; /* Remove horizontal padding from wrapper */
                    box-sizing: border-box;
                    font-family: 'Inter', sans-serif; /* Using a modern font */
                    transition: background-color 0.5s ease; /* Smooth background transition */
                }

                /* Container for 10% Left/Right Margin */
                .pjc-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 10%; /* Apply 10% padding to the container */
                    box-sizing: border-box;
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 60px;
                    align-items: flex-start;
                    text-align: left; /* Ensure main content aligns left */
                }

                /* Left Section Styles */
                .pjc-left-content {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .pjc-client-info {
                    font-size: 16px;
                    color: #555;
                    margin-bottom: 30px;
                }

                .pjc-card-stack {
                    position: relative;
                    width: 150px;
                    height: 180px;
                    margin-bottom: 40px;
                }

                .pjc-card-stack-item {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 12px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                }

                /* Card colors matching the grey style in the image */
                .pjc-card-bg-light {
                    background-color: #B0A096; /* Light brown/taupe */
                    top: -10px;
                    left: 10px;
                    z-index: 1;
                    transform: rotate(5deg);
                }

                .pjc-card-bg-medium {
                    background-color: #9A8778; /* Medium brown/taupe */
                    top: -5px;
                    left: 5px;
                    z-index: 2;
                    transform: rotate(2.5deg);
                }

                .pjc-card-main {
                    /* Main card is the prominent grey color */
                    background-color: #777777; 
                    top: 0;
                    left: 0;
                    z-index: 3;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
                }
                
                .pjc-quote {
                    font-size: 18px;
                    line-height: 1.6;
                    color: #333;
                    font-weight: 500;
                    margin-bottom: 30px;
                }

                .pjc-pagination-dots {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                }

                .pjc-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background-color: #ccc;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .pjc-dot-active {
                    width: 20px;
                    height: 7px;
                    border-radius: 4px;
                    background-color: #888;
                }

                /* Right Section Styles */
                .pjc-right-content {
                    padding-top: 10px;
                }

                /* Primary Heading Style (First Card) */
                .pjc-main-heading {
                    font-size: 44px;
                    font-weight: 600;
                    line-height: 1.2;
                    margin-bottom: 10px;
                    transition: color 0.5s ease;
                }
                
                /* Subheading/Call-to-Action Style (First Card) */
                .pjc-sub-heading {
                    font-size: 20px;
                    line-height: 1.5;
                    font-weight: 500;
                    margin-bottom: 50px;
                    transition: color 0.5s ease;
                }

                /* Project Title Large (First Card) */
                .pjc-project-title-large {
                    font-size: 20px;
                    font-weight: 600;
                    color: #555;
                    margin-bottom: 10px;
                }

                /* Project Details Large (First Card) */
                .pjc-project-details-large {
                    font-size: 16px;
                    color: #666;
                    line-height: 1.5;
                }
                
                /* Project Title Small (Second/Third Card) */
                .pjc-project-title-small {
                    font-size: 18px;
                    font-weight: 600;
                    color: #333;
                    margin-bottom: 8px;
                }

                /* Project Details Small (Second/Third Card) */
                .pjc-project-details-small {
                    font-size: 15px;
                    color: #555;
                    line-height: 1.4;
                    max-width: 450px;
                }


                /* Responsive Adjustments */
                @media (max-width: 1024px) {
                    .pjc-container {
                        grid-template-columns: 1fr;
                        gap: 50px;
                        padding: 0 5%; /* Adjust padding on smaller screens */
                        /* Key Change: Set Right content to order 1, Left content to order 2 */
                        display: flex; /* Change to flex for order property to work reliably */
                        flex-direction: column;
                    }
                    
                    /* NEW: Force the Right Content (Headline) to appear first */
                    .pjc-right-content {
                        order: 1; 
                        text-align: center; /* Center right content on small screens */
                        padding-top: 0;
                    }

                    /* NEW: Force the Left Content (Testimonial/Image) to appear second */
                    .pjc-left-content {
                        order: 2; 
                        align-items: center; /* Center content on small screens */
                    }

                    .pjc-quote {
                        text-align: center;
                    }
                    
                    .pjc-main-heading {
                        font-size: 38px;
                    }
                    .pjc-sub-heading {
                        font-size: 18px;
                    }
                }

                @media (max-width: 768px) {
                    .pjc-section-wrapper {
                        padding: 80px 0;
                    }
                    .pjc-main-heading {
                        font-size: 32px;
                    }
                    .pjc-quote {
                        font-size: 16px;
                    }
                    .pjc-sub-heading {
                        font-size: 16px;
                        margin-bottom: 30px;
                    }
                }

                @media (max-width: 480px) {
                    .pjc-section-wrapper {
                        padding: 60px 0;
                    }
                    .pjc-main-heading {
                        font-size: 28px;
                    }
                    .pjc-container {
                        padding: 0 4%;
                    }
                    .pjc-client-info {
                        font-size: 14px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProjectIdeaCallout;