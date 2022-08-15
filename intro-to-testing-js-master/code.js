// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}
function sayHello(string) {
    if (string === undefined) {
        return "Hello, World!";
    } else if (string === !String) {
        return "Hello, World!";
    } else {
        return "Hello," + " " + string + "!";
    }
}

function isFive(string) {
    if (parseInt(string) === 5) {
        return true;
    } else {
        return false;
    }
}

function isEven(string) {
    if (string % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isVowel(string) {
    return /[aeiou]/.test(string);
}

function add(val1, val2) {
    if (val1 === NaN && val2 === NaN) {
        return NaN;
    } else {
        return parseInt(val1) + parseInt(val2);
    }
}

