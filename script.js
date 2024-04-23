const API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c8bc0edfdee286997857dd7e94accb95&page=1';

/**location of images in the db */
const IMG = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=c8bc0edfdee286997857dd7e94accb95&query=";

/**retrive necessary data */
const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("search-movie");

//call the function to search
Search(API)

/**function to search and retrieve results */
function Search(url){
    fetch(url).then(res => res.json())
    .then(function (data){
        console.log(data.results); //log search results to console

        data.results.forEach(element => {
            
            const movie_title = document.createElement('h3'); //create new h3 for movie title
            movie_title.innerHTML = `${element.title}`; //return movie title
            movie_title.setAttribute('id', 'title'); //set attributes

            const img = document.createElement('img'); //create new image element
            img.src = IMG + element.poster_path; //return the link to the poster path or thumbnail
            img.setAttribute('class', 'movie-thumbnail');
            img.setAttribute('id', 'image');

            const center = document.createElement('center'); //create new center element
            center.appendChild(img);

            const div_card = document.createElement('div'); //create a new div for each search result
            div_card.appendChild(center);
            div_card.appendChild(movie_title);
            div_card.setAttribute('class', 'movie-card'); //set element attributes 

            const div_col = document.createElement('div'); //create new column div
            div_col.appendChild(div_card);
            div_col.setAttribute('class', 'movie-column');

            const div_row = document.createElement('div'); //create new row div
            div_row.appendChild(div_col);
            div_row.setAttribute('class', 'movie-row');

            main.appendChild(div_row); //append everything to the section

        });
    });
}

//event listener for the search bar
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    main.innerHTML = '' //remove the previous search when new search is initiated

    const exists = search.value;

    //display if the search is valid
    if(exists){
        Search(SEARCH_API + exists);
        search.value = "";
    }
})