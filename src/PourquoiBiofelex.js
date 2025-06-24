import React from 'react';
import './PourquoiBiofelex.css'; // On utilisera un fichier CSS pour les animations

function PourquoiBiofelex() {
    return (
        <section id="pourquoi" className="pourquoi-section">
            <h2 className="pourquoi-title">Pourquoi Biofelex ?</h2>
            <p className="pourquoi-subtitle">
                Biofelex encourage un nouveau modèle de bioéconomie basé sur l’efficacité et
                l’utilisation durable des ressources renouvelables.
            </p>

            <div className="card-container">
                {cards.map((card, index) => (
                    <div key={index} className="card" onClick={() => alert(card.title)}>
                        <img src={card.icon} alt={card.title} className="card-icon" />
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-text">{card.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

const cards = [
    {
        title: "Biosourcé",
        text: "Nos compounds sont fabriqués à partir de matières organiques renouvelables d’origine végétale.",
        icon: "/icon-biosource.png"
    },
    {
        title: "Biodégradable",
        text: "Lorsque nos produits deviennent des déchets, ils se décomposent naturellement et rapidement.",
        icon: "/icon-biodegradable.png"
    },
    {
        title: "Compostable",
        text: "Nos bioplastiques se transforment en déchets organiques compostables facilement.",
        icon: "/icon-compostable.png"
    }
];

export default PourquoiBiofelex;
