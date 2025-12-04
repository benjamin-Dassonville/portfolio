import React from "react";
import "./styles.scss";

const GLPIProject = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="glpi-container">
      <h1 className="main-title">
        GLPI — Installation & Configuration sous Debian 12
      </h1>

      <nav className="navigation">
        <button onClick={() => scrollToSection("contexte")}>Contexte</button>
        <button onClick={() => scrollToSection("prerequis")}>Prérequis</button>
        <button onClick={() => scrollToSection("installation")}>
          Installation
        </button>
        <button onClick={() => scrollToSection("configuration")}>
          Configuration
        </button>
        <button onClick={() => scrollToSection("sauvegarde")}>
          Sauvegardes
        </button>
        <button onClick={() => scrollToSection("agents")}>Agents</button>
        <button onClick={() => scrollToSection("competences")}>
          Compétences
        </button>
        <button onClick={() => scrollToSection("resources")}>Ressources</button>
        <button onClick={() => scrollToSection("conclusion")}>
          Conclusion
        </button>
      </nav>

      <section id="contexte">
        <h2>Contexte du projet</h2>
        <p>
          Projet de cours (BTS SIO) — Déploiement de GLPI v10 sur Debian 12,
          sécurisation, sauvegarde et inventaire. Le guide PDF accompagne la
          mise en place pas à pas.
        </p>
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

      <section id="installation">
        <h2>Installation (extrait)</h2>
        <div className="realisation">
          <h3>1) Mise à jour</h3>
          <pre className="code-block">
            sudo apt update && sudo apt upgrade -y
          </pre>

          <h3>2) LAMP</h3>
          <pre className="code-block">
            sudo apt install apache2 mariadb-server php php-mysql php-gd php-xml
            php-mbstring php-curl -y
          </pre>

          <h3>3) MariaDB</h3>
          <pre className="code-block">{`sudo mysql -u root
CREATE DATABASE glpi CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
CREATE USER 'glpiuser'@'localhost' IDENTIFIED BY 'strong_password';
GRANT ALL PRIVILEGES ON glpi.* TO 'glpiuser'@'localhost';
FLUSH PRIVILEGES;
exit`}</pre>

          <h3>4) GLPI</h3>
          <pre className="code-block">{`cd /tmp
wget https://github.com/glpi-project/glpi/releases/latest/download/glpi-10.0.0.tgz
tar -xvf glpi-10.0.0.tgz
sudo mv glpi /var/www/html/glpi
sudo chown -R www-data:www-data /var/www/html/glpi
sudo chmod -R 755 /var/www/html/glpi`}</pre>

          <h3>5) Apache virtualhost</h3>
          <pre className="code-block">{`sudo tee /etc/apache2/sites-available/glpi.conf <<EOF
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
sudo systemctl reload apache2`}</pre>

          <h3>6) TLS</h3>
          <pre className="code-block">{`sudo apt install certbot python3-certbot-apache -y
sudo certbot --apache -d glpi.example.com`}</pre>
        </div>
      </section>

      <section id="configuration">
        <h2>Configuration & sécurité</h2>
        <p>Paramètres PHP recommandés et permissions sur les fichiers.</p>
        <pre className="code-block">{`memory_limit = 256M
upload_max_filesize = 50M
post_max_size = 50M
max_execution_time = 300
date.timezone = Europe/Paris`}</pre>
      </section>

      <section id="sauvegarde">
        <h2>Sauvegardes & Automatisation</h2>
        <div className="realisation">
          <h3>Backups de la base de données</h3>
          <pre className="code-block">{`sudo mkdir -p /var/backups/glpi
sudo crontab -e
# Backup daily at 02:00
0 2 * * * mysqldump -u glpiuser -p'STRONG_PASSWORD' glpi | gzip > /var/backups/glpi/glpi-$(date +"%F").sql.gz`}</pre>

          <h3>Backups des fichiers</h3>
          <pre className="code-block">{`tar -czf /var/backups/glpi-files-$(date +"%F").tar.gz /var/www/html/glpi/files`}</pre>

          <h3>Automatisation & supervision</h3>
          <ul>
            <li>
              Configurer la rotation des logs pour éviter le remplissage disque
            </li>
            <li>
              Planifier des sauvegardes régulières et tester les restorations
            </li>
          </ul>
        </div>
      </section>

      <section id="agents">
        <h2>Agents & Inventaire</h2>
        <p>Utilisation de FusionInventory/OCS pour l'inventaire.</p>
      </section>

      <section id="competences">
        <h2>Compétences acquises</h2>
        <ul>
          <li>Administration Debian 12</li>
          <li>Stack Apache/PHP/MariaDB</li>
          <li>Sauvegardes et mise en production</li>
          <li>Inventaire via agents</li>
        </ul>
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
