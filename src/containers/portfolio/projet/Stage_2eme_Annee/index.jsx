import React from "react";
import "./styles.scss";

const Stage2emeAnnee = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="vfgauto-container stage-2-premium">
      <header>
        <h1 className="main-title">STAGE — 2ème ANNÉE</h1>
        <nav className="navigation">
          <button onClick={() => scrollToSection("hero")}>Accueil</button>
          <button onClick={() => scrollToSection("overview")}>
            Prévisions
          </button>
          <button onClick={() => scrollToSection("tech")}>Technologies</button>
        </nav>
      </header>

      <main className="content-wrapper">
        {/* HERO SECTION */}
        <section id="hero" className="hero-section">
          <div className="hero-badge">PRÉVU POUR MAI 2026</div>
          <h1>Nouveau Challenge en Perspective</h1>
          <p className="hero-subtitle">
            Le stage de deuxième année de BTS SIO est l'occasion de consolider
            mes compétences SLAM sur des projets d'envergure professionnelle.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">10</span>
              <span className="stat-label">Semaines prèvues</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">SLAM</span>
              <span className="stat-label">Option Majeure</span>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section id="overview">
          <h2>Objectifs & Attentes</h2>
          <p className="section-desc">
            Focus sur le développement d'applications métiers et l'intégration
            de solutions logicielles complexes.
          </p>
          <div className="grid-2">
            <div className="feature-card">
              <div className="card-icon">🏗️</div>
              <h3>Conception Logicielle</h3>
              <p>
                Approfondissement des frameworks backend et des architectures
                micro-services pour des solutions scalables.
              </p>
            </div>
            <div className="feature-card">
              <div className="card-icon">🛡️</div>
              <h3>Sécurité & Qualité</h3>
              <p>
                Mise en œuvre de tests unitaires, d'intégration et respect des
                normes de cybersécurité logicielle.
              </p>
            </div>
          </div>
        </section>

        {/* TECH GRID PLACEHOLDER */}
        <section id="tech">
          <h2>Stack Prévue</h2>
          <p className="section-desc">
            Technologies cibles pour le perfectionnement durant cette période.
          </p>
          <div className="grid-3">
            <div className="feature-card">
              <h3>FullStack JS</h3>
              <p>Node.js, Next.js et bases de données NoSQL.</p>
            </div>
            <div className="feature-card">
              <h3>Audit & Tests</h3>
              <p>Jest, Cypress et outils d'intégration continue (CI/CD).</p>
            </div>
            <div className="feature-card">
              <h3>DevOps</h3>
              <p>Kubernetes, Docker et gestion de déploiement cloud.</p>
            </div>
          </div>
        </section>

        <section className="coming-soon-banner">
          <h2>Contenu en cours de rédaction...</h2>
          <p>
            Revenez prochainement pour découvrir le détail de mes missions !
          </p>
        </section>

        <footer className="vfgauto-footer">
          <p>Benjamin DASSONVILLE — 2026</p>
          <p>BTS SIO 2ème Année • SLAM</p>
        </footer>
      </main>
    </div>
  );
};

export default Stage2emeAnnee;
