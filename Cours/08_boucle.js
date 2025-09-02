// FOR

/* 
for (3 arguments) {
// instructions à éxécuter
}
*/

/*
- let i = 0 => initialisation de la variable i qui va itérer notre boucle : point de dépaart de la boucle
- i < 10 => condition pour mettre fin à la boucle
- ++i => qui permet de rajouter +1 tant que la condition est true
*/

for (let i = 0; i <= 10; ++i) {
	document.write(`<h1 style='color:blue'>Nous avons le nombre ${i}</h1>`);
}

// a = a + 2
for (let a = 0; a <= 10; a += 2) {
	document.write(
		`<h1 style='color:red'>Je recommence avec le nombre ${a}</h1>`,
	);
}

for (let b = 10; b >= 0; --b) {
	document.write(
		`<h1 style='color:green'>Je recommence avec le nombre ${b}</h1>`,
	);
}

// WHILE => TANT QUE...

let c = 0;

while (c < 5) {
	document.write(`<h1 style='color:blue'>Avec la boucle WHILE ${c}</h1>`);
	++c;
}

let d = 0;

while (d < 5) {
	if (d === 3) {
		document.write(`<h1 style='color:orange'>Avec la boucle WHILE ${d}</h1>`);
	}
	++d;
}

// DO... WHILE => FAIRE... TANT QUE...
// Utile quand on a une action qui nécessite de faire une vérification avant de poursuivre

let e = 0;
let f = 5;

do {
	document.write(`<h1 style='color:purple'>Avec la boucle DO WHILE </h1>
                    <p style='color:purple'>Mon action se lance ${e} fois</p>
                    `);
	++e; // rajoute + 1
} while (e > f);








let userChoice;
let computerChoice;
let randomChoice = Math.floor(Math.random() * 3);
// Math.random => génère un chiffre compris entre 0 et 1
// Math.floor => arrondi à l'entier inférieur soit ici = 0
// * 3 => multiplie x 3 les possibilités de choix (0, 1, 2)
let resultMessage = "";
console.log(Math.floor(Math.random()) * 3);

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
} else {
	resultMessage += "Dommage! Vous avez perdu.";
}

alert(resultMessage);