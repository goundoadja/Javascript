// 1 -- je déclare la majorité légale
const MAJORITY_FR = 18;

// 2 -- demander l'âge en s'assurant que nous avons un NUMBER
let age = parseInt(prompt("Indiquez votre âge"));

// 3 -- je vérifie si mon internaute est majeur
if (age >= MAJORITY_FR) {
	alert("Bienvenue, vous êtes bien majeur !");
} else {
	// s'il est mineur je lui signale
	alert("Va voir un autre super site de ton âge...");
	// et ensuite je redirige vers une boutique de jouets ;-)
	document.location.href =
		"https://www.joueclub.fr/?utm_source=google&utm_medium=cpc&utm_campaign=2025_Q1_Q4__S__RETAIL_Marque_JoueClub&utm_id=213820625&gad_source=1&gad_campaignid=213820625&gbraid=0AAAAADr2YwcUcZzN45XwtcobQX3YM8d8W&gclid=Cj0KCQjwwZDFBhCpARIsAB95qO1ho5aO3Pj4_8oRyvXke0g2DVvwsS5y8zozhknS7NIi16mbYvLMJEQaAhSHEALw_wcB";
}