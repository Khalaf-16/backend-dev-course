// Practice questions

// Question 1: Count number of 's' in a string
let string = prompt("Enter string: ")
let stringWithoutS = string.replaceAll('s', '')

// console.log(string.toLowerCase().length - stringWithoutS.toLowerCase().length)

// Sample strings:
// Spoiler's alert! it's not an 's'
// Journey of life is not a sprint, it's a marathon
// You go alone you go fast, you go together you go far

// loop method
let numberOfS = ''
for(i=0; i<string.length; i++){
    if(string.toLowerCase().charAt(i) === 's'){
        numberOfS += string.toLowerCase().charAt(i)
    }
    else{
        continue;
    }
}

console.log(numberOfS.length)


// Question 2: Leap year checker
let year = Number(prompt("Enter a year"))

if(year % 4 == '0'){
    console.log("Leap year")
}
else if(year % 4 > 0){
    console.log("Not a leap year")
}
else{
    console.log("year not valid!")
}

// Question 3: Discount calculator
let cost = Number(prompt("Enter cost of purchased quantity"))
let totalCost = 0
let discountCost = 0

if(cost > 1000){
    discountCost = 0.1 * cost
    totalCost = cost - discountCost
    console.log("Cost: $" + cost)
    console.log("Discount Cost: $", discountCost)
    console.log("Total Discounted Cost: $" + totalCost)
}
else if(cost <= 1000){
    console.log("Cost: $" + cost)
    console.log("Total Cost: $" + cost)
}
else{
    console.log("Not a valid cost!")
}

// Math methods:
// 1. Math.random() - generates random decimal number between 0 and 1
// 2. Math.floor() - rounds decimal number down to nearest whole number
// 3. Math.ceil() - rounds decimal number up to nearest whole number
// 4. Math.round() - rounds decimal number to nearest whole number
// 5. Math.pow(base, exponent) - raises base to exponent power
// 6. Math.sqrt() - returns square root of a number
// 7. Math.abs() - returns absolute value of a number
// 8. Math.max() - returns largest of zero or more numbers
// 9. Math.min() - returns smallest of zero or more numbers
// 10. Math.cbrt() - returns cube root of a number
// 11. Math.sum() - returns sum of two numbers


// Generate six-digit code
let code = Math.random()
sixDigitscode = String(Math.ceil(code * 1000000)).padStart(6, '0');
console.log(sixDigitscode)