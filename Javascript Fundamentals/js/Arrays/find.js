// find
// returns single instance
// returns first match, if no match undefined
// great for getting unique value

const people = [
  { name: "bob", age: 20, position: "developer", id: 1 },
  { name: "peter", age: 25, position: "designer", id: 2 },
  { name: "susy", age: 30, position: "the boss", id: 3 },
  { name: "anna", age: 35, position: "the boss", id: 4 },
];
const names = ["bob", "peter", "susy"];
const designer = people.find(function (person) {
  return person.id == 4;
});

console.log(
  names.find(function (name) {
    return name === "bob";
  })
);
console.log(designer);

const designer2 = people.filter(function (person) {
  return person.id == 4;
});
console.log(designer2[0].name);
