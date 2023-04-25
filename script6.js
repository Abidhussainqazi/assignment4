//Write a function that takes an array of objects as input and returns an array of all the values for a specified key in each object.
function getValuesByKey(people, key) {
  const values = [];
  for (let i = 0; i < people.length; i++) {
    values.push(people[i][key]);
  }
  return values;
}

const people = [{ name: "John", age: 30 }, { name: "Mary", age: 25 }, { name: "Peter", age: 35 }];
const values = getValuesByKey(people, "name");
document.write("The values for the 'name' key are: " + values);
