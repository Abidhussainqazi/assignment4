//Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.

function sumEvenNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSum = sumEvenNumbers(input);
document.write("The sum of even numbers in the array is: " + evenSum);
