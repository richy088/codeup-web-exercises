// function getUserData (userName) {
//     fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {'Authorization': GITHUB_KEY}})
//         .then(function(response){
//            return response.json()
//             //.json() function is asynchronous so it returns a new promise which then needs a new .then to access contents
//         })
//         .then(function(result){
//              console.log(result[0].actor.login, result[0].created_at, result[0]);
//         });
//
//     // let response = await fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {'Authorization': GITHUB_KEY}});
//     // let object = await response.json();
//     // console.log(object);
// }
//
// getUserData("richy088");
//
// // const lotteryPromise = new Promise(function (resolve, reject) {
// //     console.log('Lottery draw is happening');
// //     setTimeout(function () {
// //         if (Math.random() >= 0.5) {
// //             resolve('You WIN');
// //         } else {
// //             reject(new Error('You lost your money'));
// //         }
// //     }, 2000);
// // });
// //
// // lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
//
// const wait = function(seconds) {
//     return new Promise(function (resolve){
//         setTimeout(resolve, seconds * 1000);
//     });
// };
// wait(1).then(()=>{
//     console.log(`You'll see this after 1 second`);
//     return wait(3);
// }).then(() => console.log(`You'll see this after 3 seconds`));
//
// //RESTful API example
//
// const reviewObj = {
//     restaurant_id: 1,
//     name: 'Codey',
//     rating: 5,
//     comments: "This is a really good place for coding and eating"
// };
// const url = 'https://codeup-restful-example.glitch.me/reviews';
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(reviewObj),
// };
// fetch(url, options)
//     .then( response => console.log(response) ) /* review was created successfully */
//     .catch( error => console.error(error) ); /* handle errors */

fetch('https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=6baca547742c6f96a6ff71b138424f21')
    .then(function (response){
        return response.json();
    })
    .then(function (result){
        console.log(result);
    })