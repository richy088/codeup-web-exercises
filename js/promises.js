function getUserData (userName) {
    fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {'Authorization': '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'}}).then(response => console.log(response.json()));
}

getUserData("richy088");