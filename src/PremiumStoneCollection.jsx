import React from 'react';

// --- DATA FOR Stone Product Cards ---
const stoneProducts = [
    {
        image: '1.png', // Replaced image
        title: 'Herringbone Pattern',
        description: 'Premium quality with natural greenish-blue hue, perfect for both interior and exterior use.',
        sizes: 'Available in 12"x12", 18"x18", 24"x24"',
        thickness: '15-20mm',
        finish: 'Polished, Honed, Natural',
        isPopular: true,
    },
    {
       image: '2.png', // Replaced image
       title: 'Random Slab Pattern',
        description: 'Rich brown texture with excellent durability and slip-resistant surface.',
        sizes: 'Available in 12"x12", 16"x16", 20"x20"',
        thickness: '15-25mm',
        finish: 'Natural, Brushed, Polished',
        isPopular: false,
    },
    {
        image: '3.png', // Replaced image
        title: 'Circular Design Pattern',
        description: 'Classic red sandstone with fine texture and excellent weather resistance.',
        sizes: 'Available in custom sizes',
        thickness: '20-50mm',
        finish: 'Natural, Polished, Antique',
        isPopular: false,
    },
    {
       image: '4.png', // Replaced image
       title: 'Diamond Cut Kota',
        description: 'Premium polished finish with mirror-like surface and enhanced durability.',
        sizes: 'Available in 12"x12", 16"x16", 18"x18"',
        thickness: '18-25mm',
        finish: 'High Gloss Polish',
        isPopular: true,
    },
];

