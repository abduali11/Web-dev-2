/**Write a JavaScript program that focuses on various array operations using the push(), includes(), pop(), and 
 * numerical sorting functions. 
 
Your program should include the following requirements:

Create an empty array called numbers.
prompt the user to enter five numbers, one by one, and add each entered number to the numbers array using the push() method.
Display the contents of the numbers array on the HTML document or in the console.
Prompt the user to enter a number and check if the entered number is included in the numbers array using the includes() method.
Display a message indicating whether the entered number is found or not found in the numbers array.

Remove the last number from the numbers array using the pop() method.
Display the updated numbers array on the HTML document or in the console.

Sort the numbers array in ascending numerical order using the sort() method with a custom comparison function.

Display the sorted numbers array on the HTML document or in the console.

*/

let numbers = [];

for (i = 0; i < 5; i++) {
  let added = Number(prompt("add five numbers"));
  numbers.push(added);
}
console.log(numbers);

let checked_numbers = Number(prompt("enter number to search"));
console.log("Numbers: " + numbers);

if (numbers.includes(checked_numbers)) {
  console.log("number is found in the array");
} else {
  console.log("number is not found");
}
numbers.pop();

console.log("Updated numbers: " + numbers);

numbers.sort();
numbers.reverse();
console.log(numbers);
