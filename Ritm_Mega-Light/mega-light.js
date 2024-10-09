// Изменение прозрачности текста (блок1) при прокрутке
gsap.to('.block1 .container', {
    opacity: 0,
    scrollTrigger: {
        trigger: '.block2',
        start: 'center center',
        end: 'center top',
        scrub: true
    }
});

// Изменение прозрачности текста (блок3) при прокрутке
let changingOpacityTexts = gsap.utils.toArray('.block3 p');
changingOpacityTexts.forEach(changingOpacityText => {
    gsap.fromTo(changingOpacityText, {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: changingOpacityText,
            start: 'center 85%',
            end: 'center 75%',
            scrub: true
        }
    });
});

// Заголовок "Mega Light" остается на месте при прокрутке
gsap.to('.block1 .container', {
    yPercent: 100,
    ease: 'none',
    scrollTrigger: {
        trigger: ".block2",
        start: "top bottom",
        end: "top top",
        scrub: true
    }
});

// Изменение прозрачности элемента "fixed-elem" при прокрутке
gsap.fromTo('.block2__fixed-elem', {opacity: 0}, {
    opacity: 1,
    scrollTrigger: {
        trigger: ".block2",
        start: "top bottom",
        end: "top center",
        scrub: true
    }
});

// Изменение размера элемента "fixed-elem" при прокрутке
gsap.matchMedia().add('(min-height: 725px) and (min-width: 769px)', () => {
    gsap.matchMedia().add('not ((min-aspect-ratio: 20/11) and (max-height: 1000.9px))', () => {
        gsap.fromTo('.block2__fixed-elem', {scale: 1/3}, {
            scale: 0.239,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block4",
                start: "top bottom",
                end: "top top",
                scrub: true
            }
        });
    });
    gsap.matchMedia().add('(min-aspect-ratio: 20/11) and (max-height: 1000.9px)', () => {
        gsap.fromTo('.block2__fixed-elem', {scale: 1/3}, {
            scale: 0.16,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block4",
                start: "top bottom",
                end: "top top",
                scrub: true
            }
        });
    });
});

gsap.matchMedia().add('(orientation: portrait) and (min-width: 540px), (orientation: landscape)', () => {
    gsap.fromTo('.block2__fixed-elem', {scale: 1}, {
        scale: 1/3,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block2",
            start: "top bottom",
            end: "top top",
            scrub: true
        }
    });
});

gsap.matchMedia().add('(orientation: portrait) and (max-width: 539.9px)', () => {
    gsap.fromTo('.block2__fixed-elem', {scale: 1}, {
        scale: 0.5,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block2",
            start: "top bottom",
            end: "top top",
            scrub: true
        }
    });
});

// Перемещение элемента "fixed-elem" при прокрутке
gsap.matchMedia().add('(min-height: 725px) and (min-width: 769px)', () => {
    gsap.fromTo('.block2 .container', {yPercent: 100}, {
        yPercent: 185,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block4",
            start: "top bottom",
            end: "top top",
            scrub: true
        }
    });
    document.querySelector('.block2 .container').style.cssText = '';
});

gsap.matchMedia().add('(max-height: 724.9px) and (orientation: landscape), (max-width: 768.9px) and (min-width: 540px)', () => {
    gsap.fromTo('.block2 .container', {yPercent: 100}, {
        yPercent: 300,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block4",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
        }
    });
    document.querySelector('.block2 .container').style.cssText = '';
});

gsap.fromTo('.block2 .container', {yPercent: 0}, {
    yPercent: 100,
    ease: 'none',
    scrollTrigger: {
        trigger: ".block3",
        start: "top bottom",
        end: "top top",
        scrub: true
    }
});

// Изображение "Mega Light" перемещается вправо, "Mega Light433" - влево (блок4)
gsap.matchMedia().add('(min-height: 725px) and (min-width: 769px) and (orientation: landscape)', () => {
    gsap.matchMedia().add('not ((min-aspect-ratio: 20/11) and (max-height: 1000.9px))', () => {
        gsap.fromTo('.fixed-elem__mega-light', {xPercent: 0}, {
            xPercent: 158,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block4",
                start: "top bottom",
                end: "top top",
                scrub: true
            }
        });
        gsap.fromTo('.fixed-elem__mega-light433', {xPercent: 0}, {
            xPercent: -158,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block4",
                start: "top bottom",
                end: "top top",
                scrub: true
            }
        });
    });
    gsap.matchMedia().add('(min-aspect-ratio: 20/11) and (max-height: 1000.9px)', () => {
        gsap.fromTo('.fixed-elem__mega-light', {xPercent: 0}, {
            xPercent: 236,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block4",
                start: "top bottom",
                end: "top top",
                scrub: true
            }
        });
        gsap.fromTo('.fixed-elem__mega-light433', {xPercent: 0}, {
            xPercent: -236,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block4",
                start: "top bottom",
                end: "top top",
                scrub: true
            }
        });
    });
});

