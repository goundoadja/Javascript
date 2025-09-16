const movies = () => {
      const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=682e092936d2a61a00df86a83d88f574`;

        fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          const container = document.querySelector("#movies-results");

          data.results.map(movie => {

            const div = document.createElement("div");

            const a = document.createElement("a");
            a.href = `movie.html?id=${movie.id}`;

            const img = document.createElement("img");
            img.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
            img.alt = movie.title;

            const title = document.createElement("h3");
            title.innerHTML = movie.title

            a.appendChild(img);
            div.appendChild(a);
            div.appendChild(title); 
            container.appendChild(div)

          });
        })
        .catch((err) => console.log("Erreur :", err));
}

movies();