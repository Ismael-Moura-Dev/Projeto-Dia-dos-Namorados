const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1.5,
  spaceBetween: 20,
  centeredSlides: true,
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
      centeredSlides: false,
    },
  },
});
