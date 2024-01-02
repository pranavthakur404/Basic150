// Write a JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false
function resultStatus(marks, is_final) {
  if (is_final) {
    if (marks >= 90) {
      return true;
    } else {
      return false;
    }
  } else {
    if (marks >= 89) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(resultStatus("78", ""));
console.log(resultStatus("89", true));
console.log(resultStatus("99", true));
