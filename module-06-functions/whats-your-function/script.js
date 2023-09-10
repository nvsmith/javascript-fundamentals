// Write a Function
var startMyDay = function () {
    return "Time for coffee and a shower";
}
console.log(startMyDay());


// Write a Function with 1 Parameter
var favoriteCookie = function (cookie) {
    return `My favorite cooke is ${cookie}`;
}
console.log(favoriteCookie("chocolate & caramel"));

// Write a Function with 2 Parameters
var introduce = function (name, occupation) {
    return `My name is ${name} and my occupation is ${occupation}`;
}
console.log(introduce("Superman", "superhero"));

// Create a Function to Capture Input
var hydrationFeedback = function () {
    var numGlasses = Number(prompt("How many glasses of water did you have today?"));
    console.log(`numGlasses: ${typeof(numGlasses)}`);
    if (numGlasses >= 8) {
        console.log(`Congrats!`);
    } else {
        console.log(`Let's try for a bit more tomorrow`);
    }
}

hydrationFeedback();


