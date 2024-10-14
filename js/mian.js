Fancybox.bind("[data-fancybox]", {
    Toolbar: {
        display: {
            left: [],
            middle: [],
            right: ["close"],
        },
    },
});

//slider
const swiper = new Swiper('.swiper', {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    speed: 400,
    breakpoints: {
    //     320: {
    //         slidesPerView: 1.2,
    //         spaceBetween: 20,
    //     },
    //     539: {
    //         slidesPerView: 1.5,
    //         spaceBetween: 10,
    //     },
    //     767: {
    //         slidesPerView: 2.2,
    //         spaceBetween: 30,
    //     },
    //     970: {
    //         slidesPerView: 2.7,
    //         spaceBetween: 20,
    //     },
        1440: {
            slidesPerView: 4.7,
            spaceBetween: 20,
        },
        1590: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    }
});

//mobile menu
const mobileBtnOpen = document.querySelector('#openMobileNav');

const mobileBtnClose = document.querySelector('#closeMobileNav');

const mobileNav = document.querySelector('.mobile-nav');

const mobileNavLinks = mobileNav.querySelectorAll('.mobile-nav__list a');

function openMenu() {

    mobileNav.classList.add('mobile-nav--open');

    document.body.classList.add('no-scroll');
}

function closeMenu() {

    mobileNav.classList.remove('mobile-nav--open');

    document.body.classList.remove('no-scroll');
}

mobileNavLinks.forEach(function (elem) {

    elem.addEventListener('click', closeMenu);

});

mobileBtnOpen.addEventListener('click', openMenu);

mobileBtnClose.addEventListener('click', closeMenu);