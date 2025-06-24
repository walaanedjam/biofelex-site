import React from 'react';
import './PourquoiBiofelex.css';

import iconBiosource from './icon-biosource.png.jpg';
import iconBiodegradable from './icon-biodegradable.png.jpg';
import iconCompostable from './icon-compostable.png';

function PourquoiBiofelex() {
    const cards = [
        {
            title: "Biosourcé",
            text: "Nos compounds sont fabriqués à partir de matières organiques renouvelables d’origine végétale.",
            icon: iconBiosource
        },
        {
            title: "Biodégradable",
            text: "Lorsque nos produits deviennent des déchets, ils se décomposent naturellement et rapidement.",
            icon: iconBiodegradable
        },
        {
            title: "Compostable",
            text: "Nos bioplastiques se transforment en déchets organiques compostables facilement.",
            icon: iconCompostable
        }
    ];

    return (
        <section id="pourquoi" className="pourquoi-section">
            <h2 className="pourquoi-title">Pourquoi Bioflex ?</h2>
            <p className="pourquoi-subtitle">
                Bioflex encourage un nouveau modèle de bioéconomie basé sur l’efficacité et
                l’utilisation durable des ressources renouvelables.
            </p>

            <div className="card-container">
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        <img src={card.icon} alt={card.title} className="card-icon" />
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-text">{card.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PourquoiBiofelex;
