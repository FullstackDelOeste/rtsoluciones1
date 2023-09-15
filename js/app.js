const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Mostrar el primer slide al cargar la página
showSlide(currentSlide);

// Cambiar de slide cada 3 segundos (3000 milisegundos)
setInterval(nextSlide, 3000);


// JavaScript para mostrar/ocultar el menú en dispositivos móviles
const iconoMenu = document.querySelector(".icono-menu");
const menu = document.querySelector(".menu");

iconoMenu.addEventListener("click", () => {
    menu.classList.toggle("mostrar-menu");
});