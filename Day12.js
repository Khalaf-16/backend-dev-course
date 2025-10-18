//Functions:
// these are reusable blocks of code that perform a specific task
// it can take inputs (parameters) and return an output (return value)
// Syntax:
    // function functionName(parameter1, parameter2, ...){  
    //     code to be executed
    //     return output
    // } --- construction / definition of the function

    // functionName(argument) --- declaration / invocation / calling the function 

// Ways of declaring a function:
// 1. Function declaration: normal way of defining a function
    // function functionName(parameters){
    //     code to be executed
    //     return output
    // }
// 2. Function expression: assigning a function to a variable
    // const functionName = function(parameters){
    //     code to be executed
    //     return output
    // }
// 3. Arrow function: a shorter syntax for writing function expressions
    // const functionName = (parameters) => {
    //     code to be executed
    //     return output
    // }
// Note: If there is only one parameter, the parentheses can be omitted
    // const functionName = parameter => {
    //     code to be executed
    //     return output
    // }
// 4. Immediately Invoked Function Expression (IIFE): a function that runs as soon as it is defined
    // (function(parameters){
    //     code to be executed
    //     return output
    // })(arguments);
// 5. Recursive function: known as a function that calls itself within its own definition
    // function functionName(parameters){
    //     if(base condition){
    //         return output
    //     } else{
    //         return functionName(modified parameters)
    //     }
    // }    

// Question 1

function isLeapYear(year){
    if(year % 4 == '0'){
        return "Leap year"
    }
    else if(year % 4 > 0){
        return "Not a leap year"
    }
    else{
        return "year not valid!"
    }

}

console.log(isLeapYear(2025))

// Question 2

function removeCharS(string){
    return string.toLowerCase().replaceAll('s', '')
}

console.log(removeCharS("Snowwhite is a pretty character"))
// Question 3

function gsmEnd(number){
   let gsmNumber = ''
    for(i=1; i<12; i++){
        if(i == 3 || i == 6){
            gsmNumber += number.charAt(i) + '-'
        }
        else{
            gsmNumber += number.charAt(i)
            }        
    }
            return gsmNumber
}
function countryNumber(number, country){
        if(Number(number) * 0 !== 0){
            return "Incorrect number!"
        }else{
            if(number.length == 11){
                if(country.toLowerCase() === 'nigeria'){
                    return '+234-' + gsmEnd(number)
                }
                else if(country.toLowerCase() === 'ghana'){
                    return '+233-' + gsmEnd(number)
                } 
                else if(country.toLowerCase() === 'south africa'){
                    return '+27-' + gsmEnd(number)
                }
                else if(country.toLowerCase() === 'uk'){
                    return '+44-' + gsmEnd(number)
                }
                else if(country.toLowerCase() === 'us'){
                    return '+01-' + gsmEnd(number)
                }
                else{
                    return "Country not supported!"
                }
            }
            else{
                return "Incorrect number!"
            }
        }
}
console.log(countryNumber("08034049567", "us"))
