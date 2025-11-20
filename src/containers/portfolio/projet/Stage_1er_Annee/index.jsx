import React from "react";
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
    <div className="stage-container">
        
      <h1 className="main-title">Stage Première Année</h1>

      <nav className="navigation">
        <button onClick={() => scrollToSection('contexte')}>Contexte</button>
        <button onClick={() => scrollToSection('realisations')}>Réalisations</button>
        <button onClick={() => scrollToSection('competences')}>Compétences</button>
        <button onClick={() => scrollToSection('conclusion')}>Conclusion</button>
      </nav>

      <section id="contexte">
        <h2>Contexte du stage</h2>
        <div className="context-details">
          <div className="context-introduction">
            <p>
              Dans le cadre de ma première année de BTS SIO, j'ai effectué un stage de 6 semaines 
              au sein de l'Université de Lille, sur leur site de la Plaine Image à Roubaix. 
              Intégré à une équipe de développement, j'ai travaillé en étroite collaboration avec 
              un développeur senior sur une application web React innovante. Cette application 
              est conçue pour faciliter la gestion et le suivi des patients par les thérapeutes 
              et leurs proches.
            </p>
            <p>
              L'application permet notamment aux thérapeutes de gérer les profils de leurs patients, 
              d'attribuer des accès aux proches, et de mettre en place des outils d'assistance 
              quotidienne comme des listes de courses ou des tutoriels pratiques. Mon rôle principal 
              a consisté à optimiser l'expérience utilisateur en développant un système de pagination 
              avancé et en améliorant les fonctionnalités de recherche.
            </p>
          </div>

          <p><strong>Période :</strong> Avril à juin 2025</p>
          <br/>
          <p>
            <strong>Structure d'accueil :</strong> Université de Lille - Site de la Plaine Image (Roubaix)
          </p><br/>
          <p>
            <strong>Environnement :</strong> Collaboration directe avec un développeur senior
          </p><br/>
          <p>
            <strong>Mission principale :</strong> Développement et amélioration d'une application web 
            d'assistance aux patients, permettant aux thérapeutes et aux proches de gérer :
          </p>
          <ul>
            <li>Les contacts des patients</li>
            <li>Les listes de courses personnalisées</li>
            <li>Les tutoriels d'aide aux tâches quotidiennes (ex: gestion du linge)</li>
          </ul><br/>

          <div className="realisation-principale">
            <h3>Réalisations clés :</h3>
            <ul>
              <li>Implémentation d'un système de pagination avancé pour optimiser la recherche de patients</li>
              <li>Développement d'un moteur de recherche multi-critères (nom, prénom, email)</li>
              <li>Adaptation de l'interface pour différents profils utilisateurs (thérapeutes/proches)</li>
            </ul>
          </div>

          <div className="technologies">
            <h3>Technologies utilisées :</h3>
            <ul className="tech-list">
              <li>
                <img className="tech-icon" src={reactIcon} alt="React icon" />
                React
              </li>
              <li>
                <img className="tech-icon" src={tsIcon} alt="TypeScript icon" />
                TypeScript
              </li>
              <li>
                <img className="tech-icon" src={shadcnIcon} alt="Shadcn/ui icon" />
                shadcn/ui
              </li>
              <li>
                <img className="tech-icon" src={reactQueryIcon} alt="React Query icon" />
                React Query
              </li>
              <li>
                <img className="tech-icon" src={postgresIcon} alt="PostgreSQL icon" />
                PostgreSQL
              </li>
              <li>
                <img className="tech-icon" src={drizzleIcon} alt="Drizzle ORM icon" />
                Drizzle ORM
              </li>
              <li>
                <img className="tech-icon" src={dockerIcon} alt="Docker icon" />
                Docker
              </li>
              <li>
                <img className="tech-icon" src={wsl2Icon} alt="WSL2 icon" />
                WSL2
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="realisations">
        <h2>Réalisations professionnelles</h2>

        <div className="realisation">
          <h3>Pagination avancée + recherche multi-critères</h3>
          <p>
            <strong>Période :</strong> Avril – Mai 2025
          </p>
          <ul>
            <li>Remplacement du scroll infini par une pagination classique</li>
            <li>Ajout d'une recherche dynamique (nom, prénom, email)</li>
            <li>Synchronisation du numéro de page dans l'URL</li>
            <li>Dropdown pour choisir le nombre de patients par page</li>
            <li>Gestion des boutons Précédent / Suivant</li>
            <li>Compatibilité mobile</li>
          </ul>
        </div>

        <div className="realisation">
          <h3>Gestion des vues et fonctionnalités proches</h3>
          <p>
            <strong>Période :</strong> Mai – Juin 2025
          </p>
          <ul>
            <li>Menu déroulant pour basculer entre vues</li>
            <li>Gestion des invitations en cours</li>
            <li>Implémentation de l'annulation d'invitation</li>
            <li>Adaptation pour les "proches"</li>
            <li>Formulaire d'ajout avec validation Zod</li>
          </ul>
        </div>
      </section>

      <section id="competences">
        <h2>compétences aquises durant ce projet</h2>
        <table className="competences-table">
          <tbody>
            <tr>
              <td>Développer la présence en ligne</td>
              <td>✅</td>
              <td>Interface React dynamique connectée à une API</td>
            </tr>
            <tr>
              <td>Répondre aux demandes d'évolution</td>
              <td>✅</td>
              <td>Ajout de pagination, recherche, gestion d'invitations</td>
            </tr>
            <tr>
              <td>Travailler en mode projet</td>
              <td>✅</td>
              <td>Analyse, itérations, choix techniques</td>
            </tr>
            <tr>
              <td>Mettre à disposition un service</td>
              <td>✅</td>
              <td>Tests, UX, gestion d'erreurs, responsive</td>
            </tr>
            <tr>
              <td>Organiser son développement professionnel</td>
              <td>✅</td>
              <td>Apprentissage React/TS, Docker, WSL2</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="conclusion" className="conclusion">
        <h2>Conclusion</h2>
        <div className="conclusion-content">
          <div className="key-learnings">
            <h3>Apprentissages Clés</h3>
            <ul>
              <li>Maîtrise approfondie de React et TypeScript en contexte professionnel</li>
              <li>Gestion de projets complexes avec des technologies modernes</li>
              <li>Développement d'API et intégration avec PostgreSQL</li>
              <li>Implémentation de fonctionnalités avancées (pagination, filtres, gestion des rôles)</li>
            </ul>
          </div>

          <div className="professional-growth">
            <h3>Développement Professionnel</h3>
            <p>
              Ces six semaines au sein de l'équipe d'ingénieurs de l'Université de Lille ont été une 
              expérience enrichissante qui a considérablement renforcé mes compétences techniques 
              et ma compréhension du développement web professionnel. J'ai acquis une autonomie 
              précieuse dans la résolution de problèmes complexes tout en apprenant à collaborer 
              efficacement en équipe.
            </p>
          </div>

          <div className="future-perspectives">
            <h3>Perspectives d'Avenir</h3>
            <p>
              Cette expérience m'a donné une vision plus claire de mon parcours professionnel 
              et a confirmé mon aspiration à poursuivre dans le développement web. Les compétences 
              acquises en BTS SIO SLAM ont trouvé leur application concrète, et ce stage a renforcé 
              ma détermination à continuer mon développement dans ce domaine passionnant.
            </p>
          </div>
        </div>

       
      </section>

      <footer className="stage-footer">
        <p>Benjamin DASSONVILLE</p>
        <a href="/word/Rapport de Stage.pdf" target="_blank" rel="noopener noreferrer">
          📎 Ouvrir mon rapport de stage (PDF)
        </a>
        <p>Dernière mise à jour : 29 octobre 2025</p>
      </footer>
    </div>
  );
};

export default Stage1erAnnee;
