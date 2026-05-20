
const slider = document.querySelector(".project-slider");

const leftBtn = document.querySelector(".left");

const rightBtn = document.querySelector(".right");

/* SLIDER */

rightBtn.addEventListener("click", () => {
  slider.scrollLeft += 320;
});

leftBtn.addEventListener("click", () => {
  slider.scrollLeft -= 320;
});

/* BUTTON CLICK EFFECT */

const buttons = document.querySelectorAll(".main-btn");

buttons.forEach(btn => {

  btn.addEventListener("click", () => {

    btn.style.transform = "scale(0.95)";

    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);

  });

});

/* CONTACT FORM */

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Message sent successfully!");

  form.reset();

});

