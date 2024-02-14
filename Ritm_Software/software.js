// Swiper слайдер
const block2Swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    freeMode: {
        enabled: true,
        sticky: true,
    },
    keyboard: true,
    speed: 600,
    spaceBetween: 30
});

let landscape = window.matchMedia("(orientation: landscape)");
landscape.addListener(function(e) {
    if(e.matches) {
        block2Swiper = new Swiper('.swiper', {spaceBetween: 30});
    }
    else {
        block2Swiper = new Swiper('.swiper', {spaceBetween: 30});
    }
});

// GSAP Изменение прозрачности текста при прокрутке
gsap.to('.block1-text', {
    opacity: 0,
    scrollTrigger: {
        trigger: '.block1-text',
        start: 'center center',
        end: 'center top',
        scrub: true
    }
});

let changingOpacityTexts = gsap.utils.toArray('.changing-opacity');
gsap.matchMedia().add('(orientation: landscape) and (min-width: 769px)', () => {
    changingOpacityTexts.forEach(changingOpacityText => {
        gsap.fromTo(changingOpacityText, {opacity: 1}, {
            opacity: 0,
            scrollTrigger: {
                trigger: changingOpacityText,
                start: 'center center',
                end: 'center top',
                scrub: true
            }
        });
        gsap.fromTo(changingOpacityText, {opacity: 0}, {
            opacity: 1,
            scrollTrigger: {
                trigger: changingOpacityText,
                start: 'center bottom',
                end: 'center center',
                scrub: true
            }
        });
    });
});

gsap.matchMedia().add('(orientation: portrait), (max-width: 768.9px)', () => {
    changingOpacityTexts.forEach(changingOpacityText => {
        gsap.fromTo(changingOpacityText, {opacity: 0}, {
            opacity: 1,
            scrollTrigger: {
                trigger: changingOpacityText,
                start: 'center bottom',
                end: 'center center',
                scrub: true
            }
        });
    });
});

