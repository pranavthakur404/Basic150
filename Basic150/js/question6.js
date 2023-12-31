// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
const input = document.querySelector(".inputField");
const btn = document.querySelector(".checkBtn");
const result = document.querySelector(".result");
const from = document.querySelector("form");

from.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.length !== 0) {
    if (input.value % 4 == 0) {
      result.textContent = "Yes, Leap Year";
    } else if (input.value % 400 == 0 && input.value % 100 == 0) {
      result.textContent = "Yes, Leap Year";
    } else {
      result.textContent = "Not a Leap Year";
    }
  } else {
    result.textContent = "Enter Year !!";
  }
});
