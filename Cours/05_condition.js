// syntaxe d'une condition
if ("l'expression à vérifier") {
	// le script à éxécuter
}

let day = "Lundi";

// day est égal à true
if (day) {
	// ici on ne cherche pas encore à savoir si day est égal à Lundi mais si elle existe
	console.log("on a bien day !");
} else {
	console.log("Perdu !");
}

let num = 50;

if (num > 90) {
	console.log("Bingo !");
} else {
	console.log("Ce n'est pas vrai!");
}

if (num > 90) {
	console.log("Bingo !");
} else if (day) {
	console.log("Ce n'est pas vrai!");
} else if (day < num) {
	console.log("Ohhh la vache ");
} else {
	console.log("Alors rien n'est vrai !!");}