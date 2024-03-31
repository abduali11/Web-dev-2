/**
 Create a function called sortArray 
 
 that accepts an array of numbers as a parameter and


returns a new array with the numbers sorted in ascending order.
 

No need to prompt for the numbers. Use a hard coded array. Use console.log to print the original array and the sorted array.
2p
 */
let numbers = [5, 7, 3, 9, 2];

function sortArray(array) {
  let sortArray = numbers.sort((a, b) => a - b);
  return sortArray;
}

console.log(sortArray(numbers));
