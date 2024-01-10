// Write a JavaScript program to reverse the order of bits in a integer.
// 14 -> 00001110 -> 01110000 -> 112
// 56 -> 00111000 -> 00011100 -> 28
// 234 -> 11101010 -> 01010111 -> 87

// function inBits(num) {
//   let bits = [];
//   let x = 1;
//   while (num) {
//     bits.push(num % 2);
//     num = Math.floor(num / 2);
//   }
//   bits = bits.reverse().join("");
//   return Number(bits);
// }
// function inNumbers(bits) {
//   let length = String(bits).length;
//   const container = [1, 2];
//   let sum = 0;
//   for (let i = 1; i <= length; i++) {
//     container.push(container[i] * 2);
//   }
//   bits = String(bits);
//   let index = 0;
//   for (let i = bits.length - 1; i >= 0; i--) {
//     if (bits[i] == "1") {
//       sum += container[index];
//     }
//     index += 1;
//   }
//   return sum;
// }

// UPWARD I HAVE WRIITEN THE CUSTOM(without builtIn functions) LOGIC
function get_revers_of_bits_in_integer(num) {
  //   num = num.toString(2).split("");
  //   let rest = 8 - num.length;
  //   for (let i = 1; i <= rest; i++) {
  //     num.unshift("0");
  //   }
  return parseInt(
    num.toString(2).padStart(8, "0").split("").reverse().join(""),
    2
  );
}
console.log(get_revers_of_bits_in_integer(14));
console.log(get_revers_of_bits_in_integer(56));
console.log(get_revers_of_bits_in_integer(234));


