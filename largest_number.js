const numbers = [10, 25, 7, 45, 18, 99, 56];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log("Largest number:", largest);

