//lastIndexOf()
//slice()
//split()
//charCodeAt()
//startsWith()
//template literal 

//Question 1
let fullName = "abdullah musa"
let firstInitial = fullName.charAt(0)
let toCaps = firstInitial.toUpperCase()
let secondInitial = fullName.charAt(fullName.indexOf(" ") + 1)
let toCaps2 = secondInitial.toUpperCase()
let Initials = toCaps + "." + toCaps23
console.log(Initials)

//Question 2
let sentence = "The quick brown fox jumps over the lazy dog"
let lengthOfSentenceOne = sentence.length
let replaceE = sentence.replaceAll("o","")
let lengthOfSentenceTwo = replaceE.length
console.log(lengthOfSentenceOne - lengthOfSentenceTwo)



//Question 3
let acctNumber = "916175 7957"
let lastDigit = acctNumber.at(-1)
let lastTwoDigit = acctNumber.at(-2)
let lastThreeDigit = acctNumber.at(-3)
let lastFourDigit = acctNumber.at(-4)
let lastFourDigits = lastFourDigit + lastThreeDigit + lastTwoDigit + lastDigit
console.log(lastFourDigits.padStart(10,"*"))

//Question 4
let LengthOfSentence = sentence.length
// console.log(LengthOfSentence) // 43
let ChangeSentence = `${sentence.charAt(0).toLowerCase()}${sentence.charAt(1).toUpperCase()}${sentence.charAt(2).toLowerCase()}${sentence.charAt(3).toUpperCase()}${sentence.charAt(4).toLowerCase()}${sentence.charAt(5).toUpperCase()}${sentence.charAt(6).toLowerCase()}${sentence.charAt(7).toUpperCase()}${sentence.charAt(8).toLowerCase()}${sentence.charAt(9).toUpperCase()}${sentence.charAt(10).toLowerCase()}${sentence.charAt(11).toUpperCase()}${sentence.charAt(12).toLowerCase()}${sentence.charAt(13).toUpperCase()}${sentence.charAt(14).toLowerCase()}${sentence.charAt(15).toUpperCase()}${sentence.charAt(16).toLowerCase()}${sentence.charAt(17).toUpperCase()}${sentence.charAt(18).toLowerCase()}${sentence.charAt(19).toUpperCase()}${sentence.charAt(20).toLowerCase()}${sentence.charAt(21).toUpperCase()}${sentence.charAt(22).toLowerCase()}${sentence.charAt(23).toUpperCase()}${sentence.charAt(24).toLowerCase()}${sentence.charAt(25).toUpperCase()}${sentence.charAt(26).toLowerCase()}${sentence.charAt(27).toUpperCase()}${sentence.charAt(28).toLowerCase()}${sentence.charAt(29).toUpperCase()}${sentence.charAt(30).toLowerCase()}${sentence.charAt(31).toUpperCase()}${sentence.charAt(32).toLowerCase()}${sentence.charAt(33).toUpperCase()}${sentence.charAt(34).toLowerCase()}${sentence.charAt(35).toUpperCase()}${sentence.charAt(36).toLowerCase()}${sentence.charAt(37).toUpperCase()}${sentence.charAt(38).toLowerCase()}${sentence.charAt(39).toUpperCase()}${sentence.charAt(40).toLowerCase()}${sentence.charAt(41).toUpperCase()}${sentence.charAt(42).toLowerCase()}`;
console.log(ChangeSentence)

//Question 5
 let firstSpace = sentence.indexOf(" ");
 let firstWord = sentence.substring(0, firstSpace)
 console.log(firstWord)
 
 let secondSpace = sentence.indexOf(" ", firstSpace + 1);
 let secondWord = sentence.substring(firstSpace + 1, secondSpace)
 console.log(secondWord)
 
 let thirdSpace = sentence.indexOf(" ", secondSpace + 1);
 let thirdWord = sentence.substring(secondSpace + 1, thirdSpace)
 console.log(thirdWord)
 
 let fourthSpace = sentence.indexOf(" ", thirdSpace + 1);
 let fourthWord = sentence.substring(thirdSpace + 1, fourthSpace)
 console.log(fourthWord)
 
 let fifthSpace = sentence.indexOf(" ", fourthSpace + 1);
 let fifthWord = sentence.substring(fourthSpace + 1, fifthSpace)
 console.log(fifthWord)
 
 let sixthSpace = sentence.indexOf(" ", fifthSpace + 1);
 let sixthWord = sentence.substring(fifthSpace + 1, sixthSpace)
 console.log(sixthWord)
 
 let seventhSpace = sentence.indexOf(" ", sixthSpace + 1);
 let seventhWord = sentence.substring(sixthSpace + 1, seventhSpace)
 console.log(seventhWord)
 
 let eightSpace = sentence.indexOf(" ", seventhSpace + 1);
 let eightWord = sentence.substring(seventhSpace + 1, eightSpace)
 console.log(eightWord) 
 
 let ninthWord = sentence.substring(eightSpace + 1, sentence.length)
 console.log(ninthWord)
 
 // Question 6 The lazy brown dog jumps over the fox
 let newSentence = sentence.replace("The quick brown fox jumps over the lazy dog", "The lazy brown dog jumps over the fox")
 
// Question 7
let str1 = "w3 h4ve a l0t of string meth0ds and 4 prop3rty, alw4ys r3m3mb3r th4t";
let change1 = str1.replaceAll("3", "e");
let change2 = change1.replaceAll("4", "a");
let change3 = change2.replaceAll("0", "o");
console.log(change3);