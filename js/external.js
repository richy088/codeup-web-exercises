console.log("Hello from Javascript");

alert("Welcome to my website");

const userFavColor = prompt("What is your favorite color?");
alert(`Great, ${userFavColor} is my favorite color too!`);

const brotherBear = prompt("How many days did you rent brother bear for?")
const littleMermaid = prompt("How many days did you rent Little Mermaid for?")
const hercules = prompt("How many days did you rent Hercules for?")


const moneyOwed = ((parseInt(brotherBear) + parseInt(littleMermaid) + parseInt(hercules)) * 3);
alert(`You owe $${moneyOwed} dollars`);

const google = prompt("How many hours did you work at Google?")
const amazon = prompt("How many hours did you work at Amazon?")
const facebook = prompt("How many hours did you work at Facebook?")

const totalPaycheck = (parseInt(google) * 400) + (parseInt(amazon) * 380)  + (parseInt(facebook) * 350);
alert(`Your total payment for the week is $${totalPaycheck}`);

const userSchedule = confirm("Do you wish to enroll in JS 101?");
(userSchedule ? alert("Congratulations, you have been enrolled") : alert("Unfortunately, there is not enough room"));

