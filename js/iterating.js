(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ['Richard', 'Stephen', 'Valeria', 'Jasmine'];
    console.log(names);

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    function namesArray(string) {
        for (let i = 0; i < string.length; i++) {
            console.log(string[i]);
        }
    }

    namesArray(names);

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach((names) => {
        console.log(names);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function firstItem(string) {
        console.log(string[0]);
    }

    firstItem([1, 2, 3, 4, 5])

    function secondItem(string) {
        console.log(string[1]);
    }

    secondItem([1, 2, 3, 4, 5])

    function lastItem(string) {
        console.log(string[(string.length - 1)]);
    }

    lastItem([1, 2, 3, 4, 5]);


})();
