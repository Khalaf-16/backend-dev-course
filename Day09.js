// Loops are used to repeat a block of code a number of times
// for, while, do...while

// 1. for loop
// Syntax:
    // for(initialization; condition; increment/decrement){
    //     code to be executed
    // }

// Exercise 1
let sentence = prompt("Enter a sentence in small letters:").trim()
let sentence_ = sentence.charAt(0).toUpperCase()

for(i = 1; i < sentence.length; i++){
    if(sentence.charAt(i) == ' '){
        sentence_ += sentence.charAt(i) + sentence.charAt(i + 1).toUpperCase()
        i++
    }
    else{
        sentence_ += sentence.charAt(i)
    }
}

console.log(sentence_)

// Exercise 2
let fullChar = prompt("Enter word, phrase, sentence, passage, or more... ")
let lowFullChar = fullChar.toLowerCase()
let vowelessChar = ""

for(i = 0; i < fullChar.length; i++){
    if(lowFullChar.charAt(i) == 'a' || lowFullChar.charAt(i) == 'e' || lowFullChar.charAt(i) == 'i' || lowFullChar.charAt(i) == 'o' || lowFullChar.charAt(i) == 'u'){
        continue;
    }
    else{
        vowelessChar += fullChar.charAt(i)
    }
}

console.log("Original char: " + fullChar)
console.log("Voweless char: " + vowelessChar)

// Exercise 3
    // Simple version
    // let word = prompt("Enter a word/ sentence:").trim()
    // let word2 = ''

    // for(let i = word.length - 1; i>=0; i--){
    //     word2 += word.charAt(i)
        
    //     if(i === 0){
    //         if(word2 == word){
    //             console.log("palindrome detected")
    //         }
    //         else{
    //             console.log("not a palindrome")
    //         }
    //     }
    // }

    // Advanced version
    let word = prompt("Enter a word/ sentence:")
    let backward = ""
    let forward = ""

    for(let i = word.length - 1; i>=0; i--){
        
        if(word.charAt(i) == ' ' || word.charAt(i) == '.' || word.charAt(i) == ',' || word.charAt(i) == ';' || word.charAt(i) == '?' || word.charAt(i) == "'" || word.charAt(i) == ":" || word.charAt(i) == "!"){
            continue;
        }
        else{
            backward += word.charAt(i).toLowerCase()
        }
        
        if(i === 0){
            
            for(let j=0; j < word.length; j++){
                
                if(word.charAt(j) == ' ' || word.charAt(j) == '.' || word.charAt(j) == ',' || word.charAt(j) == ';' || word.charAt(j) == '?' || word.charAt(j) == "'" || word.charAt(j) == ":" || word.charAt(j) == "!"){
                    continue;
                }
                else{
                    forward += word.charAt(j).toLowerCase()
                }
            }
            
            if(backward == forward){
                console.log("palindrome detected")
            }
            else{
                console.log("Not a palindrome")
            }
        }
        
    }

// Exercise 4
let char = prompt("Enter your word")
let repeatedChar = ""

for(i = 0; i < char.length; i++){
    if(char.indexOf(char.charAt(i)) != char.lastIndexOf(char.charAt(i))){
        if(repeatedChar.includes(char.charAt(i))){
            continue;
        }
        else{
            repeatedChar += char.charAt(i)
        }
    }
}

console.log(repeatedChar)

// Exercise 5

let string2 = prompt("Enter string").trim()
let modifiedString2 = ""

if(string2.charAt(0) == '4'){
        modifiedString2 += 'A'
    }
else if(string2.charAt(0) == '3'){
        modifiedString2 += 'E'
    }
else if(string2.charAt(0) == '0'){
        modifiedString2 += 'O'
    }
else{
    modifiedString2 += string2.charAt(0)
}
    for(i = 1; i < string2.length; i++){
        if(string2.charAt(i) == '4'){
            modifiedString2 += 'a'            
        }
        else if(string2.charAt(i) == '3'){
            modifiedString2 += 'e'          
        }
        else if(string2.charAt(i) == '0'){
            modifiedString2 += 'o'            
        }
        else{
            modifiedString2 += string2.charAt(i)
        }
    }

console.log(modifiedString2)

// Exercise 6

let string3 = prompt("Enter string")
let reversedString3 = ""

for(i = string3.length; i >= 0; i--){
    reversedString3 += string3.charAt(i)
}

console.log("Original String: " + string3)
console.log("Reversed String: " + reversedString3)