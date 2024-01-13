/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

const beforeTime = new Date();
const beforeTimeInms = beforeTime.getTime();


function calculate(n) {
  let a = n;
  for(let i=0; i<10000000; i++){
      a = a+i;
  }
  return a;
}
calculate(100000);
const afterTime = new Date();
const afterTimeInms = afterTime.getTime();

console.log(afterTimeInms-beforeTimeInms);

