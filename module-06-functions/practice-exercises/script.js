// Exercise #1
// function expression, template literals, toUpperCase(), return keyword

var shoutIt = function (name) {
    var shout = `Hello, ${name}, nice to meet you`.toUpperCase();
    return shout;
}

console.log(shoutIt("John Doe"));
console.log(shoutIt("Marge Simpson"));


// Exercise #2
// function expression, return keyword, typeof operator, arithmetic operator, 
// comparison operator, integers, floating point numbers, strings

var multiply = function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return `Provide two numbers`;
    }
    return (num1 * num2);
}

console.log(multiply(3, 5)); // 15
console.log(multiply(3, "5")); // Provide two numbers


// Exercise #3 - see Number Guessing Game