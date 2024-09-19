// MENU ICON NAVBAR
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });

    // STICKY NAVBAR    
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', scrollPosition > 100);

    // REMOVE MENU ICON NAVBAR WHEN CLICK NAVBAR LINK (SCROLL)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// DARK LIGHT MODE
const darkModeIcon = document.querySelector('#darkMode-icon');
const logo = document.getElementById('logo');
const logote = document.getElementById('logote');

darkModeIcon.addEventListener('click', () => {
    const isSun = darkModeIcon.classList.contains('bx-sun');
    darkModeIcon.classList.toggle('bx-moon', isSun);
    darkModeIcon.classList.toggle('bx-sun', !isSun);
    document.body.classList.toggle('dark-mode');
    updateLogo(isSun);
    updateLogote(isSun);
});

// Função para atualizar a logo
function updateLogo(isSun) {
    if (isSun) {
        logo.style.backgroundImage = "url('../src/image/logo.png')"; // Modo Claro
    } else {
        logo.style.backgroundImage = "url('../src/image/logo_modoescuro.png')"; // Modo Escuro
    }
}

function updateLogote(isSun) {
    if (isSun) {
        logote.style.backgroundImage = "url('../src/image/logotechempiremodoclaro.png')"; // Modo Claro
    } else {
        logote.style.backgroundImage = "url('../src/image/logotechempire.png')"; // Modo Escuro
    }
}

// SCROLL REVEAL
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
