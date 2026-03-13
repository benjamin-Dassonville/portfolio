import React from "react";
import "./styles.scss";

const AngleIntermaideProject = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="angle-container">
      <header>
        <h1 className="main-title">ANGLE INTERM'AIDE</h1>
        <p className="main-subtitle">Progressive Web App | Flutter | Node.js</p>
        <nav className="navigation">
          <button onClick={() => scrollToSection("hero")}>Accueil</button>
          <button onClick={() => scrollToSection("context")}>Contexte</button>
          <button onClick={() => scrollToSection("features")}>Fonctionnalités</button>
          <button onClick={() => scrollToSection("tech")}>Technologies</button>
          <button onClick={() => scrollToSection("skills")}>Compétences</button>
          <button onClick={() => scrollToSection("challenges")}>Défis</button>
        </nav>
      </header>

      <main className="content-wrapper">
        {/* HERO SECTION */}
        <section id="hero" className="hero-section">
          <div className="hero-badge">STAGE 1ère ANNÉE</div>
          <h1>Application Angle Interm'Aide</h1>
          <p className="hero-subtitle">
            Une Progressive Web App pour améliorer la communication et l'organisation interne d'une structure d'aide à l'emploi.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">Full-Stack</span>
              <span className="stat-label">Architecture Complète</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">PWA</span>
              <span className="stat-label">Flutter Web</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">Role-Based</span>
              <span className="stat-label">Gestion des Accès</span>
            </div>
          </div>
        </section>

        {/* CONTEXT SECTION */}
        <section id="context" className="project-section">
          <h2>Contexte du Projet</h2>
          <p className="section-desc">
            Dans le cadre de mon stage en première année, j'ai participé au développement d'une application permettant d'améliorer la communication et l'organisation interne d'une structure appelée Angle Interm'Aide.
          </p>
          <div className="grid-2">
            <div className="feature-card">
              <div className="card-icon">📱</div>
              <h3>Accessibilité</h3>
              <p>
                L'application a été développée en tant que Progressive Web App (PWA) pour être accessible depuis n'importe quel appareil via un navigateur web.
              </p>
            </div>
            <div className="feature-card">
              <div className="card-icon">🎯</div>
              <h3>Objectifs</h3>
              <p>
                Créer une plateforme centralisée pour la gestion d'équipes, la consultation d'informations, et l'authentification sécurisée des utilisateurs.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="project-section">
          <h2>Fonctionnalités Principales</h2>
          
          <div className="feature-blocks">
            <div className="feature-block">
              <h3>🔐 Authentification Sécurisée</h3>
              <ul>
                <li>Connexion via Microsoft Azure OAuth</li>
                <li>Gestion des sessions utilisateurs</li>
                <li>Synchronisation automatique du profil avec la base de données</li>
              </ul>
            </div>

            <div className="feature-block">
              <h3>👥 Gestion des Rôles</h3>
              <ul>
                <li>Administrateur</li>
                <li>Direction</li>
                <li>Chef d'équipe</li>
                <li>Utilisateur non assigné</li>
              </ul>
            </div>

            <div className="feature-block">
              <h3>🏢 Gestion des Équipes</h3>
              <ul>
                <li>Affichage de la liste des équipes</li>
                <li>Sélection et consultation des équipes</li>
                <li>Accès aux informations associées</li>
              </ul>
            </div>

            <div className="feature-block">
              <h3>📊 Tableau de Bord</h3>
              <ul>
                <li>Accès rapide aux fonctionnalités principales</li>
                <li>Vue personnalisée selon le rôle</li>
                <li>Gestion administrative centralisée</li>
              </ul>
            </div>

            <div className="feature-block">
              <h3>📋 Gestion Administrative</h3>
              <ul>
                <li>Attribution des rôles utilisateurs</li>
                <li>Gestion des comptes</li>
                <li>Gestion des briefings</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TECH STACK SECTION */}
        <section id="tech" className="project-section">
          <h2>Stack Technologique</h2>
          
          <div className="tech-grid">
            <div className="tech-category">
              <h3>🎨 Frontend</h3>
              <div className="tech-list">
                <span className="tech-tag">Dart</span>
                <span className="tech-tag">Flutter</span>
                <span className="tech-tag">Flutter Web (PWA)</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>⚙️ Backend</h3>
              <div className="tech-list">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express.js</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>💾 Base de Données</h3>
              <div className="tech-list">
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Supabase</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>🔑 Authentification</h3>
              <div className="tech-list">
                <span className="tech-tag">Microsoft Azure OAuth</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>📦 Libraries</h3>
              <div className="tech-list">
                <span className="tech-tag">go_router</span>
                <span className="tech-tag">dio</span>
                <span className="tech-tag">supabase_flutter</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>🛠️ Outils</h3>
              <div className="tech-list">
                <span className="tech-tag">VS Code</span>
                <span className="tech-tag">Git</span>
                <span className="tech-tag">Supabase</span>
              </div>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE SECTION */}
        <section id="architecture" className="project-section">
          <h2>Architecture de l'Application</h2>
          
          <div className="architecture-grid">
            <div className="arch-block">
              <h3>🎨 Frontend</h3>
              <p>
                Interface utilisateur développée en Flutter, permettant d'afficher les différentes pages tout en communiquant avec l'API via des requêtes HTTP.
              </p>
            </div>

            <div className="arch-block">
              <h3>⚙️ Backend</h3>
              <p>
                API Node.js qui gère les requêtes, la communication avec la base de données, et les règles de gestion métier.
              </p>
            </div>

            <div className="arch-block">
              <h3>💾 Base de Données</h3>
              <p>
                Supabase (PostgreSQL) stocke les profils utilisateurs, les rôles, les équipes et toutes les données nécessaires au fonctionnement.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="project-section">
          <h2>Compétences Développées</h2>
          
          <div className="skills-list">
            <div className="skill-item">
              <span className="skill-icon">📱</span>
              <h3>Développement Flutter</h3>
              <p>Développement d'une application avec Flutter et utilisation du langage Dart</p>
            </div>

            <div className="skill-item">
              <span className="skill-icon">🔗</span>
              <h3>API REST</h3>
              <p>Conception d'une API REST avec Node.js et Express.js</p>
            </div>

            <div className="skill-item">
              <span className="skill-icon">🔐</span>
              <h3>Authentification OAuth</h3>
              <p>Intégration d'une authentification OAuth avec Microsoft Azure</p>
            </div>

            <div className="skill-item">
              <span className="skill-icon">☁️</span>
              <h3>Cloud Database</h3>
              <p>Utilisation d'une base de données cloud avec Supabase (PostgreSQL)</p>
            </div>

            <div className="skill-item">
              <span className="skill-icon">👥</span>
              <h3>Gestion des Rôles</h3>
              <p>Gestion des rôles et des permissions utilisateurs</p>
            </div>

            <div className="skill-item">
              <span className="skill-icon">🏗️</span>
              <h3>Architecture Complète</h3>
              <p>Conception d'une architecture applicative full-stack</p>
            </div>
          </div>
        </section>

        {/* CHALLENGES SECTION */}
        <section id="challenges" className="project-section">
          <h2>Défis & Solutions</h2>
          
          <div className="challenges-grid">
            <div className="challenge-card">
              <h3>🔑 Authentification Azure</h3>
              <p>
                <strong>Défi:</strong> Implémentation complexe de l'authentification Microsoft Azure<br/>
                <strong>Solution:</strong> Analyse détaillée de la documentation et tests itératifs
              </p>
            </div>

            <div className="challenge-card">
              <h3>💾 Synchronisation BDD</h3>
              <p>
                <strong>Défi:</strong> Synchronisation des profils avec la base de données Supabase<br/>
                <strong>Solution:</strong> Mise en place de flux de synchronisation automatiques
              </p>
            </div>

            <div className="challenge-card">
              <h3>🧭 Navigation Dynamique</h3>
              <p>
                <strong>Défi:</strong> Gestion de la navigation selon les rôles utilisateurs<br/>
                <strong>Solution:</strong> Implémentation avec go_router et vérification côté serveur
              </p>
            </div>

            <div className="challenge-card">
              <h3>🔐 Permissions Multi-couches</h3>
              <p>
                <strong>Défi:</strong> Gestion des permissions au frontend et backend<br/>
                <strong>Solution:</strong> Vérification stricte côté serveur avec fallback frontend
              </p>
            </div>
          </div>
        </section>

        {/* USER FLOW SECTION */}
        <section id="flow" className="project-section">
          <h2>Flux de Connexion Utilisateur</h2>
          
          <div className="flow-diagram">
            <div className="flow-step">
              <div className="step-number">1</div>
              <p>Authentification via Microsoft Azure</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">2</div>
              <p>Récupération des informations</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">3</div>
              <p>Création du profil BDD</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">4</div>
              <p>Attribution du rôle</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">5</div>
              <p>Accès personnalisé</p>
            </div>
          </div>
        </section>

        <footer className="angle-footer">
          <p>Benjamin DASSONVILLE — 2026</p>
          <p>BTS SIO 1ère Année • SLAM | Angle Interm'Aide</p>
        </footer>
      </main>
    </div>
  );
};

export default AngleIntermaideProject;
