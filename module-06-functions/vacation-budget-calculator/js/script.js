// Step 5 of 6
// Budget Your Vacay
// Create a daily vacation budget calculator to see how much money 
// you’ll have every day for food and fun. 


// Select a Paragraph & Button
var tripInfoButton = document.querySelector("button.trip-info");
var dailyBudget = document.querySelector("p.daily-budget");

// Write a Function to Get User Input
var tripInfo = function () {
    var totalBudget = Number(prompt("What is your total budget?"));
    var accommodation = Number(prompt("What are your accommodation costs?"));
    var numDays = Number(prompt("How many days does your trip last?"));
    
    calculateDailyBudget(totalBudget, accommodation, numDays);
}

// Write a Function to Calculate Your Daily Budget
var calculateDailyBudget = function (totalBudget, accommodation, numDays) {
    var daily = ((totalBudget - accommodation) / numDays).toFixed(2);
   
    dailyBudget.innerText = `You can spend $${daily} per day on food and fun.`;
}

// Call the Function & Add a Click Event
tripInfoButton.addEventListener("click", tripInfo);