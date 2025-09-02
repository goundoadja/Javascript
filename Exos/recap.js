let firstname = "Gérard";
let age = 55;
let city = "Marseille";
let sociability = false;

if (firstname === "Gérard" && sociability) {
	/* revient à écrire sociability === true */
	alert("On a le bon profil !");
	// renvoit faux
}

// Valeurs qui renvoient FALSE en JS
/* 
- FALSE
- 0
- NULL
- not undifined
- NAN
*/

// Valeurs qui renvoient TRUE en JS
/* 
- TRUE
- "0"
- ""
- {}
- []
- ....
*/

// if (age === 55 || firstname === "Gérard") {
// 	console.log("C'est ok");
// } else if (city === "Marseille" && age === 55) {
// 	console.log("Tarpin stylé !");
// } else if (city === "Marseille" && !sociability) {
// 	console.log("Ah ouais ?");
// } else {
// 	console.log("On a tout vu !");
// }

if (age === 55 || firstname === "Gérard") {
	console.log("C'est ok");
}

if (city === "Marseille" && age === 55) {
	console.log("Tarpin stylé !");
}

if (city === "Marseille" && !sociability) {
	console.log("Ah ouais ?");
}

if (age <= 40 || (age >= 20 && city === "Marseille")) {
	console.log("Vous avez accès au site !");
}
