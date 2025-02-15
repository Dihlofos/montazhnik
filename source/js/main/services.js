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
