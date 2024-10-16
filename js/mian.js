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
    speed: 400,
    slidesPerView: 'auto',
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            slidesPerView: 'auto',
            loop: true,
        },
        325: {
            slidesPerView: 1.3,
            spaceBetween: 10,
            slidesPerView: 'auto',
            loop: true,
        },
        375: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            slidesPerView: 'auto',
            loop: true,
        },
        425: {
            slidesPerView: 1.6,
            spaceBetween: 10,
            slidesPerView: 'auto',
            loop: true,
        },
        539: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerView: 'auto',
            loop: true,
        },
        767: {
            slidesPerView: 2.6,
            spaceBetween: 10,
            slidesPerView: 'auto',
            loop: true,
        },
        970: {
            slidesPerView: 3.3,
            spaceBetween: 10,
            slidesPerView: 'auto',
            loop: true,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 10,
            slidesPerView: 'auto',
            loop: true,
        },
        1440: {
            slidesPerView: 4.7,
            spaceBetween: 20,
            slidesPerView: 'auto',
            loop: true,
        },
        1590: {
            slidesPerView: 5,
            spaceBetween: 10,
            slidesPerView: 'auto',
            loop: true,
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

// accordion
const asideBtns = document.querySelectorAll('[data-control="sidebar__btn"]');

asideBtns.forEach(function(btn) {

    btn.addEventListener('click',  function (event) {

        const currentBlock = event.target.closest('.sidebar__item');

        const contentBlock = currentBlock.querySelector('[data-control="sidebar__block"]');

        if (contentBlock.classList.toggle('.open')) {

            contentBlock.style.maxHeight = contentBlock.scrollHeight + 'px';

        } else  {

            contentBlock.style.maxHeight = '0px';
        }
    });
});

// link-top 
const scrollBtn = document.querySelector('#scrollToTopBtn');

window.addEventListener('scroll', function () {

    if (window.pageYOffset > window.innerHeight) {

        scrollBtn.classList.add('top-link--visible');

    } else {

        scrollBtn.classList.remove('top-link--visible');
    }
});