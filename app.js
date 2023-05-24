const primaryNav = document.querySelector('.nav-link');
const navToggle = document.getElementById('menu-icon');

navToggle.addEventListener('click', ()=> {
  primaryNav.classList.toggle("active");
})