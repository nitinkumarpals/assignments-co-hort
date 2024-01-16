/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise(resolve => setTimeout(resolve, t*1000));
}

function wait2(t) {
    return new Promise(resolve => setTimeout(resolve, t*1000));
}

function wait3(t) {
    return new Promise(resolve => setTimeout(resolve, t*1000));
}

async function calculateTime(t1, t2, t3) {
    const startTime = Date.now();

    const promise1 = wait1(t1);
    const promise2 = wait1(t2);
    const promise3 = wait1(t3);

    await wait1(t1);
    await wait2(t2);
    await wait3(t3);

    const endTime = Date.now();
    const totalTime = endTime - startTime;
    return totalTime;
}

module.exports = calculateTime;
