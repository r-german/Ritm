// регистрация плагинов GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch === 1) {
    ScrollTrigger.normalizeScroll({ 
        allowNestedScroll: true,
        momentum: self => Math.min(1.5, Math.abs(self.velocityY) / 1000)
    });
}

let smoother = ScrollSmoother.create({
    smooth: 3,
    smoothTouch: 0.1,
    ignoreMobileResize: true
});

// Спецификация
const specButton = document.querySelector('.spec-and-form__spec-button');
const specBox = document.querySelector('.spec-and-form__spec-box');

specButton.addEventListener("click", function(){
    specButton.classList.toggle('_rotate');
    specBox.classList.toggle('_display');
});

// Форма и полоса прокрутки
const formButtons = document.querySelectorAll('.form-btn');
const formBlock = document.querySelector('.form-block');
const formCross = document.querySelector('.form-title__cross');
const header = document.querySelector('header');
const smoothWrapper = document.querySelector('#smooth-wrapper');

let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
window.addEventListener("resize", function() {
    scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
});

formButtons.forEach(formButton => {
    formButton.addEventListener("click", function(){
        formBlock.style.cssText = `display: flex; padding-right: ${scrollbarWidth}px;`;
        header.style.cssText += `padding-right: ${scrollbarWidth}px;`;
        smoothWrapper.style.cssText += `padding-right: ${scrollbarWidth}px;`;
        document.body.classList.add('_lock');
    });
});
formCross.addEventListener("click", function(){
    formBlock.style.cssText = '';
    header.style.cssText += 'padding-right: initial;';
    smoothWrapper.style.cssText += 'padding-right: initial;';
    if(!menuIcon.classList.contains('_active')) {
        document.body.classList.remove('_lock');
    }
});

// Бургер-меню
const menuIcon = document.querySelector('.menu__icon');
const menuNav = document.querySelector('nav');

menuIcon.addEventListener('click', function() {
    document.body.classList.toggle('_lock');
    menuIcon.classList.toggle('_active');
    menuNav.classList.toggle('_active');
});

const menuLinks = document.querySelectorAll('nav a');
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
        if (menuIcon.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            menuIcon.classList.remove('_active');
            menuNav.classList.remove('_active');
        }
    });
});