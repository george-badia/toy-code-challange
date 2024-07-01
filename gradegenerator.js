
function calculateGrade(marks) {
   if (marks > 79) {
     return 'A';
   } else if (marks >= 60) {
     return 'B';
   } else if (marks >= 50) {
     return 'C';
   } else if (marks >= 40) {
     return 'D';
   } else {
     return 'E';
   }
 }
 
//  let studentMarks = prompt("Enter student marks (0-100):");
 let studentMarks = 79; //like from 0 to 100 .for 79 the grade is B
 let studentName = 'Jojo';
let studentClass = 4;
let subject = 'English';
 let grade = calculateGrade(studentMarks);//  using the calculateGrade function it will Calculate the grade based on the student's marks awarded.
 
 console.log(`The grade for ${studentName} in class ${studentClass} for ${subject} is: ${grade}`);// lastly this logs the grade for the student
