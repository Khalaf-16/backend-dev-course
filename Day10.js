// while loop
// Syntax:
    // while(condition){
    //     code to be executed
    // }

let newPassword = prompt("Enter password")

let isNumbers = newPassword.includes('0') || newPassword.includes('1') || newPassword.includes('2') || 
              newPassword.includes('3') || newPassword.includes('4') || newPassword.includes('5') || 
              newPassword.includes('6') || newPassword.includes('7') || newPassword.includes('8') || 
              newPassword.includes('9')

let isSpecialCharacters = newPassword.includes('!') || newPassword.includes('@') || newPassword.includes('%') ||
                        newPassword.includes('?') || newPassword.includes('#') || newPassword.includes('*') ||
                        newPassword.includes('^') || newPassword.includes('{') || newPassword.includes('}')

while (newPassword.length < 8 || !isNumbers || !isSpecialCharacters) {
    newPassword = prompt("Password not good, try again:")
    isNumbers = newPassword.includes('0') || newPassword.includes('1') || newPassword.includes('2') || 
              newPassword.includes('3') || newPassword.includes('4') || newPassword.includes('5') || 
              newPassword.includes('6') || newPassword.includes('7') || newPassword.includes('8') || 
              newPassword.includes('9')

    isSpecialCharacters = newPassword.includes('!') || newPassword.includes('@') || newPassword.includes('%') ||
                        newPassword.includes('?') || newPassword.includes('#') || newPassword.includes('*') ||
                        newPassword.includes('^') || newPassword.includes('{') || newPassword.includes('}')
}

console.log("New password made!")

// for a do-while loop, even if the condition is false, the code block will still execute once before checking the condition again.
// Syntax:
    // do{
    //     code to be executed
    // } while(condition);
