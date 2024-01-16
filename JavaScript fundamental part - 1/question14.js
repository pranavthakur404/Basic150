// Write a JavaScript program to replace multiple object keys' names with the values provided.

const renameKey = (tempObj, obj) => {
  for (let key in tempObj) {
    obj[tempObj[key]] = obj[key];
    delete obj[key];
  }
  return obj;
};

const obj = { name: "Bobo", job: "Programmer", shoeSize: 100 };
console.log(renameKey({ name: "firstName", job: "Actor" }, obj));
