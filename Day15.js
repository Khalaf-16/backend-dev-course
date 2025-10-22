// Array methods continued:
// 13. filter() - creates a new array with all elements that pass the test implemented by the provided function.
                // It returns a new array.
    // Example:
    // let numbers = [1, 2, 3, 4, 5, 6];
    // let evenNumbers = numbers.filter((num) => num % 2 === 0);
    // console.log(evenNumbers);  Results: [2, 4, 6]

// Unlike map(), which transforms each element of the array, filter() only includes elements that meet a specific condition defined in the callback function.
// Also, the filter method does not need an if statement; it automatically includes elements that return true for the condition.
// if you don't put a curly braces {} after the arrow function, it will automatically return the evaluated expression.

// 14. find() - returns the value of the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.
    // Example:
    // let numbers = [1, 2, 3, 4, 5];
    // let firstEven = numbers.find((num) => num % 2 === 0);
    // console.log(firstEven);  Results: 2

// Sorting:
// let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// 1. daysOfTheWeek.sort(); // sorts the array in ascending order (alphabetically for strings)
// results: ["Friday", "Monday", "Saturday", "Sunday", "Thursday", "Tuesday", "Wednesday"]

// 2. daysOfTheWeek.sort((a, b)=>{
        // if(a < b){
            // return 1  // b comes before a
//        }
        // else if(a > b){
            // return -1 // a comes before b
//        } 
//        else{
            // return 0 // no change in order
//        }
//    })  // sorts the array in descending order (reverse alphabetical for strings)
// results: ["Wednesday", "Tuesday", "Thursday", "Sunday", "Saturday", "Monday", "Friday"]
//    })
    // OR you can use
    // daysOfTheWeek.sort().reverse(); // sorts the array in descending order(for strings)

// let numbers = [5, 2, 9, 1, 5, 6]

// 3. numbers.sort((a, b) => a - b); // sorts the array in ascending order (for numbers)
// results: [1, 2, 5, 5, 6, 9]
// 4. numbers.sort((a, b) => b - a); // sorts the array in descending order (for numbers)
// results: [9, 6, 5, 5, 2, 1]
