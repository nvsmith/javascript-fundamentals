// Step 7 of 7
// Practice Exercises: Conditionals & Comparisons
// Exercise #3

var chocolateStock = 10;
var orderAmount = Number(prompt("How many pieces of chocolate would you like? (ex: 0 - 10)"));
var chocolateRemaining = (chocolateStock - orderAmount);

if (orderAmount > 10) {
    alert(`Sorry, we don't have that much chocolate in stock`);
} else if (orderAmount === 0){
    alert(`If you don't want any chocolate, our shop is not the place to fulfill your retail needs.`);
} else if (chocolateRemaining > 0){
    alert(`We have ${chocolateRemaining} piece(s) of chocolate remaining`);
} else {
    alert(`No more chocolate left!`)
}
