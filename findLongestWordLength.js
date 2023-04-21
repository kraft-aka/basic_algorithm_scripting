// Return the length of the longest word in the provided sentence.

// Your response should be a number.

const findLongestWordLength = (str) => {
  return str.split(" ").sort((a, b) => b.length - a.length)[0].length;
};

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
