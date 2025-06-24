import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            {/* Bande verte de contact */}
            <div className="contact-bar">
                <div className="contact-block">
                    <h3>Siège social</h3>
                    <p><span>📍</span> Alger, Algérie</p>
                </div>
                <div className="contact-block">
                    <h3>Contact</h3>
                    <p><span>📧</span> contact.bioflex97@gmail.com</p>
                    <p><span>📞</span> +213 0675433490</p>
                </div>
                <div className="contact-block">
                    <h3>Usine</h3>
                    <p>🚧 En cours de création</p>
                </div>
            </div>

            {/* Footer sombre */}
            <div className="footer-bottom">
                <div className="footer-logo">
                    <h2>bioflex</h2>
                    <p>bioflex est une startup engagée dans l’innovation durable à travers la conception de plastiques biodégradables issus de matières végétales.</p>
                </div>

                <div className="footer-links">
                    <h4>Nos produits</h4>
                    <ul>
                        <li>Sacs & Sachets</li>
                        <li>Films de paillage</li>
                        <li>Emballages industriels</li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Liens utiles</h4>
                    <ul>
                        <li>Certifications</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
