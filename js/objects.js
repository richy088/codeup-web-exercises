(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    const person = {
        firstName: 'Rich',
        lastName: "Kim",
        sayHello: function() {
            return `Hello from ${this.firstName} ${this.lastName}`;
        }
    };

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */



    // function discount(string) {
    //     if (amount > 200) {
    //         return amount - (amount * .12);
    //     } else {
    //         return amount;
    //     }
    // }

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // shoppers.forEach(element => console.log((element.name) + ` has to pay $${element.amount} before the discount and $${(element.amount > 200 ? element.amount - (element.amount *.12) : element.amount)} after the discount`));
    shoppers.forEach(element => console.log(`${element.name} has to pay $${element.amount} before the discount and $${(element.amount > 200 ? element.amount - (element.amount *.12) : element.amount)} after the discount`));


    // console.log(shoppers[0].amount); logs Cameron amount
    // console.log(`${shoppers.[0].name} has to pay ${shoppers[0.amount]} before the discount and ${} after the discount`)

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
            {title: 'App Kid',
                author: {firstName: 'Michael',
                    lastName: 'Sayman'}},
            {title: 'The Lean Startup',
                author: {firstName: 'Eric',
                    lastName: 'Ries'}},
            {title: 'The Formula',
                author: {firstName: 'Ronald',
                    lastName: 'Ferguson'}},
            {title: 'American Baby',
                author: {firstName: 'Gabrielle',
                    lastName: 'Glaser'}},
            {title: 'Never Split the Difference',
                author: {firstName: 'Chris',
                    lastName: 'Voss'}}
    ];

    console.log(books.indexOf(books.title));
    console.log("------------------------")
    console.log(books[0]);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach((element, index) => console.log("Book #" +  (index + 1) + "\n" + "Title: " + (element.title) + "\n" + "Author: " + (element.author.firstName) + " " + (element.author.lastName)
    ));
    // console.log(books.indexOf({title: 'App Kid', author: {firstName: 'Michael', lastName: 'Sayman'}}) + 2);
    // books.forEach(function callback(v) {
    //     console.log(v);
    // });

    // console.log(books.indexOf(books.title));


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    console.log("*************************************")

    function createBook(title, author) {

        books = new Object()
    }

    createBook("Harry Potter", "JK Rowling");
    console.log(books);

    function showBookInfo(bookObject) {
        console.log(books[bookObject])
    }

    showBookInfo("title");
})();


