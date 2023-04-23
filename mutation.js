// Return true if the string in the first element of the array contains all of 
// the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the 
// letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello 
// does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in 
// line are present in Alien.


const mutation = (arr) => {
  // destructure array and transform the characters to lower case
  const item1 = arr[0].toLowerCase()
  const item2 = arr[1].toLowerCase();

  // loop through the 1 item and compare each item of the 0 item with chars of 1 item
  for(let i = 0; i < item2.length; i++) {
    if(item1.indexOf(item2[i]) < 0) return false;
  }
  return true
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))