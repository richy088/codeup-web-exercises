'use strict';
let userNumber = parseInt(prompt("Enter a number between 1 and 50:"));
while (userNumber < 1 || userNumber > 50) {
    if (userNumber > 1 && userNumber < 50) {
        break;
    } else {
        userNumber = prompt("Enter a valid number");
    }
}

function userNum(string) {
    for (let i = 0; i < 50; i++) {
        if (i % 2 !== 0) {
            if (i == string) {
                console.log(`Yikes! Skipping number: ${string}`);
                continue;
            }
        } else {
            continue;
        }
        console.log(`Here is an odd number: ${i}`);
    }
}

userNum(userNumber);



