// Question 1

console.log("Transaction fee is $1")
let amount = Number(prompt("Enter the amount to withdraw"))
let balance = 5000000

if(amount % 10 == '0' && amount <= balance){
    if(amount < 0){
        console.log("You cant withdraw a negative number")
    }
    else{
        balance = balance - (amount + 1)
        if(amount == ''){
            console.log("empty, transaction not successful!")
        }
        else{
        console.log("You have withdrawn " + "$" + (amount + 1))
        console.log("Your remaining balance is " + "$" + balance)
        }
    }
}
else if(amount > balance){
    console.log("You can't withdraw more than your balance ")
    console.log("Your balance is 5000000")
}
else if(amount % 10 !== '0'){
    let roundDown = amount - (amount % 10)
    console.log("Amount has been rounded down to " + "$" + roundDown)
    balance = balance - (amount + 1)
    if(amount == ''){
            console.log("empty, transaction not successful!")
        }
        else{
        console.log("You have withdrawn " + "$" + (amount + 1))
        console.log("Your remaining balance is " + "$" + balance)
        }
}
else {
    console.log("Not a number,please enter a correct number")
}


// Question 2

let randomNumber = Number(prompt("Enter a random number between 1 and 10"))

switch (true) {
    case randomNumber > 0 && randomNumber <= 3:
        console.log("small number")
        break;
    case randomNumber > 3 && randomNumber <= 7:
        console.log("medium number")
        break;
    case randomNumber > 7 && randomNumber <= 10:
        console.log("large number")
        break;
    default:
        console.log("Enter a number between 1 and 10")
}

// Question 3

console.log("Welcome to rock-paper-scissors game")
console.log("To choose rock type r")
console.log("To choose paper type p")
console.log("To choose scissors type s")
console.log("Start!!!")
let player1 = prompt("Player1, Choose between rock, paper, scissors").toLowerCase().trim()
let player2 = prompt("Player2, Choose between rock, paper, scissors").toLowerCase().trim()

switch(true){
    case player1 === player2:
    console.log("Draw, play again");
    break;
    case (player1 === "r" && player2 === "s") ||
       (player1 === "s" && player2 === "p") ||
       (player1 === "p" && player2 === "r"):
    console.log("Player 1 wins");
    break;
    case (player2 === "r" && player1 === "s") ||
       (player2 === "s" && player1 === "p") ||
       (player2 === "p" && player1 === "r"):
    console.log("Player 2 wins");
    break;
    default:
        console.log("Choose between r-rock, p-paper, s-scissors")
}        
// Question 4

let yourAge = Number(prompt("Enter your age to know your category"))

switch(true){
    case yourAge < 0:
        console.log("Age can't be negative")
        break;
    case yourAge >= 0 && yourAge <= 3:
        console.log("Toddler")
        break;
    case yourAge > 3 && yourAge <= 12:
        console.log("Child")
        break;
    case yourAge > 13 && yourAge <= 19:
        console.log("Teenager")
        break;
    case yourAge > 20 && yourAge <= 59:
        console.log("Adult")
        break;
    case yourAge > 59:
        console.log("Senior citizen")
        break;
    default:
        console.log("As how na")
}

// Question 5

let yourNum = Number(prompt("Enter a number to find the square"))
let square = yourNum ** 2

switch(true){
    case yourNum > 0:
        console.log(square)
        break;
    default:
        console.log("Invalid Operation")
}