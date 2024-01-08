// Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.
// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z
function checkSignCondition(x, y, z) {
  let signs = ["+", "-", "*", "/"];
  for (let sign of signs) {
    switch (sign) {
      case "+":
        if (x + y == z) {
          return true;
        }
      case "-":
        if (x - y == z) {
          return true;
        }
      case "*":
        if (x * y == z) {
          return true;
        }
      case "/":
        if (x / y == z) {
          return true;
        }
    }
  }
  return false;
}

console.log(checkSignCondition(10, 25, 35));
console.log(checkSignCondition(10, 25, 250));
console.log(checkSignCondition(30, 25, 5));
console.log(checkSignCondition(100, 25, 4.0));
console.log(checkSignCondition(100, 25, 25));
