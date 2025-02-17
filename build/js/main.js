"use strict";
(function () {
  const hoverEl = document.querySelector(".js-bg-hover");
  const bg = document.querySelector(".js-bg");
  if (!hoverEl) {
    return;
  }
  hoverEl.addEventListener("mouseenter", () => {
    hoverEl.classList.add("active");
  });

  hoverEl.addEventListener("mouseleave", () => {
    hoverEl.classList.remove("active");
  });
})();

"use strict";
(function () {
  let upButton = document.querySelector(".up");

  if (upButton) {
    window.onscroll = function () {
      if (window.pageYOffset > 260) {
        upButton.classList.add("up--shown");
      } else {
        upButton.classList.remove("up--shown");
      }
    };
  }
})();

"use strict";
(function () {
  const container = document.querySelector(".js-content");
  if (!container) {
    return;
  }

  const buttons = container.querySelectorAll(".js-button");
  const images = container.querySelectorAll(".js-image");
  const buttonsContainer = container.querySelector(".js-buttons");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", (el) => {
      const contentNumber = el.target.dataset.content;
      if (!el.target.dataset) return;
      clear();
      container
        .querySelector(`.js-image[data-content="${contentNumber}"]`)
        .classList.add("active");
    });
  });

  buttonsContainer.addEventListener("mouseleave", () => {
    clear();
    container
      .querySelector(`.js-image[data-content="0"]`)
      .classList.add("active");
  });

  function clear() {
    images.forEach((image) => {
      image.classList.remove("active");
    });
  }
})();

"use strict";
(function () {
  const dropdowns = document.querySelectorAll(".js-dropdown");

  document.addEventListener("click", (el) => {
    const clicked = el
      .composedPath()
      .find((value) => value?.classList?.contains("js-dropdown-trigger"));

    if (!clicked) {
      clear();
    }
  });

  if (!dropdowns.length) {
    return;
  }

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector(".js-dropdown-trigger");

    trigger.addEventListener("click", () => {
      dropdown.classList.toggle("open");
    });
  });

  function clear() {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("open");
    });
  }
})();

"use strict";
(function () {
  const nav = document.querySelector(".js-nav");
  const toggler = document.querySelector(".js-nav-toggler");
  const closeButtons = document.querySelectorAll(".js-nav-close");
  const links = nav.querySelectorAll(".js-scroll");

  toggler.addEventListener("click", () => {
    nav.classList.toggle("is-active");
  });

  closeButtons.forEach((item) => {
    item.addEventListener("click", () => {
      closeNav();
    });
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      closeNav();
    });
  });

  function closeNav() {
    nav.classList.remove("is-active");
  }
})();

"use strict";
(function () {
  let services = document.querySelector(".js-services");
  const dropdownTrigger = services.querySelector(".js-dropdown-trigger span");
  let activeClass = "services-active";
  if (!services) {
    return;
  }

  let serviceLinks = document.querySelectorAll(".js-services-link");

  serviceLinks.forEach((link) => {
    link.addEventListener("click", (el) => {
      console.log(el.target);
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
})();

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
})();

"use strict";
(function () {
  window.scroll = new SmoothScroll(".js-scroll", {
    speed: 800,
    speedAsDuration: true,
    easing: "easeOutQuad",
  });
})();
