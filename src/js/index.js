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
const logobs = document.getElementById('logobs')

darkModeIcon.addEventListener('click', () => {
    const isSun = darkModeIcon.classList.contains('bx-sun');
    darkModeIcon.classList.toggle('bx-moon', isSun);
    darkModeIcon.classList.toggle('bx-sun', !isSun);
    document.body.classList.toggle('dark-mode');
    updateLogo(isSun);
    updateLogote(isSun);
    updateLogoBS(isSun);
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

function updateLogoBS(isSun) {
    if (isSun) {
        logobs.style.backgroundImage = "url('../src/image/logobananascript-claro.png')"; // Modo Escuro
    } else {
        logobs.style.backgroundImage = "url('../src/image/logobananascript.png')"; // Modo Claro
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

const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const closeModalBtn = document.getElementById("closeModalBtn");
const portfolioBoxes = document.querySelectorAll(".portfolio-box");

// Garantir que o modal esteja inicialmente fechado
window.onload = function() {
    modal.style.display = "none"; // O modal começa fechado quando a página é carregada
};

// Quando qualquer box do portfólio for clicado, abrir o modal
portfolioBoxes.forEach(box => {
    box.addEventListener("click", function() {
        // Pega os dados do projeto do item clicado
        const title = box.getAttribute("data-title");
        const description = box.getAttribute("data-description");

        // Atualiza o conteúdo do modal com as informações do projeto
        modalContent.innerHTML = `
            <span id="closeModalBtn" class="close-btn">&times;</span>
            <h2>${title}</h2>
            <p>${description}</p>
        `;
        
        // Exibe o modal
        modal.style.display = "block";
        
        // Atualiza o listener do botão de fechar
        const updatedCloseModalBtn = document.getElementById("closeModalBtn");
        updatedCloseModalBtn.addEventListener('click', closeModal);
    });
});

// Função para fechar o modal
function closeModal() {
    modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, fechá-lo também
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}
