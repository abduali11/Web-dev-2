/**
 Write a program that prompts the user to enter the lengths of three sides of a triangle
 and determines the type of triangle based on the side lengths.

 The program should classify the triangle as equilateral (all sides are equal),
 isosceles (two sides are equal), or scalene (no sides are equal). Print the result on the HTML document.

try to use &&, || and ! operators
3p
 */

const length1 = prompt('the first lenght: ');
const length2 = prompt('the second lenght: ');
const length3 = prompt('the third lenght: ');

if (length1 == length2 && length1 == length3) {
  document.getElementById('target1').innerHTML = 'The triangle is equilateral ';
} else if (length1 == length2 || length1 == length3 || length2 == length3) {
  document.getElementById('target1').innerHTML = 'The triangle is isosceles';
} else if (length1 != length2 || length3) {
  document.getElementById('target1').innerHTML = 'The triangle is scalene';
}
