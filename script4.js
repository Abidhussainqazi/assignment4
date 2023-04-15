//Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.
function findAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const avg = sum / arr.length;
  return avg;
}
const nums = [1, 2, 3, 4, 5];
const avg = findAverage(nums);
document.write("The average of the numbers in the array is: " + avg);
