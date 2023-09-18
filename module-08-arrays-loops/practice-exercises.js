// Step 9 of 9
// Practice Exercises: Arrays & Loops

var stuff = [
    "cars",
    "blankets",
    "sunflowers",
    "sky",
    "yellow",
    "code",
    "perfume",
    "coffee",
    "books"
];

// Exercise #1
// array, forEach, if statement, % operator

// Log out even index items
stuff.forEach(function (item, index) {
    if (index % 2 === 0) {
        // console.log(item);
    }
});

// Exercise #2
// array, indexOf, splice, if/else statement, !== operator

// Create function that will remove an element from an array
var removeItem = function (array, item) {
    var index = array.indexOf(item);
    
    if (index === -1) {
        console.log(`Sorry, no such item found here.`);
    } else {
        array.splice(index, 1);
        console.log(`${item} removed from your list.`);
    }
};

removeItem(stuff, "coffee");
removeItem(stuff, "pencils"); 

// Exercise #3
// empty array, filter, if statement, for…of loop, includes, push

// Log out an array using 'filter' for elements with "s"
var stuffWithS = stuff.filter(function (item) {
    return item.includes("s");
});
console.log(stuffWithS);

// Log out an array using 'for...of' for elements with "f"
var stuffWithF = [];
for (const item of stuff) {
    if (item.includes("f")) {
        stuffWithF.push(item);
    }
};
console.log(stuffWithF);