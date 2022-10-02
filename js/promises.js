function getUserData (userName) {
    fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {'Authorization': GITHUB_KEY}})
        .then(function(response){
           return response.json()
            //.json() function is asynchronous so it returns a new promise which then needs a new .then to access contents
        })
        .then(function(result){
             console.log(result[0].actor.login, result[0].created_at, result[0]);
        });

    // let response = await fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {'Authorization': GITHUB_KEY}});
    // let object = await response.json();
    // console.log(object);
}

getUserData("richy088");

// const lotteryPromise = new Promise(function (resolve, reject) {
//     console.log('Lottery draw is happening');
//     setTimeout(function () {
//         if (Math.random() >= 0.5) {
//             resolve('You WIN');
//         } else {
//             reject(new Error('You lost your money'));
//         }
//     }, 2000);
// });
//
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const wait = function(seconds) {
    return new Promise(function (resolve){
        setTimeout(resolve, seconds * 1000);
    });
};
wait(1).then(()=>{
    console.log(`You'll see this after 1 second`);
    return wait(3);
}).then(() => console.log(`You'll see this after 3 seconds`));