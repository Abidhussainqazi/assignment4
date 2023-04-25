//Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.
function findAverage(numberArray) {
  let sum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  const avg = sum / numberArray.length;
  return avg;
}

const nums = [1, 2, 3, 4, 5];
const avg = findAverage(nums);
document.write("The average of the numbers in the array is: " + avg);
