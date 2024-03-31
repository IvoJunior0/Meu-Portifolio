const menuNavBar = document.getElementById("nav-menu");
const menuClose = document.getElementById("menu-close");

function closeMenu(){
    let menuNavBarWidth = menuNavBar.offsetWidth;
    let menuNavBarLeft = menuNavBar.style.left;
    menuNavBar.style.left = `${parseInt(menuNavBarLeft,10) - menuNavBarWidth}px`;
    console.log(menuNavBarWidth);
    console.log(menuNavBarLeft);
    console.log("foi");
}

function openMenu(){
    menuNavBar.style.left = `0px`;
}