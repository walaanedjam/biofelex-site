import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.jpg';
import menuIcon from './menu-icon.png'; // 👈 ton icône de menu ici
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav style={styles.nav}>
            <a href="/" style={styles.logoLink}>
                <img src={logo} alt="Biofelex" style={styles.logoImage} />
            </a>

            {isMobile && (
                <button onClick={toggleMenu} style={styles.burger}>
                    <img src={menuIcon} alt="Menu" style={styles.menuIcon} />
                </button>
            )}

            {(menuOpen || !isMobile) && (
                <ul style={{ ...styles.links, ...(isMobile ? styles.mobileMenu : {}) }}>
                    <li><Link to="/#engagement">À propos de nous</Link></li>
                    <li><Link to="/#pourquoi">Bioplastiques</Link></li>

                    <li><a href="#produits">Nos Produits</a></li>
                    <li><Link to="/contact">Contact</Link></li> {/* vers autre page */}

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
        padding: '0.5rem 1rem', // 🔽 réduit la marge intérieure
        backgroundColor: 'white',
        position: 'fixed',
        top: 0,
        width: '98%',
        zIndex: 1000,
        height: '50px', // 🔽 plus petit qu’avant (ex. 70px)
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    logoLink: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    logoImage: {
        height: '40px',
        width: 'auto',
    },
    menuIcon: {
        height: '28px', // ajuste la taille ici
        width: '28px',
    },
    links: {
        listStyle: 'none',
        display: 'flex',
        gap: '2rem',
        margin: 0,
        padding: 0,
    },
    mobileMenu: {
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        flexDirection: 'column',
        backgroundColor: 'white',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '1rem 0',
    },
    burger: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
    },
};

export default Navbar;
