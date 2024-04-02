const menuNavBar = document.getElementById("nav-menu");
const menuClose = document.getElementById("menu-close");

function closeMenu(){
    let menuNavBarWidth = menuNavBar.offsetWidth;
    menuNavBar.style.left = `${0 - menuNavBarWidth}px`;
}

function openMenu(){
    menuNavBar.style.left = `0px`;
}