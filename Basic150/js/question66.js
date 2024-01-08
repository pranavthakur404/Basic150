// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
function checkCityName(str) {
  if (str.length > 3) {
    if (
      str.split("").slice(0, 3).join("") == "Los" ||
      str.split("").slice(0, 3).join("") == "New"
    ) {
      return str;
    }
  } else {
    return null;
  }
}
console.log(checkCityName("New York"));
console.log(checkCityName("Los Angeles"));
console.log(checkCityName("London"));
