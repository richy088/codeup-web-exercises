'use strict';

//while loop
let num = 1;
let newNum = num;

while (num <= 16) {
    newNum = newNum * 2;
    console.log(newNum);
    num++;
}

//do-while loop

let coneSupply = Math.floor(Math.random() * 50) + 50;

do {
    let conesToSell = Math.floor(Math.random() * 5) + 1;
    if (conesToSell > coneSupply) {
        console.log(`Cannot sell you ${conesToSell} cones I only have ${coneSupply}...`);
    } else if (conesToSell < coneSupply) {
        console.log(`${conesToSell} cones sold...`);
        coneSupply = coneSupply - conesToSell;
    } else {
        console.log(`Yay! I sold them all!`);
        coneSupply = coneSupply - conesToSell;
    }
} while (coneSupply > 0);
