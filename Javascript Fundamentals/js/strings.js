// String properties and methods
// wrapper String Object, don't memorize methods

let text = " Peter Jordanssssssssa";

let result = text.length;
console.log(result);

console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(1).toLowerCase());
console.log(text.charAt(text.length - 1));
console.log(text.indexOf("P"));
console.log(text);
console.log(text.trim());
console.log(text.startsWith("peter"));
console.log(text.trim().toLowerCase().startsWith("peter"));
console.log(text.includes("sssss"));
console.log(text.slice(0, 2));
console.log(text.slice(-3));

/*
const person = {
  name: "peter", // property
  greeting() {
    // method
    console.log("Hey, i'm Peter");
  },
};


console.log(person);
console.log(person.name);
person.greeting();
*/
