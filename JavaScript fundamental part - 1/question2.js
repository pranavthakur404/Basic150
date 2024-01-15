// Write a JavaScript program to copy a string to the clipboard.
const input = document.querySelector(".input");
const btn = document.querySelector(".copyBtn");
btn.addEventListener("click", () => {
  let value = input.value;
  navigator.clipboard.writeText(value);
  console.log(navigator.clipboard.readText());
});
