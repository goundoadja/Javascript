/* 
   Le localStorage permet de stocker des informations dans le navigateur de manière persistante.
   Les données restent disponibles même après la fermeture du navigateur, jusqu'à ce qu'elles soient explicitement supprimées.
*/

/* 
   On peut stocker des données de manière temporaire dans sessionStorage (valables jusqu'à la fermeture du navigateur) 
   ou de manière prolongée dans localStorage (persistant jusqu'à suppression manuelle ou vidage du cache).
*/

let lastname = "Issaadi";
let firstname = "Issa";


/*  
    Définition de valeurs dans le localStorage avec setItem.
    Cette méthode stocke les données sous forme de paires clé-valeur, où les deux paramètres doivent être des chaînes de caractères.
    Le navigateur conserve ces données même après sa fermeture.
*/
                 //  clé  ->  valeur
//localStorage.setItem("nom", lastname);
// localStorage.setItem("firstname", firstname);


/* 
   Vérification de l'existence des données dans le localStorage. 
   Si elles existent, on les récupère. Sinon, on renvoie un message d'erreur.
*/

let greetings = document.querySelector("strong");

if(localStorage.nom && localStorage.nom != null) {
	console.log("Ca n'existe pas !!");
	
}

if(localStorage.firstname && localStorage.firstname != null) {
	greetings.innerHTML = localStorage.getItem("firstname");	
} 


/***************************************** VIA FORM ********************************************/
let valid = document.querySelector("#valid");
let deletBtn = document.querySelector("#delete");
let ageInput = document.querySelector("#age");
let jobInput = document.querySelector("#job");
let jobText = document.querySelector(".job");

/* 
   Explication des méthodes :
   - JSON.stringify(objet) : Cette méthode convertit un objet JavaScript en une chaîne de caractères JSON.
   - JSON.parse(string) : Cette méthode convertit une chaîne de caractères JSON en un objet JavaScript.
   
   Pourquoi utiliser ces méthodes ?
   Le localStorage ne peut stocker que des chaînes de caractères. Pour stocker des objets, il est nécessaire de 
   les convertir en chaînes avec JSON.stringify avant de les stocker. Ensuite, pour réutiliser les données stockées, 
   il faut les reconvertir en objets avec JSON.parse.
*/

// OBJET JS PARSIFIE
// let objet = {
// 	address: "Tour Eiffel",
// 	country: "France"
// }

// OBJET STRINGIFIE -> LOCALSTORAGE
// let objetLocal = {
// 	"address": "Tour Eiffel",
// 	"country": "France"
// }

function getUser() {
	let userJob = {
		job: jobInput.value,
		age: ageInput.value
	}

	let stringified = JSON.stringify(userJob);
	localStorage.setItem("user", stringified);
}

// valid.addEventListener("click", getUser);
// console.log(JSON.parse(localStorage.getItem("user")));

// let user = JSON.parse(localStorage.getItem("user"));
// jobText.innerHTML = `Il est ${user.job} et il a ${user.age} ans`;

deletBtn.addEventListener("click", () => {
	//localStorage.removeItem("firstname");
	localStorage.clear();
	console.log("clé supprimée !");
	
})



/******************************************* REQUÊTE FETCH ET LOCALSTORAGE  ********************************/
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
				localStorage.setItem("chuck", data.value);
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
