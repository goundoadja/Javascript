let movies = document.getElementById("movies-results");
movies.style.display = "flex";
movies.style.flexDirection = "column"
movies.style.width = "100px"
 
 
    const URL ="https://api.themoviedb.org/3/trending/movie/week?api_key=682e092936d2a61a00df86a83d88f574";
     
    function movie(){
 
 
            fetch(URL)
                .then((response)=>{
                    console.log(response);
                    return response.json();
 
                }).then((data)=>{
                    console.log(data);
                    console.log(data.results[0].poster_path);
 
                    for ( let i = 0 ; i< data.results.length ; ++i){
                        const img = document.createElement("img");
                        movies.appendChild(img);
                        img.src = `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`;
                       
 
                    }
                   
                   
 
                    // for ( let i =0 ;i < results.length ; ++i){
                    // img.src += `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`;
                    // }
 
                })
               
 
               
            }  
        movie();
       
       
movies.addEventListener("submit",(e)=>{
    e.preventDefault();
    movie ();        
});
 
 
 
 
 



