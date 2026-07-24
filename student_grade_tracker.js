const gradeTracker = {
  students: [],

  // Add a new student
  addStudent(name, grades) {
    this.students.push({ name, grades });
  },

  // Get a student by name
  getStudent(name) {
    return this.students.find(student => student.name === name);
  },

  // Calculate a student's average
  getStudentAverage(name) {
    const student = this.getStudent(name);

    if (!student) {
      return "Student not found";
    }

    const marks = Object.values(student.grades);
    const total = marks.reduce((sum, mark) => sum + mark, 0);

    return total / marks.length;
  },

  // Get class average for a subject
  getSubjectAverage(subject) {
    const marks = this.students
      .map(student => student.grades[subject])
      .filter(mark => mark !== undefined);

    const total = marks.reduce((sum, mark) => sum + mark, 0);

    return total / marks.length;
  }
};

// Add students
gradeTracker.addStudent("Alice", { Math: 90, English: 80, Science: 85 });
gradeTracker.addStudent("Bob", { Math: 70, English: 75, Science: 80 });
gradeTracker.addStudent("Charlie", { Math: 95, English: 90, Science: 92 });

// Test
console.log(gradeTracker.getStudent("Alice"));
console.log("Alice Average:", gradeTracker.getStudentAverage("Alice"));
console.log("Math Average:", gradeTracker.getSubjectAverage("Math"));

