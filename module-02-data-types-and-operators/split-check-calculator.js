// Step 5 of 6
// Split the Check Calculator

var mealCost = Number(prompt("Cost of meal? (ex: 25.99)"));
var tip = Number(prompt("Tip amount? (ex: 0.20 for 20%)"));
var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;
var numOfPeople = Number(prompt("Number of people? (minimum: 1)"));

console.log(`Your meal cost is $${mealCost},
and with the tip of ${tip * 100}%, the total comes to $${total.toFixed(2)}.
For a party of ${numOfPeople}, each person's share is $${(total / numOfPeople).toFixed(2)}`);

