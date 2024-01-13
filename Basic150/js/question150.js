// Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.
function swapAdjecentValue(data) {
  data = data.toString().split("");
  if (data.length % 2 == 0) {
    for (let i = 0; i < data.length; i += 2) {
      let temp = data[i];
      data[i] = data[i + 1];
      data[i + 1] = temp;
    }
    return Number(data.join(""));
  }
  return "Integer length is not even";
}
console.log(swapAdjecentValue(15));
console.log(swapAdjecentValue(1234));
console.log(swapAdjecentValue(123456));
console.log(swapAdjecentValue(12345));
