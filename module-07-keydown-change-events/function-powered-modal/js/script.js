// Step 4 of 6
// Function Powered Modal

var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

// Close and Open Modal Functions
var closeModal = function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
};

var openModal = function () {
  modal.classList.add("show-modal");
  button.innerText = "You've got this!!!";
};

// Esc and Click Events
button.addEventListener("click", function () {
  openModal();
});

modalX.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Escape") {
    if (modal.classList.contains("show-modal")) {
      closeModal();
    }
  }
});