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

const mobDrop = () => {  
  windowList.classList.toggle('active-mobdrop');
 
};
itemFirst.addEventListener('click', mobDrop);




// const dropliste = () => {  
//   droplist.classList.toggle('active-droplist');  
// };

var droplists = document.querySelectorAll('.window__droplist');
var windowMintitles = document.querySelectorAll('.window__mintitle');
var windowDropitems  = document.querySelectorAll('.window__dropitem'); 
var windowDocsTitle = document.querySelector('.window__docs-title');
var windowItemFirst = document.querySelector('.window__item-first');
var activeItemTitle = document.querySelector('.active-item-title');



windowMintitles.forEach( function(windowMintitle){
  windowMintitle.addEventListener('click',function() {
    this.parentElement.classList.toggle('active-droplist');
   
  });
});


windowMintitles.forEach( function(windowMintitle){
  // windowMintitle.addEventListener('click',function() {
  //   var aItemText = activeItemTitle.textContent; 
  //   windowItemFirst.textContent = aItemText;
    
  // });
  windowMintitle.addEventListener('change', function() {
    alert()
  })

});




windowDropitems.forEach( function(windowDropitem){
  windowDropitem.addEventListener('click',function() {
      var DropItemText = windowDropitem.innerHTML;
      windowDocsTitle.innerHTML = DropItemText;
      windowItemFirst.textContent =  activeItemTitle.textContent;
  });
});
