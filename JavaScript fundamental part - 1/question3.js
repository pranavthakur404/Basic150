// Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.
let data = "col1,col2\na,b\nc,d";

const csv_to_json = (data, delimiter = ",") => {
  const keys = data.slice(0, data.indexOf("\n")).split(delimiter);
  const value = data.slice(data.indexOf("\n") + 1).split("\n");
  return value.map((v) => {
    let obj = {};
    let counter = 0;
    for (let key of keys) {
      obj[key] = v.split(delimiter)[counter];
      counter++;
    }
    return obj;
  });
};

console.log(csv_to_json("col1,col2\na,b\nc,d"));
console.log(csv_to_json("col1;col2\na;b\nc;d", ";"));
