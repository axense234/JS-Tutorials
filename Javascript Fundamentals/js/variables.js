// 1.Variable - Most Basic Building Block
// ===============================
// Variables - Store, Access, Modify === Value
// Declare, Assignment Operator, Assign Value
// Assign value later, modify existing

/*
let name = "John Shrimp Taco VI";
let address, zip, state;
address = "101 Main Street";
zip = "60612";
state = "CA";
name = "Fish Burrito";
console.log(address, zip, state);
console.log(name);
*/

// 2.Variable Naming Rules
// ===============================
// can contain digits, letters, underscore, $
// must start with letter, $ or _

// no keyword
// cannot start with number

// case sensitive - fullname vs Fullname

// camelCase or underscore

/*let random123_$ = "random";
console.log(random123_$);

let fullname = "Comanescu Andrei";
let fullName = "Comanesu Andrei";
// console.log(Fullname);
*/

// 3. let vs const vs var
// ===============================
// using var
var value = "john";
value = "some other value";

// using let
let name = "john";
name = "peter";

// using const( constant ) - can't re-assign
const lastName = "jordan";
lastName = "john";

console.log(value);
console.log(name);
// console.log(lastName); - error
