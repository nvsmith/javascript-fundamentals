// Step 6 of 7
// What time is it?

var time = new Date().getHours();
// console.log(time);

var greeting = "Hi";
var yourName = "Nate";

if (time > 6 && time < 12) {
    greeting = "Good morning";
} else if (time < 16) {
    greeting = "Good afternoon";
} else if (time < 20) {
    greeting = "Good evening";
} else {
    greeting = "Go to bed";
}

alert(`${greeting}, ${yourName}!`);