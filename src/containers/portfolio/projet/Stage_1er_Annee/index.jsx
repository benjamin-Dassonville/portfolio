import React, { useState } from "react";
import "./styles.scss";

// Import des icônes
import reactIcon from "../../../../assets/icons/React.png";
import tsIcon from "../../../../assets/icons/ts.jpg";
import shadcnIcon from "../../../../assets/icons/shadcn-ui.png";
import reactQueryIcon from "../../../../assets/icons/reactquery.png";
import postgresIcon from "../../../../assets/icons/postgresql.png";
import drizzleIcon from "../../../../assets/icons/Drizzle-ORM.png";
import dockerIcon from "../../../../assets/icons/Docker.png";
import wsl2Icon from "../../../../assets/icons/WSL2.png";

const Stage1erAnnee = () => {
  const [activeTab, setActiveTab] = useState("pagination");
  const [lightboxImg, setLightboxImg] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openLightbox = (src) => setLightboxImg(src);
  const closeLightbox = () => setLightboxImg(null);

  const renderTabContent = () => {
    switch (activeTab) {
      case "pagination":
        return (
          <div className="tab-content-grid">
            <div className="content-text">
              <h3>Pagination & Recherche Avancée</h3>
              <p>
                Optimisation de l'accès aux données patients via un système de
                navigation fluide et performant.
              </p>
              <ul>
                <li>
                  Remplacement du scroll infini par une pagination classique
                  synchronisée avec l'URL.
                </li>
                <li>
                  Moteur de recherche multi-critères (nom, prénom, email) en
                  temps réel.
                </li>
                <li>
                  Dropdown dynamique pour le contrôle du volume de données par
                  page.
                </li>
                <li>Gestion robuste des états de chargement et d'erreur.</li>
              </ul>
            </div>
            <div className="content-visual">
              <div className="feature-illustration">
                <div className="glass-card-mini">Recherche: "Dassonville"</div>
                <div className="pagination-mock">
                  <span>1</span> <span className="active">2</span>{" "}
                  <span>3</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "roles":
        return (
          <div className="tab-content-grid">
            <div className="content-text">
              <h3>Gestion des Rôles & Vues</h3>
              <p>
                Adaptation de l'interface selon le profil utilisateur
                (Thérapeute ou Proche) pour une sécurité maximale.
              </p>
              <ul>
                <li>
                  Vues conditionnelles basées sur les permissions utilisateur.
                </li>
                <li>Système d'invitation avec validation stricte via Zod.</li>
                <li>Module de gestion des dossiers patients partagés.</li>
                <li>Interface simplifiée pour les aidants familiaux.</li>
              </ul>
            </div>
            <div className="content-visual">
              <div className="feature-illustration">
                <div className="role-switch-mock">
                  <span>Mode: Thérapeute</span>
                  <div className="toggle-bt on"></div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="vfgauto-container stage-premium">
      <header>
        <h1 className="main-title">STAGE — UNIV. LILLE</h1>
        <nav className="navigation">
          <button onClick={() => scrollToSection("hero")}>Accueil</button>
          <button onClick={() => scrollToSection("overview")}>Missions</button>
          <button onClick={() => scrollToSection("tech")}>Technologies</button>
          <button onClick={() => scrollToSection("features")}>
            Réalisations
          </button>
          <button onClick={() => scrollToSection("conclusion")}>
            Conclusion
          </button>
        </nav>
      </header>

      <main className="content-wrapper">
        {/* HERO SECTION */}
        <section id="hero" className="hero-section">
          <div className="hero-badge">STAGE DE 1ère ANNÉE • 6 SEMAINES</div>
          <h1>Innovation Digitale en Santé Connectée</h1>
          <p className="hero-subtitle">
            Immersion au sein de l'Université de Lille (Plaine Image) pour le
            développement d'une application React d'assistance thérapeutique
            destinée aux patients et aidants.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">React</span>
              <span className="stat-label">FrameWork</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">TS</span>
              <span className="stat-label">Typage Fort</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">U-Lille</span>
              <span className="stat-label">Université</span>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section id="overview">
          <h2>Missions & Objectifs</h2>
          <p className="section-desc">
            Ma mission principale était d'améliorer l'expérience utilisateur et
            l'efficacité opérationnelle d'une plateforme de suivi patient
            complexe.
          </p>
          <div className="grid-2">
            <div className="feature-card">
              <div className="card-icon">🧠</div>
              <h3>Gestion Patient</h3>
              <p>
                Permettre aux thérapeutes de centraliser les historiques, listes
                de courses et tutoriels de vie quotidienne pour leurs patients.
              </p>
            </div>
            <div className="feature-card">
              <div className="card-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>
                Travailler en pair-programming avec un développeur senior pour
                apprendre les standards industriels et les patterns React
                avancés.
              </p>
            </div>
          </div>
        </section>

        {/* TECH GRID */}
        <section id="tech">
          <h2>Stack Technologique</h2>
          <p className="section-desc">
            Un environnement moderne basé sur TypeScript et les outils de
            développement cloud.
          </p>
          <div className="tech-grid-premium">
            {[
              { icon: reactIcon, label: "React" },
              { icon: tsIcon, label: "TypeScript" },
              { icon: shadcnIcon, label: "Shadcn/UI" },
              { icon: reactQueryIcon, label: "React Query" },
              { icon: postgresIcon, label: "PostgreSQL" },
              { icon: drizzleIcon, label: "Drizzle ORM" },
              { icon: dockerIcon, label: "Docker" },
              { icon: wsl2Icon, label: "WSL2" },
            ].map((tech, i) => (
              <div key={i} className="tech-item-premium">
                <img src={tech.icon} alt={tech.label} />
                <span>{tech.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES TAB SECTION */}
        <section id="features">
          <h2>Détails des Réalisations</h2>
          <p className="section-desc">
            Focus sur les modules critiques développés durant le stage.
          </p>

          <div className="feature-tabs-nav">
            <button
              className={activeTab === "pagination" ? "active" : ""}
              onClick={() => setActiveTab("pagination")}
            >
              Pagination & Recherche
            </button>
            <button
              className={activeTab === "roles" ? "active" : ""}
              onClick={() => setActiveTab("roles")}
            >
              Rôles & Vues
            </button>
          </div>

          <div className="tab-content-wrapper">{renderTabContent()}</div>
        </section>

        {/* CONCLUSION */}
        <section id="conclusion">
          <h2>Bilan & Apprentissages</h2>
          <p className="section-desc">
            Une expérience fondatrice pour mon parcours de développeur.
          </p>
          <div className="grid-3">
            <div className="feature-card">
              <h3>Technique</h3>
              <p>
                Maîtrise de l'écosystème React/TS et compréhension des flux de
                données asynchrones (React Query).
              </p>
            </div>
            <div className="feature-card">
              <h3>Méthodologie</h3>
              <p>
                Adoption des méthodes agiles et du code-review system au sein
                d'une équipe senior.
              </p>
            </div>
            <div className="feature-card">
              <h3>Projet Pro</h3>
              <p>
                Finalisation et livraison d'un rapport de stage complet (40
                pages) validant l'expérience.
              </p>
              <a
                href="/word/Rapport de Stage.pdf"
                className="download-btn"
                download
              >
                ⤓ Rapport PDF
              </a>
            </div>
          </div>
        </section>

        <footer className="vfgauto-footer">
          <p>Benjamin DASSONVILLE — 2025</p>
          <p>Plaine Image • Université de Lille</p>
        </footer>
      </main>

      {/* LIGHTBOX placeholder if needed */}
      {lightboxImg && (
        <div className="lightbox active" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>
            &times;
          </span>
          <img src={lightboxImg} alt="Preview large" />
        </div>
      )}
    </div>
  );
};

export default Stage1erAnnee;
