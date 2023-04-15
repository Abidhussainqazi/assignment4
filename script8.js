//Write a function that takes an array of numbers as input and returns the product of all the numbers in the array.
function getProduct(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}
const abc = [1, 2, 3, 4, 5];
const product = getProduct(abc);
document.write("The product is: " + product);
