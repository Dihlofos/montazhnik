"use strict";
(function () {
  const form = document.querySelector(".js-form");
  const formSubmitButton = document.querySelector(".js-form-submit");
  const formDone = document.querySelector(".js-form-done");
  const formWrong = document.querySelector(".js-form-wrong");
  initEvents();

  function initEvents() {
    if (!form) return;

    emailjs.init({
      publicKey: "ilhHVNppMlaoqE4RL",
    });

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
