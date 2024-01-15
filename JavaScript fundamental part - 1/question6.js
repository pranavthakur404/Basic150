// Write a JavaScript program to target a given value in a nested JSON object based on the given key.
function targetValue(data, target) {
  for (let key in data) {
    if (key === target) {
      return data[key];
    }
    if (typeof data[key] == "object") {
      let result = targetValue(data[key], target);
      if (result) {
        return result;
      }
    }
  }
}

const data = {
  level1: {
    level2: {
      level3: "some data",
    },
  },
};

const dog = {
  status: "success",
  message: "https://images.dog.ceo/breeds/african/n02116738_1105.jpg",
};
console.log(targetValue(data, "level3"));
console.log(targetValue(data, "level4"));
console.log(targetValue(dog, "message"));
