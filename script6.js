//Write a function that takes an array of objects as input and returns an array of all the values for a specified key in each object.
function getValuesByKey(arr, key) {
  const values = [];
  for (let i = 0; i < arr.length; i++) {
    values.push(arr[i][key]);
  }
  return values;
}
const arr = [{ name: "John", age: 30 }, { name: "Mary", age: 25 }, { name: "Peter", age: 35 }];
const values = getValuesByKey(arr, "name");
document.write("The values for the 'name' key are: " + values);
