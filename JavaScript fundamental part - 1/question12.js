// Write a JavaScript program to remove non-printable ASCII characters from a given string.
const remove_non_ASCII = (data) => {
  return data.replace(/[^\x20-\x7E]/g, "");
};

console.log(remove_non_ASCII("äÄçÇéÉêw3resouröceÖÐþúÚ"));
