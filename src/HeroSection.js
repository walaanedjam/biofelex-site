import React from 'react';
import { Link } from 'react-router-dom'; // ✅ important pour la navigation sans rechargement

function HeroSection() {
    const heroStyle = {
        backgroundImage: "url('/backend.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 20px",
        position: "relative",
        color: "white"
    };

    const overlay = {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1
    };

    const contentStyle = {
        zIndex: 2,
        maxWidth: "900px",
        fontSize: "1.3rem",
        lineHeight: "1.5"
    };

    const buttonStyle = {
        display: "inline-block",
        marginTop: "20px",
        padding: "10px 24px",
        fontSize: "0.95rem",
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#8fd400",
        borderRadius: "5px",
        textDecoration: "none",
        transition: "background-color 0.3s ease, transform 0.2s ease"
    };

    return (
        <section style={heroStyle}>
            <div style={overlay}></div>
            <div style={contentStyle}>
                <h1>
                    Transformez votre production avec nos bioplastiques performants<br />
                    et respectueux de l’environnement.
                </h1>
                <Link to="/contact" style={buttonStyle}>Contactez-Nous</Link>
            </div>
        </section>
    );
}

export default HeroSection;
