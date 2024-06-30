// GSAP изменение прозрачности текста при прокрутке
gsap.to('.block1 .container', {
    opacity: 0,
    scrollTrigger: {
        trigger: '.block1 .container',
        start: 'center center',
        end: 'center top',
        scrub: true
    }
});

gsap.fromTo('.block2__minicase', {opacity: 0}, {
    opacity: 1,
    scrollTrigger: {
        trigger: '.block2__minicase',
        start: 'center bottom',
        end: 'center center',
        scrub: true
    }
});

gsap.fromTo('.block3__text', {opacity: 0}, {
    opacity: 1,
    scrollTrigger: {
        trigger: '.block3__text',
        start: 'center 75%',
        end: 'center 25%',
        scrub: true
    }
});

let changingOpacityTexts = gsap.utils.toArray('.changing-opacity');
changingOpacityTexts.forEach(changingOpacityText => {
    let text1 = gsap.matchMedia().add('(min-width: 769px), (max-width: 768.9px) and (orientation: landscape)', () => {
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
    let text2 = gsap.matchMedia().add('(max-width: 768.9px) and (orientation: portrait)', () => {
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
    window.addEventListener("resize", function() {
        text1.kill();
        text1 = gsap.matchMedia().add('(min-width: 769px), (max-width: 768.9px) and (orientation: landscape)', () => {
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
        text2.kill();
        text2 = gsap.matchMedia().add('(max-width: 768.9px) and (orientation: portrait)', () => {
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
});

// GSAP Элементы в шапке меняют цвет
gsap.fromTo('header', {backgroundColor: 'rgba(237, 237, 237, 0.1)'}, {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    scrollTrigger: {
        trigger: ".block11",
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('header', {backgroundColor: 'rgba(0, 0, 0, 0.1)'}, {
    backgroundColor: 'rgba(237, 237, 237, 0.1)',
    scrollTrigger: {
        trigger: '.block9',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('header', {backgroundColor: 'rgba(237, 237, 237, 0.1)'}, {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    scrollTrigger: {
        trigger: ".block2",
        start: "bottom bottom",
        end: "bottom bottom",
        scrub: true
    }
});

gsap.fromTo('.header__logo svg path', {fill: 'rgb(5, 15, 32)'}, {
    fill: 'white',
    scrollTrigger: {
        trigger: ".block11",
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.header__logo svg path', {fill: 'white'}, {
    fill: 'rgb(5, 15, 32)',
    scrollTrigger: {
        trigger: '.block9',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.header__logo svg path', {fill: 'rgb(5, 15, 32)'}, {
    fill: 'white',
    scrollTrigger: {
        trigger: ".block2",
        start: "bottom bottom",
        end: "bottom bottom",
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__spec-button svg path', {stroke: 'rgba(0, 0, 0, 0.5)'}, {
    stroke: 'rgb(227, 227, 227)',
    scrollTrigger: {
        trigger: ".block11",
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__spec-button svg path', {stroke: 'rgb(227, 227, 227)'}, {
    stroke: 'rgba(0, 0, 0, 0.5)',
    scrollTrigger: {
        trigger: '.block9',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__spec-button svg path', {stroke: 'rgba(0, 0, 0, 0.5)'}, {
    stroke: 'rgb(227, 227, 227)',
    scrollTrigger: {
        trigger: ".block2",
        start: "bottom bottom",
        end: "bottom bottom",
        scrub: true
    }
});

gsap.matchMedia().add('(max-width: 768.9px)', () => {
    gsap.fromTo('nav', {backgroundColor: 'rgb(243, 243, 245)'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: ".block11",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('nav', {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'rgb(243, 243, 245)',
        scrollTrigger: {
            trigger: '.block9',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('nav', {backgroundColor: 'rgb(243, 243, 245)'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: ".block2",
            start: "bottom bottom",
            end: "bottom bottom",
            scrub: true
        }
    });
    gsap.fromTo('.menu__icon', {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'white',
        scrollTrigger: {
            trigger: ".block11",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.menu__icon', {backgroundColor: 'white'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: '.block9',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.menu__icon', {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'white',
        scrollTrigger: {
            trigger: ".block2",
            start: "bottom bottom",
            end: "bottom bottom",
            scrub: true
        }
    });
    gsap.fromTo('.menu__icon span', {backgroundColor: 'rgb(243, 243, 245)'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: ".block11",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.menu__icon span', {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'rgb(243, 243, 245)',
        scrollTrigger: {
            trigger: '.block9',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo('.menu__icon span', {backgroundColor: 'rgb(243, 243, 245)'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: ".block2",
            start: "bottom bottom",
            end: "bottom bottom",
            scrub: true
        }
    });
});

let headerLinks = gsap.utils.toArray('nav a');
headerLinks.forEach(headerLink => {
    gsap.fromTo(headerLink, {color: 'rgb(5, 15, 32)'}, {
        color: 'white',
        scrollTrigger: {
            trigger: ".block11",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo(headerLink, {color: 'white'}, {
        color: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: '.block9',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo(headerLink, {color: 'rgb(5, 15, 32)'}, {
        color: 'white',
        scrollTrigger: {
            trigger: ".block2",
            start: "bottom bottom",
            end: "bottom bottom",
            scrub: true
        }
    });
});

let headerLinksUnderline = gsap.utils.toArray('nav a div');
headerLinksUnderline.forEach(headerLinkUnderline => {
    gsap.fromTo(headerLinkUnderline, {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'white',
        scrollTrigger: {
            trigger: ".block11",
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo(headerLinkUnderline, {backgroundColor: 'white'}, {
        backgroundColor: 'rgb(5, 15, 32)',
        scrollTrigger: {
            trigger: '.block9',
            start: 'top top',
            end: 'top top',
            scrub: true
        }
    });
    gsap.fromTo(headerLinkUnderline, {backgroundColor: 'rgb(5, 15, 32)'}, {
        backgroundColor: 'white',
        scrollTrigger: {
            trigger: ".block2",
            start: "bottom bottom",
            end: "bottom bottom",
            scrub: true
        }
    });
});

gsap.fromTo('.spec-and-form__spec-button', {color: 'rgba(0, 0, 0, 0.5)'}, {
    color: 'rgba(255, 255, 255, 0.5)',
    scrollTrigger: {
        trigger: ".block11",
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__spec-button', {color: 'rgba(255, 255, 255, 0.5)'}, {
    color: 'rgba(0, 0, 0, 0.5)',
    scrollTrigger: {
        trigger: '.block9',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__spec-button', {color: 'rgba(0, 0, 0, 0.5)'}, {
    color: 'rgba(255, 255, 255, 0.5)',
    scrollTrigger: {
        trigger: ".block2",
        start: "bottom bottom",
        end: "bottom bottom",
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__spec-box', {backgroundColor: 'rgba(0, 0, 0, 0.2)'}, {
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    scrollTrigger: {
        trigger: ".block11",
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__spec-box', {backgroundColor: 'rgba(255, 255, 255, 0.07)'}, {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    scrollTrigger: {
        trigger: '.block9',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__spec-box', {backgroundColor: 'rgba(0, 0, 0, 0.2)'}, {
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    scrollTrigger: {
        trigger: ".block2",
        start: "bottom bottom",
        end: "bottom bottom",
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__form-button', {backgroundColor: 'rgba(0, 0, 0, 0.1)', color: 'rgb(37, 37, 37)'}, {
    backgroundColor: 'rgba(174, 174, 174, 0.1)',
    color: 'white',
    scrollTrigger: {
        trigger: ".block11",
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__form-button', {backgroundColor: 'rgba(174, 174, 174, 0.1)', color: 'white'}, {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: 'rgb(37, 37, 37)',
    scrollTrigger: {
        trigger: '.block9',
        start: 'top top',
        end: 'top top',
        scrub: true
    }
});

gsap.fromTo('.spec-and-form__form-button', {backgroundColor: 'rgba(0, 0, 0, 0.1)', color: 'rgb(37, 37, 37)'}, {
    backgroundColor: 'rgba(174, 174, 174, 0.1)',
    color: 'white',
    scrollTrigger: {
        trigger: ".block2",
        start: "bottom bottom",
        end: "bottom bottom",
        scrub: true
    }
});

// GSAP Анимация "clip-path" (блок2)
gsap.to('.block2 .container', {
    yPercent: 100,
    ease: 'none',
    scrollTrigger: {
        trigger: ".block2",
        start: "top top",
        end: "bottom bottom",
        scrub: true
    }
});

gsap.matchMedia().add('(orientation: landscape)', () => {
    gsap.fromTo('.block2__overlay', {clipPath: 'circle(0% at bottom center)'}, {
        clipPath: 'circle(95% at bottom center)',
        scrollTrigger: {
            trigger: ".block2",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });
});

gsap.matchMedia().add('(orientation: portrait)', () => {
    gsap.fromTo('.block2__overlay', {clipPath: 'circle(0% at bottom center)'}, {
        clipPath: 'circle(130% at bottom center)',
        scrollTrigger: {
            trigger: ".block2",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });
});

window.addEventListener("resize", function() {
    gsap.matchMedia().add('(orientation: landscape)', () => {
        gsap.fromTo('.block2__overlay', {clipPath: 'circle(0% at bottom center)'}, {
            clipPath: 'circle(95% at bottom center)',
            scrollTrigger: {
                trigger: ".block2",
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        });
    });
    gsap.matchMedia().add('(orientation: portrait)', () => {
        gsap.fromTo('.block2__overlay', {clipPath: 'circle(0% at bottom center)'}, {
            clipPath: 'circle(130% at bottom center)',
            scrollTrigger: {
                trigger: ".block2",
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        });
    });
});

// GSAP перемещение элемента "fixed-elem" при прокрутке
let fixedElem = document.querySelector('.block2__fixed-elem');
let imgIntoViewBlock = document.querySelector('.block3__img-into-view');
imgIntoViewBlock.style.height = `${fixedElem.offsetHeight}px`;

let screenHeight = document.querySelector('.block1').offsetHeight;
let block5Height = document.querySelector('.block5').offsetHeight;
let block7Height = document.querySelector('.block7').offsetHeight;

let fixedElemPath6 = gsap.matchMedia().add('(min-width: 769px)', () => {
    gsap.fromTo(fixedElem, {xPercent: 25, yPercent: -25, y: `${screenHeight * 3 / 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height}px`}, {
        xPercent: -50,
        yPercent: -50,
        y: `${screenHeight * 5 / 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height}px`,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block8",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
        }
    });
});

let fixedElemPath6Mob = gsap.matchMedia().add('(max-width: 768.9px)', () => {
    gsap.fromTo(fixedElem, {y: `${screenHeight * 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height}px`}, {
        y: `${screenHeight * 5 / 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height}px`,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block8",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
        }
    });
});

let fixedElemPath5Mob = gsap.matchMedia().add('(max-width: 768.9px)', () => {
    gsap.fromTo(fixedElem, {y: `${screenHeight * 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height / 4}px`}, {
        y: `${screenHeight * 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height}px`,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "25% bottom",
            end: "bottom bottom",
            scrub: true
        }
    });
    gsap.fromTo(fixedElem, {y: `${screenHeight * 3 / 2 + imgIntoViewBlock.offsetHeight + block5Height}px`}, {
        y: `${screenHeight * 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height / 4}px`,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "top bottom",
            end: "25% bottom",
            scrub: true
        }
    });
});

let fixedElemPath5 = gsap.matchMedia().add('(min-width: 769px)', () => {
    gsap.fromTo(fixedElem, {y: `${screenHeight * 3 / 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height / 4}px`}, {
        y: `${screenHeight * 3 / 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height}px`,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "25% bottom",
            end: "bottom bottom",
            scrub: true
        }
    });
    gsap.fromTo(fixedElem, {xPercent: -50, yPercent: -50, y: `${screenHeight * 3 / 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height / 10}px`}, {
        xPercent: 25,
        yPercent: -25,
        y: `${screenHeight * 3 / 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height / 4}px`,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "10% bottom",
            end: "25% bottom",
            scrub: true
        }
    });
    gsap.fromTo(fixedElem, {y: `${screenHeight * 3 / 2 + imgIntoViewBlock.offsetHeight + block5Height}px`}, {
        y: `${screenHeight * 3 / 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height / 10}px`,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "top bottom",
            end: "10% bottom",
            scrub: true
        }
    });
});

let fixedElemPath4 = gsap.fromTo(fixedElem, {y: `${screenHeight / 2 + imgIntoViewBlock.offsetHeight + block5Height}px`}, {
    y: `${screenHeight * 3 / 2 + imgIntoViewBlock.offsetHeight + block5Height}px`,
    ease: 'none',
    scrollTrigger: {
        trigger: ".block6",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true
    }
});

let fixedElemPath3 = gsap.fromTo(fixedElem, {y: `${screenHeight / 2 + imgIntoViewBlock.offsetHeight}px`,}, {
    y: `${screenHeight / 2 + imgIntoViewBlock.offsetHeight + block5Height}px`,
    ease: 'none',
    scrollTrigger: {
        trigger: ".block5",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true
    }
});

let fixedElemPath2Mob = gsap.matchMedia().add('(max-width: 768.9px) and (max-height: 480.9px)', () => {
    gsap.fromTo(fixedElem, {xPercent: -50, yPercent: 0, y: 0}, {
        yPercent: -50,
        y: `${screenHeight / 2 + imgIntoViewBlock.offsetHeight}px`,
        ease: "sine.out",
        scrollTrigger: {
            trigger: ".block3",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
        }
    });
});

let fixedElemPath2 = gsap.matchMedia().add('(min-width: 769px), (max-width: 768.9px) and (min-height: 481px)', () => {
    gsap.fromTo(fixedElem, {yPercent: -19, y: 0}, {
        yPercent: -50,
        y: `${screenHeight / 2 + imgIntoViewBlock.offsetHeight}px`,
        ease: "sine.out",
        scrollTrigger: {
            trigger: ".block3",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
        }
    });
});

let fixedElemPath1 = gsap.matchMedia().add('(min-width: 769px), (max-width: 768.9px) and (min-height: 481px)', () => {
    gsap.fromTo(fixedElem, {xPercent: -50, yPercent: 8}, {
        yPercent: -19,
        scrollTrigger: {
            trigger: ".block2",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });
});

window.addEventListener("resize", function() {
    imgIntoViewBlock.style.height = `${fixedElem.offsetHeight}px`;
    screenHeight = document.querySelector('.block1').offsetHeight;
    block5Height = document.querySelector('.block5').offsetHeight;
    block7Height = document.querySelector('.block7').offsetHeight;

    fixedElemPath6.kill();
    fixedElemPath6 = gsap.matchMedia().add('(min-width: 769px)', () => {
        gsap.fromTo(fixedElem, {xPercent: 25, yPercent: -25, y: `${screenHeight * 3 / 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height}px`}, {
            xPercent: -50,
            yPercent: -50,
            y: `${screenHeight * 5 / 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height}px`,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block8",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true
            }
        });
    });

    fixedElemPath6Mob.kill();
    fixedElemPath6Mob = gsap.matchMedia().add('(max-width: 768.9px)', () => {
        gsap.fromTo(fixedElem, {y: `${screenHeight * 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height}px`}, {
            y: `${screenHeight * 5 / 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height}px`,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block8",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true
            }
        });
    });

    fixedElemPath5Mob.kill();
    fixedElemPath5Mob = gsap.matchMedia().add('(max-width: 768.9px)', () => {
        gsap.fromTo(fixedElem, {y: `${screenHeight * 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height / 4}px`}, {
            y: `${screenHeight * 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height}px`,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "25% bottom",
                end: "bottom bottom",
                scrub: true
            }
        });
        gsap.fromTo(fixedElem, {y: `${screenHeight * 3 / 2 + imgIntoViewBlock.offsetHeight + block5Height}px`}, {
            y: `${screenHeight * 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height / 4}px`,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "top bottom",
                end: "25% bottom",
                scrub: true
            }
        });
    });

    fixedElemPath5.kill();
    fixedElemPath5 = gsap.matchMedia().add('(min-width: 769px)', () => {
        gsap.fromTo(fixedElem, {y: `${screenHeight * 3 / 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height / 4}px`}, {
            y: `${screenHeight * 3 / 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height}px`,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "25% bottom",
                end: "bottom bottom",
                scrub: true
            }
        });
        gsap.fromTo(fixedElem, {xPercent: -50, yPercent: -50, y: `${screenHeight * 3 / 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height / 10}px`}, {
            xPercent: 25,
            yPercent: -25,
            y: `${screenHeight * 3 / 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height / 4}px`,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "10% bottom",
                end: "25% bottom",
                scrub: true
            }
        });
        gsap.fromTo(fixedElem, {y: `${screenHeight * 3 / 2 + imgIntoViewBlock.offsetHeight + block5Height}px`}, {
            y: `${screenHeight * 3 / 2 + imgIntoViewBlock.offsetHeight + block5Height + block7Height / 10}px`,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "top bottom",
                end: "10% bottom",
                scrub: true
            }
        });
    });

    fixedElemPath4.kill();
    fixedElemPath4 = gsap.fromTo(fixedElem, {y: `${screenHeight / 2 + imgIntoViewBlock.offsetHeight + block5Height}px`}, {
        y: `${screenHeight * 3 / 2 + imgIntoViewBlock.offsetHeight + block5Height}px`,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block6",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
        }
    });

    fixedElemPath3.kill();
    fixedElemPath3 = gsap.fromTo(fixedElem, {y: `${screenHeight / 2 + imgIntoViewBlock.offsetHeight}px`,}, {
        y: `${screenHeight / 2 + imgIntoViewBlock.offsetHeight + block5Height}px`,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block5",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
        }
    });

    fixedElemPath2Mob.kill();
    fixedElemPath2Mob = gsap.matchMedia().add('(max-width: 768.9px) and (max-height: 480.9px)', () => {
        gsap.fromTo(fixedElem, {xPercent: -50, yPercent: 0, y: 0}, {
            yPercent: -50,
            y: `${screenHeight / 2 + imgIntoViewBlock.offsetHeight}px`,
            ease: "sine.out",
            scrollTrigger: {
                trigger: ".block3",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true
            }
        });
    });

    fixedElemPath2.kill();
    fixedElemPath2 = gsap.matchMedia().add('(min-width: 769px), (max-width: 768.9px) and (min-height: 481px)', () => {
        gsap.fromTo(fixedElem, {yPercent: -19, y: 0}, {
            yPercent: -50,
            y: `${screenHeight / 2 + imgIntoViewBlock.offsetHeight}px`,
            ease: "sine.out",
            scrollTrigger: {
                trigger: ".block3",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true
            }
        });
    });

    fixedElemPath1.kill();
    fixedElemPath1 = gsap.matchMedia().add('(min-width: 769px), (max-width: 768.9px) and (min-height: 481px)', () => {
        gsap.fromTo(fixedElem, {xPercent: -50, yPercent: 8}, {
            yPercent: -19,
            scrollTrigger: {
                trigger: ".block2",
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        });
    });
});

// GSAP появление темного градиента
gsap.fromTo('.fixed-elem__mask', {opacity: 0}, {
    opacity: 1,
    scrollTrigger: {
        trigger: ".block5__container1",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true
    }
});

// GSAP появление и исчезновение первого элемента устройства
let component1 = gsap.matchMedia().add('(min-width: 769px)', () => {
    gsap.fromTo('.fixed-elem__component1', {xPercent: 0, opacity: 1}, {
        xPercent: 10,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "12.5% center",
            end: "12.5% top",
            scrub: true
        }
    });
    gsap.fromTo('.fixed-elem__component1', {xPercent: 10, opacity: 0}, {
        xPercent: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "12.5% bottom",
            end: "12.5% center",
            scrub: true
        }
    });
});

let component1Mob = gsap.matchMedia().add('(max-width: 768.9px) and (min-height: 481px)', () => {
    gsap.fromTo('.fixed-elem__component1', {xPercent: 0, opacity: 1}, {
        xPercent: -10,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "12.5% center",
            end: "12.5% top",
            scrub: true
        }
    });
    gsap.fromTo('.fixed-elem__component1', {xPercent: -10, opacity: 0}, {
        xPercent: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "12.5% bottom",
            end: "12.5% center",
            scrub: true
        }
    });
});

// GSAP появление и исчезновение второго элемента устройства
let component2 = gsap.matchMedia().add('(min-width: 769px)', () => {
    gsap.fromTo('.fixed-elem__component2', {xPercent: 0, opacity: 1}, {
        xPercent: 10,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "37.5% center",
            end: "37.5% top",
            scrub: true
        }
    });
    gsap.fromTo('.fixed-elem__component2', {xPercent: 10, opacity: 0}, {
        xPercent: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "37.5% bottom",
            end: "37.5% center",
            scrub: true
        }
    });
});

let component2Mob = gsap.matchMedia().add('(max-width: 768.9px) and (min-height: 481px)', () => {
    gsap.fromTo('.fixed-elem__component2', {xPercent: 0, opacity: 1}, {
        xPercent: -10,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "37.5% center",
            end: "37.5% top",
            scrub: true
        }
    });
    gsap.fromTo('.fixed-elem__component2', {xPercent: -10, opacity: 0}, {
        xPercent: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "37.5% bottom",
            end: "37.5% center",
            scrub: true
        }
    });
});

// GSAP подсветка для первого и второго элементов устройства
let lighting1 = gsap.matchMedia().add('(min-width: 769px), (max-width: 768.9px) and (min-height: 481px)', () => {
    gsap.fromTo('.fixed-elem__lighting1', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: ".block7",
            start: "37.5% center",
            end: "37.5% top",
            scrub: true
        }
    });
    gsap.fromTo('.fixed-elem__lighting1', {opacity: 0}, {
        opacity: 1,
        scrollTrigger: {
            trigger: ".block7",
            start: "12.5% bottom",
            end: "12.5% center",
            scrub: true
        }
    });
});

// GSAP появление и исчезновение третьего элемента устройства
let component3 = gsap.matchMedia().add('(min-width: 769px)', () => {
    gsap.fromTo('.fixed-elem__component3', {yPercent: 0, opacity: 1}, {
        yPercent: -10,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "62.5% center",
            end: "62.5% top",
            scrub: true
        }
    });
    gsap.fromTo('.fixed-elem__component3', {yPercent: -10, opacity: 0}, {
        yPercent: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "62.5% bottom",
            end: "62.5% center",
            scrub: true
        }
    });
});

let component3Mob = gsap.matchMedia().add('(max-width: 768.9px) and (min-height: 481px)', () => {
    gsap.fromTo('.fixed-elem__component3', {yPercent: 0, opacity: 1}, {
        yPercent: 10,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "62.5% center",
            end: "62.5% top",
            scrub: true
        }
    });
    gsap.fromTo('.fixed-elem__component3', {yPercent: 10, opacity: 0}, {
        yPercent: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "62.5% bottom",
            end: "62.5% center",
            scrub: true
        }
    });
});

// GSAP появление и исчезновение четвертого элемента устройства
let component4 = gsap.matchMedia().add('(min-width: 769px)', () => {
    gsap.fromTo('.fixed-elem__component4', {yPercent: 0, opacity: 1}, {
        yPercent: -10,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "87.5% center",
            end: "87.5% top",
            scrub: true
        }
    });
    gsap.fromTo('.fixed-elem__component4', {yPercent: -10, opacity: 0}, {
        yPercent: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "87.5% bottom",
            end: "87.5% center",
            scrub: true
        }
    });
});

let component4Mob = gsap.matchMedia().add('(max-width: 768.9px) and (min-height: 481px)', () => {
    gsap.fromTo('.fixed-elem__component4', {yPercent: 0, opacity: 1}, {
        yPercent: 10,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "87.5% center",
            end: "87.5% top",
            scrub: true
        }
    });
    gsap.fromTo('.fixed-elem__component4', {yPercent: 10, opacity: 0}, {
        yPercent: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block7",
            start: "87.5% bottom",
            end: "87.5% center",
            scrub: true
        }
    });
});

// GSAP подсветка для третьего и четвертого элементов устройства
let lighting2 = gsap.matchMedia().add('(min-width: 769px), (max-width: 768.9px) and (min-height: 481px)', () => {
    gsap.fromTo('.fixed-elem__lighting2', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: ".block7",
            start: "87.5% center",
            end: "87.5% top",
            scrub: true
        }
    });
    gsap.fromTo('.fixed-elem__lighting2', {opacity: 0}, {
        opacity: 1,
        scrollTrigger: {
            trigger: ".block7",
            start: "62.5% bottom",
            end: "62.5% center",
            scrub: true
        }
    });
});

window.addEventListener("resize", function() {
    component1.kill();
    component1 = gsap.matchMedia().add('(min-width: 769px)', () => {
        gsap.fromTo('.fixed-elem__component1', {xPercent: 0, opacity: 1}, {
            xPercent: 10,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "12.5% center",
                end: "12.5% top",
                scrub: true
            }
        });
        gsap.fromTo('.fixed-elem__component1', {xPercent: 10, opacity: 0}, {
            xPercent: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "12.5% bottom",
                end: "12.5% center",
                scrub: true
            }
        });
    });
    
    component1Mob.kill();
    component1Mob = gsap.matchMedia().add('(max-width: 768.9px) and (min-height: 481px)', () => {
        gsap.fromTo('.fixed-elem__component1', {xPercent: 0, opacity: 1}, {
            xPercent: -10,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "12.5% center",
                end: "12.5% top",
                scrub: true
            }
        });
        gsap.fromTo('.fixed-elem__component1', {xPercent: -10, opacity: 0}, {
            xPercent: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "12.5% bottom",
                end: "12.5% center",
                scrub: true
            }
        });
    });
    
    component2.kill();
    component2 = gsap.matchMedia().add('(min-width: 769px)', () => {
        gsap.fromTo('.fixed-elem__component2', {xPercent: 0, opacity: 1}, {
            xPercent: 10,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "37.5% center",
                end: "37.5% top",
                scrub: true
            }
        });
        gsap.fromTo('.fixed-elem__component2', {xPercent: 10, opacity: 0}, {
            xPercent: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "37.5% bottom",
                end: "37.5% center",
                scrub: true
            }
        });
    });
    
    component2Mob.kill();
    component2Mob = gsap.matchMedia().add('(max-width: 768.9px) and (min-height: 481px)', () => {
        gsap.fromTo('.fixed-elem__component2', {xPercent: 0, opacity: 1}, {
            xPercent: -10,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "37.5% center",
                end: "37.5% top",
                scrub: true
            }
        });
        gsap.fromTo('.fixed-elem__component2', {xPercent: -10, opacity: 0}, {
            xPercent: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "37.5% bottom",
                end: "37.5% center",
                scrub: true
            }
        });
    });
    
    lighting1.kill();
    lighting1 = gsap.matchMedia().add('(min-width: 769px), (max-width: 768.9px) and (min-height: 481px)', () => {
        gsap.fromTo('.fixed-elem__lighting1', {opacity: 1}, {
            opacity: 0,
            scrollTrigger: {
                trigger: ".block7",
                start: "37.5% center",
                end: "37.5% top",
                scrub: true
            }
        });
        gsap.fromTo('.fixed-elem__lighting1', {opacity: 0}, {
            opacity: 1,
            scrollTrigger: {
                trigger: ".block7",
                start: "12.5% bottom",
                end: "12.5% center",
                scrub: true
            }
        });
    });
    
    component3.kill();
    component3 = gsap.matchMedia().add('(min-width: 769px)', () => {
        gsap.fromTo('.fixed-elem__component3', {yPercent: 0, opacity: 1}, {
            yPercent: -10,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "62.5% center",
                end: "62.5% top",
                scrub: true
            }
        });
        gsap.fromTo('.fixed-elem__component3', {yPercent: -10, opacity: 0}, {
            yPercent: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "62.5% bottom",
                end: "62.5% center",
                scrub: true
            }
        });
    });
    
    component3Mob.kill();
    component3Mob = gsap.matchMedia().add('(max-width: 768.9px) and (min-height: 481px)', () => {
        gsap.fromTo('.fixed-elem__component3', {yPercent: 0, opacity: 1}, {
            yPercent: 10,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "62.5% center",
                end: "62.5% top",
                scrub: true
            }
        });
        gsap.fromTo('.fixed-elem__component3', {yPercent: 10, opacity: 0}, {
            yPercent: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "62.5% bottom",
                end: "62.5% center",
                scrub: true
            }
        });
    });
    
    component4.kill();
    component4 = gsap.matchMedia().add('(min-width: 769px)', () => {
        gsap.fromTo('.fixed-elem__component4', {yPercent: 0, opacity: 1}, {
            yPercent: -10,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "87.5% center",
                end: "87.5% top",
                scrub: true
            }
        });
        gsap.fromTo('.fixed-elem__component4', {yPercent: -10, opacity: 0}, {
            yPercent: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "87.5% bottom",
                end: "87.5% center",
                scrub: true
            }
        });
    });
    
    component4Mob.kill();
    component4Mob = gsap.matchMedia().add('(max-width: 768.9px) and (min-height: 481px)', () => {
        gsap.fromTo('.fixed-elem__component4', {yPercent: 0, opacity: 1}, {
            yPercent: 10,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "87.5% center",
                end: "87.5% top",
                scrub: true
            }
        });
        gsap.fromTo('.fixed-elem__component4', {yPercent: 10, opacity: 0}, {
            yPercent: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: ".block7",
                start: "87.5% bottom",
                end: "87.5% center",
                scrub: true
            }
        });
    });
    
    lighting2.kill();
    lighting2 = gsap.matchMedia().add('(min-width: 769px), (max-width: 768.9px) and (min-height: 481px)', () => {
        gsap.fromTo('.fixed-elem__lighting2', {opacity: 1}, {
            opacity: 0,
            scrollTrigger: {
                trigger: ".block7",
                start: "87.5% center",
                end: "87.5% top",
                scrub: true
            }
        });
        gsap.fromTo('.fixed-elem__lighting2', {opacity: 0}, {
            opacity: 1,
            scrollTrigger: {
                trigger: ".block7",
                start: "62.5% bottom",
                end: "62.5% center",
                scrub: true
            }
        });
    });
});

