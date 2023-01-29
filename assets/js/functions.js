// Activar menu de navegación
const ACTIVE = 'active';
const navLinks = document.querySelectorAll('.nav-link');

const linkInicio = document.querySelector('#btn-inicio');
const linkAcercaDe = document.querySelector('#btn-acerca-de');
const linkHabilidades = document.querySelector('#btn-habilidades');
const linkContacto = document.querySelector('#btn-contacto');

const addClassActive = (index) => {
  navLinks.forEach(item => item.classList.remove(ACTIVE));
  navLinks[index].classList.add(ACTIVE);
};

linkInicio.addEventListener('click', () => addClassActive(0));
linkAcercaDe.addEventListener('click', () => addClassActive(1));
linkHabilidades.addEventListener('click', () => addClassActive(2));
linkContacto.addEventListener('click', () => addClassActive(3));

// Mostrar más información
const moreInfoBtn = document.querySelector('.view-more');
const sectionHide = document.querySelector('.hide-section');

moreInfoBtn.addEventListener('click', () => {
  moreInfoBtn.classList.remove(ACTIVE);
  sectionHide.classList.add(ACTIVE);
});

// Mostrar menos información
const lessInfoBtn = document.querySelector('.view-less');

lessInfoBtn.addEventListener('click', () => {
  sectionHide.classList.remove(ACTIVE);
  moreInfoBtn.classList.add(ACTIVE);
});

// Mostrar / Ocultar menu en disppositivos móviles
const menuBtn = document.querySelector('.show-menu');
const navbarMenu = document.querySelector('.navbar-nav');

menuBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle(ACTIVE);
});