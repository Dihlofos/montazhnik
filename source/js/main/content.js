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
