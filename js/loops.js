'use strict';

// #2:

function showMultiplicatonTable(num) {
    for (let i = 1; i < 11; i++) {
        let multiply = num * i;
        console.log(`${num} x ${i} = ${multiply}`);
    }
}

// #3:

function randomNum(min, max) {
    for (let i = 1; i < 11; i++) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}

randomNum(20,200);


function tenRandom() {
    for (let i = 1; i < 11; i++) {
        let random = randomNum(20,200);
        if (random % 2 === 0) {
            console.log(`${random} is even`);
        } else {
            console.log(`${random} is odd`);
        }
    }
}

tenRandom();

// #4: