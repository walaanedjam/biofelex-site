import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import PourquoiBiofelex from './PourquoiBiofelex';
import Footer from './Footer';
import HeroSection from './HeroSection';
import ContactPage from './ContactPage';

function AccueilPage() {
  return (
    <>
      {/* Hero Section (background image avec h1) */}
      <section id="accueil" style={{
        backgroundImage: "url('/backend.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        paddingTop: "70px",
      }}>
        <h1>Bienvenue chez Biofelex</h1>
      </section>

      {/* Section Engagement */}
      <section id="engagement" style={{ padding: "20px 20px", backgroundColor: "white", textAlign: "center" }}>
        <h2 style={{ color: "#5ab535", fontSize: "2.5rem", fontWeight: "bold" }}>Notre Engagement</h2>
        <h3 style={{ color: "#5ab535", fontFamily: "cursive" }}>Pour un Monde Plus Propre et Plus Vert</h3>
        <p style={{ maxWidth: "800px", margin: "20px auto", fontSize: "1.2rem", color: "#333" }}>
          Chez Biofelex, nous croyons en un modèle de bioéconomie qui utilise les ressources renouvelables
          de manière efficace. Nous travaillons chaque jour pour réduire l’empreinte carbone et offrir des
          alternatives écologiques aux plastiques traditionnels.
        </p>
        <img src="/image-engagement.jpg" alt="Planète verte" style={{ width: "400px", borderRadius: "20px" }} />
      </section>

      <PourquoiBiofelex />
      <HeroSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AccueilPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
