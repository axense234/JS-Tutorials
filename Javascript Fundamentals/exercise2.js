// Functions, return, if, arrays, for loop

const gas = [20, 40, 100, 30, 50];
const food = [10, 15, 20, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log(`Whoa! You are spending way too much!`);
    return total;
  } else {
    console.log(`You are good total is less than 100`);
  }
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 500, 1]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});
