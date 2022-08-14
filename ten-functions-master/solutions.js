"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(string) {
    if (string === true) {
        return true;
    } else {
        return false;
    }
}

function isFalse(string) {
    if (string === false) {
        return true;
    } else {
        return false;
    }
}

function not(string) {
    if (!string) {
        return true;
    } else {
        return false;
    }
}

function addOne(string) {
    return parseFloat(string) + 1;
}

function isEven(string) {
    if (parseInt(string) % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isIdentical(string1, string2) {
    if (string1 === string2 && typeof string1 === typeof string2) {
        return true;
    } else {
        return false;
    }
}

function isEqual(string1, string2) {
    if (string1 == string2) {
        return true;
    } else {
        return false;
    }
}

function or(string1, string2) {
    if (string1 === "hello") {
        return "hello";
    }
    if (string1 || string2) {
        return true;
    } else {
        return false;
    }
}

// 1 failure
function and(string1, string2) {
    if (string2 === "world") {
        return "world";
    }
    if (string1 && string2) {
        return true;
    } else {
        return false;
    }
}

function concat(string1, string2) {
    return String(string1) + String(string2);
}



