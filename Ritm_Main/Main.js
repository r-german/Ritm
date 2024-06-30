// GSAP Заголовки
gsap.to('.block1 .container', {
    opacity: 0,
    scrollTrigger: {
        trigger: '.block1 .container',
        start: 'center center',
        end: 'center top',
        scrub: true
    }
});

gsap.fromTo('.title', {opacity: 1}, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.title',
        start: 'center center',
        end: 'center top',
        scrub: true
    }
});
gsap.fromTo('.title', {opacity: 0}, {
    opacity: 1,
    scrollTrigger: {
        trigger: '.title',
        start: 'center bottom',
        end: 'center center',
        scrub: true
    }
});

// GSAP Элементы в шапке меняют цвет
gsap.fromTo('header', {backgroundColor: 'rgba(0, 0, 0, 0.1)'}, {
    backgroundColor: 'rgba(237, 237, 237, 0.1)',
    scrollTrigger: {
        trigger: '.block5',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.to('header', {
    display: 'none',
    scrollTrigger: {
        trigger: 'footer',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.header__logo svg path', {fill: 'white'}, {
    fill: 'rgb(5, 15, 32)',
    scrollTrigger: {
        trigger: '.block5',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__spec-button svg path', {stroke: 'rgb(227, 227, 227)'}, {
    stroke: 'rgba(0, 0, 0, 0.5)',
    scrollTrigger: {
        trigger: '.block5',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.matchMedia().add('(max-width: 768.9px)', () => {
    gsap.fromTo('nav', {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'rgb(243, 243, 245)',
        scrollTrigger: {
            trigger: '.block5',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.menu__icon', {backgroundColor: 'white'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: '.block5',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.menu__icon span', {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'rgb(243, 243, 245)',
        scrollTrigger: {
            trigger: '.block5',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
});

let headerLinks = gsap.utils.toArray('nav a');
headerLinks.forEach(headerLink => {
    gsap.fromTo(headerLink, {color: 'white'}, {
        color: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: '.block5',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
});

let headerLinksUnderline = gsap.utils.toArray('nav a div');
headerLinksUnderline.forEach(headerLinkUnderline => {
    gsap.fromTo(headerLinkUnderline, {backgroundColor: 'white'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: '.block5',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
});

gsap.fromTo('.spec-and-form__spec-button', {color: 'rgba(255, 255, 255, 0.5)'}, {
    color: 'rgba(0, 0, 0, 0.5)',
    scrollTrigger: {
        trigger: '.block5',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__spec-box', {backgroundColor: 'rgba(255, 255, 255, 0.07)'}, {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    scrollTrigger: {
        trigger: '.block5',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__form-button', {backgroundColor: 'rgba(174, 174, 174, 0.1)', color: 'white'}, {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: 'rgb(37, 37, 37)',
    scrollTrigger: {
        trigger: '.block5',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

// Окончание видео -> появление заголовка
let videoTitle = document.querySelector('.block5 h2');
let video = document.querySelector('.block5 video');
let restartVideoBtn = document.querySelector('.restart-video');
let block6 = document.querySelector('.block6 .container');

video.style.cssText = `transform: translateY(${-videoTitle.offsetHeight}px);`;
restartVideoBtn.style.cssText = `transform: translateY(${-videoTitle.offsetHeight}px);`;
block6.style.cssText = `transform: translateY(${-videoTitle.offsetHeight}px);`;

video.addEventListener('ended', function(){
    video.style.cssText = 'transform: translateY(0);';
    restartVideoBtn.style.cssText = 'transform: translateY(0);';
    block6.style.cssText = 'transform: translateY(0);';
    videoTitle.style.cssText = 'opacity: 1; visibility: visible;';
});

// Перезапуск видео
restartVideoBtn.addEventListener('click', function(){
    video.currentTime = 0;
    video.play();
});

// IntersectionObserver для видео
var options2 = {
    threshold: 0.99
};
var callback2 = function(entries2) {
    entries2.forEach(entry2 => {
        if (entry2.isIntersecting) {
            video.play();
            observer2.unobserve(video);
        }
    });
};
var observer2 = new IntersectionObserver(callback2, options2);
observer2.observe(video);

// IntersectionObserver для карточек товара
if (window.matchMedia("(max-height: 160.9px)").matches) {
    var options = {threshold: 0.1};
}
else if (window.matchMedia("(max-width: 480.9px), (max-height: 480.9px)").matches) {
    options = {threshold: 0.2};
}
else {
    options = {threshold: 0.4};
}
var callback = function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('_transform');
        }
        else {
            entry.target.classList.remove('_transform');
        }
    });
};
var observer = new IntersectionObserver(callback, options);
var animItems = document.querySelectorAll('.anim-item');
animItems.forEach(animItem => {
    observer.observe(animItem);
});

// IntersectionObserver для заголовка шестого блока
if (window.matchMedia("(max-width: 480.9px), (max-height: 480.9px)").matches) {
    var options3 = {threshold: 0.7};
}
else {
    options3 = {threshold: 0.99};
}
var callback3 = function(entries3) {
    entries3.forEach(entry3 => {
        if (entry3.isIntersecting) {
            entry3.target.classList.add('_transform');
            observer3.unobserve(document.querySelector('.block6__title'));
        }
    });
};
var observer3 = new IntersectionObserver(callback3, options3);
observer3.observe(document.querySelector('.block6__title'));

// Спойлер
const spButton = document.querySelector(".sp-button");
let spContent = document.querySelector(".sp-content");
spButton.addEventListener("click", function() {
    spButton.classList.toggle("_open");
    if (spButton.classList.contains("_open")){
        spContent.style.maxHeight = spContent.scrollHeight + "px";
    }
    else {
        spContent.style.maxHeight = "";
    }
});

// Контакты
document.querySelector('.nav__contacts').addEventListener("click", function(e) {
    gsap.to(smoother, {
        scrollTop: smoother.offset(document.querySelector('.footer__footer-contacts'), "bottom bottom"),
        duration: 1,
    });
    e.preventDefault();
});

window.addEventListener("load", () => {
    if (window.location.href.includes('#contacts')) {
        gsap.to(smoother, {
            scrollTop: smoother.offset(document.querySelector('.footer__footer-contacts'), "bottom bottom"),
            duration: 1,
        });
    }
});