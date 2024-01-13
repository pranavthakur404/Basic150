// Write a JavaScript program to break an URL address and put its parts into an array.
// Note: url structure : ://.org[/] and there may be no part in the address.
function breakURL(url) {
  // let url = window.location.href;
  url = url.split("/");
  url = url.filter((li) => {
    return li !== "";
  });
  url[0] = url[0].slice(0, url[0].length - 1); // remove : in https:
  return url;
}

console.log(breakURL("https://www.w3resource.com/javascript-exercises/"));
