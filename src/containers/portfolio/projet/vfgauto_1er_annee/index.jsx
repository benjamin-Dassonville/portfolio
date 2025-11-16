import React from "react";
import "./styles.scss";

const VFGAuto1erAnnee = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="vfgauto-container">
      <header>
        <h1 className="main-title">Projet VFG Auto - Première Année</h1>
        
        <nav className="navigation">
          <button onClick={() => scrollToSection('contexte')}>Contexte</button>
          <button onClick={() => scrollToSection('realisations')}>Réalisations</button>
          <button onClick={() => scrollToSection('competences')}>Compétences</button>
          <button onClick={() => scrollToSection('conclusion')}>Conclusion</button>
        </nav>
      </header>

      <main className="content-wrapper">
        <div className="status-banner">
          <h2>En Cours</h2>
        </div>
      </main>

      <footer className="vfgauto-footer">
        <p>Benjamin DASSONVILLE</p>
        <p>Projet VFG Auto - BTS SIO 1ère année</p>
        <p>Dernière mise à jour : 29 octobre 2025</p>
      </footer>
    </div>
  );
};

export default VFGAuto1erAnnee;
