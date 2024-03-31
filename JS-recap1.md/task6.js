/**
 Write a program that prompts the user to enter a positive integer and
 generates a multiplication table up to that number using a for loop.

 The multiplication table displays the product of each pair of numbers from 1 to the entered number.
Your program should follow these steps:

Write JavaScript code that prompts the user to enter a positive integer using the prompt() function.
 Store the user's input in a variable.

Convert the user's input from a string to a number.

Use nested for loops to generate the multiplication table.
The outer loop will iterate from 1 up to the entered number, representing the rows of the table.
The inner loop will also iterate from 1 up to the entered number, representing the columns of the table.

Inside the nested loops, calculate the product of the current row and column values.
Display each product in a formatted way to create the multiplication table on the HTML document.

 */

const integer = prompt('Enter a positive integer');
const number = parseInt(integer);

let result = "<table border='1'>";

for (let i = 1; i <= number; i++) {
  result += '<tr>';
  for (let j = 1; j <= number; j++) {
    result += `<td>${i * j}</td>`;
  }
  result += '</tr>';
}
result += '</table>';
document.getElementById('target').innerHTML = result;
