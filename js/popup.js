let popup = document.querySelector(".popup");
let btnOn = document.querySelector(".popup-btn");
let btnOff = document.querySelector(".popup-close");

let form = popup.querySelector("form");
let name = popup.querySelector("[name=name]");
let email = popup.querySelector(".input-email");

btnOn.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("popup-off");
  popup.classList.add("popup-on");
  name.focus();
});

btnOff.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("popup-on");
  popup.classList.add("popup-off");
  name.classList.remove("input-required");
  email.classList.remove("input-required");
});

form.addEventListener("submit", function (evt) {
    if (!name.value) {
      evt.preventDefault();
      name.classList.add("input-required");
} else {
      name.classList.remove("input-required")
      localStorage.setItem("name", name.value);
    }
    if(!email.value) {
      evt.preventDefault();
      email.classList.add("input-required");
} else {
      email.classList.remove("input-required");
      localStorage.setItem("email", email.value);
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("popup-on")) {
        popup.classList.remove("popup-on");
        name.classList.remove("input-required");
        email.classList.remove("input-required");
      }
    }
  });



