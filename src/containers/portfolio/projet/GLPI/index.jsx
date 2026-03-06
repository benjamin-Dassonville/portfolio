import React, { useEffect, useState } from "react";
import "./styles.scss";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

import debianIcon from "../../../../assets/icons/Debian_ico.png";
import apacheIcon from "../../../../assets/icons/Logo Apache.png";
import phpIcon from "../../../../assets/icons/php.png";
import mariadbIcon from "../../../../assets/icons/mariadb.jpeg";
import tlsIcon from "../../../../assets/icons/Logo TLS.jpg";
import glpiImage1 from "../../../../assets/images/glpi-screen-1.png";
import glpiImage2 from "../../../../assets/images/agent_inventaire_screen.png";

const GLPIProject = () => {
  const [activeTab, setActiveTab] = useState("lamp");
  const [lightboxImg, setLightboxImg] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openLightbox = (src) => setLightboxImg(src);
  const closeLightbox = () => setLightboxImg(null);

  useEffect(() => {
    Prism.highlightAll();
  }, [activeTab]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "lamp":
        return (
          <div className="tab-content-grid">
            <div className="content-text">
              <h3>Installation Stack LAMP</h3>
              <p>
                Mise en place de l'environnement serveur robuste sur Debian 12
                pour accueillir GLPI.
              </p>
              <pre className="code-block">
                <code className="language-bash">{`sudo apt update && sudo apt upgrade -y
sudo apt install apache2 mariadb-server php php-mysql php-gd php-xml php-mbstring php-curl -y`}</code>
              </pre>
              <ul>
                <li>Optimisation des performances PHP 8.1</li>
                <li>Sécurisation de l'instance MariaDB</li>
                <li>Configuration des modules Apache (rewrite, ssl)</li>
              </ul>
            </div>
            <div className="content-visual">
              <div className="tech-stack-mini">
                <img src={debianIcon} alt="Debian" title="Debian 12" />
                <img src={apacheIcon} alt="Apache" title="Apache2" />
                <img src={phpIcon} alt="PHP" title="PHP 8.2" />
                <img src={mariadbIcon} alt="MariaDB" title="MariaDB" />
              </div>
            </div>
          </div>
        );
      case "security":
        return (
          <div className="tab-content-grid">
            <div className="content-text">
              <h3>Sécurisation & TLS</h3>
              <p>
                Implémentation d'une couche de sécurité critique via certificats
                SSL et configurations durcies.
              </p>
              <pre className="code-block">
                <code className="language-bash">{`sudo apt install certbot python3-certbot-apache -y
sudo certbot --apache -d glpi.example.com`}</code>
              </pre>
              <ul>
                <li>Chiffrement de bout en bout avec TLS</li>
                <li>Redirection automatique HTTP vers HTTPS</li>
                <li>Protection des répertoires sensibles via .htaccess</li>
              </ul>
            </div>
            <div className="content-visual">
              <img
                src={glpiImage1}
                alt="Security Check"
                onClick={() => openLightbox(glpiImage1)}
              />
            </div>
          </div>
        );
      case "agents":
        return (
          <div className="tab-content-grid">
            <div className="content-text">
              <h3>Inventaire & Agents</h3>
              <p>
                Automatisation de la remontée d'informations via agents
                FusionInventory pour un parc informatique à jour.
              </p>
              <pre className="code-block">
                <code className="language-bash">{`# Installation agent debian
sudo apt install fusioninventory-agent
sudo systemctl enable --now fusioninventory-agent`}</code>
              </pre>
              <ul>
                <li>Découverte réseau automatisée (SNMP)</li>
                <li>Inventaire matériel et logiciel détaillé</li>
                <li>Télédéploiement de paquets</li>
              </ul>
            </div>
            <div className="content-visual">
              <img
                src={glpiImage2}
                alt="Inventory Agent"
                onClick={() => openLightbox(glpiImage2)}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="vfgauto-container glpi-premium">
      <header>
        <h1 className="main-title">GLPI — DEPLOYMENT & SECURITY</h1>
        <nav className="navigation">
          <button onClick={() => scrollToSection("hero")}>Accueil</button>
          <button onClick={() => scrollToSection("overview")}>Vision</button>
          <button onClick={() => scrollToSection("implementation")}>
            Implémentation
          </button>
          <button onClick={() => scrollToSection("competences")}>
            Compétences
          </button>
          <button onClick={() => scrollToSection("resources")}>
            Ressources
          </button>
        </nav>
      </header>

      <main className="content-wrapper">
        {/* HERO SECTION */}
        <section id="hero" className="hero-section">
          <div className="hero-badge">ADMINISTRATION SYSTÈME & RÉSEAU</div>
          <h1>Gestion de Parc Informatique Open Source</h1>
          <p className="hero-subtitle">
            Déploiement complet d’une infrastructure GLPI 10 sur Debian 12,
            intégrant la stack LAMP, la sécurisation SSL et l'automatisation
            d'inventaire.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Libre</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">Debian 12</span>
              <span className="stat-label">OS Serveur</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">SSL/TLS</span>
              <span className="stat-label">Sécurité</span>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section id="overview">
          <h2>Vision & Architecture</h2>
          <p className="section-desc">
            L'objectif était de mettre en place une solution ITSM (IT Service
            Management) robuste et sécurisée pour la gestion centralisée des
            actifs.
          </p>
          <div className="grid-2">
            <div className="feature-card">
              <div className="card-icon">🏗️</div>
              <h3>Infrastructure</h3>
              <p>
                Utilisation de la stack LAMP (Linux Apache MariaDB PHP) reconnue
                pour sa stabilité et sa performance en environnement de
                production.
              </p>
            </div>
            <div className="feature-card">
              <div className="card-icon">🔒</div>
              <h3>Hardening</h3>
              <p>
                Application de bonnes pratiques de sécurité : certificats SSL
                via Let's Encrypt, isolation des bases de données et contrôle
                d'accès.
              </p>
            </div>
          </div>
        </section>

        {/* IMPLEMENTATION / FEATURES SECTION */}
        <section id="implementation">
          <h2>Guide d'Implémentation</h2>
          <p className="section-desc">
            Les étapes clés du déploiement technique réalisées durant ce projet
            d'infrastructure.
          </p>

          <div className="feature-tabs-nav">
            <button
              className={activeTab === "lamp" ? "active" : ""}
              onClick={() => setActiveTab("lamp")}
            >
              Stack LAMP
            </button>
            <button
              className={activeTab === "security" ? "active" : ""}
              onClick={() => setActiveTab("security")}
            >
              Sécurisation
            </button>
            <button
              className={activeTab === "agents" ? "active" : ""}
              onClick={() => setActiveTab("agents")}
            >
              Inventaire
            </button>
          </div>

          <div className="tab-content-wrapper">{renderTabContent()}</div>
        </section>

        {/* COMPETENCES SECTION */}
        <section id="competences">
          <h2>Compétences Validées</h2>
          <p className="section-desc">
            Ce projet couvre plusieurs piliers du référentiel BTS SIO SLAM/SISR.
          </p>
          <div className="competences-table">
            <tbody>
              <tr>
                <td>Admin Debian 12</td>
                <td>✅</td>
                <td>Gestion des paquets, services, hardening et logs.</td>
              </tr>
              <tr>
                <td>Gestion Base de Données</td>
                <td>✅</td>
                <td>Configuration MariaDB, optimisation et backups SQL.</td>
              </tr>
              <tr>
                <td>Sécurité Réseau</td>
                <td>✅</td>
                <td>Mise en place TLS et gestion de certificats numériques.</td>
              </tr>
              <tr>
                <td>Automatisation</td>
                <td>✅</td>
                <td>Scripts Cron pour backups et synchronisation d'agents.</td>
              </tr>
            </tbody>
          </div>
        </section>

        {/* RESOURCES SECTION */}
        <section id="resources">
          <h2>Ressources & Livrables</h2>
          <p className="section-desc">
            Documentation technique et liens officiels liés à ce projet.
          </p>
          <div className="grid-3">
            <div className="feature-card">
              <h3>Documentation PDF</h3>
              <p>Guide d'installation complet illustré de 20 pages.</p>
              <a
                href="/word/Installer GLPI 10 sous Debian 12.pdf"
                className="download-btn"
                download
              >
                ⤓ Télécharger
              </a>
            </div>
            <div className="feature-card">
              <h3>Site Officiel</h3>
              <p>Accéder à la documentation communautaire GLPI.</p>
              <a
                href="https://glpi-project.org"
                target="_blank"
                rel="noreferrer"
                className="open-btn"
              >
                🔗 Visiter
              </a>
            </div>
            <div className="feature-card">
              <h3>Sources GitHub</h3>
              <p>Consulter les releases officielles du projet.</p>
              <a
                href="https://github.com/glpi-project/glpi"
                target="_blank"
                rel="noreferrer"
                className="open-btn"
              >
                🐙 GitHub
              </a>
            </div>
          </div>
        </section>

        <footer className="vfgauto-footer">
          <p>Benjamin DASSONVILLE — 2024</p>
          <p>Projet BTS SIO • Administration GLPI</p>
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

export default GLPIProject;
