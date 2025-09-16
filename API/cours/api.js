const results = document.querySelector("#jokes-results");
const btn = document.querySelector("#jokes-btn");

function getJokes() {
	const URL = "https://api.chucknorris.io/jokes/random";

	/* bloc trycatch qui nous permet de gérer les erreurs de requêtes */

	// donc ici on dit au script d'essayer de faire la requête HTTP GET et d'en récupérer le résultat
	try {
		fetch(URL)
			.then((response) => {
				// on vérifie qu'on récupère bien notre réponse mais elle est en bodyUsed false donc inutilisatble telle quelle
				console.log(response);
				// Il faudra la convertir en format JSON
				return response.json();
			}).then((data) => {
				console.log(data);
				results.innerHTML = `<img src="${data.icon_url}" alt="">
									<p>${data.value}</p>`		
			})
			// sinon on gestion d'erreur si la requête n'est pas ok
	} catch (error) {
		console.error(error);
		// message d'erreur et/ou redirection vers une autre page
	}
}

btn.addEventListener("click",getJokes);





