let popup = document.querySelector(".popup");
let btnOn = document.querySelector(".popup-btn");
let btnOff = document.querySelector(".popup-close");
btnOn.onclick = function(){
  popup.classList.remove("popup-off");
  popup.classList.add("popup-on");
};
btnOff.onclick = function(){
  popup.classList.remove("popup-on");
  popup.classList.add("popup-off");
};

