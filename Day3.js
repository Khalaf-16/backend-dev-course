// String Methods continued:

// Note that indexes start from 0.
// How to find a character at a specific index in a string. [charAt() and at()]
let string2 = "JavaScript is fun";
let charAtIndex = string2.charAt(3);
console.log(charAtIndex); // a

let charAtIndex2 = string2.at(-1); // at method can also take negative index but charAt() cannot
console.log(charAtIndex2); // n

// How to extract parts of a string. [substring()]
let partOfString2 = string2.substring(0, 10); // extracts from index 0 to index 9 (10-1)
console.log(partOfString2); // JavaScript

let partOfString3 = string2.substring(11);  // extracts from index 11 to the end of the string
console.log(partOfString3); // is fun

// How to find the index of a word(s)/letter in a string. [indexOf()]
let indexOfWord = string2.indexOf("is"); // finds the starting index of the word "is"
console.log(indexOfWord); // 11

let indexOfLetter = string2.indexOf("a"); // finds the starting index of the letter "a"
console.log(indexOfLetter); // 1

let indexOfLetter2 = string2.indexOf("a", 2); // finds the starting index of the letter "a" after index 2
console.log(indexOfLetter2); // 3

let indexOfWordNotFound = string2.indexOf("are"); // returns -1 if the word is not found
console.log(indexOfWordNotFound); // -1

// How to repeat a string certain number of times. [repeat()]
let string3 = "Musa ";
let repeatedString = string3.repeat(3);
console.log(repeatedString); // Musa Musa Musa

// How to add strings using concat method
let string4 = "I am";
let string5 = "learning";
let string6 = "JavaScript.";
let combinedString = string4.concat(" ", string5, " ", string6);
console.log(combinedString); // I am learning JavaScript.

// Padding a string [padStart() and padEnd()]: adds characters to the beginning or end of a string until it reaches a specified length.
let string7 = "5";
let paddedStart = string7.padStart(3, "0");
console.log(paddedStart); // 005

let paddedEnd = string7.padEnd(3, "0");
console.log(paddedEnd); // 500
// Exercise
let sentence = "JavaScript Can be Fun But Not Everytime"
 
 let firstSpace = sentence.indexOf(" ");
 let firstWord = sentence.substring(0, firstSpace)
 console.log(firstWord)
 
 let secondSpace = sentence.indexOf(" ", firstSpace + 1);
 let secondWord = sentence.substring(firstSpace + 1, secondSpace)
 console.log(secondWord)
 
 let thirdSpace = sentence.indexOf(" ", secondSpace + 1);
 let thirdWord = sentence.substring(secondSpace, thirdSpace)
 console.log(thirdWord)
 
 let fourthSpace = sentence.indexOf(" ", thirdSpace + 1);
 let fourthWord = sentence.substring(thirdSpace, fourthSpace)
 console.log(fourthWord)
 
 let fifthSpace = sentence.indexOf(" ", fourthSpace + 1);
 let fifthWord = sentence.substring(fourthSpace, fifthSpace)
 console.log(fifthWord)
 
 let sixthSpace = sentence.indexOf(" ", fifthSpace + 1);
 let sixthWord = sentence.substring(fifthSpace+1, sixthSpace)
 console.log(sixthWord)
 
 let seventhSpace = sentence.indexOf(" ", sixthSpace + 1);
 let seventhWord = sentence.substring(sixthSpace, sentence.length)
 console.log(seventhWord)