"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(string) {
    if (string === "blue") {
        return `${string} is the color of the sky`
    } else if (string === "red") {
        return `Strawberries are ${string}`
    } else if (string === "cyan") {
        return `I don't know anything about cyan`
    } else {
        return `I don't know anything about ${string}`
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// analyzeColor(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

let analyzeColor = prompt("What is your favorite color?");

switch(analyzeColor) {
    case "blue":
        alert("blue is the color of the sky");
        break;
    case "red":
        alert("Strawberries are red");
        break;
    case "cyan":
        alert("I don't know anything about cyan");
        break;
    default:
        alert("I don't know anything about that color");
        break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

const favColor = prompt("What is your favorite color?");

function analyzeColor(favColor) {
    if (favColor === "blue") {
        alert("blue is the color of the sky");
    } else if (favColor === "red") {
        alert("Strawberries are red");
    } else if (favColor === "cyan") {
        alert("I don't know anything about cyan");
    } else {
        alert("I don't know anything about that color");
    }
}

analyzeColor(favColor);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNum, total) {
    switch(luckyNum) {
        case 0:
            alert(total);
            break;
        case 1:
            alert(total - (total * .1));
            break;
        case 2:
            alert(total - (total * .25));
            break;
        case 3:
            alert(total - (total * .35));
            break;
        case 4:
            alert(total - (total * .5));
            break;
        case 5:
            alert("0");
        default:
            alert("Please enter a lucky number between 0-5");
            break;
    }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

let luckyNumber = Math.floor(Math.random() * 6);

const total = prompt("What is your total bill?");

function calculateTotal(luckyNumber, total) {
    switch(luckyNumber) {
        case 0:
            alert(`Your lucky number is: ${luckyNumber}`);
            alert(`Your price before discount is $${total}`);
            alert(`Your price after discount is $${total}`);
            break;
        case 1:
            alert(`Your lucky number is: ${luckyNumber}`);
            alert(`Your price before discount is $${total}`);
            alert(`Your price after discount is $${total - (total * .1)}`);
            break;
        case 2:
            alert(`Your lucky number is: ${luckyNumber}`);
            alert(`Your price before discount is $${total}`);
            alert(`Your price after discount is $${total - (total * .25)}`);
            break;
        case 3:
            alert(`Your lucky number is: ${luckyNumber}`);
            alert(`Your price before discount is $${total}`);
            alert(`Your price after discount is $${total - (total * .35)}`);
            break;
        case 4:
            alert(`Your lucky number is: ${luckyNumber}`);
            alert(`Your price before discount is $${total}`);
            alert(`Your price after discount is $${total - (total * .5)}`);
            break;
        case 5:
            alert(`Your lucky number is: ${luckyNumber}`);
            alert(`Your price before discount is $${total}`);
            alert(`Your price after discount is $${0}`);
        default:
            alert("Please enter your total bill");
            break;
    }
}

calculateTotal(luckyNumber, total);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


const response = confirm("Would you like to enter a number?");

function numAnalysis(response) {
    if (response === true) {
        const userNumber = prompt("Enter your number");
        if (userNumber % 2 === 0 && userNumber >= 0) {
            alertEven(userNumber);
            numPlusHundred(userNumber)
            alert(`Your number is positive`);
        } else if (userNumber % 2 === 0 && userNumber < 0) {
            alertEven(userNumber);
            numPlusHundred(userNumber)
            alert(`Your number is negative`);
        } else if (userNumber % 2 !== 0 && userNumber >= 0) {
            alertOdd(userNumber);
            numPlusHundred(userNumber)
            alert(`Your number is positive`);
        } else if (userNumber % 2 !== 0 && userNumber < 0) {
            alertOdd(userNumber);
            numPlusHundred(userNumber)
            alert(`Your number is negative`);
        } else {
            alert("Enter a number data type");
        }
    }
}

numAnalysis(response);

function numPlusHundred(userNumber) {
    alert(`your number + 100 is: ${parseInt(userNumber) + 100}`);
}

function alertEven(userNumber) {
    alert("Your number is even");
}

function alertOdd (userNumber) {
    alert("Your number is odd");
}



