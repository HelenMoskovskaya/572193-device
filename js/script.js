
var link = document.querySelector(".button-write-us");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".modal-form");
var name = popup.querySelector("[name=user-name]");
var mail = popup.querySelector("[name=e-mail");
var text = popup.querySelector("[name=text-mail") 

var storage = localStorage.getItem("name");
var storage = localStorage.getItem("e-mail");


link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add ("modal-show");

  if (storage) {
    name.value = storage;
    mail.focus();
  } else {
    name.focus();
  }
});

close.addEventListener ("click", function (event) {
  event.preventDefault();
  popup.classList.remove ("modal-show");
  popup.classList.remove ("modal-error");
  });

form.addEventListener("submit", function(event) {
  if (!name.value || !mail.value) {
  event.preventDefault();
  popup.classList.remove("modal-error");
  } else {
    localStorage.selItem("name", name.value)
  }
});

window.addEventListener("keydown", function (event) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains ("modal-show")){
       popup.classList.remove("modal-show");
       popup.classList.remove("modal-error");
    }
  }
})

  var mapOpen = document.querySelector(".map-conteiner");

  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".close-map");


  mapOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });


