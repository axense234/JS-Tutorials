// Switch
// dice values: 1-6

const dice = 1;

// all if
if (dice === 1) {
  console.log("You got one");
}
if (dice === 2) {
  console.log("You got one");
}
if (dice < 1 || dice > 6) {
  console.log("You did not roll the dice");
}

// else if
if (dice === 1) {
  console.log("You got one");
} else if (dice === 2) {
  console.log("You got one");
} else {
  console.log("You did not roll the dice");
}

switch (dice) {
  case 1:
    console.log("You got one");
    break;
  case 2:
    console.log("You got two");
    break;
  case 3:
    console.log("You got three");
    break;
  case 4:
    console.log("You got four");
    break;
  default:
    console.log("You did not roll the dice");
}
