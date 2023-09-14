// Step 6 of 6
// Practice Exercises: Keydown & Change Events


// Exercise #3
// querySelector(), change event, callback function, 
// classList.remove, classList.add, conditional statements


var moodSelector = document.querySelector("#moods");
var body = document.querySelector("body");

moodSelector.addEventListener("change", function (e) {
    // console.log(e.target.value);
    var mood = e.target.value;
    if (mood === "happy") {
        body.classList.remove("sad");
        body.classList.remove("passionate");
        body.classList.add("happy");
    } else if (mood === "sad") {
        body.classList.remove("happy");
        body.classList.remove("passionate");
        body.classList.add("sad");
    } else if (mood === "passionate") {
        body.classList.remove("happy");
        body.classList.remove("sad");
        body.classList.add("passionate");
    }
});
