// Write a JavaScript program to simplify a given absolute path for a file in Unix-style.d
function simplifiedPath(mainPath) {
  mainPath = mainPath.split("/");
  mainPath = mainPath.filter((char) => {
    return char !== "." && char !== ".." && char !== "";
  });

  return mainPath.join("/");
}
console.log(simplifiedPath("/home/var/./www/../html//sql/"));
