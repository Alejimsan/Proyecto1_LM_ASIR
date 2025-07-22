// JS POPUP COOKIES

const popup = document.getElementById("cookiePopup");
const btn = document.getElementById("acceptCookies");
//Cuando no hay cookies aceptadas
if(!localStorage.cookiesAccepted){
    popup.classList.add("show");
}

btn.addEventListener("click", function(){
    localStorage.cookiesAccepted = "true";
    popup.classList.remove("show");
});




// JS MENU RESPONSIVE

let lanzador = "#enlace-menu";
let desplegable = "#menu";
let despliegaClase = "menu-desplegado";

function nav(){
    let lanz = document.querySelector(lanzador);
    lanz.addEventListener("click",despliegaMenu);

}

function despliegaMenu(){
    let despl = document.querySelector(desplegable);
    despl.classList.toggle(despliegaClase);
}


nav();