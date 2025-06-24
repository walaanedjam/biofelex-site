import React from 'react';
import './App.css';

function Navbar() {
    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>Biofelex 🌿</div>
            <ul style={styles.links}>
                <li><a href="#apropos">À propos de nous</a></li>
                <li><a href="#bioplastiques">Bioplastiques</a></li>
                <li><a href="#produits">Nos Produits</a></li>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#blog">Blog</a></li>
            </ul>
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
    links: {
        listStyle: 'none',
        display: 'flex',
        gap: '2rem',
        margin: 0,
        padding: 0,
    }
};

export default Navbar;
