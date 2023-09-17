// Step 8 of 9
// Generate a Grocery Shopping List


// Create a Function to Remove Duplicates

var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogurt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard"
];


// Log out the length of the groceries.
console.log(groceries.length); // 18

// Create a function expression, with list as a parameter, to delete duplicates.
var deleteDuplicates = function (list) {
  // Declare a variable with an empty array as a value.
  // This will hold unique items from the list that you passed to the function.
  var cleanList = [];
  
  // Loop thru the list that you passed to the function.
  for (const item of list) {
    // Check if the cleanList array doesn’t already include the item.
    if (!cleanList.includes(item)) {
      // Add unique items to the end of the array.
      cleanList.push(item);
    }
  }

  return cleanList;
};

// Check the Length of the New Array

// Create a variable for a new grocery list and assign it to a call to the deleteDuplicates function. 
// Pass in the original groceries array.
var newGroceries = deleteDuplicates(groceries);
// Check the new array's length to make sure it's less than the original.
console.log(newGroceries.length); // 15

// Create a Numbered List of the Grocery Items

// Loop through newGroceries to find each element AND index.
newGroceries.forEach(function (item, index) {
  // Log out a numbered list of groceries for your list.
  console.log(`${index + 1}. ${item}`);
});