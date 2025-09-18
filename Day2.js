// JavaScript Basics
// JavaScript is a programming language used to create dynamic and interactive content on websites. It is a versatile language that can be used for both frontend (client-side) and backend (server-side) development.
// It is the most popular programming language in the world and is supported by all modern web browsers.

// Data Types and Data Structures:
// Data types are the different types of values that can be stored and manipulated in a programming language.
// Data Types : 1. Int/Number  2. boolean  3. string/varchar  4. undefined  5. null
// Data Structures : 1. Array  2. Object

// Variables:3
// Variables are containers used to store data types or structures. let and const are used to declare variables
// let is used for variables that can change, const is used for variables that won't change
// var is old way of declaring variables, avoid using it
// Use camelCase for naming variables and functions e,g., myVariableName, getUserData()
// Avoid using spaces and special characters in variable names
// Do not start variable names with numbers 
// Avoid using reserved words as variable names (e.g., let, const, var, function, return, if, else, etc. are reserved words)
// We also have different naming conventions like PascalCase (e.g., MyVariableName) and snake_case (e.g., my_variable_name) but camelCase is the most commonly used in JavaScript
// Use meaningful names for variables and functions

// Examples:
// let age = 20;    --------------------- Number
// let name = "Musa";       ------------- String
// let isStudent = true;         -------- Boolean
// let fruits = ["apple","mango"]; ------ Array
// let person = {name: "Ali", age: 25}; - Object
// let nothing = null;           -------- Null
// let unknown;                  -------- Undefined


// Exercise
let multipleOne = 2;
let multipleTwo = 4;
let multipleThree = 6;
let multipleFour = 8;
let multipleFive = 10;

MultiplesOfTwo = multipleOne + ',' + ' ' + multipleTwo + ',' + ' ' + multipleThree + ',' + ' ' + multipleFour + ',' + ' ' + multipleFive;

console.log("Name: Musa Abdullah");
console.log("Multiples of two: ", MultiplesOfTwo);

// Strings methods:
// How to find length of a string [length]
let string = "    I am learning JavaScript   ";
let LOfString = string.length; 
console.log(LOfString); // 30

// How to turn a string to Upper Case. [toUpperCase()]
let ConvertToUpper = string.toUpperCase();
console.log(ConvertToUpper); // "    I AM LEARNING JAVASCRIPT   "

// How to turn a string to lower Case. [toLowerCase()]
let ConvertToLower = string.toLowerCase();
console.log(ConvertToLower); // "    i am learning javascript   "

// How to trim a space from both ends of a string. [trim()]
let trimmed = string.trim();
console.log(trimmed); // "I am learning JavaScript"

// How to trim one end of a string. [trimStart() and trimEnd()]
let trimmedStart = string.trimStart();
console.log(trimmedStart); // "I am learning JavaScript   "

let trimmedEnd = string.trimEnd();
console.log(trimmedEnd); // "    I am learning JavaScript"

// How to check if word(s)/letter is included in a string [includes()]
console.log(string.includes("learnt")); // false
console.log(string.includes("JavaScript")); // true
console.log(string.includes("I")); // true
console.log(string.includes("I am learning")); // true

// How to replace a word(s)/ letter in a string [replace() and replaceAll()]
console.log(string.replace("learning", "enjoying")); // "    I am enjoying JavaScript   "
console.log(string.replace("I am", "We are")); // "    We are learning JavaScript   "
console.log(string.replace("   ", "")); // "I am learning JavaScript   "

// Note: replace() method only replaces the first match it finds. Use replaceAll()

// to replace all
console.log(string.replaceAll("a", "o")); // "    I om leorning JovoScript   "
console.log(string.replaceAll(" ", "")); // "IamlearningJavaScript" 
