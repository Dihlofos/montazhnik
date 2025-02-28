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

  if (!dropdowns.length) return;

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
  emailjs.init({
    publicKey: "ilhHVNppMlaoqE4RL",
  });

  const form = document.querySelector(".js-form");
  const formSubmitButton = document.querySelector(".js-form-submit");
  const formDone = document.querySelector(".js-form-done");
  const formWrong = document.querySelector(".js-form-wrong");
  initEvents();

  function initEvents() {
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      grecaptcha.ready(function () {
        grecaptcha
          .execute("6LczUdEaAAAAACImrHbKWiSSutDmsNCH1sC9zXbu", {
            action: "submit",
          })
          .then(function (token) {
            let res = {};
            const formData = new FormData(form);

            for (let [key, value] of formData.entries()) {
              res[key] = value;
            }

            sendEmail(res);
          })
          .catch((error) => {
            formWrong.classList.add("show");
          });
      });
    });
  }

  function sendEmail({ name, phone, message }) {
    formSubmitButton.setAttribute("disabled", true);
    formSubmitButton.classList.add("loading");

    const templateParams = {
      name,
      phone,
      message,
    };

    emailjs.send("service_pz53umj", "template_clwmtl9", templateParams).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        form.classList.remove("show");
        formDone.classList.add("show");
      },
      (error) => {
        console.log("FAILED...", error);
        form.classList.remove("show");
        formWrong.classList.add("show");
      }
    );
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
    const id = `#projects-page-slider-${index}`;
    const elementSelector = `${id} .js-projects-page-slider-container`;

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

"use strict";
(function () {
  window.scroll = new SmoothScroll(".js-scroll", {
    speed: 800,
    speedAsDuration: true,
    easing: "easeOutQuad",
  });
})();
