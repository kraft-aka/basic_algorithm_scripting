// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting
// words like the and of.

const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.substring(1, item.length))
    .join(" ");
};

console.log(titleCase("I'm a little tea pot"));
