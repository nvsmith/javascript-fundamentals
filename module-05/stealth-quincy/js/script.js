
// Step 6 of 6
// Practice Exercises: Events & Event Listeners
// Exercise #1 - mouseover to change text

var fans = document.querySelector("span.fans");
var fish = document.querySelector("span.fish");
var pets = document.querySelector("span.pets");

fans.addEventListener("mouseover", function () {
    fans.innerText = "123K";
})
fish.addEventListener("mouseover", function () {
    fish.innerText = "47K";
})
pets.addEventListener("mouseover", function () {
    pets.innerText = "20K";
})


// Exercise #2 - toggle light & dark theme

var toggle = document.querySelector("#toggle");
var ball = document.querySelector("div.ball");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");

toggle.addEventListener("click", function () {
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        ball.classList.remove("move-right");
        h1.innerText = "Stealth Quincy";
    } else {
        body.classList.add("light");
        ball.classList.add("move-right");
        h1.innerText = "Party Quincy";
        
    }
})