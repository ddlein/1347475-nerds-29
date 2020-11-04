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


