//Write a function that takes an array of strings as input and returns the length of the longest string in the array.
function findLongestLength(arr) {
  let longestLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestLength) {
      longestLength = arr[i].length;
    }
  }
  return longestLength;
}
const strings = ["apple", "banana", "pear", "grapefruit"];
const longestLength = findLongestLength(strings);
document.write("The length of the longest string in the array is: " + longestLength);
