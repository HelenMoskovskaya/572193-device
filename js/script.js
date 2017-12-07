
var link = document.querySelector(".button-write-us");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=user-name]");
var mail = popup.querySelector("[name=e-mail]");
var text = popup.querySelector("[name=text-field]") 

var storage = localStorage.getItem("user-name");
var storage = localStorage.getItem("mail");


link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    name.value = storage;
    mail.focus();

  if (storage) {
    mail.value = storage;
    text.focus();
  } else { 
    mail.focus();
  }
  } 
})

close.addEventListener ("click", function (event) {
  event.preventDefault();
  popup.classList.remove ("modal-show");
  popup.classList.remove ("modal-error");
  });

 form.addEventListener("submit", function(event) {
  if (!name.value || !mail.value) {
  event.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
  } else {
    localStorage.selItem("user-name", name.value);
    localStorage.selItem("mail", mail.value);
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains ("modal-show")){
       popup.classList.remove("modal-show");
       popup.classList.remove("modal-error");
    }
  }
})


  var mapOpen = document.querySelector(".info-map");

  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-map-close");


  mapOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-map-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-map-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });


