/**
 Write a program that prompts the user to enter their score for a course
assessment and determines their grade based on the following grading scale:


Scores between 0 and 39 receive a grade of 0.
Scores between 40 and 51 receive a grade of 1.
Scores between 52 and 63 receive a grade of 2.
Scores between 64 and 75 receive a grade of 3.
Scores between 76 and 87 receive a grade of 4.
Scores between 88 and 100 receive a grade of 5.
Print the result on the HTML document.

3p
 */

let score = parseFloat(prompt(' what was your score? '));

if (score >= 0 && score <= 39) {
  document.getElementById('target').innerHTML = 'Your grade is 0';
} else if (score >= 40 && score <= 51) {
  document.getElementById('target').innerHTML = 'your grade is 1';
} else if (score >= 52 && score <= 63) {
  document.getElementById('target').innerHTML = 'your grade is 2';
} else if (score >= 64 && score <= 75) {
  document.getElementById('target').innerHTML = 'your grade is 3';
} else if (score >= 76 && score <= 87) {
  document.getElementById('target').innerHTML = 'your grade is 4';
} else if (score >= 88 && score <= 100) {
  document.getElementById('target').innerHTML = 'your grade is 5';
} else {
  document.getElementById('target').innerHTML = 'invalid score';
}
