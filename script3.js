//Write a function that takes an array of strings as input and returns the length of the longest string in the array.
function findLongestLength(stringArray) {
  let longestLength = 0;
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > longestLength) {
      longestLength = stringArray[i].length;
    }
  }
  return longestLength;
}

const strings = ["apple", "banana", "pear", "grapefruit"];
const longestLength = findLongestLength(strings);
document.write("The length of the longest string in the array is: " + longestLength);
