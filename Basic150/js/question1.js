// Write a JavaScript program to display the current day and time in the following format
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
let data = new Date();
let dayInWord;
switch (data.getDay()) {
  case 1:
    dayInWord = "Monday";
    break;
  case 2:
    dayInWord = "Tuesday";
    break;
  case 3:
    dayInWord = "Wednesday";
    break;
  case 4:
    dayInWord = "Thursday";
    break;
  case 5:
    dayInWord = "Friday";
    break;
  case 6:
    dayInWord = "Saturday";
    break;
  case 7:
    dayInWord = "Sunday";
    break;
}
let hours = data.getHours();
let min = data.getMinutes();
let sec = data.getSeconds();
console.log("Today is : ", dayInWord);
console.log(hours, "PM", min, sec);
