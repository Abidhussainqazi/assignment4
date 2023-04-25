//Write a function that takes a string as input and returns the number of vowels in the string.
function countVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
const string = "hello world";
const vowelCount = countVowels(string);
document.write("The number of vowels in the string is: " + vowelCount);
