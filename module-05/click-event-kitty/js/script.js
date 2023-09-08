// Step 4 of 6
// Click Event Kitty - program a button to show a cute kitty photo when pressed!

var button = document.querySelector(".show-cat");
// console.log(button);

var cat = document.querySelector("figure.cat");
// console.log(cat);

button.addEventListener("click", function () {
    cat.classList.add("show");
})