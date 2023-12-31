// Write a JavaScript program to calculate the days left before Christmas.
let date = new Date();
let currentYear = date.getFullYear();
let currentDate = date.getDate();
let currentMonth = date.getMonth();
let leapYear = isLeapYear(currentYear);

function getNumberOfDays(Month) {
  if (leapYear) {
    switch (Month) {
      case 0:
        return 31;
        break;
      case 1:
        return 29;
        break;
      case 2:
        return 31;
        break;
      case 3:
        return 30;
        break;
      case 4:
        return 31;
        break;
      case 5:
        return 30;
        break;
      case 6:
        return 31;
        break;
      case 7:
        return 31;
        break;
      case 8:
        return 30;
        break;
      case 9:
        return 31;
        break;
      case 10:
        return 30;
        break;
      case 11:
        return 31;
        break;
    }
  } else {
    switch (Month) {
      case 0:
        return 31;
        break;
      case 1:
        return 30;
        break;
      case 2:
        return 31;
        break;
      case 3:
        return 30;
        break;
      case 4:
        return 31;
        break;
      case 5:
        return 30;
        break;
      case 6:
        return 31;
        break;
      case 7:
        return 31;
        break;
      case 8:
        return 30;
        break;
      case 9:
        return 31;
        break;
      case 10:
        return 30;
        break;
      case 11:
        return 31;
        break;
    }
  }
}
function isLeapYear(year) {
  if (year % 4 == 0) return true;
  else if (year % 100 == 0 && year % 400 == 0) return true;
  else return false;
}

function getLeftDays() {
  let days = getNumberOfDays(currentMonth) - currentDate;
  days = days + 25;

  if (currentMonth == 11) {
    if (currentDate > 25) {
      for (let i = 0; i <= 10; i++) {
        days = days + getNumberOfDays(i);
      }
    }
  } else {
    for (let i = currentMonth + 1; i <= 10; i++) {
      days = days + getNumberOfDays(i);
    }
  }

  console.log(days);
}

getLeftDays();
