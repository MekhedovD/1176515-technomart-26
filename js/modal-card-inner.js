var orderLink = document.querySelector(".checkout-order");
var orderPopup = document.querySelector(".modal-order-card");
var orderClose = document.querySelector(".modal-close");

orderLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.add("modal-show");
});
orderClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (orderPopup.classList.contains("modal-show")) {
      orderPopup.classList.remove("modal-show");
    }
  }
});
