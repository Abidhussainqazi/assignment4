//Write a function that takes an array of strings as input and returns an array of all the unique strings in the array.
function getUniqueStrings(arr) {
  const uniqueStrings = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueStrings.includes(arr[i])) {
      uniqueStrings.push(arr[i]);
    }
  }
  return uniqueStrings;
}
const ab = ["apple", "banana", "apple", "pear", "pear", "orange"];
const uniqueStrings = getUniqueStrings(ab);
document.write("The unique strings are: " + uniqueStrings);
