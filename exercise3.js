<!-- JavaScript Lab Exercise 3A -->
const classRoster = ["Alice", "Tom", "Charlie", "Diana", "Evan"];

let rosterString = classRoster.toString();
console.log("Roster as string:", rosterString);

console.log("Initial classRoster:", classRoster);

classRoster.push("Fiona");
classRoster.push("Nancy");

let removedStudent = classRoster.shift();
console.log("Removed student:", removedStudent);

console.log("Updated classRoster:", classRoster);

console.log("Total number of students:", classRoster.length);

<!-- JavaScript Lab Exercise 3B -->
const classInfo = {
  className: "ENSF381: Full-Stack Web Development",
  instructor: "Dr. Smith",
  students: classRoster,
  details: {
    semester: "Winter",
    year: 2025
  }
};

classInfo.schedule = ["Monday", "Wednesday", "Friday"];

classInfo.instructor = "Dr. Abdellatif";

console.log("Class Name:", classInfo.className);
console.log("Instructor:", classInfo.instructor);
console.log("Students:", classInfo.students);

console.log("Semester:", classInfo.details.semester);

console.log("Updated classInfo object:", classInfo);

const { className, students } = classInfo;
console.log("Destructured className:", className);
console.log("Destructured students:", students);

const { semester, year } = classInfo.details;
console.log("Destructured semester:", semester);
console.log("Destructured year:", year);

const [student1, student2, ...remainingStudents] = classRoster;

console.log("student1:", student1);
console.log("student2:", student2);
console.log("remainingStudents:", remainingStudents);



