// Write a JavaScript program to create the dot products of two given 3D vectors.
// Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.
function dot_product(vec1, vec2) {
  let sum = 0;
  for (i = 0; i < vec1.length; i++) {
    sum += vec1[i] * vec2[i];
  }
  return sum;
}
console.log(dot_product([1, 2, 3], [1, 2, 3])); 
console.log(dot_product([2, 4, 6], [2, 4, 6])); 
console.log(dot_product([1, 1, 1], [0, 1, -1]));
