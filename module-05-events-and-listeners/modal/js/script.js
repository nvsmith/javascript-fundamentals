// Step 6 of 6
// Practice Exercises: Events & Event Listeners
// Exercise #3

var button = document.querySelector("button");
var modal = document.querySelector("div.modal");
var modalX = document.querySelector("span.modal-x");

button.addEventListener("click", function () {
    modal.classList.add("show-modal");
    button.innerText = "You've got this!";
})

modalX.addEventListener("click", function () {
    modal.classList.remove("show-modal");
    button.innerText = "Who's got this?"
})