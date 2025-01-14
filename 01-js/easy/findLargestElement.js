/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: let numbers  =  [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let LargestElement = numbers[0];//9
    for(let i = 0; i<numbers.length; i++){
        if(LargestElement < numbers[i]){
            LargestElement = numbers[i];
        }
    }
    return LargestElement;
}

module.exports = findLargestElement;