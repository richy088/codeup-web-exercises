////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// GLOBAL VARIABLES ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

const moviesURL = "https://fate-private-prince.glitch.me/movies";

////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// DOCUMENT READY ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
    renderMovies();
});

////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// LISTENERS ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

$('#submit-btn').click(function(e){
    e.preventDefault();
    let title = $("#userInput-title").val();
    let rating = $('#userInput-rating').val();
    console.log(title)


//Post to movies array

    const moviesToPost = {
        rating: `${rating}`,
        title: `${title}`,
    }

    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'},
        body: JSON.stringify(moviesToPost)
    }

    function getMovies(){
        fetch(moviesURL, postOptions)
            .then( response => console.log(response)) /* review was created successfully */
            .catch( error => console.error(error)); /* handle errors */
    }

    getMovies();

})

//delete user
$(document).on('click', ".delete-button", function(e){
    e.preventDefault();
    let cardID = $(this).attr('data-id')
    console.log(cardID);

//Post to movies array

    const deleteOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json'}
    }


    fetch(`${moviesURL}/${cardID}`, deleteOptions)
        .then(renderMovies);/* review was created successfully */

// fix how to fully delete without refreshing
})

$(document).on('click', ".edit-button", function (e){
    e.preventDefault();
    $('.edit-form').css("visibility", 'visible');
})

$(document).on('click', ".edit-submit-button", function(e) {
    e.preventDefault();
    let $cardParent = $(this).parents('.card');
    let editTitle = $cardParent.find('.editTitle').val();
    let editRating = $cardParent.find('.editRating').val();
    let editID = $(this).attr('data-id');
    console.log(editID);

    const moviesToEdit = {
        title: `${editTitle}`,
        rating: `${editRating}`,
    };
    console.log('The edited movie data follows:');
    console.log(moviesToEdit);



    const editOptions = {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'},
        body: JSON.stringify(moviesToEdit)
    }

    fetch(`${moviesURL}/${editID}`, editOptions)
        .then(renderMovies);/* review was created successfully */
})

////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// FUNCTIONS  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

async function getMovies() {
    try {
        let res = await fetch(moviesURL);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderMovies() {
    let movies = await getMovies();
    let html = '';
    // debugger;
    movies.forEach((movie, index) => {
        // debugger;
        let htmlSegment = `<div class="card w-50">
            <div class="card-body">
                <h5 class="card-title">${(movie.title ? movie.title : '')}</h5>
                <p class="middle card-text">Movie rating: ${movie.rating ?? movie.rating}</p>
                <a href="#" data-id="${movie.id ?? movie.id}" class="delete-button btn btn-primary">Delete</a>
                <a href="#" data-id="${movie.id ?? movie.id}" class="edit-button btn btn-primary">Edit</a>
            </div>
            <div class="edit-form" style="visibility: hidden">
               <input class="editTitle" value="${movie.title ?? movie.title}" placeholder="title">
               <input class="editRating" value ="${movie.rating ?? movie.rating}" placeholder="rating">
               <button data-id="${movie.id ?? movie.id}" class="edit-submit-button sub-1">Submit</button>
            </div>
        </div>`

        html += htmlSegment;
    });
    $('.middle').html(html)
}