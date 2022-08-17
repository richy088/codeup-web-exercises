'use strict';
// let userNumber = parseInt(prompt("Enter a number between 1 and 50:"));
// while (userNumber < 1 || userNumber > 50) {
//     if (userNumber > 1 && userNumber < 50) {
//         break;
//     } else {
//         userNumber = prompt("Enter a valid number");
//     }
// }

let num = 1;
while (num < 50) {
    if (num % 2 === 0) {
        continue;
    } else if (num === userNumber) {
        console.log(`Yikes! Skipping number: ${userNumber}`)
    }
    console.log(`Here is an odd number: ${num}`);
    num++;
}



