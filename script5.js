//Write a function that takes an object as input and returns an array of all the keys in the object
function getKeys(obj) {
  const keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
}
const obj = { name: "John", age: 30, city: "New York" };
const keys = getKeys(obj);
document.write("The keys in the object are: " + keys);
