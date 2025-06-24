import React from 'react';

function ContactPage() {
    const pageStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '60px',
        padding: '80px 40px',
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
    };

    const leftStyle = {
        flex: '1',
        minWidth: '300px',
        maxWidth: '450px',
        backgroundColor: '#8fd400',
        borderRadius: '12px',
        padding: '40px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
    };

    const contactItem = {
        marginBottom: '25px',
        lineHeight: '1.6',
    };

    const introStyle = {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        marginBottom: '30px',
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: '500',
    };

    const rightStyle = {
        flex: '1',
        minWidth: '300px',
        maxWidth: '550px',
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '40px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    };

    const inputStyle = {
        width: '100%',
        padding: '14px',
        marginBottom: '20px',
        borderRadius: '6px',
        border: '1px solid #ccc',
        fontSize: '15px',
        outline: 'none',
    };

    const buttonStyle = {
        backgroundColor: '#8fd400',
        color: 'white',
        padding: '14px 24px',
        border: 'none',
        borderRadius: '6px',
        fontWeight: 'bold',
        fontSize: '16px',
        cursor: 'pointer',
        width: '100%',
        transition: 'background-color 0.3s ease',
    };

    return (
        <div style={pageStyle}>
            {/* Bloc gauche - Infos de contact */}
            <div style={leftStyle}>
                <p style={introStyle}>Pour toute question ou collaboration, contactez-nous :</p>

                <div style={contactItem}>
                    <strong>📍 Siège social :</strong><br />
                    Alger, Algérie
                </div>

                <div style={contactItem}>
                    <strong>📧 Email :</strong><br />
                    <a href="mailto:contact.bioflex97@gmail.com" style={linkStyle}>contact.bioflex97@gmail.com</a>
                </div>

                <div style={contactItem}>
                    <strong>📞 Téléphone :</strong><br />
                    <a href="tel:+2130675433490" style={linkStyle}>+213 0675433490</a>
                </div>

                <div style={{ ...contactItem, display: 'flex', gap: '15px' }}>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>🔗 LinkedIn</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>🐦 Twitter</a>
                </div>
            </div>

            {/* Bloc droit - Formulaire */}
            <div style={rightStyle}>
                <h3 style={{ marginBottom: '20px', color: '#1a1a1a' }}>Envoyez-nous un message</h3>
                <form action="https://formspree.io/f/xpwrybdd" method="POST">
                    <input type="text" name="nom" placeholder="Nom *" style={inputStyle} required />
                    <input type="text" name="prenom" placeholder="Prénom *" style={inputStyle} required />
                    <input type="email" name="email" placeholder="Adresse e-mail *" style={inputStyle} required />
                    <input type="text" name="telephone" placeholder="Téléphone" style={inputStyle} />
                    <input type="text" name="sujet" placeholder="Sujet" style={inputStyle} />
                    <textarea name="message" placeholder="Message" rows="5" style={{ ...inputStyle, resize: 'none' }}></textarea>
                    <button type="submit" style={buttonStyle}>Envoyer</button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;
