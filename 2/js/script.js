const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__list');
const body = document.querySelector('body');

 
const openBurgerMenu = () => {  
  burger.classList.toggle('active-burger');
  menu.classList.toggle('active-menu');
  body.classList.toggle('fixed');
};

burger.addEventListener('click', openBurgerMenu);