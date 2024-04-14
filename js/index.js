// Redirecionando para outras páginas
function goToForm() {
    window.location.href = 'pages/formulario.html';
}

function goToLDG() {
    window.location.href = 'https://open.spotify.com/intl-pt/album/1lcaJxO3cm4fkXjbBDJoaa';
}

// Menu responsivo
const menuNavBar = document.getElementById("nav-menu");
const menuLinks = document.querySelectorAll(".links"); // Opções do menu

menuLinks.forEach((element) => { // Fechar o menu quando uma opção for clicada
    element.addEventListener("click", () => {
        closeMenu();
    });
});

// Funções de interação com o menu
function closeMenu(){
    let menuNavBarWidth = menuNavBar.offsetWidth;
    menuNavBar.style.left = `${0 - menuNavBarWidth}px`;
}

function openMenu(){
    menuNavBar.style.left = `0px`;
}

// Easter-egg do mario
const mario = document.querySelector('.mario');
let marioJumping = false;

mario.addEventListener("click", () => {
    if (!marioJumping) {
        let marioSfx = new Audio('../audio/mario-jump.mp3');
        marioSfx.play();
    }
    marioJumping = true;
    mario.classList.add("mario-jumping");
    mario.addEventListener("animationend", () => {
        mario.classList.remove("mario-jumping");
        marioJumping = false;
    }, false);
});