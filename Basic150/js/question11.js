// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
const cel_to_fer_btn = document.querySelector(".cel_fer_btn");
const fer_to_cel_btn = document.querySelector(".fer_cel_btn");
const cel_container = document.querySelector(".cel_container");
const fer_container = document.querySelector(".fer_container");

cel_to_fer_btn.addEventListener("click", () => {
  fer_container.classList.remove("active");
  cel_container.classList.add("active");
});
fer_to_cel_btn.addEventListener("click", () => {
  cel_container.classList.remove("active");
  fer_container.classList.add("active");
});

// calculation logic
const cel_converter = document.querySelector(".cel_converter");
cel_converter.addEventListener("click", () => {
  const cel_value = document.querySelector(".cel_value");
  const result = document.querySelector(".cel_answer");
  if (cel_value.value.length !== 0) {
    let ans = (cel_value.value * 9) / 5 + 5;
    console.log(ans);
    result.textContent = `Result : ${ans} F`;
  } else {
    console.log("no value is there");
  }
});

const fer_converter = document.querySelector(".fer_converter");
fer_converter.addEventListener("click", () => {
  const fer_value = document.querySelector(".fer_value");
  const result = document.querySelector(".fer_answer");
  if (fer_value.value.length !== 0) {
    let ans = (fer_value.value - 32) * (5 / 9);
    result.textContent = `Result : ${ans} C`;
  } else {
    console.log("please enter some value");
  }
});
