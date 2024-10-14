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
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    speed: 400,
    // scrollbar: {
    //     el: ".coaches__scrollbar",
    // },
    // navigation: {
    //     nextEl: ".btn-next",
    //     prevEl: ".btn-prev",
    // },
    // breakpoints: {
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
    //     1024: {
    //         slidesPerView: 3,
    //         spaceBetween: 20,
    //     },
    //     1281: {
    //         slidesPerView: 3.9,
    //         spaceBetween: 30,
    //     }
    // }
});