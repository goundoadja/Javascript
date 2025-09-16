let moviesResults = document.getElementById("movies-results")





function API() {
    const URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=682e092936d2a61a00df86a83d88f574";
    
    
    fetch(URL)
    .then((response) => {
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log(data);
        for(let i = 0; i < data.results.length; i++) {
            console.log(data.results[i]);
            
                    moviesResults.innerHTML += `<div>
                                        <p>${data.results[i].title}</p>
                                     <a href="28_movie.html?id=${data.results[i].id}"><img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}
                                        " alt=""></a> 
                                   </div>`

    
        }

        
    })
    
}
API()
  
  
  