/**
Write a JavaScript program that prompts the user to enter a series of numbers one by one and extracts
and displays only the even numbers from the entered values using the for...of loop.

Define an empty array to store the numbers entered by the user.

Use a loop (e.g., while or do...while) to prompt the user for numbers and add them to the array until the user decides to stop.

Use the for...of loop to iterate over the entered values stored in the array.

Inside the loop, check if the current number is even using the modulo operator %.

If the current number is even, display it on the HTML document.

After the loop completes, display a message indicating the end of the program.
 */

let numbers = [];

while (true) {
  let number = Number(prompt("Syötä numero (paina 0 lopettaaksesi)"));
  if (number === 0) {
    document.getElementById("target").innerHTML = "Lopetit";
    break;
  }
  numbers.push(number);
}

let evennumbers = "";
let oddnumbers = "";

for (let number of numbers) {
  if (number % 2 === 0) {
    evennumbers += number + " ";
  } else {
    oddnumbers += number + " ";
  }
}

document.getElementById("target1").innerHTML =
  "parilliset numerot: " + evennumbers;

document.getElementById("target2").innerHTML =
  "parittomat numerot: " + oddnumbers;
