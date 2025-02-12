"use strict";
(function () {
  //projects

  const sliders = document.querySelectorAll(".js-projects-slider");

  sliders.forEach((el, index) => {
    const id = `#projects-slider-${index}`;
    const elementSelector = `${id} .js-projects-slider-container`;

    const nextSelector = `${id} .swiper-next`;
    const prevSelector = `${id} .swiper-prev`;

    new Swiper(elementSelector, {
      // Optional parameters
      loop: true,
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 0,
      pagination: false,
      navigation: {
        nextEl: nextSelector,
        prevEl: prevSelector,
      },
    });
  });

  new Swiper(".js-clients-slider-container", {
    loop: false,
    slidesPerView: "auto",
    speed: 1000,
    spaceBetween: 60,
    pagination: false,
    navigation: {
      nextEl: ".js-clients-slider .swiper-next",
      prevEl: ".js-clients-slider .swiper-prev",
    },
  });

  new Swiper(".js-news-slider-container", {
    loop: false,
    slidesPerView: "auto",
    speed: 1000,
    spaceBetween: 40,
    pagination: false,
    navigation: {
      nextEl: ".js-news-slider .swiper-next",
      prevEl: ".js-news-slider .swiper-prev",
    },
  });
})();
