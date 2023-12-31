// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
let year = 2014;
for (let i = year; i <= 2050; i++) {
  const nowCurrentYear = new Date();
  nowCurrentYear.setDate(1);
  nowCurrentYear.setMonth(1);
  nowCurrentYear.setFullYear(i);
  const day = nowCurrentYear.getDay();
  if (day == 6) {
    console.log(i);
  }
}
