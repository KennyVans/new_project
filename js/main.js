const spanNavMenu = document.querySelector('.span-nav-menu');
const menuClose = document.querySelector('.menu-close');
const navMenuList = document.querySelector('.nav-menu-list');
const menuShadow = document.querySelector('.menu--close');
// выше вписываем то с чем работаем
// для менюшки закрыть открыть 
spanNavMenu.addEventListener('click',()=>{
    navMenuList.classList.toggle('menu-list-open')
    menuShadow.classList.toggle('menu--open')
});
menuClose.addEventListener('click',()=>{
    navMenuList.classList.remove('menu-list-open')
    menuShadow.classList.remove('menu--open')
});