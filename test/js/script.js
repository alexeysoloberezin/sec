

$(document).ready(function(){
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__list');
  const body = document.querySelector('body');
  const itemFirst = document.querySelector('.window__item-first');
  const windowList = document.querySelector('.window__list');
  
   
  const openBurgerMenu = () => {  
    burger.classList.toggle('active-burger');
    menu.classList.toggle('active-menu');
    body.classList.toggle('fixed');
  };
  burger.addEventListener('click', openBurgerMenu);
  
  


  $('.slider').slick({
    swipe: false,
    infinite : false,
    fade: true,   
    
    nextArrow: $('.slick-next'),
  });  
});

