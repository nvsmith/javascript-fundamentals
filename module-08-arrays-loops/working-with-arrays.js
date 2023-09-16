// Step 6 of 9
// Working with Arrays


// Create & Modifying an Array

// Create array called 'hobbies' of at least 6 elements
var hobbies = [
    "painting", 
    "illustrating", 
    "scuplting", 
    "graphic design", 
    "diorama", 
    "glassblowing"
];

// Add a new hobby to the end of the array
hobbies.push("screen printing");

// Log out 3rd element
console.log(hobbies[2]);

// Remove of the last element
hobbies.pop();

// Add 2 new elements after the 3 element
hobbies.splice(2, 0, "stained glass", "ceramics");

// Remove first element
hobbies.shift();

// Add a goal to the beginninf of the array
hobbies.unshift("etching");


// Create a New Array
var goals = ["world peace", "end poverty", "justice for all"];

// Combine Arrays
var allTheThings = [...hobbies, ...goals];

// Log the index of an item
console.log(allTheThings.indexOf("justice for all"));

// Remove the item you just discovered
allTheThings.splice(10,1);

// Map Over an Array
// Add 'I can't wait to start' to the beginning of each array element
var plans = allTheThings.map(function (item) { 
    return `I can't wait to start ${item}`;    
});

console.log(plans);

