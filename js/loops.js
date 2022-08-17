'use strict';
//
// // #2:
//
// function showMultiplicatonTable(num) {
//     for (let i = 1; i < 11; i++) {
//         let multiply = num * i;
//         console.log(`${num} x ${i} = ${multiply}`);
//     }
// }
//
// // #3:
//
// function randomNum(min, max) {
//     for (let i = 1; i < 11; i++) {
//         return Math.floor(Math.random() * (max - min + 1) ) + min;
//     }
// }
//
// randomNum(20,200);
//
//
// function tenRandom() {
//     for (let i = 1; i < 11; i++) {
//         let random = randomNum(20,200);
//         if (random % 2 === 0) {
//             console.log(`${random} is even`);
//         } else {
//             console.log(`${random} is odd`);
//         }
//     }
// }
//
// tenRandom();
//
// // #4:
//
// let num = "";
// function numTriangle(string) {
//     for (let i = 1; i < string; i++) {
//         for (let j = 1; j <= i; j++) {
//             num += i;
//         }
//         num += "\n"
//     }
//     console.log(num);
// }
//
// numTriangle(10);
//
// // #5:
//
// function minusFive() {
//     for (let i = 100; i > 0; i-=5) {
//         console.log(i);
//     }
// }
let userNumber = parseInt(prompt("Enter a number between 1 and 50:"));

let num = 1;
while (num < 50) {
    if (num % 2 === 0) {
        continue;
    }
    if (num === userNumber) {
        console.log(`Yikes! Skipping number: ${userNumber}`)
    }
    console.log(`Here is an odd number: ${num}`);
    num++;
}


