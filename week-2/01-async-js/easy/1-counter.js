// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
const { setInterval } = require("timers");

let count = 0;

function updateCounter() {
  count++;
  console.log(count); // Output the current counter value to the console
}

setInterval(updateCounter, 1000);
