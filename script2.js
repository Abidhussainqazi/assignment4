//Write a function that takes a string as input and returns the number of vowels in the string.
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
const str = "hello world";
const vowelCount = countVowels(str);
document.write("The number of vowels in the string is: " + vowelCount);
