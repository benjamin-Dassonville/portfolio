// Contrôleur d'animations pour le portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Récupère toutes les sections
    const sections = document.querySelectorAll('.section-container');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Intersection Observer pour animer les sections quand elles entrent dans la vue
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si la section entre dans la vue
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Ajoute une animation aux éléments internes de la section
                const progressBars = entry.target.querySelectorAll('.progress-fill');
                progressBars.forEach(bar => {
                    // Animation progressive des barres de compétences
                    setTimeout(() => {
                        bar.style.width = bar.getAttribute('style').split(':')[1];
                    }, 200);
                });
                
                // Met en surbrillance le lien de navigation correspondant
                updateActiveNavLink(entry.target.id);
            }
        });
    }, { threshold: 0.2 }); // Observe quand 20% de la section est visible
    
    // Applique l'observer à toutes les sections
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Animation lors du clic sur un lien de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Récupère l'ID de la section cible
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Animation de défilement
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Ajuste pour la hauteur de la navigation
                behavior: 'smooth'
            });
            
            // Met à jour le lien actif
            updateActiveNavLink(targetId);
        });
    });
    
    // Fonction pour mettre à jour le lien de navigation actif
    function updateActiveNavLink(sectionId) {
        navLinks.forEach(link => {
            // Supprime la classe active de tous les liens
            link.classList.remove('active');
            
            // Ajoute la classe active au lien correspondant à la section actuelle
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Animation spéciale pour les cartes de projets
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('scale-in');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('scale-in');
        });
    });
    
    // Animer automatiquement la première section visible
    const firstSection = document.querySelector('#about');
    if (firstSection) {
        firstSection.classList.add('active');
    }
});
