import React, { useState, useEffect } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>Biofelex 🌿</div>

            {isMobile ? (
                <>
                    <div style={styles.burger} onClick={toggleMenu}>
                        ☰
                    </div>
                    {menuOpen && (
                        <ul style={styles.mobileMenu}>
                            <li><a href="#apropos" style={styles.link}>À propos de nous</a></li>
                            <li><a href="#bioplastiques" style={styles.link}>Bioplastiques</a></li>
                            <li><a href="#produits" style={styles.link}>Nos Produits</a></li>
                            <li><a href="#certifications" style={styles.link}>Certifications</a></li>
                            <li><a href="#contact" style={styles.link}>Contact</a></li>
                            <li><a href="#blog" style={styles.link}>Blog</a></li>
                        </ul>
                    )}
                </>
            ) : (
                <ul style={styles.links}>
                    <li><a href="#apropos" style={styles.link}>À propos de nous</a></li>
                    <li><a href="#bioplastiques" style={styles.link}>Bioplastiques</a></li>
                    <li><a href="#produits" style={styles.link}>Nos Produits</a></li>
                    <li><a href="#certifications" style={styles.link}>Certifications</a></li>
                    <li><a href="#contact" style={styles.link}>Contact</a></li>
                    <li><a href="#blog" style={styles.link}>Blog</a></li>
                </ul>
            )}
        </nav>
    );
}

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'white',
        color: 'black',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#1e1e1e',
    },
    burger: {
        fontSize: '1.8rem',
        cursor: 'pointer',
    },
    links: {
        listStyle: 'none',
        display: 'flex',
        gap: '2rem',
        margin: 0,
        padding: 0,
    },
    link: {
        textDecoration: 'none',
        color: '#1e1e1e',
        fontWeight: '500',
    },
    mobileMenu: {
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
};

export default Navbar;
