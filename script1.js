//Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.

function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSum = sumEvenNumbers(numbers);
document.write("The sum of even numbers in the array is: " + evenSum);
