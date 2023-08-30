var swiper = new Swiper(".slide-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    centerSlide: "true",
    grabCursor: "true",
    fade: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView:1,
            slidesPerGroup: 1,
        },
        520: {
            slidesPerView:1,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView:3,
        },

    },
  });