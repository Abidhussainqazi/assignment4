//Write a function that takes an array of strings as input and returns an array of all the unique strings in the array.
function getUniqueStrings(ab) {
  const uniqueStrings = [];
  for (let i = 0; i < ab.length; i++) {
    if (!uniqueStrings.includes(ab[i])) {
      uniqueStrings.push(ab[i]);
    }
  }
  return uniqueStrings;
}
const ab = ["apple", "banana", "apple", "pear", "pear", "orange"];
const uniqueStrings = getUniqueStrings(ab);
document.write("The unique strings are: " + uniqueStrings);
