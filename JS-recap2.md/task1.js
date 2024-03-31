/**Write a JavaScript program that focuses on the basic concepts of arrays. Your program should include the following requirements:

Create an array called fruits and initialize it with the following elements: "apple", "banana", "orange", " grape", "kiwi".


Display the contents of the fruits array in the console.
Calculate and display the length of the fruits array.
Access and display the element at index 2 in the fruits array in the console.
Access and display the last element in the fruits array using the length property in the console.
Create an empty array called vegetables.


Prompt the user to enter three vegetables one by one, and add each entered vegetable to the vegetables array using the push() method.

Display the contents of the vegetables array in the console.
Calculate and display the length of the vegetables array.
*/

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("fruits: " + fruits);

let orange = fruits[2];
console.log("Element at index 2: " + orange);

let kiwi = fruits[4];
console.log(" the last lenght of element is " + kiwi);

let vegetables = [];
for (let i = 0; i < 3; i++) {
  let added = prompt("add three vegetables");
  vegetables.push(added);
}

let length = vegetables.length;

console.log("The vegetables are: " + vegetables);
console.log("the length of vegetables " + vegetables.length);
