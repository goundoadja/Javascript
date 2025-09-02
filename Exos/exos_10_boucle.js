// SCRIPT GLOBAL

let userChoice;
let computerChoice;
let randomChoice = Math.floor(Math.random() * 3);
// Math.random => génère un chiffre compris entre 0 et 1
// Math.floor => arrondi à l'entier inférieur soit ici = 0
// * 3 => multiplie x 3 les possibilités de choix (0, 1, 2)
let resultMessage = "";
console.log(Math.floor(Math.random()) * 3);

// Variables pour les scores des joueurs
let userScore = 0;
let computerScore = 0;

// Sélection des éléments du DOM
let result = document.querySelector("p");
console.log(result);
let endGame = document.querySelector("#game");
let points = document.querySelector("h2");

console.log(Math.floor(Math.random()));

function play() {
	// SCRIPT LOCAL
	// Attention à la portée des variables ! Si déclarées ici on ne peut plus les utiliser en dehors
	// let exemple = "exemple";
	while (true) {
		userChoice = prompt(
			"Entrez votre choix (pierre, feuille, ciseaux) :",
		).toLowerCase();
		if (
			(userChoice === "pierre" ||
				userChoice === "feuille" ||
				userChoice === "ciseaux") &&
			isNaN(userChoice)
		) {
			break;
		} else {
			alert("Choix invalide, veuillez entrer pierre, feuille ou ciseaux.");
		}
	}

	if (randomChoice === 0) {
		computerChoice = "pierre";
	} else if (randomChoice === 1) {
		computerChoice = "feuille";
	} else {
		computerChoice = "ciseaux";
	}

	resultMessage = `Ordinateur a choisi : ${computerChoice} et vous ${userChoice}`;

	if (userChoice === computerChoice) {
		resultMessage += "C'est un match nul !";
	} else if (
		(userChoice === "pierre" && computerChoice === "ciseaux") ||
		(userChoice === "feuille" && computerChoice === "pierre") ||
		(userChoice === "ciseaux" && computerChoice === "feuille")
	) {
		resultMessage += "Vous avez gagné !";
		++userScore;
	} else {
		resultMessage += "Dommage! Vous avez perdu.";
		++computerScore;
	}

	result.innerHTML = resultMessage;
	points.innerHTML = `Vous avez ${userScore} point(s) et l'ordinateur a ${computerScore} point(s)`;

	if (userScore === 3) {
		endGame.innerHTML = `Félicitations ! Vous avez gagné la partie !`;
		gameOver();

		// userScore = 0;
		// computerScore = 0;
		// result.innerHTML = "";
		// points.innerHTML = "";
	} else if (computerScore === 3) {
		endGame.innerHTML = `Perdu ! C'est l'ordinateur qui gagne la partie !`;
		gameOver();

		// userScore = 0;
		// computerScore = 0;
		// result.innerHTML = "";
		// points.innerHTML = "";
	}
}

// Fonction de remise à zéro
function gameOver() {
	userScore = 0;
	computerScore = 0;
	result.innerHTML = "";
	points.innerHTML = "Vous avez 0 point(s) et l'ordinateur a 0 point(s)";
}

