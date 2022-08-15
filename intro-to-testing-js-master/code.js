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
