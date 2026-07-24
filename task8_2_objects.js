// Creating objects
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "coding"],
  address: {
    city: "New York",
    country: "USA"
  }
};

// Accessing properties
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

// Modifying properties
person.age = 31;
person.email = "john@example.com";
delete person.isStudent;

// Display updated object
console.log(person);

