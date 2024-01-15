// Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.
function compare(obj1, obj2) {
  for (let key of Object.keys(obj2)) {
    if (obj1.hasOwnProperty(key)) {
      if (!(obj1[key] === obj2[key])) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

console.log(
  compare({ age: 25, hair: "long", beard: true }, { hair: "long", beard: true })
);
console.log(
  compare({ hair: "long", beard: true }, { age: 25, hair: "long", beard: true })
); // false
console.log(
  compare({ hair: "long", beard: true }, { age: 26, hair: "long", beard: true })
);
