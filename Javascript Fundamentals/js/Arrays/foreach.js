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
