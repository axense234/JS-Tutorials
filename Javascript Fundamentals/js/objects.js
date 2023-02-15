// Objects -key/value pairs methods
// dot notation

const person = {
  name: "Bob",
  lastName: "Peters",
  age: 25,
  education: false,
  married: true,
  siblings: ["Anna", "John", "Susan", "Peter"],
  greeting: function (name) {
    console.log("Hello im " + name + ".");
  },
};

console.log(person.name);
console.log(person.siblings[2]);

const age = person.age;
person.name = "John";
console.log(age);

person.greeting(person.name);
