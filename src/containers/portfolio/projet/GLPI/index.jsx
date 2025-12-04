import React, { useEffect } from "react";
import "./styles.scss";
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

import debianIcon from "../../../../assets/icons/Debian_ico.png";
import apacheIcon from "../../../../assets/icons/Logo Apache.png";
import phpIcon from "../../../../assets/icons/php.png";
import mariadbIcon from "../../../../assets/icons/mariadb.jpeg";
import tlsIcon from "../../../../assets/icons/Logo TLS.jpg";
import glpiImage1 from "../../../../assets/images/glpi-screen-1.png";
import glpiImage2 from "../../../../assets/images/agent_inventaire_screen.png";

const GLPIProject = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(()=>{Prism.highlightAll();},[]);

  return (
    <div className="glpi-container">
      <h1 className="main-title">
        GLPI — Installation & Configuration sous Debian 12
      </h1>

      <nav className="navigation">
        <button onClick={() => scrollToSection("contexte")}>Contexte</button>
        <button onClick={() => scrollToSection("realisations")}>Réalisations</button>
        <button onClick={() => scrollToSection("competences")}>Compétences</button>
        <button onClick={() => scrollToSection("conclusion")}>Conclusion</button>
      </nav>

      <div className="realisation-principale">
        <div className="realisation-principale__content">
          <h3>Installation complète de GLPI 10 sur Debian 12</h3>
          <p>
            Mise en place complète d’un serveur GLPI en environnement Debian 12 :
            LAMP, configuration Apache, TLS, scripts de sauvegarde et agents.
          </p>
          <p>
            Le guide pas-à-pas en PDF est disponible à télécharger et illustre la
            procédure avec captures d’écran et extraits de configuration.
          </p>
        </div>
          <div className="realisation-principale__image">
          <img className="screenshot" src={glpiImage1} alt="GLPI - Dashboard screenshot" loading="lazy" />
        </div>
      </div>

      <section id="contexte">
        <h2>Contexte du projet</h2>
        <div className="context-details">
          <div className="context-introduction">
            <p>
              Projet de cours (BTS SIO) — Déploiement de GLPI v10 sur Debian 12,
              sécurisation, sauvegarde et inventaire. Le guide PDF accompagne la
              mise en place pas à pas.
            </p>
            <p>
              Période : Cours – Décembre 2025 — Environnement : Debian 12
              (Bookworm), Apache2, PHP 8.1+, MariaDB 10.x
            </p>
          </div>

          <div className="technologies">
            <h3>Technologies utilisées :</h3>
            <ul className="tech-list">
              {[
                { icon: debianIcon, label: 'Debian 12' },
                { icon: apacheIcon, label: 'Apache' },
                { icon: phpIcon, label: 'PHP 8.1+' },
                { icon: mariadbIcon, label: 'MariaDB' },
                { icon: tlsIcon, label: "TLS / Let's Encrypt" },
              ].map((t) => (
                <li key={t.label} aria-label={t.label}>
                  <img className="tech-icon" src={t.icon} alt={t.label} />
                  {t.label}
                </li>
              ))}
            </ul>
            {/* tools-list removed as not relevant to the GLPI project tech stack */}
          </div>
        </div>

        {/* moved to realisations */}

      </section>

      <section id="prerequis">
        <h2>Prérequis</h2>
        <ul>
          <li>Debian 12 (accès root/sudo)</li>
          <li>Apache2 (ou Nginx), MariaDB, PHP 8.1+</li>
          <li>
            Extensions PHP : pdo_mysql, mbstring, intl, xml, zip, curl, gd, json
          </li>
          <li>Nom de domaine + certbot pour TLS</li>
        </ul>
      </section>

      <section id="realisations">
        <h2>Réalisations / Installation (extrait)</h2>
        <div className="realisation">
          <h3>1) Mise à jour</h3>
          <pre className="code-block"><code className="language-bash">sudo apt update && sudo apt upgrade -y</code></pre>

          <h3>2) LAMP</h3>
          <pre className="code-block"><code className="language-bash">sudo apt install apache2 mariadb-server php php-mysql php-gd php-xml php-mbstring php-curl -y</code></pre>

          <h3>3) MariaDB</h3>
            <pre className="code-block"><code className="language-bash">{`sudo mysql -u root
  CREATE DATABASE glpi CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
  CREATE USER 'glpiuser'@'localhost' IDENTIFIED BY 'strong_password';
  GRANT ALL PRIVILEGES ON glpi.* TO 'glpiuser'@'localhost';
  FLUSH PRIVILEGES;
  exit`}</code></pre>

          <h3>4) GLPI</h3>
            <pre className="code-block"><code className="language-bash">{`cd /tmp
  wget https://github.com/glpi-project/glpi/releases/latest/download/glpi-10.0.0.tgz
  tar -xvf glpi-10.0.0.tgz
  sudo mv glpi /var/www/html/glpi
  sudo chown -R www-data:www-data /var/www/html/glpi
  sudo chmod -R 755 /var/www/html/glpi`}</code></pre>

          <h3>5) Apache virtualhost</h3>
            <pre className="code-block"><code className="language-bash">{`sudo tee /etc/apache2/sites-available/glpi.conf <<EOF
      <VirtualHost *:80>
        ServerName glpi.example.com
        DocumentRoot /var/www/html/glpi
        <Directory /var/www/html/glpi>
          Require all granted
          AllowOverride All
        </Directory>
        ErrorLog /var/log/apache2/glpi_error.log
        CustomLog /var/log/apache2/glpi_access.log combined
      </VirtualHost>
      EOF
      sudo a2ensite glpi.conf
      sudo a2enmod rewrite
      sudo systemctl reload apache2`}</code></pre>

          <h3>6) TLS</h3>
            <pre className="code-block"><code className="language-bash">{`sudo apt install certbot python3-certbot-apache -y
  sudo certbot --apache -d glpi.example.com`}</code></pre>
        </div>

        <div className="realisation">
          <h3>Sauvegardes & automatisation</h3>
          <p>Backups pour la base et fichiers, rotation logs et scripts de restauration.</p>
            <pre className="code-block"><code className="language-bash">{`sudo mkdir -p /var/backups/glpi
          # Backup daily at 02:00
          0 2 * * * mysqldump -u glpiuser -p'STRONG_PASSWORD' glpi | gzip > /var/backups/glpi/glpi-$(date +"%F").sql.gz
          # Save files
          0 3 * * * tar -czf /var/backups/glpi-files-$(date +"%F").tar.gz /var/www/html/glpi/files`}</code></pre>
        </div>

        <div className="realisation">
          <h3>Agents & Inventaire</h3>
          <p>Utilisation de FusionInventory/OCS pour inventaire des postes et tenue d'un inventaire centralisé via GLPI.</p>
          <pre className="code-block"><code className="language-bash">{`sudo wget https://github.com/fusioninventory/fusioninventory-agent/releases/latest/download/fusioninventory-agent.deb
sudo dpkg -i fusioninventory-agent.deb
sudo systemctl enable --now fusioninventory-agent
# Update /etc/fusioninventory/agent.cfg with server URL; test with --debug --once`}</code></pre>
          <div className="realisation__image">
            <img className="screenshot" src={glpiImage2} alt="GLPI - Agent & Inventaire screenshot" loading="lazy" />
          </div>
        </div>

      </section>

      <section id="configuration">
        <h2>Configuration & sécurité</h2>
        <p>Paramètres PHP recommandés et permissions sur les fichiers.</p>
        <pre className="code-block"><code className="language-bash">{`memory_limit = 256M
      upload_max_filesize = 50M
      post_max_size = 50M
      max_execution_time = 300
      date.timezone = Europe/Paris`}</code></pre>
      </section>

      {/* Sauvegardes & Agents moved into `realisations` */}

      <section id="competences">
        <h2>Compétences acquises</h2>
        <table className="competences-table">
          <tbody>
            <tr>
              <td>Administration Debian 12</td>
              <td>✅</td>
              <td>Gestion des paquets, services, sécurité et comptes administrateurs</td>
            </tr>
            <tr>
              <td>Stack Web (Apache/PHP/MariaDB)</td>
              <td>✅</td>
              <td>Installation LAMP, configuration d'hôtes virtuels et PHP</td>
            </tr>
            <tr>
              <td>Sécurité & sauvegardes</td>
              <td>✅</td>
              <td>SSL, firewall, backups automatisés et tests de restauration</td>
            </tr>
            <tr>
              <td>Inventaire & Agents</td>
              <td>✅</td>
              <td>Configuration d'agents FusionInventory, inventaire du parc</td>
            </tr>
            <tr>
              <td>Documentation & automation</td>
              <td>✅</td>
              <td>Création d'un guide d'installation réutilisable et scripts de sauvegarde</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="resources">
        <h2>Ressources</h2>
        <ul>
          <li>
            <a
              href="https://glpi-project.org/fr/telecharger-glpi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site officiel
            </a>
          </li>
          <li>
            <a
              href="https://github.com/glpi-project/glpi/releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Releases
            </a>
          </li>
          <li>
            <a
              href="/word/Installer GLPI 10 sous Debian 12.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Télécharger le guide (PDF)
            </a>
          </li>
        </ul>
      </section>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          Installation, sécurisation et mise en production d'une solution de
          gestion de parc.
        </p>
      </section>

      <footer className="glpi-footer">
        <p>Benjamin DASSONVILLE</p>
        <div className="glpi-actions">
          <a
            className="download-btn"
            href="/word/Installer GLPI 10 sous Debian 12.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            ⤓ Télécharger le PDF
          </a>
          <a
            className="open-btn"
            href="/word/Installer GLPI 10 sous Debian 12.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            📎 Ouvrir le guide (PDF)
          </a>
        </div>
        <p>Dernière mise à jour : 04 décembre 2025</p>
      </footer>
    </div>
  );
};

export default GLPIProject;
