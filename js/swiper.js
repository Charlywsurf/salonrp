var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    autoplay: {
        delay: 300,
    },
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});