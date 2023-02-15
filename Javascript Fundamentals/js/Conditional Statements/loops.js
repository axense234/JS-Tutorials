// Loops
// repeatedly run a block of code whiel condition is true
// code block first, condition second
// runs at least

// while loop
let amount = 10;

while (amount > 0) {
  if (amount == 1) {
    console.log("I am going home with 1 dollar");
    break;
  }
  console.log("I have " + amount + " dollars and i am going to the mall");
  amount--;
}

// do while loop
let money = 0;

do {
  if (money == 0) {
    console.log("You are broke!");
  }
  console.log("You have " + money + " dollars!");
  money++;
} while (money < 10);

// for loop
let i;

for (i = 0; i < 10; i++) {
  console.log("And the number is " + i);
}

for (let number = 11; number >= 0; number--) {
  console.log("This is my number: " + number);
}
