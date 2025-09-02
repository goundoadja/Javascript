// FONCTIONS PRÉDÉFINIES (NATIVES)

/* indexOf()
    cherche la position d'un élément dans une chaîne de caractère (si l'élément n'est pas trouvé, elle renvoit -1)
*/

let sentence = "Bonjour Eddy, comment vas-tu ?";
let pos = sentence.indexOf("Eddy"); // renvoit 8
document.write(`<h1>indexOf de cette phrase: ${pos}</h1>`);

/* substr()
    découpe une chaîne de caractère à partir d'une position donnée et récupère un certain nombre de caractère (selon les paramètres)
*/

/* substring()
    découpe une chaîne de caractère à partir d'une position donnée jusqu'à la position de fin
*/

let cutSentence = sentence.substr(8, 4);
let cutSentence1 = sentence.substring(8, 12);
document.write(`<h1>substr de cette phrase: ${cutSentence}</h1>`);
document.write(`<h1>substring de cette phrase: ${cutSentence1}</h1>`);

/* includes()
    vérifie si un élément est contenu dans une string. Renvoit true ou false
*/

// let email = prompt("Entrez votre email svp !");
// if (email.includes("@")) {
// 	document.write("Email valide ! Merci");
// } else {
// 	document.write("Email invalide ! Recommencez");
// }

/* length()
    retourne la longueur d'une string ou tableau
*/

document.write(
	`<br> Longueur de la variable sentence : ${sentence.length} <br>`,
);
console.log(sentence.length);

// FONCTION UTILISATEUR

function myFirstFunction() {
	let email = prompt("Entrez votre email svp !");
	if (email.includes("@")) {
		document.write("Email valide ! Merci");
	} else {
		document.write("Email invalide ! Recommencez");
	}
}

// myFirstFunction();
// myFirstFunction();
// myFirstFunction();

function askFirstname(firstname) {
	document.write(`<h1>Bonjour, ${firstname}</h1>`);
}

function askFirstnameBis() {
	document.write(`<h1>Bonjour, Juliette</h1>`);
}

askFirstnameBis();

function askWeather(season, temperature) {
	let message = `Nous sommes en ${season} et il fait ${temperature}`;
	document.write(`${message}`);
}

let seasonUser = prompt("Quelle saison ?");
let tempUser = prompt("Quelle temperature ?");

askWeather(seasonUser, tempUser);