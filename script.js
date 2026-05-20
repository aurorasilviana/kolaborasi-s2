
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

const words = ["Developer", "Designer", "Freelancer", "Creator"];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let currentLetters = "";

const changingText = document.getElementById("changing-text");

function typeEffect(){

  if(letterIndex < words[wordIndex].length){

    currentLetters += words[wordIndex][letterIndex];
    changingText.textContent = currentLetters;

    letterIndex++;

    setTimeout(typeEffect, 120);

  }else{

    setTimeout(deleteEffect, 1500);

  }
}

function deleteEffect(){

  if(letterIndex > 0){

    currentLetters = currentLetters.slice(0, -1);
    changingText.textContent = currentLetters;

    letterIndex--;

    setTimeout(deleteEffect, 80);

  }else{

    wordIndex++;

    if(wordIndex >= words.length){
      wordIndex = 0;
    }

    setTimeout(typeEffect, 300);
  }
}

typeEffect();
