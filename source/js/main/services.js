"use strict";
(function () {
  let services = document.querySelector(".js-services");
  if (!services) {
    return;
  }

  const dropdownTrigger = services.querySelector(".js-dropdown-trigger span");
  const vw = window.outerWidth;
  let activeClass = "services-active";

  let serviceLinks = document.querySelectorAll(".js-services-link");

  serviceLinks.forEach((link) => {
    link.addEventListener("click", (el) => {
      if (el.target.classList === activeClass) {
        return;
      }
      clear();
      show(el);
    });
  });

  function clear() {
    services.querySelectorAll(`.${activeClass}`).forEach((el) => {
      el.classList.remove(activeClass);
    });
  }

  function show(el) {
    const serviceNumber = el.target.dataset.service;
    const serviceToShow = services.querySelector(
      `.js-services-item[data-service="${serviceNumber}"]`
    );

    // standart
    if (serviceNumber === "2") {
      setTimeout(() => initStandartSlider(), 300);
    }

    if (!serviceToShow) {
      return;
    }
    serviceToShow.classList.add(activeClass);
    services
      .querySelectorAll(`.js-services-link[data-service="${serviceNumber}"]`)
      .forEach((link) => {
        link.classList.add(activeClass);
        dropdownTrigger.textContent = link.textContent;
      });
  }

  function initStandartSlider() {
    if (vw < 1024) {
      const standartsSliders = document.querySelectorAll(
        ".js-standarts-slider"
      );

      standartsSliders.forEach((el, index) => {
        const id = `#standarts-slider-${index}`;
        const elementSelector = `${id} .js-standarts-slider-container`;
        const nextSelector = `${id} .swiper-next`;
        const prevSelector = `${id} .swiper-prev`;

        console.log("elementSelector??", elementSelector);

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
            0: { slidesPerView: 1, slidesPerView: 1 },
            768: { slidesPerView: 3, slidesPerView: 1 },
            1025: { slidesPerView: 4, slidesPerView: 1 },
          },
        });
      });
    }
  }
})();
