let firstname, myAge;
firstname = "Mila";
myAge = 999;

/*
SI mon age = age BDD alors :
    SI mon prénom = prenom dans la bdd :
        ->ok, les 2 sont bon
    SINON
        ->le prénom n'est pas bon
SINON
 ->mon age n'est pas bon!
*/

// 1 -- Demander son prénom à l'utilisateur avec un prompt
let firstnameLogin = prompt("Quel est votre prénom ?");

if (firstnameLogin === firstname) {
	//console.log("c'est bon pour le prénom");
	//Si tout est ok, je continue la vérification avec l'âge
	//Demande a mon utilisateur son âge via un PROMPT
	let ageLogin = parseInt(prompt("Votre âge ?"));

	if (ageLogin === myAge) {
		alert("Bienvenue " + firstnameLogin);
	} else {
		//Si les AGEs ne correspondent pas, je lance une ALERT.
		alert("Erreur d'âge");
	}
} else {
	// Sinon, les prénoms ne correspondent pas, je lance une ALERT.
	alert("Attention, prénom non reconnu");
}
