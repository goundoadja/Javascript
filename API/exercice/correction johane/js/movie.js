 // 1. On va récupèrer l’id dans l’URL actuelle
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get("id");

    // 2. On appelle l’API avec cet ID
    const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=682e092936d2a61a00df86a83d88f574&language=fr-FR`;

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const container = document.querySelector("#movie-details");

        container.innerHTML = `
          <h2>${data.title}</h2>
          <img src="https://image.tmdb.org/t/p/w400${data.poster_path}" alt="${data.title}">
          <p><strong>Date de sortie :</strong> ${data.release_date}</p>
          <p><strong>Résumé :</strong> ${data.overview}</p>
        `;
      })
      .catch((err) => console.log("Erreur :", err));