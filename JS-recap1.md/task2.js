/**
 Write a program that calculates the distance between two points on a 2D plane and displays the result in an HTML document.

 The program should prompt the user for the coordinates of two points (x, y)
and then calculate the Euclidean distance between them using the formula:
Distance = √((x2 - x1)^2 + (y2 - y1)^2)


In total, there will be four prompts to input the x and y coordinates for the two points.
You can do it also with fewer promts if you use string methods like split().
3p

 */

const x1 = parseFloat(prompt('x1 coordinate'));
const x2 = parseFloat(prompt('x2 coordinate'));
const y1 = parseFloat(prompt('y1 coordinate'));
const y2 = parseFloat(prompt('y2 coordinate'));

let distance = Math.sqrt((x2 - x1) ^ (2 + (y2 - y1) ** 2));

document.getElementById('target').innerHTML =
  'the distance is of the 2 points are: ' + distance;
