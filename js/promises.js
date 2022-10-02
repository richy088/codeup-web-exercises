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