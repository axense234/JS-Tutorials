// Powerfull Array Methods
// forEach, map, filter, find, reduce
// Iterate over array - no for loop required
// Accept CALLBACK Function as an argument,calls Callback against each item in an array.Reference Item in the Callback Parameter.

const numbers = [0, 1, 2, 3, 4];

// show all number

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log(" ");

// forEach
// does not return new array

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "anna", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
];

function showPerson(person) {
  console.log(person.name);
  console.log(person.position.toUpperCase());
  console.log(" ");
}

// people.forEach(showPerson);

people.forEach(function (item) {
  console.log(item.name);
  console.log(item.position.toUpperCase());
  console.log(" ");
});
