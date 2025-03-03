// Gestionnaire de formulaire pour le portfolio
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des champs du formulaire
            const formData = new FormData(this);
            const formElements = contactForm.elements;
            
            // Validation des champs
            let isValid = true;
            let errorMessage = '';
            
            // Vérifie si tous les champs requis sont remplis
            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].hasAttribute('required') && !formElements[i].value.trim()) {
                    isValid = false;
                    errorMessage = 'Veuillez remplir tous les champs obligatoires.';
                    formElements[i].classList.add('error');
                } else if (formElements[i].type === 'email' && formElements[i].value) {
                    // Validation basique de l'email
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(formElements[i].value)) {
                        isValid = false;
                        errorMessage = 'Veuillez entrer une adresse e-mail valide.';
                        formElements[i].classList.add('error');
                    } else {
                        formElements[i].classList.remove('error');
                    }
                } else {
                    formElements[i].classList.remove('error');
                }
            }
            
            if (isValid) {
                // Simuler l'envoi du formulaire (à remplacer par un vrai envoi)
                submitForm(formData);
            } else {
                // Afficher un message d'erreur
                showNotification(errorMessage, 'error');
            }
        });
        
        // Ajouter une classe pour améliorer l'UX lorsque les champs sont en focus
        const formInputs = contactForm.querySelectorAll('.form-control');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });
    }
    
    // Fonction pour simuler l'envoi du formulaire
    function submitForm(formData) {
        // Créer un élément de notification
        showNotification('Votre message a été envoyé avec succès !', 'success');
        
        // Réinitialiser le formulaire
        contactForm.reset();
        
        // Dans une application réelle, vous enverriez les données à un backend
        console.log('Formulaire soumis avec les données:', Object.fromEntries(formData));
    }
    
    // Fonction pour afficher une notification
    function showNotification(message, type = 'info') {
        // Créer l'élément de notification
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Ajouter au DOM
        document.body.appendChild(notification);
        
        // Animation d'entrée
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Suppression automatique
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }
    
    // Styles CSS pour les notifications
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 8px;
            color: white;
            z-index: 1000;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s, transform 0.3s;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .notification.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .notification.success {
            background-color: #2ecc71;
        }
        
        .notification.error {
            background-color: #e74c3c;
        }
        
        .notification.info {
            background-color: #3498db;
        }
        
        .form-group.focused {
            position: relative;
        }
        
        .form-control.error {
            border-color: #e74c3c;
        }
    `;
    document.head.appendChild(notificationStyles);
});
