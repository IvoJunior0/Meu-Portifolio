const menuNavBar = document.getElementById("nav-menu");
const menuLinks = document.querySelectorAll(".links");

function closeMenu(){
    let menuNavBarWidth = menuNavBar.offsetWidth;
    menuNavBar.style.left = `${0 - menuNavBarWidth}px`;
}

function openMenu(){
    menuNavBar.style.left = `0px`;
}

menuLinks.forEach((element) => {
    element.addEventListener("click", () => {
        closeMenu();
    });
});