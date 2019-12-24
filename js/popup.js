let popup = document.querySelector(".popup");
let btnOn = document.querySelector(".popup-btn");
let btnOff = document.querySelector(".popup-close");

let form = popup.querySelector("form");
let name = popup.querySelector("[name=name]");
let email = popup.querySelector("[name=email]");

let requiredName = popup.querySelector(".input-name");
let requiredEmail =popup.querySelector(".input-email");

btnOn.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("popup-on");
  name.focus();
});
btnOff.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("popup-on");
  requiredName.classList.remove("input-required");
});

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value) {
      evt.preventDefault();
      requiredName.classList.add("input-required");
      requiredEmail.classList.add("input-required");
} else {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("popup-on")) {
        popup.classList.remove("popup-on");
      }
    }
  });



