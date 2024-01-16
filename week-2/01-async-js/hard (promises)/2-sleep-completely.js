/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(resolve => {
        const startTime = Date.now();
        
        function checkTime() {
          if (Date.now() < startTime + milliseconds) {
            // Continue waiting
            setTimeout(checkTime, 0);
          } else {
            // Time has passed, resolve the Promise
            resolve();
          }
        }
    
        checkTime(); // Start the loop
      });
}

module.exports = sleep;
