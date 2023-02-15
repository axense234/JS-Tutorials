// Data

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "May",
  "April",
  "May",
  "June",
  "July",
  "August",
];

const date = new Date();
const month = date.getMonth();
const day = date.getDay();
console.log(month + 1);
console.log(day);

console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;
console.log(sentence);
