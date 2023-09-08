// Step 5 of 6
// Event Handling with If & Else Statements

var button = document.querySelector(".show-cat");
console.log(button);

var cat = document.querySelector("figure.cat");
// console.log(cat);

button.addEventListener("click", function () {
    if (cat.classList.contains("show")) {
        cat.classList.remove("show");
        button.innerText = "Wait, come back!";
        button.classList.add("disappear");
    } else {
        cat.classList.add("show");
        button.innerText = "Shoo, cat!";
        button.classList.remove("disappear");
    }
})