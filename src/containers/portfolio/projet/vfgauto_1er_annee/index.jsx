import React, { useState } from "react";
import "./styles.scss";

const VFGAuto1erAnnee = () => {
  const [activeTab, setActiveTab] = useState("admin");
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
      case "admin":
        return (
          <div className="tab-content-grid">
            <div className="content-text">
              <h3>Gestion Administrative & Planning</h3>
              <p>
                Le cœur du système permet une gestion granulaire du garage. Les
                administrateurs peuvent piloter l'activité en temps réel grâce à
                des outils dédiés.
              </p>
              <ul>
                <li>Gestion complète des mécaniciens et de leurs horaires</li>
                <li>Planning interactif avec glisser-déposer</li>
                <li>
                  Tableaux de bord statistiques (CA, volume d'interventions)
                </li>
                <li>Module de gestion des stocks et pièces détachées</li>
                <li>Système d'alertes pour les entretiens périodiques</li>
              </ul>
            </div>
            <div className="content-visual">
              <img
                src="/images-vfg/vfg-admin-1.png"
                alt="Admin Dashboard"
                onClick={() => openLightbox("/images-vfg/vfg-admin-1.png")}
              />
            </div>
          </div>
        );
      case "booking":
        return (
          <div className="tab-content-grid">
            <div className="content-text">
              <h3>Réservation & Logique Métier</h3>
              <p>
                Un moteur de réservation complexe qui garantit qu'aucun créneau
                n'est sur-réservé et que les ressources sont optimisées.
              </p>
              <ul>
                <li>Calcul dynamique de la durée selon l'intervention</li>
                <li>
                  Vérification de la disponibilité des ponts et techniciens
                </li>
                <li>Confirmation automatique par email</li>
                <li>Paiement d'acompte sécurisé en ligne</li>
                <li>Rappels de rendez-vous automatisés</li>
              </ul>
            </div>
            <div className="content-visual">
              <img
                src="/images-vfg/vfg-reservation-1.png"
                alt="Booking System"
                onClick={() =>
                  openLightbox("/images-vfg/vfg-reservation-1.png")
                }
              />
            </div>
          </div>
        );
      case "client":
        return (
          <div className="tab-content-grid">
            <div className="content-text">
              <h3>Espace Client & Suivi Véhicule</h3>
              <p>
                Une expérience premium pour le client, lui permettant de suivre
                la vie de son véhicule et de planifier ses entretiens en toute
                autonomie.
              </p>
              <ul>
                <li>Historique complet des interventions et factures</li>
                <li>Carnet d'entretien numérique intelligent</li>
                <li>Profil véhicule avec spécificités techniques</li>
                <li>Prise de rendez-vous en 3 clics</li>
                <li>Messagerie directe avec le chef d'atelier</li>
              </ul>
            </div>
            <div className="content-visual">
              <img
                src="/images-vfg/vfg-tableau-de-bord-client-1.png"
                alt="Client Area"
                onClick={() =>
                  openLightbox("/images-vfg/vfg-tableau-de-bord-client-1.png")
                }
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="vfgauto-container">
      <header>
        <h1 className="main-title">PLATFORME VFG AUTO</h1>
        <nav className="navigation">
          <button onClick={() => scrollToSection("hero")}>Accueil</button>
          <button onClick={() => scrollToSection("overview")}>Aperçu</button>
          <button onClick={() => scrollToSection("features")}>
            Fonctionnalités
          </button>
          <button onClick={() => scrollToSection("tech")}>Architecture</button>
          <button onClick={() => scrollToSection("gallery")}>Galerie</button>
        </nav>
      </header>

      <main className="content-wrapper">
        {/* HERO SECTION */}
        <section id="hero" className="hero-section">
          <div className="hero-badge">PROJET BTS SIO 1ère ANNÉE</div>
          <h1>Modernisation Digitale de la Gestion Automobile</h1>
          <p className="hero-subtitle">
            Une solution SaaS complète développée avec PHP et React, permettant
            de centraliser l'activité d'un garage moderne : du planning des
            mécaniciens à la satisfaction client.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">500+</span>
              <span className="stat-label">Utilisateurs</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">1.2k</span>
              <span className="stat-label">Interventions</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">99%</span>
              <span className="stat-label">Fiabilité</span>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section id="overview">
          <h2>Context & Vision</h2>
          <p className="section-desc">
            VFG Auto est né du besoin de remplacer des processus papier
            obsolètes par une interface fluide et performante.
          </p>
          <div className="grid-2">
            <div className="feature-card">
              <div className="card-icon">⚡</div>
              <h3>Le Problème</h3>
              <p>
                Perte de temps sur la prise de rendez-vous téléphonique, erreurs
                de planning récurrentes et difficulté de suivi de l'historique
                client.
              </p>
            </div>
            <div className="feature-card">
              <div className="card-icon">🎯</div>
              <h3>La Solution</h3>
              <p>
                Une plateforme centralisée automatisant 70% des tâches
                administratives et offrant une traçabilité totale sur chaque
                véhicule.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features">
          <h2>Exploration des Fonctionnalités</h2>
          <p className="section-desc">
            Trois interfaces distinctes et synchronisées pour chaque acteur du
            projet.
          </p>

          <div className="feature-tabs-nav">
            <button
              className={activeTab === "admin" ? "active" : ""}
              onClick={() => setActiveTab("admin")}
            >
              Administration
            </button>
            <button
              className={activeTab === "booking" ? "active" : ""}
              onClick={() => setActiveTab("booking")}
            >
              Réservation
            </button>
            <button
              className={activeTab === "client" ? "active" : ""}
              onClick={() => setActiveTab("client")}
            >
              Espace Client
            </button>
          </div>

          <div className="tab-content-wrapper">{renderTabContent()}</div>
        </section>

        {/* ARCHITECTURE SECTION */}
        <section id="tech">
          <h2>Architecture Technique</h2>
          <p className="section-desc">
            Une pile technologique moderne orientée performance et sécurité.
          </p>
          <div className="tech-grid">
            <div className="tech-stack">
              <h4>Front-end</h4>
              <ul>
                <li>React 18</li>
                <li>Vite & HMR</li>
                <li>Sass / CSS Modules</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div className="tech-stack">
              <h4>Back-end</h4>
              <ul>
                <li>PHP 8.1</li>
                <li>MySQL / PDO</li>
                <li>Architecture MVC</li>
                <li>REST API</li>
              </ul>
            </div>
            <div className="tech-stack">
              <h4>Sécurité</h4>
              <ul>
                <li>Hachage Bcrypt</li>
                <li>Sanitization XSS</li>
                <li>Protection CSRF</li>
                <li>JWT Authentication</li>
              </ul>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery">
          <h2>Galerie du Projet</h2>
          <p className="section-desc">
            Capture d'écran des différentes interfaces du système final.
          </p>
          <div className="gallery-grid">
            {[
              "vfg-presentation-service.png",
              "vfg-connexion-1.png",
              "vfg-admin-2.png",
              "vfg-admin-3.png",
              "vfg-reservation-2.png",
              "vfg-tableau-de-bord-client-2.png",
              "vfg-admin-5.png",
              "vfg-reservation-3.png",
              "vfg-tableau-de-bord-client-3.png",
            ].map((img, idx) => (
              <div
                key={idx}
                className="gallery-item"
                onClick={() => openLightbox(`/images-vfg/${img}`)}
              >
                <img src={`/images-vfg/${img}`} alt={`VFG Auto ${idx}`} />
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="vfgauto-footer">
          <p>Benjamin DASSONVILLE — 2024</p>
          <p>Projet BTS SIO 1ère année • Option SLAM</p>
        </footer>
      </main>

      {/* LIGHTBOX */}
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

export default VFGAuto1erAnnee;
