// Step 6 of 6
// Practice Exercises: Factory Functions

// Exercise #1
// factory function, object literals, add objects, array, for…of loop, for…in loop



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