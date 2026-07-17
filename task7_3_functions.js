// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Daniel"));

// Function Expression
const add = function(a, b) {
    return a + b;
};

console.log("Addition:", add(10, 5));

// Arrow Function
const multiply = (a, b) => a * b;

console.log("Multiplication:", multiply(10, 5));

// Arrow Function with Body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

console.log("Division:", divide(10, 2));
console.log("Division by zero:", divide(10, 0));

// Exercise 2

// 1. Calculate area of a rectangle
function calculateArea(width, height) {
    return width * height;
}
console.log("Rectangle Area:", calculateArea(5, 4));

// 2. Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log("30°C in Fahrenheit:", celsiusToFahrenheit(30));

// 3. Check if a number is even
function isEven(number) {
    return number % 2 === 0;
}
console.log("Is 8 even?", isEven(8));
console.log("Is 7 even?", isEven(7));

