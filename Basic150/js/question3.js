// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
const currentData = new Date();
const month = currentData.getMonth();
const day = currentData.getDay();
const year = currentData.getFullYear();
console.log(`${month}-${day}-${year}`);
console.log(`${month}/${day}/${year}`);
console.log(`${day}-${month}-${year}`);
console.log(`${day}/${month}/${year}`);
