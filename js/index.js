let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu(){
    let menuListNewHeight = menuList.style.maxHeight === "0px" ? "300px" : "0px";
    menuList.style.maxHeight = menuListNewHeight;
}

function goToForm() {
    window.location.href = 'pages/formulario.html';
}