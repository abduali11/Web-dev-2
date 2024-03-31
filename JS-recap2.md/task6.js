/**Write a program that allows users to track and rate their favorite movies. 
 * 
 * Prompt the user to enter the number of movies they want to rate.
 * The program should prompt the user to enter the details of each movie, including the title and rating on a scale of 1 to 5.


 * The program should store the user input in an array of objects using object literals.


 *  Once all the movie ratings have been entered, the program should sort the movies based on their ratings 
 * and determine the highest-rated movie. 
 * 
 
 Finally, it should display the sorted list of movies and the highest-rated movie on the HTML document.


Use object literals to represent each movie, with properties such as title and rating.


Use a loop to gather user input for each movie, including the title and rating. Store the movie details in an array of objects.
Sort the array of movie objects based on the ratings, from highest to lowest.
Determine the highest-rated movie by accessing the first element of the sorted array.
Display the sorted list of movies and the highest-rated movie on the HTML document.
6p

*/

let times = prompt("How many movies do you want to rate?");
let movies = [];

for (let i = 0; i < times; i++) {
  let name = prompt("Movie name?");
  let rating = prompt("Rate the movie between 1-5");

  let movie = { name: name, rating: rating };

  movies.push(movie);
}

movies.sort((a, b) => b.rating - a.rating);

let highestrated = movies[0];

document.getElementById("target").innerHTML =
  " movies:" +
  movies
    .map((movie) => `<li>${movie.name}: ${" rating: " + movie.rating}</li>`)
    .join("");

document.getElementById("target1").innerHTML =
  `Highest rated movie: ${highestrated.name} with a rating of ${highestrated.rating}`;
