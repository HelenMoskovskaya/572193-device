var open=document.querySelector(".button-write-us"),popup=document.querySelector(".modal-write-us"),close=popup.querySelector(".modal-close"),form=popup.querySelector("form"),name=popup.querySelector("[name=user-name]"),mail=popup.querySelector("[name=e-mail]"),text=popup.querySelector("[name=text-field]"),storage=localStorage.getItem("user-name"),storage=localStorage.getItem("mail");open.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show")}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){name.value&&mail.value?(localStorage.selItem("user-name",name.value),localStorage.selItem("mail",mail.value)):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error"))});var mapOpen=document.querySelector(".info-map"),mapPopup=document.querySelector(".modal-map"),mapClose=mapPopup.querySelector(".modal-map-close");mapOpen.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-map-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-map-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&mapPopup.classList.contains("modal-show")&&mapPopup.classList.remove("modal-show")});