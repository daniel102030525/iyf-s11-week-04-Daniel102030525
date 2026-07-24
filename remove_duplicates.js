const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

const uniqueNumbers = [...new Set(numbers)];

console.log("Original array:", numbers);
console.log("Without duplicates:", uniqueNumbers);

