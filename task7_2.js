// String Operations

let firstName = "John";
let lastName = "Doe";

// Concatenation
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// Template literals (preferred)
let greeting = `Hello, ${firstName}!`;
console.log("Greeting:", greeting);

let message = `Your name has ${fullName.length} characters.`;
console.log("Message:", message);

// String methods
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First character:", firstName.charAt(0));
console.log("Contains 'John':", fullName.includes("John"));

