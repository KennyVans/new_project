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
// owl каручель ниже
$('.owl-carousel.first-carousel')
.owlCarousel({ 
    autoplay:true, 
    autoplayTimeout: 5500, 
    autoplaySpeed: 3000, 
    loop: true, 
    responsive:{ 
        0:{ 
            items:1 
        }, 
        1100:{ 
            items:2
        } 
    } 
})
// стайл для  карусели с учителями 
// $(".owl-carousel.third-carousel").owlCarousel({
//     loop: true,     
//     autoplay: true, 
//     autoplayTimeout: 4000,
//     autoplaySpeed: 3000,
//     nav: true,      
//     responsive: { 
//         0:{ 
//             items:1
//         }, 
//         1100:{ 
//             items:1
//         } 
//     } 
// });
// стайл для второй карусели 
$(".owl-carousel.owl-carousel-second").owlCarousel({
    loop: true,     
    autoplay: true, 
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    nav: true,      
    dots: true , 
    responsive: { 
        0:{ 
            items:1
        }, 
        1100:{ 
            items:1
        } 
    } 
});
