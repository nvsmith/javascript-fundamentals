// Step 2 of 6
// Callback Functions & Events

// KEYDOWN EVENTS
var body = document.querySelector("body");

document.addEventListener("keydown", function (e) {
    console.log(e);
    if (e.key === "l") {
        body.classList.add("light");
    } else if (e.key === "d") {
        if (body.classList.contains("light")) {
            body.classList.remove("light");
        }
    }
})

// CHANGE EVENTS
var favorite = document.querySelector("#favorite");
var h1 = document.querySelector("h1");
var selection = "regular";

favorite.addEventListener("change", function (e) {
    console.log(e);
    selection = e.target.value;
    if (selection === "stealth") {
        h1.innerText = "Stealth Quincy";
    } else if (selection === "party"){  
        h1.innerText = "Party Quincy";
    } else {
        h1.innerText = "Quincy";
    }
})