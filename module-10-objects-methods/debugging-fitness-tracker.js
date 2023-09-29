// Step 6 of 6
// Practice Exercises: Objects & Methods



// Debugging Fitness Tracker

// Original Code
// const person = {
//     name: "Alice",
//     lastName = "Parker",
//     student: True
//   }
  
//   console.log(Alice.student);
  
//   console.log(person.lastName);
  
//   console.log(person.name);
  
//   person.totalSteps = 200;
  
//   person.walk = function(steps){
//     totalSteps += steps;
//   }
  
//   person.walk(250);
  
//   console.log(person.totalsteps);


// Fixed Code
const person = {
    name: "Alice",
    lastName : "Parker",
    student: true
  };
  
  console.log(person.student);
  
  console.log(person.lastName);
  
  console.log(person.name);
  
  person.totalSteps = 200;
  
  person.walk = function(steps){
    this.totalSteps += steps;
  };
  
  person.walk(250);

  console.log(person.totalSteps);