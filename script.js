// On sélectionne les éléments HTML dont on a besoin
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

// On ajoute un "écouteur d'événement" sur le bouton
hamburgerBtn.addEventListener('click', () => {
    // À chaque clic, on ajoute ou on enlève la classe 'active' sur le menu
    navMenu.classList.toggle('active');
});


// --- Logique du curseur personnalisé ---
const cursorDot = document.querySelector('.cursor-dot');
const interactiveElements = document.querySelectorAll('a, button');

// Fait suivre le point à la souris
window.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

// Ajoute la classe 'hovered' quand on entre sur un élément interactif
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorDot.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
        cursorDot.classList.remove('hovered');
    });
});

// --- Logique pour l'animation d'apparition au défilement (restaurée) ---
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    {
        threshold: 0.1, // L'animation se déclenche quand 10% de la section est visible
    }
);

const allSections = document.querySelectorAll('main section');
allSections.forEach((section) => {
    observer.observe(section);
});

// --- Logique améliorée pour le menu mobile ---
const navLinks = document.querySelectorAll('#nav-menu a');

// Ferme le menu quand on clique sur un lien (sur mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});