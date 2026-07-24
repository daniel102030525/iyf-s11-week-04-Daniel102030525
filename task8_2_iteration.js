const scores = {
  math: 95,
  english: 88,
  science: 92
};

// Get keys
console.log(Object.keys(scores));

// Get values
console.log(Object.values(scores));

// Get entries
console.log(Object.entries(scores));

// Loop through the object
for (let subject in scores) {
  console.log(subject + ": " + scores[subject]);
}

