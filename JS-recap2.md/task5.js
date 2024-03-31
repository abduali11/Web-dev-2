/**
 Enhance the existing sortArray function to include an additional parameter 
that defines whether the array should be sorted in ascending or descending order.


Create a function called sortArray that takes two parameters: 
numbers (an array of numbers) and order (a string indicating the sorting order).


If the order parameter is set to "asc" (ascending), the function should sort the numbers array in ascending order.

If the order parameter is set to "desc" (descending), the function should sort the numbers array in descending order.

Return a new array with the sorted numbers.

Test the function by passing different arrays and sorting orders.


 */

let numbers = [1, 2, 3, 4, 5];

function sortArray(numbers, order) {
  if (order == "asc") {
    return numbers.sort((a, b) => a - b);
  } else if (order == "desc") {
    return numbers.sort((a, b) => b - a);
  } else {
    return numbers;
  }
}

console.log(sortArray(numbers, "asc"), "asc");
console.log(sortArray(numbers, "desc"), "desc");
console.log(sortArray(numbers));
