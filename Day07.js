// # Arithmetic operators:
// 1. Addition - '+'
// 2. Subtraction - '-'
// 3. Multiplication - '*'
// 4. Division - '/'
// 5. Modulus (Remainder) - '%'
// 6. Exponentiation - '**'
// 7. Increment - '++'
// 8. Decrement - '--'
// 9. +=, -=, *=, /=, %=, **=

// Example:
// let x = 10;
// x += 5; // equivalent to x = x + 5
// console.log(x); // 15

// # Maths methods:
// 1. random() - generates a random number between 0 (inclusive) and 1 (exclusive).
// 2. floor() - rounds a number down to the nearest integer.
// 3. ceil() - rounds a number up to the nearest integer.
// 4. pow() - raises a base to the exponent power.
// 5. sqrt() - returns the square root of a number.
// 6. abs() - returns the absolute value of a number.
// 7. max() - returns the largest of zero or more numbers.
// 8. min() - returns the smallest of zero or more numbers.
// 9. cbrt() - returns the cube root of a number.


// Exercise: ATM Simulation using if-else statements
// The program simulates an ATM transaction where a user is prompted to enter their PIN and the amount they wish to withdraw. 
// The program checks if the entered PIN matches the stored PIN and if there are sufficient funds for the withdrawal. 
// The user has three attempts to enter the correct PIN before the account is locked.

let balanceLeft = 5000000
let pin = 2030
let attempt = 1

console.log("Welcome to Abdullah Bank Plc")
console.log("Insert your card")

let enterPin = Number(prompt("Enter pin")) 

if(pin == enterPin){
    let withdraw = Number(prompt("Enter the amount for withdraw"))
    if(balanceLeft >= withdraw){
        console.log("transaction successful")
    } else{
        console.log("Insufficient balance")
    }
}
else{
    enterPin = Number(prompt("Incorrect pin entered, enter again"))
    attempt++   
    
    if(pin == enterPin){
        let withdraw = Number(prompt("Enter the amount for withdraw"))
        if(balanceLeft >= withdraw){
            console.log("transaction successful")
        } else{
            console.log("Insufficient balance")
        }
    }
    else{
        enterPin = Number(prompt("Incorrect pin entered, enter again"))
        attempt++   
        
        if(pin == enterPin){
            let withdraw = Number(prompt("Enter the amount for withdraw"))
            if(balanceLeft >= withdraw){
                console.log("transaction successful")
            } else{
                console.log("Insufficient balance")
            }
        }
        else{
            console.log("Account locked\n, contact customer care to have access if it is your bank account")  
        }
    }    
}

// Flow control continued...
// 3. switch-case statements. eg:
    // switch(expression){
    //     case value1:
    //         code to be executed if expression === value1
    //         break;
    //     case value2:
    //         code to be executed if expression === value2
    //         break;
    //     ...
    //     default:
    //         code to be executed if expression doesn't match any case
    // }
// 4. ternary flow controls. eg:
    // {condition ? code to be executed if true : code to be executed if false}


// Example 1
// The program prompts the user to enter their browser name and uses a switch-case statement to display a specific message based on the entered browser.
let browser = prompt("Enter browser")
switch(browser){

    case "Google":
        console.log("Hey, google")
        break;
    case "Edge":
        console.log("Hi, Copilot")
        break;
    case "Opera":
        console.log("Hello Opera")
        break;
    case "Safari":
        console.log("Welcome to Safari")
        break;
    case "firefox":
        console.log("Correct browser")
        break;
    default:
        console.log("browser not listed")
        
}

// Example 2
// This program prompts the user to enter a number and uses a ternary operator to determine if the number is even or odd, then displays the corresponding message.
let number = Number(prompt("Enter a number"))
{number % 2 == "0" ? console.log("Number is even.") : console.log("Number is odd")}

// Example 3
// This program prompts the user to enter an integer and uses nested ternary operators to determine if the integer is positive, negative, or zero, then displays the corresponding message.
let number2 = Number(prompt("Enter an integer"))
{number2 < 0 ? console.log("negative integer") : number2 == "0" ? console.log("zero") : number2 > 0 ? console.log("positive integer") : console.log("Not an integer, Please write a correct integer")}