gsap.matchMedia().add('(min-height: 725px) and (min-width: 769px) and (orientation: portrait)', () => {
    gsap.fromTo('.fixed-elem__mega-light', {xPercent: 0}, {
        xPercent: 104.6,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block4",
            start: "top bottom",
            end: "top top",
            scrub: true
        }
    });
    gsap.fromTo('.fixed-elem__mega-light433', {xPercent: 0}, {
        xPercent: -104.6,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block4",
            start: "top bottom",
            end: "top top",
            scrub: true
        }
    });
});

// Изображения "Mega Light" и "Mega Light433" перемещаются влево (блок4)
gsap.matchMedia().add('(max-height: 724.9px) and (orientation: landscape), (max-width: 768.9px) and (orientation: landscape)', () => {
    gsap.fromTo('.block2 img', {xPercent: 0}, {
        xPercent: -113.32,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block4",
            start: "top bottom",
            end: "top 25%",
            scrub: true
        }
    });
});

gsap.matchMedia().add('(max-width: 768.9px) and (min-width: 540px) and (orientation: portrait)', () => {
    gsap.fromTo('.block2 img', {xPercent: 0}, {
        xPercent: -75,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block4",
            start: "top bottom",
            end: "top 25%",
            scrub: true
        }
    });
});

// Изображение "Mega Light" исчезает / появляется (блок4)
gsap.matchMedia().add('(max-height: 724.9px) and (orientation: landscape), (max-width: 768.9px) and (min-width: 540px)', () => {
    gsap.fromTo('.fixed-elem__mega-light', {opacity: 0}, {
        opacity: 1,
        scrollTrigger: {
            trigger: ".block4",
            start: "75% bottom",
            end: "bottom bottom",
            scrub: true
        }
    });
    gsap.fromTo('.fixed-elem__mega-light', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: ".block4",
            start: "top bottom",
            end: "top 25%",
            scrub: true
        }
    });
});

// Анимация "clip-path" (блок4, блок5)
gsap.matchMedia().add('(min-height: 725px) and (min-width: 769px)', () => {
    gsap.fromTo('.overlay', {clipPath: 'inset(0% 100% 0% 0%)'}, {
        display: 'block',
        clipPath: 'inset(0% 0% 0% 0%)',
        scrollTrigger: {
            trigger: ".block4",
            start: "top bottom",
            end: "top top",
            scrub: true
        }
    });
});

gsap.matchMedia().add('(min-height: 725px) and (min-width: 769px)', () => {
    gsap.fromTo('.overlay', {clipPath: 'inset(0% 0% 0% 0%)'}, {
        clipPath: 'inset(0% 100% 0% 0%)',
        scrollTrigger: {
            trigger: ".block5__mega-light",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
        }
    });
});

// Изображение "Mega Light" появляется частично (блок5)
gsap.fromTo('.block5__mega-light', {xPercent: 0}, {
    xPercent: -41.3,
    ease: 'none',
    scrollTrigger: {
        trigger: ".block5__mega-light",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true
    }
});

// Элементы в шапке меняют цвет
gsap.matchMedia().add('(min-height: 725px) and (min-width: 769px)', () => {
    gsap.fromTo('.header__logo svg path', {fill: 'white'}, {
        fill: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: ".block5__mega-light",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
        }
    });
    gsap.fromTo('.header__logo svg path', {fill: 'rgb(5, 15, 32)'}, {
        fill: 'white',
        scrollTrigger: {
            trigger: ".block4",
            start: "top bottom",
            end: "top top",
            scrub: true
        }
    });

    let megaLightLinks = gsap.utils.toArray('.nav__link');
    megaLightLinks.forEach(megaLightLink => {
        gsap.fromTo(megaLightLink, {color: 'white'}, {
            color: 'rgb(5, 15, 32)',
            scrollTrigger: {
                trigger: ".block5__mega-light",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true
            }
        });
    });
    megaLightLinks.forEach(megaLightLink => {
        gsap.fromTo(megaLightLink, {color: 'rgb(5, 15, 32)'}, {
            color: 'white',
            scrollTrigger: {
                trigger: ".block4",
                start: "top bottom",
                end: "top top",
                scrub: true
            }
        });
    });

    let megaLightLinksUnderline = gsap.utils.toArray('.nav__link div');
    megaLightLinksUnderline.forEach(megaLightLinkUnderline => {
        gsap.fromTo(megaLightLinkUnderline, {backgroundColor: 'white'}, {
            backgroundColor: 'rgb(5, 15, 32)',
            scrollTrigger: {
                trigger: ".block5__mega-light",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true
            }
        });
    });
    megaLightLinksUnderline.forEach(megaLightLinkUnderline => {
        gsap.fromTo(megaLightLinkUnderline, {backgroundColor: 'rgb(5, 15, 32)'}, {
            backgroundColor: 'white',
            scrollTrigger: {
                trigger: ".block4",
                start: "top bottom",
                end: "top top",
                scrub: true
            }
        });
    });
});

