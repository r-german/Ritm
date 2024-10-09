// Изменение прозрачности текста (блок1) при прокрутке
gsap.to('.block1 .container', {
    opacity: 0,
    scrollTrigger: {
        trigger: '.block1 .container',
        start: 'center center',
        end: 'center top',
        scrub: true
    }
});

// Изменение прозрачности текста (блок2, блок3, блок7) при прокрутке
let changingOpacityTexts = gsap.utils.toArray('.changing-opacity');
changingOpacityTexts.forEach(changingOpacityText => {
    gsap.fromTo(changingOpacityText, {opacity: 0}, {
        opacity: 1,
        scrollTrigger: {
            trigger: changingOpacityText,
            start: 'top 60%',
            end: 'top 20%',
            scrub: true
        }
    });
});

// Изменение прозрачности текста (блок4) при прокрутке
gsap.fromTo('.block4 .container', {opacity: 1}, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.block4 .container',
        start: 'center center',
        end: 'center top',
        scrub: true
    }
});

gsap.fromTo('.block4 .container', {opacity: 0}, {
    opacity: 1,
    scrollTrigger: {
        trigger: '.block4 .container',
        start: 'center bottom',
        end: 'center center',
        scrub: true
    }
});

// Изменение прозрачности элемента "fixed-elem" при прокрутке
gsap.fromTo('.fixed-block__fixed-elem', {opacity: 0}, {
    opacity: 1,
    ease: 'none',
    scrollTrigger: {
        trigger: ".block7",
        start: "top bottom",
        end: "25% bottom",
        scrub: true
    }
});

// Перемещение блока "fixed-block" при прокрутке
gsap.fromTo('.fixed-block', {yPercent: 350}, {
    yPercent: 400,
    ease: 'none',
    scrollTrigger: {
        trigger: ".empty-block",
        start: "top bottom",
        end: "top top",
        scrub: true
    }
});

gsap.fromTo('.fixed-block', {yPercent: 50}, {
    yPercent: 350,
    ease: 'none',
    scrollTrigger: {
        trigger: ".path",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true
    }
});

// Перемещение элемента "fixed-elem" при прокрутке
gsap.fromTo('.fixed-block__fixed-elem', {yPercent: -50}, {
    yPercent: -43.2,
    ease: 'none',
    scrollTrigger: {
        trigger: ".empty-block",
        start: "top bottom",
        end: "top top",
        scrub: true
    }
});

gsap.fromTo('.fixed-block__fixed-elem', {yPercent: 0}, {
    yPercent: -50,
    ease: 'none',
    scrollTrigger: {
        trigger: ".block7",
        start: "top bottom",
        end: "top 25%",
        scrub: true
    }
});

// Перемещение и изменение прозрачности изображения "inner-part" при прокрутке
gsap.fromTo('.fixed-elem__inner-part', {yPercent: 0, opacity: 0}, {
    yPercent: 86.4,
    opacity: 1,
    ease: 'none',
    scrollTrigger: {
        trigger: ".empty-block",
        start: "top bottom",
        end: "top top",
        scrub: true
    }
});

// Анимация "clip-path" (блок5, блок6)
gsap.matchMedia().add('(min-width: 1025px)', () => {
    gsap.fromTo('.overlay', {clipPath: 'inset(0% 100% 0% 0%)'}, {
        display: 'block',
        clipPath: 'inset(0% 0% 0% 0%)',
        scrollTrigger: {
            trigger: ".block5",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
        }
    });
});

// Элементы в шапке меняют цвет
let mkbLinks2 = gsap.utils.toArray('.nav__link2');
let mkbLinks2Underline = gsap.utils.toArray('.nav__link2 div');

