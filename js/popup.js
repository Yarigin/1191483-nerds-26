var popUp = document.querySelector(".popup");
var btnOn = document.querySelector(".popup-btn");
var btnOff = document.querySelector(".popup-close");

var form = popUp.querySelector("form");
var name = popUp.querySelector("[name=name]");
var email = popUp.querySelector(".input-email");

btnOn.addEventListener("click", function(evt) {
  evt.preventDefault();
  //popup.classList.remove("popup-off");
  popUp.classList.add("popup-on");
  name.focus();
});

btnOff.addEventListener("click", function(evt){
  evt.preventDefault();
  popUp.classList.remove("popup-on");
  //popup.classList.add("popup-off");
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
      if (popUp.classList.contains("popup-on")) {
        popUp.classList.remove("popup-on");
        name.classList.remove("input-required");
        email.classList.remove("input-required");
      }
    }
  });



