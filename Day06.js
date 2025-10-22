// Question 1
// This program prompts the user to enter an email address and validates it based on specific criteria, such as the presence of "@" and ".", their positions, and the absence of spaces or consecutive dots. It then displays whether the email is valid or invalid.
let email = prompt("Please enter a correct email address").toLowerCase();

if (email.includes("@") && email.includes(".")) {
    if (email.indexOf("@") < email.indexOf(".") && 
        email.indexOf("@") >= 5 &&
        email.indexOf(".") < email.length - 2 &&
        !email.includes(" ") &&
        !email.includes("..") &&
        email.indexOf(".") - email.indexOf("@") > 2 ||
        email.lastIndexOf(".") - email.indexOf(".") > 2) 
    {
        console.log("Valid Email");
    } else {
        console.log("Invalid Email!!!");
    }
} else {
    console.log("Invalid Email!!!");
}

//Question 2
// This program prompts the user to enter a word and converts it to its plural form based on English grammar rules, handling various cases such as words ending in "y", "s", "sh", "ch", "f", and "fe".
let word = prompt("Enter any word: ").trim()
let lastCharOfWord = word.slice(-1)
let lastTwoCharOfWord = word.slice(-2)

if(lastCharOfWord == 'y'){
    console.log(word.replace("y", "ies"))
}
else if(lastCharOfWord == 'x' || lastTwoCharOfWord == 'sh' || lastTwoCharOfWord == 'ch' || lastTwoCharOfWord == 'ss' || 
        lastCharOfWord == "s" || lastCharOfWord == "x" || lastCharOfWord == "z"){
    console.log(word + "es")
}
else if (lastCharOfWord == "f") {
    console.log(word.replace(lastCharOfWord, "ves"))
}
else if (lastTwoCharOfWord == "fe") {
    console.log(word.replace(lastTwoCharOfWord, "ves"))
}
else{
    console.log(word + "s")
}

//Question 3
// This program prompts the user to enter a password and checks if it meets specific criteria for strength, such as having a minimum length and including an underscore. It then displays whether the password is strong or provides feedback on how to improve it.
let password = prompt("Enter strong password: ")

if(password.length >=8 && password.includes("_")){
    console.log("Password strong! Access granted")
}
else if(password.length >8 && !password.includes("_")){
    console.log("password must have minimum of 8 letters!")
}
else if(password.length >8 && !password.includes("_")){
    console.log("password must have minimum of 8 letters!")
}
else if(password.includes("_") && password.length <8){
    console.log("Make sure it has minimum of 8 letters!")
}
else{
    console.log("Make sure password has minimum of 8 letters and include an underscore.")
}

//Question 4
 // This program prompts the user to enter their age and checks if they are eligible to vote based on the age criteria.
let votersAge = Number(prompt("Enter your age: "))
if(votersAge >=18){
    console.log("Congrats, you are eligible to vote.")
}
else if(votersAge < 18){
    if(votersAge <= '0'){
        console.log("Incorrect age")
    }
    else{
        console.log(console.log("you are not eligible to vote."))
    }
}
else{
    console.log("Input a correct age in digits")
}

//Question 5
// This program prompts the user to enter their score and applies specific rules to determine if they qualify for a score upgrade, then displays the final score or relevant messages.
let studentScore = Number(prompt("Please enter you score for upgrade: "))

if(studentScore > 30 && studentScore < 40){
    console.log(studentScore + 10)
}
else if(studentScore > 40 && studentScore < 45){
    console.log(studentScore + 5)
}
else if(studentScore < 0){
    console.log("Score can't be negative")
}
else if(studentScore <= 30 || studentScore == 40 || studentScore >= 45 && studentScore <= 100){
    console.log(studentScore)
}
else if(studentScore > 100){
    console.log("Score can't exceed 100")
}
else{
    console.log("Write a number")
}