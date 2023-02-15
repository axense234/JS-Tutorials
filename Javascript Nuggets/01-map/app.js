// MAP Method

const people = [
  { age: 13, name: "bob", married: false },
  { age: 22, name: "anna", married: true },
  { age: 32, name: "susy", married: false },
  { age: 54, name: "mary", married: true },
  { age: 53, name: "lucy", married: false },
  { age: 12, name: "omad", married: true },
];

// returns a new array
// does not change the size of original array(unlike filter)
// uses values from og array when making new one

const newPeople = people.map((person) => {
  // console.log(person);
  const { name, age } = person;
  return {
    firstName: name.toUpperCase(),
    youngAge: Math.ceil(age / 2),
  };
});

console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
const div = document.querySelector("div");
div.innerHTML = names.join("");
