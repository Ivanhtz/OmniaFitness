// evento para cuando cargue el documento ejecute la función eventos
document.addEventListener("DOMContentLoaded", function () {
  eventos();
  modOscuro();
});

function modOscuro() {
  const botonOscuro = document.querySelector(".dark-mode-boton");
  botonOscuro.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
}

function eventos() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.addEventListener("click", menuResponsive);
}

function menuResponsive() {
  const menuNavegacion = document.querySelector(".navegacion");

  menuNavegacion.classList.toggle("mostrar");
}
