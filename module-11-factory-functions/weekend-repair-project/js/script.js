// Step 6 of 6
// Practice Exercises: Factory Functions



// Exercise #1
// factory function, object literals, add objects, 
// array, for…of loop, for…in loop

// Exercise #2
// add objects, empty array, for…of loop, if statement, 
// push(), innerHTML, createElement, append()

const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");

createVehicle = function (type, numwheels, color){
    const vehicle = {
        type: type,
        numwheels: numwheels,
        color: color,
    };
    return vehicle;
};

const car = createVehicle("car", 4, "black");
const bike = createVehicle("bike", 2, "white");
const skateboard = createVehicle("skateboard", 4, "green");

const myVehicles = [car, bike, skateboard];

for (let vehicle of myVehicles) {
    for (let key in vehicle){
        console.log(`${key}: ${vehicle[key]}`);
    }
}; 

bike.needsRepair = true;
skateboard.needsRepair = true;

// Create an event that will display the vehicles that need repairing when a button is clicked.
button.addEventListener("click", function () {
  repairList.innerHTML = ""; // Clear the list before populating it again

  // Filter the vehicles that need repairs from all other vehicles
  const vehicleRepairList = myVehicles.filter(function (vehicle) {
    return vehicle.needsRepair === true;
  });
  
  // Loop thru each vehicle needing repairs and append it to the webpage
  for (let vehicle of vehicleRepairList) {
    let li = document.createElement("li");
    li.innerHTML = `My <span>${vehicle.type}</span> needs some attention.`;
    repairList.append(li);
  }
});
