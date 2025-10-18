// Array and its methods:
// An array is a data structure that can hold more than one value at a time. It is a collection of items stored at contiguous memory locations.
// Arrays can hold values of different data types including numbers, strings, booleans, objects, and even other arrays.
// Arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.
// Arrays are mutable, meaning their elements can be changed after the array is created.
// Array methods:
// 1. push() - adds one or more elements to the end of an array and returns the new length of the array.
// 2. pop() - removes the last element from an array and returns that element.
// 3. unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.
// 4. shift() - removes the first element from an array and returns that element.
// 5. indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.
// 6. slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
    // syntax: array.slice(start, end)
    // example:
    // let arr = [1, 2, 3, 4, 5];
    // let newArr = arr.slice(1, 4); // newArr will be [2, 3, 4]
// 7. splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    // syntax: array.splice(start, deleteCount, item1, item2, ...)
    // example:
    // let arr = [1, 2, 3, 4, 5];
    // arr.splice(2, 1, 'a', 'b'); // arr will be [1, 2, 'a', 'b', 4, 5]
// 8. includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    // syntax: array.includes(valueToFind, fromIndex)
// 9. join() - joins all elements of an array into a string and returns this string.
// 10. reverse() - reverses the order of the elements of an array in place. The first array element becomes the last, and the last array element becomes the first.