// Component accepts the 'id' prop for smooth scrolling (target for /#collection)
const PremiumStoneCollection = ({ id }) => {
    // Helper component for the arrow icon
    const ArrowIcon = () => (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="12 5 19 12 12 19"></polyline>
            <line x1="19" y1="12" x2="5" y2="12"></line>
        </svg>
    );

    // Helper component for individual product cards
    const ProductCard = ({ product }) => (
        <div className="psc-card">
            <div className="psc-card-image-wrapper">
                {/* NOTE: Image source assumes images are in the /public folder or resolved correctly */}
                <img src={product.image} alt={product.title} className="psc-card-image" />
                {product.isPopular && <span className="psc-popular-tag">Most Popular</span>}
            </div>
            <div className="psc-card-content">
                <h3 className="psc-card-title">{product.title}</h3>
                <p className="psc-card-description">{product.description}</p>
                <div className="psc-card-details">
                    {/* >>> START: UPDATED with inline CSS for 20px font size <<< */}
                    <p style={{ fontSize: '15px' }}>
                        <strong style={{ fontSize: '15px' }}>Sizes:</strong> {product.sizes}
                    </p>
                    <p style={{ fontSize: '15px' }}>
                        <strong style={{ fontSize: '15px' }}>Thickness:</strong> {product.thickness}
                    </p>
                    <p style={{ fontSize: '15px' }}>
                        <strong style={{ fontSize: '15px' }}>Finish:</strong> {product.finish}
                    </p>
                    {/* >>> END: UPDATED with inline CSS for 20px font size <<< */}
                </div>
                <div className="psc-card-actions">
                    <button className="psc-button-primary">
                        Request Sample <ArrowIcon />
                    </button>
                    <button className="psc-button-secondary">
                        Get Quote
                    </button>
                </div>
            </div>
        </div>
    );
    
    // --- FUNCTIONALITY: Mailto Handler for Custom Requirements ---
    const handleDiscussCustomRequirements = () => {
        const emailAddress = 'sawlastoneindustries@gmail.com';
        const subject = 'Inquiry: Custom Stone Specifications';
        const body = 'Hello,\n\nI am interested in discussing custom cutting, finishing, or sizing for a stone project. Please contact me to discuss my specific requirements.\n\nThank you.';
        
        // Construct the mailto link, encoding the subject and body
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open the user's default email client
        window.location.href = mailtoLink;
    };
    // -----------------------------------------------------------

    return (
        // --- CRITICAL UPDATE: Apply the id prop to the root element ---
        <div id={id} className="psc-section-wrapper">
            <div className="psc-container">
                <h2 className="psc-main-heading">Premium Stone Collection</h2>
                <p className="psc-sub-heading">
                    Explore our extensive range of authentic Kota stones, each carefully selected for <br/>
                    superior quality, durability, and natural beauty.
                </p>

                <div className="psc-products-grid">
                    {stoneProducts.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>

                {/* Custom Specifications Section */}
                <div className="psc-custom-specs">
                    <p className="psc-custom-specs-title">Need Custom Specifications?</p>
                    <p className="psc-custom-specs-description">
                        We offer custom cutting, finishing, and sizing services to meet your specific project<br/>
                        requirements. Contact our experts for personalized solutions.
                    </p>
                    <button 
                        className="psc-custom-specs-button"
                        onClick={handleDiscussCustomRequirements} // Attach the click handler
                    >
                        Discuss Custom Requirements
                    </button>
                </div>
            </div>

            <style>{`
                /* Base Styles & Font */
                .psc-section-wrapper {
                    background-color: #f9f9f9;
                    padding: 80px 0; /* Vertical padding kept, horizontal removed */
                    box-sizing: border-box;
                    /* UPDATED: Set font to Inter */
                    font-family: 'Inter', sans-serif; 
                    min-height: 100vh; /* Ensure it's tall enough to scroll to */
                }

                /* Ensure all key text elements inherit or use Inter explicitly */
                .psc-section-wrapper h2, 
                .psc-section-wrapper h3, 
                .psc-section-wrapper p, 
                .psc-section-wrapper strong,
                .psc-section-wrapper button,
                .psc-section-wrapper span {
                    font-family: 'Inter', sans-serif; 
                }

                /* Container for 10% Left/Right Margin */
                .psc-container {
                    /* UPDATED: Set width to 80% for 10% margins */
                    width: 80%; 
                    max-width: 1200px;
                    /* UPDATED: Center the container */
                    margin: 0 auto;
                    text-align: center;
                }

                .psc-main-heading {
                    font-size: 38px;
                    font-weight: 600;
                    color: #437061;
                    margin-bottom: 8px;
                }

                .psc-sub-heading {
                    font-size: 16px;
                    color: #777;
                    margin-bottom: 60px;
                    line-height: 1.5;
                }

                .psc-products-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr); /* Two columns */
                    gap: 40px; /* Space between cards */
                    margin-bottom: 80px; /* Space above custom specs section */
                }

                .psc-card {
                    background-color: #ffffff;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
                    display: flex;
                    flex-direction: column;
                    /* Add slight scale on hover for better interaction */
                    transition: transform 0.3s ease;
                }
                
                .psc-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
                }


                .psc-card-image-wrapper {
                    position: relative;
                    width: 100%;
                    padding-bottom: 60%; 
                    overflow: hidden;
                }

                .psc-card-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    /* Add transition to image too */
                    transition: transform 0.4s ease;
                }

                /* --- O-IMAGE / REFLECTION EFFECT STYLES START --- */
                .psc-card-image-wrapper::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none; /* Allows clicks to pass through */
                    
                    /* The reflection gradient */
                    background: linear-gradient(
                        90deg, 
                        rgba(255, 255, 255, 0) 0%, 
                        rgba(255, 255, 255, 0.3) 50%, 
                        rgba(255, 255, 255, 0) 100%
                    );
                    
                    /* Initial position (off-screen to the left) */
                    transform: translateX(-100%) skewX(-20deg);
                    opacity: 0;
                    
                    /* Transition for the effect */
                    transition: transform 0.7s ease, opacity 0.7s ease;
                    z-index: 5; /* Ensure reflection is above image but below tag */
                }

                /* Active state on card hover */
                .psc-card:hover .psc-card-image-wrapper::after {
                    /* Final position (off-screen to the right) */
                    transform: translateX(200%) skewX(-20deg);
                    opacity: 1;
                }
                
                /* Optional: Slightly zoom the image on hover */
                .psc-card:hover .psc-card-image {
                    transform: scale(1.05);
                }
                /* --- O-IMAGE / REFLECTION EFFECT STYLES END --- */


                .psc-popular-tag {
                    position: absolute;
                    top: 20px;
                    left: 0;
                    background-color: #55756C; /* Green tag color */
                    color: white;
                    padding: 8px 15px;
                    font-size: 13px;
                    font-weight: 600;
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                    z-index: 10; /* Ensure tag is above reflection */
                }

                .psc-card-content {
                    padding: 30px;
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1; 
                }

                .psc-card-title {
                    font-size: 24px;
                    font-weight: 600;
                    color: #4D3E33;
                    margin-bottom: 10px;
                }

                .psc-card-description {
                    font-size: 15px;
                    color: #666;
                    line-height: 1.5;
                    margin-bottom: 20px;
                }

                .psc-card-details {
                    /* REMOVED font-size rule here, as it is now set via inline styles. */
                    color: #555;
                    line-height: 1.6;
                    margin-bottom: 30px;
                }

                .psc-card-details strong {
                    font-weight: 600;
                    color: #333;
                    /* REMOVED font-size rule here, as it is now set via inline styles. */
                }

                .psc-card-actions {
                    display: flex;
                    gap: 15px;
                    margin-top: auto; 
                }

                .psc-button-primary,
                .psc-button-secondary {
                    padding: 12px 20px;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .psc-button-primary {
                    background-color: #55756C; 
                    color: white;
                    border: 1px solid #55756C;
                }

                .psc-button-primary:hover {
                    background-color: #456057;
                    border-color: #456057;
                }
                
                .psc-button-primary svg {
                    margin-left: 8px;
                    width: 16px;
                    height: 16px;
                    stroke: white;
                }

                .psc-button-secondary {
                    background-color: transparent;
                    color: #55756C;
                    border: 1px solid #55756C;
                }

                .psc-button-secondary:hover {
                    background-color: #f0f5f3;
                }
                
                /* Custom Specifications Section */
                .psc-custom-specs {
                    background-color: #55756C;
                    padding: 50px 30px;
                    border-radius: 12px;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .psc-custom-specs-title {
                    font-size: 28px;
                    font-weight: 600;
                    margin-bottom: 15px;
                }

                .psc-custom-specs-description {
                    font-size: 16px;
                    line-height: 1.5;
                    margin-bottom: 30px;
                    max-width: 700px;
                    text-align: center;
                }

                .psc-custom-specs-button {
                    background-color: white;
                    color: #55756C;
                    padding: 15px 30px;
                    border: none;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .psc-custom-specs-button:hover {
                    background-color: #f0f0f0;
                }

                /* Responsive Adjustments */
                @media (max-width: 1024px) {
                    /* Remove 10% margin on small screens and add padding */
                    .psc-container {
                        width: 100%;
                        padding: 0 4vw; 
                        box-sizing: border-box;
                    }
                    .psc-products-grid {
                        grid-template-columns: 1fr; 
                        gap: 30px;
                    }
                    .psc-main-heading {
                        font-size: 32px;
                    }
                    .psc-sub-heading {
                        margin-bottom: 40px;
                    }
                    .psc-custom-specs {
                        padding: 40px 20px;
                    }
                    .psc-custom-specs-title {
                        font-size: 24px;
                    }
                    .psc-custom-specs-description {
                        font-size: 15px;
                    }
                    .psc-custom-specs-button {
                        font-size: 15px;
                        padding: 12px 25px;
                    }
                }

                @media (max-width: 768px) {
                    .psc-section-wrapper {
                        padding: 60px 0; /* Vertical padding only */
                    }
                    .psc-main-heading {
                        font-size: 28px;
                    }
                    .psc-sub-heading {
                        font-size: 14px;
                    }
                    .psc-card-title {
                        font-size: 20px;
                    }
                    .psc-card-description {
                        font-size: 18px;
                    }
                    /* .psc-card-details no font size change - using inline style */
                    .psc-card-actions {
                        flex-direction: column; 
                        gap: 10px;
                    }
                    .psc-button-primary, .psc-button-secondary {
                        width: 100%;
                    }
                    .psc-custom-specs-title {
                        font-size: 20px;
                    }
                    .psc-custom-specs-description {
                        font-size: 14px;
                    }
                }

                @media (max-width: 480px) {
                    .psc-section-wrapper {
                        padding: 40px 0;
                    }
                    .psc-main-heading {
                        font-size: 24px;
                    }
                    .psc-sub-heading {
                        margin-bottom: 30px;
                    }
                    .psc-card-content {
                        padding: 20px;
                    }
                    .psc-card-image-wrapper {
                        padding-bottom: 70%; 
                    }
                    .psc-popular-tag {
                        padding: 6px 10px;
                        font-size: 12px;
                    }
                }
            `}</style>
        </div>
    );
};

export default PremiumStoneCollection;