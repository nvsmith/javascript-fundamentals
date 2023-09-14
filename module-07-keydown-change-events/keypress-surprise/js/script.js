// Step 6 of 6
// Practice Exercises: Keydown & Change Events


// Exercise #1
// querySelector(), keydown event, callback function, 
// conditional statements, innerText

var box1 = document.querySelector(".box-1");
var box2 = document.querySelector(".box-2");
var box3 = document.querySelector(".box-3");

document.addEventListener("keydown", function(e) {
    var key = e.key;
    if (key === "1") {
        box1.innerText = "🦊";
    } else if (key === "2") {
        box2.innerText = "🐯";
    } else if (key === "3"){
        box3.innerText = "🐻‍❄️";
    }
});


// Exercise #2
// querySelector(), click event, innerText

var clearBtn = document.querySelector("button");

clearBtn.addEventListener("click", function () {
    box1.innerText = "1";
    box2.innerText = "2";
    box3.innerText = "3";
});