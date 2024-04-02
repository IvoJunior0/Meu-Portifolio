const menuNavBar = document.getElementById("nav-menu");
const menuLinks = document.querySelectorAll(".links");

menuLinks.forEach((element) => {
    element.addEventListener("click", () => {
        closeMenu();
    });
});

function goToForm() {
    window.location.href = 'pages/formulario.html';
}

function closeMenu(){
    let menuNavBarWidth = menuNavBar.offsetWidth;
    menuNavBar.style.left = `${0 - menuNavBarWidth}px`;
}

function openMenu(){
    menuNavBar.style.left = `0px`;
}