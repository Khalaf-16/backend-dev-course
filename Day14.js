// Array methods continued:
// 11. forEach() - executes a provided function once for each array element
    // Example:
    // let fruits = ["apple", "banana", "mango", "orange"];
    // fruits.forEach((item, index, arr) => {
    //     console.log(item, index);
    // });  Results:
            // apple 0
            // banana 1
            // mango 2
            // orange 3
// 12. map() - creates a new array populated with the results of calling a provided function on every element in the calling array
    // Example:
    // let numbers = [1, 2, 3, 4];
    // let doubled = numbers.map((num) => num * 2);
    // console.log(doubled);  Results: [2, 4, 6, 8]

// Practice questions on arrays:

// Question 1: Return names with less than 7 characters in an array to a string
function shortNames(name){
    let shortStudentsName = ''

    for(i = 0; i < name.length; i++){
        if(name[i].length < 7){
            shortStudentsName += name[i] + ' '
        }
        else{
            continue;
        }
    }
    return shortStudentsName
}

let studentsName = ["michael", "mikail", "juwon", "janet", "jannetta", "jaybee", "muiz", "mickymouse"]
console.log(shortNames(studentsName))

// Question 2: Return names with less than 7 characters in an array to an array
function shortNames(name){
    let shortStudentsName = []

    for(i = 0; i < name.length; i++){
        if(name[i].length < 7){
            // shortStudentsName += name[i] + ' '
            shortStudentsName.push(name[i])
        }
        else{
            continue;
        }
    }
    return shortStudentsName
}
studentsName = ["michael", "mikail", "juwon", "janet", "jannetta", "jaybee", "muiz", "mickymouse"]
console.log(shortNames(studentsName)) 

// Question 3: Return multiples of 3 from an array
let numbers = [0, 1, 2, 5, 10, 12, 15, 17, 20, 25, 30, 33]

function getMultipleOfThree(array){
   let multiplesOfThree = []

    for(i = 0; i < array.length; i++){
        if(array[i] % 3 === 0 && array[i] !== 0){
            multiplesOfThree.push(array[i])
        }
        else{
            continue;
        }
    }
    return multiplesOfThree
}

console.log(getMultipleOfThree(numbers))

// Question 4: Format the first letter of each word in a sentence to uppercase
let sentence = "alice in boderland is peak."

function formatString(string){
    let stringArray = string.split(" ")
    let stringArrayFormat = []
    
    stringArray.forEach((ele, i, arr)=>{
         stringArrayFormat.push(ele[0].toUpperCase() + ele.slice(1))
    })
    return stringArrayFormat.join(" ")
}

console.log(formatString(sentence))