gsap.matchMedia().add('(min-width: 1343px)', () => {
    mkbLinks2.forEach(mkbLink2 => {
        gsap.fromTo(mkbLink2, {color: 'white'}, {
            color: 'rgb(5, 15, 32)',
            scrollTrigger: {
                trigger: ".block8",
                start: "top top",
                end: "top top",
                scrub: true
            }
        });
        gsap.fromTo(mkbLink2, {color: 'rgb(5, 15, 32)'}, {
            color: 'white',
            scrollTrigger: {
                trigger: ".block6__advantages",
                start: "top top",
                end: "top top",
                scrub: true
            }
        });
    });

    mkbLinks2Underline.forEach(mkbLink2Underline => {
        gsap.fromTo(mkbLink2Underline, {backgroundColor: 'white'}, {
            backgroundColor: 'rgb(5, 15, 32)',
            scrollTrigger: {
                trigger: '.block8',
                start: 'top top',
                end: 'top top',
                scrub: true
            }
        });
        gsap.fromTo(mkbLink2Underline, {backgroundColor: 'rgb(5, 15, 32)'}, {
            backgroundColor: 'white',
            scrollTrigger: {
                trigger: ".block6__advantages",
                start: "top top",
                end: "top top",
                scrub: true
            }
        });
    });
    
    gsap.fromTo('.spec-and-form__spec-button svg path', {stroke: 'rgb(227, 227, 227)'}, {
        stroke: 'rgba(0, 0, 0, 0.5)',
        scrollTrigger: {
            trigger: '.block8',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__spec-button svg path', {stroke: 'rgba(0, 0, 0, 0.5)'}, {
        stroke: 'rgb(227, 227, 227)',
        scrollTrigger: {
            trigger: ".block6__advantages",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.spec-and-form__spec-button', {color: 'rgba(255, 255, 255, 0.5)'}, {
        color: 'rgba(0, 0, 0, 0.5)',
        scrollTrigger: {
            trigger: '.block8',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__spec-button', {color: 'rgba(0, 0, 0, 0.5)'}, {
        color: 'rgba(255, 255, 255, 0.5)',
        scrollTrigger: {
            trigger: ".block6__advantages",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.spec-and-form__spec-box', {backgroundColor: 'rgba(255, 255, 255, 0.07)'}, {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        scrollTrigger: {
            trigger: '.block8',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__spec-box', {backgroundColor: 'rgba(0, 0, 0, 0.2)'}, {
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        scrollTrigger: {
            trigger: ".block6__advantages",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.spec-and-form__form-button', {backgroundColor: 'rgba(174, 174, 174, 0.1)', color: 'white'}, {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        color: 'rgb(37, 37, 37)',
        scrollTrigger: {
            trigger: '.block8',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__form-button', {backgroundColor: 'rgba(0, 0, 0, 0.1)', color: 'rgb(37, 37, 37)'}, {
        backgroundColor: 'rgba(174, 174, 174, 0.1)',
        color: 'white',
        scrollTrigger: {
            trigger: ".block6__advantages",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
});

gsap.matchMedia().add('(min-width: 1025px) and (max-width: 1342.9px)', () => {
    mkbLinks2.forEach(mkbLink2 => {
        gsap.fromTo(mkbLink2, {color: 'white'}, {
            color: 'rgb(5, 15, 32)',
            scrollTrigger: {
                trigger: ".block8",
                start: "top top",
                end: "top top",
                scrub: true
            }
        });
        gsap.fromTo(mkbLink2, {color: 'rgb(5, 15, 32)'}, {
            color: 'white',
            scrollTrigger: {
                trigger: ".block6",
                start: "top top",
                end: "top top",
                scrub: true
            }
        });
    });

    mkbLinks2Underline.forEach(mkbLink2Underline => {
        gsap.fromTo(mkbLink2Underline, {backgroundColor: 'white'}, {
            backgroundColor: 'rgb(5, 15, 32)',
            scrollTrigger: {
                trigger: '.block8',
                start: 'top top',
                end: 'top top',
                scrub: true
            }
        });
        gsap.fromTo(mkbLink2Underline, {backgroundColor: 'rgb(5, 15, 32)'}, {
            backgroundColor: 'white',
            scrollTrigger: {
                trigger: ".block6",
                start: "top top",
                end: "top top",
                scrub: true
            }
        });
    });

    gsap.fromTo('header', {backgroundColor: 'rgba(0, 0, 0, 0.1)'}, {
        backgroundColor: 'rgba(237, 237, 237, 0.1)',
        scrollTrigger: {
            trigger: '.block8',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('header', {backgroundColor: 'rgba(237, 237, 237, 0.1)'}, {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        scrollTrigger: {
            trigger: ".block6",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.spec-and-form__spec-button', {color: 'rgba(255, 255, 255, 0.5)'}, {
        color: 'rgba(0, 0, 0, 0.5)',
        scrollTrigger: {
            trigger: '.block8',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__spec-button', {color: 'rgba(0, 0, 0, 0.5)'}, {
        color: 'rgba(255, 255, 255, 0.5)',
        scrollTrigger: {
            trigger: ".block6",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.spec-and-form__spec-box', {backgroundColor: 'rgba(255, 255, 255, 0.07)'}, {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        scrollTrigger: {
            trigger: '.block8',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__spec-box', {backgroundColor: 'rgba(0, 0, 0, 0.2)'}, {
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        scrollTrigger: {
            trigger: ".block6",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.spec-and-form__form-button', {backgroundColor: 'rgba(174, 174, 174, 0.1)', color: 'white'}, {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        color: 'rgb(37, 37, 37)',
        scrollTrigger: {
            trigger: '.block8',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__form-button', {backgroundColor: 'rgba(0, 0, 0, 0.1)', color: 'rgb(37, 37, 37)'}, {
        backgroundColor: 'rgba(174, 174, 174, 0.1)',
        color: 'white',
        scrollTrigger: {
            trigger: ".block6",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
});

gsap.matchMedia().add('(min-width: 1025px)', () => {
    gsap.fromTo('.header__logo svg path', {fill: 'white'}, {
        fill: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: '.block8',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.header__logo svg path', {fill: 'rgb(5, 15, 32)'}, {
        fill: 'white',
        scrollTrigger: {
            trigger: ".block5",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
        }
    });
    
    let mkbLinks = gsap.utils.toArray('.nav__link');
    mkbLinks.forEach(mkbLink => {
        gsap.fromTo(mkbLink, {color: 'white'}, {
            color: 'rgb(5, 15, 32)',
            scrollTrigger: {
                trigger: '.block8',
                start: 'top top',
                end: 'top top',
                scrub: true
            }
        });
        gsap.fromTo(mkbLink, {color: 'rgb(5, 15, 32)'}, {
            color: 'white',
            scrollTrigger: {
                trigger: ".block5",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true
            }
        });
    });

    let mkbLinksUnderline = gsap.utils.toArray('.nav__link div');
    mkbLinksUnderline.forEach(mkbLinkUnderline => {
        gsap.fromTo(mkbLinkUnderline, {backgroundColor: 'white'}, {
            backgroundColor: 'rgb(5, 15, 32)',
            scrollTrigger: {
                trigger: '.block8',
                start: 'top top',
                end: 'top top',
                scrub: true
            }
        });
        gsap.fromTo(mkbLinkUnderline, {backgroundColor: 'rgb(5, 15, 32)'}, {
            backgroundColor: 'white',
            scrollTrigger: {
                trigger: ".block5",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true
            }
        });
    });
});

gsap.matchMedia().add('(max-width: 1024.9px)', () => {
    gsap.fromTo('header', {backgroundColor: 'rgba(0, 0, 0, 0.1)'}, {
        backgroundColor: 'rgba(237, 237, 237, 0.1)',
        scrollTrigger: {
            trigger: '.block8',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('header', {backgroundColor: 'rgba(237, 237, 237, 0.1)'}, {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        scrollTrigger: {
            trigger: ".block6",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('header', {backgroundColor: 'rgba(0, 0, 0, 0.1)'}, {
        backgroundColor: 'rgba(237, 237, 237, 0.1)',
        scrollTrigger: {
            trigger: '.block5__right',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('header', {backgroundColor: 'rgba(237, 237, 237, 0.1)'}, {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        scrollTrigger: {
            trigger: ".block5__left",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.header__logo svg path', {fill: 'white'}, {
        fill: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: '.block8',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.header__logo svg path', {fill: 'rgb(5, 15, 32)'}, {
        fill: 'white',
        scrollTrigger: {
            trigger: ".block6",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.header__logo svg path', {fill: 'white'}, {
        fill: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: '.block5__right',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.header__logo svg path', {fill: 'rgb(5, 15, 32)'}, {
        fill: 'white',
        scrollTrigger: {
            trigger: ".block5__left",
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
                trigger: '.block8',
                start: 'top top',
                end: 'top top',
                scrub: true
            }
        });
        gsap.fromTo(headerLink, {color: 'rgb(5, 15, 32)'}, {
            color: 'white',
            scrollTrigger: {
                trigger: ".block6",
                start: 'top top',
                end: 'top top',
                scrub: true
            }
        });
        gsap.fromTo(headerLink, {color: 'white'}, {
            color: 'rgb(5, 15, 32)',
            scrollTrigger: {
                trigger: '.block5__right',
                start: 'top top',
                end: 'top top',
                scrub: true
            }
        });
        gsap.fromTo(headerLink, {color: 'rgb(5, 15, 32)'}, {
            color: 'white',
            scrollTrigger: {
                trigger: ".block5__left",
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
                trigger: '.block8',
                start: 'top top',
                end: 'top top',
                scrub: true
            }
        });
        gsap.fromTo(headerLinkUnderline, {backgroundColor: 'rgb(5, 15, 32)'}, {
            backgroundColor: 'white',
            scrollTrigger: {
                trigger: ".block6",
                start: 'top top',
                end: 'top top',
                scrub: true
            }
        });
        gsap.fromTo(headerLinkUnderline, {backgroundColor: 'white'}, {
            backgroundColor: 'rgb(5, 15, 32)',
            scrollTrigger: {
                trigger: '.block5__right',
                start: 'top top',
                end: 'top top',
                scrub: true
            }
        });
        gsap.fromTo(headerLinkUnderline, {backgroundColor: 'rgb(5, 15, 32)'}, {
            backgroundColor: 'white',
            scrollTrigger: {
                trigger: ".block5__left",
                start: 'top top',
                end: 'top top',
                scrub: true
            }
        });
    });
    
    gsap.fromTo('.spec-and-form__spec-button', {color: 'rgba(255, 255, 255, 0.5)'}, {
        color: 'rgba(0, 0, 0, 0.5)',
        scrollTrigger: {
            trigger: '.block8',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__spec-button', {color: 'rgba(0, 0, 0, 0.5)'}, {
        color: 'rgba(255, 255, 255, 0.5)',
        scrollTrigger: {
            trigger: ".block6",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__spec-button', {color: 'rgba(255, 255, 255, 0.5)'}, {
        color: 'rgba(0, 0, 0, 0.5)',
        scrollTrigger: {
            trigger: '.block5__right',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__spec-button', {color: 'rgba(0, 0, 0, 0.5)'}, {
        color: 'rgba(255, 255, 255, 0.5)',
        scrollTrigger: {
            trigger: ".block5__left",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.spec-and-form__spec-box', {backgroundColor: 'rgba(255, 255, 255, 0.07)'}, {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        scrollTrigger: {
            trigger: '.block8',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__spec-box', {backgroundColor: 'rgba(0, 0, 0, 0.2)'}, {
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        scrollTrigger: {
            trigger: ".block6",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__spec-box', {backgroundColor: 'rgba(255, 255, 255, 0.07)'}, {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        scrollTrigger: {
            trigger: '.block5__right',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__spec-box', {backgroundColor: 'rgba(0, 0, 0, 0.2)'}, {
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        scrollTrigger: {
            trigger: ".block5__left",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.spec-and-form__form-button', {backgroundColor: 'rgba(174, 174, 174, 0.1)', color: 'white'}, {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        color: 'rgb(37, 37, 37)',
        scrollTrigger: {
            trigger: '.block8',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__form-button', {backgroundColor: 'rgba(0, 0, 0, 0.1)', color: 'rgb(37, 37, 37)'}, {
        backgroundColor: 'rgba(174, 174, 174, 0.1)',
        color: 'white',
        scrollTrigger: {
            trigger: ".block6",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__form-button', {backgroundColor: 'rgba(174, 174, 174, 0.1)', color: 'white'}, {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        color: 'rgb(37, 37, 37)',
        scrollTrigger: {
            trigger: '.block5__right',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.spec-and-form__form-button', {backgroundColor: 'rgba(0, 0, 0, 0.1)', color: 'rgb(37, 37, 37)'}, {
        backgroundColor: 'rgba(174, 174, 174, 0.1)',
        color: 'white',
        scrollTrigger: {
            trigger: ".block5__left",
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
            trigger: '.block8',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('nav', {backgroundColor: 'rgb(243, 243, 245)'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: ".block6",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('nav', {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'rgb(243, 243, 245)',
        scrollTrigger: {
            trigger: '.block5__right',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('nav', {backgroundColor: 'rgb(243, 243, 245)'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: ".block5__left",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.menu__icon', {backgroundColor: 'white'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: '.block8',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.menu__icon', {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'white',
        scrollTrigger: {
            trigger: ".block6",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.menu__icon', {backgroundColor: 'white'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: '.block5__right',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.menu__icon', {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'white',
        scrollTrigger: {
            trigger: ".block5__left",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    
    gsap.fromTo('.menu__icon span', {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'rgb(243, 243, 245)',
        scrollTrigger: {
            trigger: '.block8',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.menu__icon span', {backgroundColor: 'rgb(243, 243, 245)'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: ".block6",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.menu__icon span', {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'rgb(243, 243, 245)',
        scrollTrigger: {
            trigger: '.block5__right',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.menu__icon span', {backgroundColor: 'rgb(243, 243, 245)'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: ".block5__left",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
});