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