// GSAP Элементы в шапке меняют цвет
gsap.fromTo('header', {backgroundColor: 'rgba(237, 237, 237, 0.1)'}, {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    scrollTrigger: {
        trigger: ".path",
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('header', {backgroundColor: 'rgba(0, 0, 0, 0.1)'}, {
    backgroundColor: 'rgba(237, 237, 237, 0.1)',
    scrollTrigger: {
        trigger: '.block2',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.header__logo svg path', {fill: 'rgb(5, 15, 32)'}, {
    fill: 'white',
    scrollTrigger: {
        trigger: ".path",
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.header__logo svg path', {fill: 'white'}, {
    fill: 'rgb(5, 15, 32)',
    scrollTrigger: {
        trigger: '.block2',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__spec-button svg path', {stroke: 'rgba(0, 0, 0, 0.5)'}, {
    stroke: 'rgb(227, 227, 227)',
    scrollTrigger: {
        trigger: ".path",
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__spec-button svg path', {stroke: 'rgb(227, 227, 227)'}, {
    stroke: 'rgba(0, 0, 0, 0.5)',
    scrollTrigger: {
        trigger: '.block2',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.matchMedia().add('(max-width: 768.9px)', () => {
    gsap.fromTo('nav', {backgroundColor: 'rgb(243, 243, 245)'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: ".path",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('nav', {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'rgb(243, 243, 245)',
        scrollTrigger: {
            trigger: '.block2',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.menu__icon', {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'white',
        scrollTrigger: {
            trigger: ".path",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.menu__icon', {backgroundColor: 'white'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: '.block2',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.menu__icon span', {backgroundColor: 'rgb(243, 243, 245)'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: ".path",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.menu__icon span', {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'rgb(243, 243, 245)',
        scrollTrigger: {
            trigger: '.block2',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
});

let headerLinks = gsap.utils.toArray('nav a');
headerLinks.forEach(headerLink => {
    gsap.fromTo(headerLink, {color: 'rgb(5, 15, 32)'}, {
        color: 'white',
        scrollTrigger: {
            trigger: ".path",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo(headerLink, {color: 'white'}, {
        color: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: '.block2',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
});

let headerLinksUnderline = gsap.utils.toArray('nav a div');
headerLinksUnderline.forEach(headerLinkUnderline => {
    gsap.fromTo(headerLinkUnderline, {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'white',
        scrollTrigger: {
            trigger: ".path",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo(headerLinkUnderline, {backgroundColor: 'white'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: '.block2',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
});

gsap.fromTo('.spec-and-form__spec-button', {color: 'rgba(0, 0, 0, 0.5)'}, {
    color: 'rgba(255, 255, 255, 0.5)',
    scrollTrigger: {
        trigger: ".path",
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__spec-button', {color: 'rgba(255, 255, 255, 0.5)'}, {
    color: 'rgba(0, 0, 0, 0.5)',
    scrollTrigger: {
        trigger: '.block2',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__spec-box', {backgroundColor: 'rgba(0, 0, 0, 0.2)'}, {
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    scrollTrigger: {
        trigger: ".path",
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__spec-box', {backgroundColor: 'rgba(255, 255, 255, 0.07)'}, {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    scrollTrigger: {
        trigger: '.block2',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__form-button', {backgroundColor: 'rgba(0, 0, 0, 0.1)', color: 'rgb(37, 37, 37)'}, {
    backgroundColor: 'rgba(174, 174, 174, 0.1)',
    color: 'white',
    scrollTrigger: {
        trigger: ".path",
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__form-button', {backgroundColor: 'rgba(174, 174, 174, 0.1)', color: 'white'}, {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: 'rgb(37, 37, 37)',
    scrollTrigger: {
        trigger: '.block2',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

// Перемещение блока "fixed-block" при прокрутке
gsap.fromTo('.fixed-block', {yPercent: 0}, {
    yPercent: 300,
    ease: 'none',
    scrollTrigger: {
        trigger: ".path",
        start: "top top",
        end: "bottom bottom",
        scrub: true
    }
});

// GSAP Появление / исчезновение изображений при прокрутке
gsap.fromTo('.img-box__block3-sw', {opacity: 1}, {
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
        trigger: ".block4",
        start: "top bottom",
        end: "top center",
        scrub: true
    }
});

gsap.fromTo('.img-box__block4-sw', {opacity: 1}, {
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
        trigger: ".block5",
        start: "top bottom",
        end: "top center",
        scrub: true
    }
});

gsap.fromTo('.img-box__block4-sw', {opacity: 0}, {
    opacity: 1,
    ease: 'none',
    scrollTrigger: {
        trigger: ".block4",
        start: "top center",
        end: "top top",
        scrub: true
    }
});

gsap.fromTo('.img-box__block5-sw', {opacity: 0}, {
    opacity: 1,
    ease: 'none',
    scrollTrigger: {
        trigger: ".block5",
        start: "top center",
        end: "top top",
        scrub: true
    }
});

gsap.matchMedia().add('(orientation: landscape) and (min-width: 769px)', () => {
    gsap.fromTo('.img-box__block6-sw', {xPercent: -31, yPercent: 100}, {
        display: 'block',
        yPercent: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block6",
            start: "top center",
            end: "top top",
            scrub: true
        }
    });
});

gsap.matchMedia().add('(orientation: portrait) and (min-height: 540px), (max-width: 768.9px) and (min-height: 540px)', () => {
    gsap.fromTo('.img-box__block6-sw', {xPercent: -50, yPercent: 100}, {
        display: 'block',
        yPercent: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block6",
            start: "top center",
            end: "top top",
            scrub: true
        }
    });
});

gsap.matchMedia().add('(max-width: 768.9px) and (max-height: 539.9px)', () => {
    gsap.fromTo('.fixed-block__img-box', {opacity: 1}, {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block6",
            start: "top center",
            end: "top top",
            scrub: true
        }
    });
});