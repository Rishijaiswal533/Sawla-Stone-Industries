import React from "react";

const StoneworkShowcase = () => {
  return (
    <div style={styles.container} className="stonework-container">
      {/* DESKTOP SECTION (Only visible above 1024px) */}
      <div style={styles.leftSection} className="desktop-only-section">
        <h2 style={styles.title}>
          The Art of <br /> Stonework
        </h2>
        <p style={styles.subtitle}>
          Showcasing elegant designs and refined craftsmanship with our exclusive Kota Stone collection.
        </p>

        <div style={styles.leftImages}>
          <img src="i1.jpg" alt="Interior Showcase 1" style={styles.leftImage} className="image-hover-effect" />
          <img src="i2.jpg" alt="Interior Showcase 2" style={styles.leftImage} className="image-hover-effect" />
        </div>
      </div>

      <div style={styles.rightSection} className="desktop-only-section">
        <div style={styles.columnWide}>
          <img src="i3.jpg" alt="Room View 1" style={styles.rightImageCenterTall} className="image-hover-effect" />
          <img src="i4.jpg" alt="Room View 4" style={styles.rightImageLarge} className="image-hover-effect" />
        </div>

        <div style={styles.column}>
          <img src="i5.jpg" alt="Room View 2" style={styles.rightImageSmall} className="image-hover-effect" />
          <img src="i6.jpg" alt="Room View 3" style={styles.rightImageSmall} className="image-hover-effect" />
          <img src="i7.jpg" alt="Room View 5" style={styles.rightImageSmall} className="image-hover-effect" />
        </div>
      </div>

      {/* MOBILE & TABLET VERSION (Visible up to 1024px) */}
      <div className="mobile-tablet-version">
        <div className="mobile-text">
          <span className="mobile-badge">Exclusive Collection</span>
          <h2>The Art of <br /> Stonework</h2>
          <div className="title-underline"></div>
          <p>
            Showcasing elegant designs and refined craftsmanship with our exclusive Kota Stone collection.
          </p>
        </div>

        <div className="mobile-gallery">
          <img src="i1.jpg" alt="Stonework 1" className="image-hover-effect item-tall" />
          <img src="i2.jpg" alt="Stonework 2" className="image-hover-effect" />
          <img src="i3.jpg" alt="Stonework 3" className="image-hover-effect" />
          <img src="i4.jpg" alt="Stonework 4" className="image-hover-effect item-tall" />
          <img src="i5.jpg" alt="Stonework 5" className="image-hover-effect" />
          <img src="i6.jpg" alt="Stonework 6" className="image-hover-effect" />
          <img src="i7.jpg" alt="Stonework 7" className="last-image image-hover-effect" />
        </div>
      </div>

      <style>{`
        .image-hover-effect {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
          cursor: pointer;
        }

        .image-hover-effect:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        /* Default: Hide mobile/tablet version on desktop */
        .mobile-tablet-version {
          display: none;
        }

        /* ======== MOBILE & TABLET STYLES (Up to 1024px) ======== */
        @media (max-width: 1024px) {
          .desktop-only-section {
            display: none !important;
          }

          .stonework-container {
            padding: 40px 20px !important;
            background: linear-gradient(to bottom, #ffffff, #f9fbf9);
            justify-content: center !important;
          }

          .mobile-tablet-version {
            display: flex !important;
            flex-direction: column;
            width: 100%;
            max-width: 700px; /* Limits width on tablets so it doesn't get too wide */
            margin: 0 auto;
          }

          .mobile-text {
            text-align: center;
            margin-bottom: 40px;
          }

          .mobile-badge {
            display: inline-block;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 10px;
            color: #2f5d47;
            font-weight: 800;
            margin-bottom: 8px;
            opacity: 0.7;
          }

          .mobile-text h2 {
            font-size: clamp(32px, 5vw, 42px);
            color: #1a3a2a;
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 15px;
          }

          .title-underline {
            width: 50px;
            height: 3px;
            background-color: #2f5d47;
            margin: 0 auto 20px auto;
          }

          .mobile-text p {
            font-size: 16px;
            color: #666;
            line-height: 1.6;
            max-width: 450px;
            margin: 0 auto;
          }

          .mobile-gallery {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: minmax(150px, auto);
            gap: 15px;
          }
          
          .mobile-gallery img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
          }

          .item-tall {
            grid-row: span 2;
          }

          .mobile-gallery img.last-image {
            grid-column: span 2;
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "25px", 
    padding: "80px 5%",
    backgroundColor: "#fff",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, Arial, sans-serif",
  },
  leftSection: {
    flex: "1 1 340px",
    maxWidth: "380px",
  },
  title: {
    fontSize: "42px",
    color: "#2f5d47",
    fontWeight: "700",
    lineHeight: "1.3",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.7",
    marginBottom: "40px",
  },
  leftImages: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  leftImage: {
    width: "100%",
    height: "182px",
    borderRadius: "14px",
    objectFit: "cover",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
  },
  rightSection: {
    flex: "2 1 700px",
    display: "grid",
    gridTemplateColumns: "1.8fr 1fr",
    alignItems: "flex-start",
    gap: "25px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  columnWide: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  rightImageSmall: {
    width: "100%",
    height: "200px",
    borderRadius: "14px",
    objectFit: "cover",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
  },
  rightImageCenterTall: {
    width: "100%",
    height: "395px",
    borderRadius: "14px",
    objectFit: "cover",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
  },
  rightImageLarge: {
    width: "100%",
    height: "230px",
    borderRadius: "14px",
    objectFit: "cover",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
  },
};

export default StoneworkShowcase;