// Gestionnaire de thème pour le portfolio
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.querySelector('body');
    
    // Fonction pour initialiser le thème
    function initTheme() {
        // Vérifie s'il y a un thème enregistré
        const savedTheme = localStorage.getItem('theme');
        
        // Par défaut, le thème est sombre (comme demandé)
        if (savedTheme === 'light') {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeSwitch.checked = false;
        } else {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            themeSwitch.checked = true;
        }
    }
    
    // Exécute l'initialisation du thème
    initTheme();
    
    // Gestion du changement de thème
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            // Thème sombre
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            // Thème clair
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        }
    });
});
