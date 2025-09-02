let firstName = "Gertrude";
let lastName = "Lucio";
let age = 55;
let nb1 = 100;
let nb2 = 5;
let nb3 = 55;
let nb4 = 200;

// Opérateur logique : && (ET)
if (firstName === lastName && age === nb4) {
	// toutes les expressions doivent renvoyer true pour éxécuter le script
	console.log("Ah ouaiisiiiis  !"); // code à éxécuter
}

// Opérateur logique : || (OU)
if (firstName === lastName || age === nb3) {
	// Au moins l'une des deux expressions doivent être vraies pour que la condition renvoie true
	console.log("Ah ouaiiiiiis  !"); // code à éxécuter
}

if (firstName === false) {
	// code a éxécuter
}

if (nb4 >= 100) {
	console.log("Yeahhhhh");}