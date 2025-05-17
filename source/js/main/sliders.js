"use strict";
(function () {
  //projects

  const sliders = document.querySelectorAll(".js-projects-slider");
  const vw = window.outerWidth;

  sliders.forEach((el, index) => {
    const id = `#projects-slider-${index}`;
    const elementSelector = `${id} .js-projects-slider-container`;

    const nextSelector = `${id} .swiper-next`;
    const prevSelector = `${id} .swiper-prev`;

    new Swiper(elementSelector, {
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

  //page-projects

  const projSliders = document.querySelectorAll(".js-projects-page-slider");
  //   const vw = window.outerWidth;

  projSliders.forEach((el, index) => {
    const id = `#projects-page-slider-${index + 1}`;
    const elementSelector = `${id} .js-projects-page-slider-container`;

    const nextSelector = `${id} .swiper-next`;
    const prevSelector = `${id} .swiper-prev`;

    console.log("elementSelector", elementSelector);

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

  //services

  const serviceSliders = document.querySelectorAll(".js-services-slider");

  serviceSliders.forEach((el, index) => {
    const id = `#services-slider-${index}`;
    const elementSelector = `${id} .js-services-slider-container`;

    const nextSelector = `${id} .swiper-next`;
    const prevSelector = `${id} .swiper-prev`;

    new Swiper(elementSelector, {
      loop: false,
      slidesPerView: 4,
      speed: 1000,
      spaceBetween: 40,
      navigation: {
        nextEl: nextSelector,
        prevEl: prevSelector,
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        1025: { slidesPerView: 4 },
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
    breakpoints: {
      360: {
        spaceBetween: 30,
      },

      768: {
        spaceBetween: 60,
      },
    },
  });

  if (vw < 1025) {
    new Swiper(".js-reviews-slider-container", {
      loop: false,
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 40,
      pagination: false,
      navigation: {
        nextEl: ".js-reviews-slider .swiper-next",
        prevEl: ".js-reviews-slider .swiper-prev",
      },
    });
  }

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

  new Swiper(".js-teams-slider-container", {
    loop: false,
    slidesPerView: 3,
    speed: 1000,
    spaceBetween: 40,
    pagination: false,
    navigation: {
      nextEl: ".js-teams-slider .swiper-next",
      prevEl: ".js-teams-slider .swiper-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
})();
