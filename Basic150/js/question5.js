// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

setInterval(() => {
  let text = document.querySelector(".text"); // getting that dom element
  let WordELement = text.childNodes[0]; // then from that element we are getting text node
  let word = WordELement.textContent; // from textNode we are getting text

  let newWord = word[word.length - 1] + word.slice(0, word.length - 1);

  text.textContent = newWord;

  const newText = word.length - 1;
}, 100);
