 const currentUrl = window.location.href;
let movieDetails = document.getElementById("movie-details")
console.log(currentUrl);

let url = new URL(currentUrl);
let id = url.searchParams.get("id");
console.log(id);
const API = `https://api.themoviedb.org/3/movie/${id}?api_key=682e092936d2a61a00df86a83d88f574`;
    
 fetch(API)
    .then((response) => {
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log(data);
           movieDetails.innerHTML = `<div>
                                        <p>${data.title}</p>
                                        <img src="https://image.tmdb.org/t/p/w500${data.poster_path}
                                        " alt="">
                                         <p>${data.overview}</p>
                                   </div>`

    })