gsap.matchMedia().add('(max-height: 724.9px), (max-width: 768.9px)', () => {
    gsap.fromTo('header', {backgroundColor: 'rgba(0, 0, 0, 0.1)'}, {
        backgroundColor: 'rgba(237, 237, 237, 0.1)',
        scrollTrigger: {
            trigger: '.block4',
            start: 'bottom bottom',
            end: 'bottom bottom',
            scrub: true
        }
    });
    gsap.fromTo('header', {backgroundColor: 'rgba(237, 237, 237, 0.1)'}, {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        scrollTrigger: {
            trigger: ".block4",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.header__logo svg path', {fill: 'white'}, {
        fill: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: '.block4',
            start: 'bottom bottom',
            end: 'bottom bottom',
            scrub: true
        }
    });
    gsap.fromTo('.header__logo svg path', {fill: 'rgb(5, 15, 32)'}, {
        fill: 'white',
        scrollTrigger: {
            trigger: ".block4",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.spec-and-form__spec-button svg path', {stroke: 'rgb(227, 227, 227)'}, {
        stroke: 'rgba(0, 0, 0, 0.5)',
        scrollTrigger: {
            trigger: '.block4',
            start: 'bottom bottom',
            end: 'bottom bottom',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__spec-button svg path', {stroke: 'rgba(0, 0, 0, 0.5)'}, {
        stroke: 'rgb(227, 227, 227)',
        scrollTrigger: {
            trigger: ".block4",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    let headerLinks = gsap.utils.toArray('nav a');
    headerLinks.forEach(headerLink => {
        gsap.fromTo(headerLink, {color: 'white'}, {
            color: 'rgb(5, 15, 32)',
            scrollTrigger: {
                trigger: '.block4',
                start: 'bottom bottom',
                end: 'bottom bottom',
                scrub: true
            }
        });
        gsap.fromTo(headerLink, {color: 'rgb(5, 15, 32)'}, {
            color: 'white',
            scrollTrigger: {
                trigger: ".block4",
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
                trigger: '.block4',
                start: 'bottom bottom',
                end: 'bottom bottom',
                scrub: true
            }
        });
        gsap.fromTo(headerLinkUnderline, {backgroundColor: 'rgb(5, 15, 32)'}, {
            backgroundColor: 'white',
            scrollTrigger: {
                trigger: ".block4",
                start: 'top top',
                end: 'top top',
                scrub: true
            }
        });
    });
    
    gsap.fromTo('.spec-and-form__spec-button', {color: 'rgba(255, 255, 255, 0.5)'}, {
        color: 'rgba(0, 0, 0, 0.5)',
        scrollTrigger: {
            trigger: '.block4',
            start: 'bottom bottom',
            end: 'bottom bottom',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__spec-button', {color: 'rgba(0, 0, 0, 0.5)'}, {
        color: 'rgba(255, 255, 255, 0.5)',
        scrollTrigger: {
            trigger: ".block4",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.spec-and-form__spec-box', {backgroundColor: 'rgba(255, 255, 255, 0.07)'}, {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        scrollTrigger: {
            trigger: '.block4',
            start: 'bottom bottom',
            end: 'bottom bottom',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__spec-box', {backgroundColor: 'rgba(0, 0, 0, 0.2)'}, {
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        scrollTrigger: {
            trigger: ".block4",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.spec-and-form__form-button', {backgroundColor: 'rgba(174, 174, 174, 0.1)', color: 'white'}, {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        color: 'rgb(37, 37, 37)',
        scrollTrigger: {
            trigger: '.block4',
            start: 'bottom bottom',
            end: 'bottom bottom',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__form-button', {backgroundColor: 'rgba(0, 0, 0, 0.1)', color: 'rgb(37, 37, 37)'}, {
        backgroundColor: 'rgba(174, 174, 174, 0.1)',
        color: 'white',
        scrollTrigger: {
            trigger: ".block4",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
});

gsap.matchMedia().add('(max-width: 768.9px)', () => {
    gsap.fromTo('nav', {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'rgb(243, 243, 245)',
        scrollTrigger: {
            trigger: '.block4',
            start: 'bottom bottom',
            end: 'bottom bottom',
            scrub: true
        }
    });
    gsap.fromTo('nav', {backgroundColor: 'rgb(243, 243, 245)'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: ".block4",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.menu__icon', {backgroundColor: 'white'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: '.block4',
            start: 'bottom bottom',
            end: 'bottom bottom',
            scrub: true
        }
    });
    gsap.fromTo('.menu__icon', {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'white',
        scrollTrigger: {
            trigger: ".block4",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.menu__icon span', {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'rgb(243, 243, 245)',
        scrollTrigger: {
            trigger: '.block4',
            start: 'bottom bottom',
            end: 'bottom bottom',
            scrub: true
        }
    });
    gsap.fromTo('.menu__icon span', {backgroundColor: 'rgb(243, 243, 245)'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: ".block4",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
});