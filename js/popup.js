// PopUp

const btnContacts = document.querySelector(".button-contacts");
const popUp = document.querySelector(".popup");
const close = document.querySelector(".close-popup");
const form = document.querySelector(".write-us-form");
const yourName = document.querySelector(".enter-name");
const yourEmail = document.querySelector(".enter-email");
const textArea = document.querySelector(".text-area");

btnContacts.addEventListener("click", function (evt) {
  evt.preventDefault();
  popUp.classList.add("popup-show");
  yourName.focus();
})

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popUp.classList.remove("popup-show");
  popUp.classList.remove("popup-error");
})



form.addEventListener("submit", function (evt) {
  if (!yourName.value || !yourEmail.value || !textArea.value) {
    evt.preventDefault();
    popUp.classList.remove("popup-error");
    popUp.offsetWidth = popUp.offsetWidth;
    popUp.classList.add("popup-error");
  } 
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popUp.classList.contains("popup-show")) {
      evt.preventDefault();
      popUp.classList.remove("popup-show");
      popUp.classList.remove("popup-error")
    }
  }
})


//  Slider

const firstBtn = document.querySelector(".first-btn");
const secondBtn = document.querySelector(".second-btn");
const thirdBtn = document.querySelector(".third-btn");
const currentSlide = document.querySelector(".current-slide");
const firstSlide = document.querySelector(".first-slide");
const secondSlide = document.querySelector(".second-slide");
const thirdSlide = document.querySelector(".third-slide");
const currentBtn = document.querySelector(".feature-item--current");

firstBtn.addEventListener("click", function(evt) {
  evt.preventDefault;
  secondSlide.classList.remove("current-slide");
  thirdSlide.classList.remove("current-slide");
  firstSlide.classList.add("current-slide");
  secondBtn.classList.remove("feature-item--current");
  thirdBtn.classList.remove("feature-item--current");
  firstBtn.classList.add("feature-item--current");
})

secondBtn.addEventListener("click", function(evt) {
  evt.preventDefault;
  firstSlide.classList.remove("current-slide");
  thirdSlide.classList.remove("current-slide");
  secondSlide.classList.add("current-slide");
  firstBtn.classList.remove("feature-item--current");
  thirdBtn.classList.remove("feature-item--current");
  secondBtn.classList.add("feature-item--current");
})

thirdBtn.addEventListener("click", function(evt) {
  evt.preventDefault;
  firstSlide.classList.remove("current-slide");
  secondSlide.classList.remove("current-slide");
  thirdSlide.classList.add("current-slide");
  firstBtn.classList.remove("feature-item--current");
  secondBtn.classList.remove("feature-item--current");
  thirdBtn.classList.add("feature-item--current");
})