// Swiper (Блок9)
new Swiper('.block9-swiper', {
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    freeMode: {
        enabled: true,
        sticky: true,
    },
    keyboard: true,
    speed: 600,
    spaceBetween: 30,
    observer: true,
    observeParents: true
});

// IntersectionObserver для видео (Блок10)
let block10Video = document.querySelector('video');
var options = {
    threshold: 0.6
};
var callback = function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            block10Video.play();
            observer.unobserve(block10Video);
        }
    });
};
var observer = new IntersectionObserver(callback, options);
observer.observe(block10Video);

// Начало/конец видео -> размеры корпуса исчезают/появляются
block10Video.addEventListener('play', function(){
    document.querySelector('.video__horizontal-size').style.cssText = 'opacity: 0; visibility: hidden;';
    document.querySelector('.video__vertical-size').style.cssText = 'opacity: 0; visibility: hidden;';
});

block10Video.addEventListener('ended', function(){
    document.querySelector('.video__horizontal-size2').style.cssText = 'opacity: 1; visibility: visible;';
    document.querySelector('.video__vertical-size2').style.cssText = 'opacity: 1; visibility: visible;';
});

// GSAP перемещение изображения (Блок11)
let block11CasePath = gsap.fromTo('.block11__container1 .block11__block11-img', {y: 0}, {
    y: `${screenHeight * 2}px`,
    ease: 'none',
    scrollTrigger: {
        trigger: ".block11__container2",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

window.addEventListener("resize", function() {
    block11CasePath.kill();
    block11CasePath = gsap.fromTo('.block11__container1 .block11__block11-img', {y: 0}, {
        y: `${screenHeight * 2}px`,
        ease: 'none',
        scrollTrigger: {
            trigger: ".block11__container2",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
});

gsap.fromTo('.block11-img__gradient1', {opacity: 1}, {
    opacity: 0,
    scrollTrigger: {
        trigger: ".block11__container2",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true
    }
});

gsap.fromTo('.block11-img__gradient2', {opacity: 0}, {
    opacity: 1,
    scrollTrigger: {
        trigger: ".block11__container2",
        start: "bottom bottom",
        end: "bottom top",
        scrub: true
    }
});

// IntersectionObserver для эффекта подсветки (Блок11)
var options2 = {
    threshold: 0.8
};
var callback2 = function(entries2) {
    entries2.forEach(entry2 => {
        if (entry2.isIntersecting) {
            entry2.target.classList.add('_visible');
        }
        else {
            entry2.target.classList.remove('_visible');
        }
        if (document.querySelector('.block11__container2').classList.contains('_visible')) {
            document.querySelector('.block11-img__lighting2').style.cssText = 'opacity: 1;';
        }
        else {
            document.querySelector('.block11-img__lighting2').style.cssText = '';
        }
        if (document.querySelector('.block11__container3').classList.contains('_visible')) {
            document.querySelector('.block11-img__lighting3').style.cssText = 'opacity: 1;';
        }
        else {
            document.querySelector('.block11-img__lighting3').style.cssText = '';
        }
    });
};
var observer2 = new IntersectionObserver(callback2, options2);
var animItems2 = document.querySelectorAll('.anim-item2');
animItems2.forEach(animItem2 => {
    observer2.observe(animItem2);
});

// Swiper (Блок11)
new Swiper('.block11-swiper', {
    navigation: {
        prevEl: '.block11-swiper-button-prev',
        nextEl: '.block11-swiper-button-next'
    },
    freeMode: {
        enabled: true,
        sticky: true,
    },
    keyboard: true,
    speed: 600,
    spaceBetween: 30,
    observer: true,
    observeParents: true
});

// IntersectionObserver для анимации блока11 (контейнер6)
var options3 = {
    threshold: 0.7
};
var callback3 = function(entries3) {
    entries3.forEach(entry3 => {
        if (entry3.isIntersecting) {
            document.querySelector('.block11-img__component1').style.cssText = 'animation: component1Transform 2.5s ease forwards;';
            document.querySelector('.block11-img__component2').style.cssText = 'animation: component2Transform 2.5s ease forwards;';
        }
    });
};
var observer3 = new IntersectionObserver(callback3, options3);
var animItem3 = document.querySelector('.anim-item3');
observer3.observe(animItem3);

// IntersectionObserver для сброса анимации блока11 (контейнер6)
var options4 = {
    threshold: 0.8
};
var callback4 = function(entries4) {
    entries4.forEach(entry4 => {
        if (entry4.isIntersecting) {
            document.querySelector('.block11-img__component1').style.cssText = '';
            document.querySelector('.block11-img__component2').style.cssText = '';
        }
    });
};
var observer4 = new IntersectionObserver(callback4, options4);
var animItems4 = document.querySelectorAll('.anim-item4');
animItems4.forEach(animItem4 => {
    observer4.observe(animItem4);
});