/**
 * Write a program that prompts the user for a temperature in Celsius and converts it to Fahrenheit and Kelvin. 
 * The program should then display the converted temperatures in an HTML document.
Calculate the temperature in Fahrenheit by using the formula: F = (C * 9/5) + 32, 
where F is the temperature in Fahrenheit and C is the temperature in Celsius.
 */

let celsius = prompt("celsius temperature to Fahrenheit")

let Fahrenheit = parseFloat(celsius * 9/5) + 32;
let Kelvin = parseFloat(celsius) + 273.15;

document.getElementById("target").innerHTML="the tempature in Fahreinheit is " + Fahrenheit
document.getElementById("kelvin").innerHTML="the tempature in kelvin is " + Kelvin
