const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

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
            });
            const activeLink = document.querySelector(`header nav a[href*=${id}]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    const header = document.querySelector('.header');
    header.classList.toggle('sticky', scrollPosition > 100);

    if (menuIcon.classList.contains('bx-x')) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

const darkModeIcon = document.querySelector('#darkMode-icon');
const logo = document.getElementById('logo');

darkModeIcon.addEventListener('click', () => {
    const isSun = darkModeIcon.classList.contains('bx-sun');
    darkModeIcon.classList.toggle('bx-moon', isSun);
    darkModeIcon.classList.toggle('bx-sun', !isSun);
    document.body.classList.toggle('dark-mode');
    updateLogo(isSun);
    updateLogoTE(isSun);
});

function updateLogo(isSun) {
    if (isSun) {
        logo.style.backgroundImage = "url('../src/image/logo.png')"; 
    } else {
        logo.style.backgroundImage = "url('../src/image/logo_modoescuro.png')"; 
    }
}

function updateLogoTE(isSun) {
    const logote = document.getElementById('logote');
    if (logote) {
        logote.src = isSun 
            ? '../src/image/logotechempiremodoclaro.png' 
            : '../src/image/logotechempire.png'; 
    }
}

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
const portfolioBoxes = document.querySelectorAll(".portfolio-box");

portfolioBoxes.forEach(box => {
    box.addEventListener("click", function() {
        const title = box.getAttribute("data-title");
        const description = box.getAttribute("data-description");
        const link = box.getAttribute("data-link");
        const habilidades = box.getAttribute("data-habilidades");
        const tecnologias = box.getAttribute("data-tecnologias");
        const images = box.getAttribute("data-images");

        if (title === "Power Bi's" && images) {
            const imgArray = images.split(",");
            modalContent.innerHTML = `
                <span class="close-btn">&times;</span>
                <h2>${title}</h2>
                <p>${description}</p>
                <div class="carousel">
                    ${imgArray.map(img => `<img src="${img.trim()}" alt="Dashboard Power BI">`).join('')}
                </div>
            `;
        } else {
            modalContent.innerHTML = `
                <span class="close-btn">&times;</span>
                <h2>${title}</h2>
                <div class="meio-modal">
                    <p>${description}</p>
                    <h3>- Habilidades desenvolvidas:</h3>
                    <p>${habilidades || "—"}</p>
                    <h3>- Tecnologias utilizadas:</h3>
                    <p>${tecnologias || "—"}</p>
                    <div class="botao">
                        <a href="${link}" target="_blank">GitHub do projeto</a>
                    </div>
                </div>
            `;
        }

        modal.style.display = "block";

        const closeBtn = modalContent.querySelector('.close-btn');
        closeBtn.addEventListener('click', closeModal);
    });
});

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};
