/***********************  TABLEAUX ************************/
// Créer un tableau
/* let tableau = new Array(element0, element1,....);
    let tableau = Array(element0, element1....);
    let tableau = [element0, element1,....] => manière plus moderne de faire
*/

let tableau = [];
console.log(tableau);

let tab2 = ["Vous", "êtes", "complètement", "atteints", "aujourd'hui !"];
console.log(tab2);

// FOR OF => TABLEAUX
for (const tab of tab2) {
	console.log(tab);
}

// FOR EACH => TABLEAUX
tab2.forEach((e) => {
	console.log(e);
});

let position = tab2[2];
console.log(position);

document.write(tab2);

document.write("<ul>");

for (let i = 0; i < tab2.length; ++i) {
	let tab = document.write(`
            <li>La valeur est : ${tab2[i]}</li>
        `);
}

document.write("</ul>");

// AJOUTER UN ÉLÉMENT À LA FIN D'UN TABLEAU
let add = tab2.push("Faites attention !");
console.log(tab2);

// for (let i = 0; i < tab2.length; ++i) {
// 	let tab = document.write(`
//             <li>La valeur est : ${tab2[i]}</li>
//         `);
// }

// SUPPRIMER LE DERNIER ÉLÉMENT D'UN TABLEAU

let lastDelete = tab2.pop();
console.log(lastDelete);
console.log(tab2);

// AJOUTER UN ÉLÉMENT AU DÉBUT D'UN TABLEAU
tab2.unshift("Me revoilà !");
console.log(tab2);

// SUPPRIMER LE PREMIER ÉLÉMENT D'UN TABLEAU
tab2.shift();
console.log(tab2);

/***********************  OBJETS ************************/
let family = {
	//  clé  => valeur
	father: "Henry",
	mother: "Juliette",
	daughter: {
		son: "Billy",
	},
};
console.log(family);
console.log(family.mother);
console.log(family.daughter.son);

// boucle FOR IN
for (const i in family) {
	console.log(family[i]);
}

// Ajouter une nouvelle propriété
family.daughter.daughter = "Julia";
console.log(family);

let arrayFam = [
	{ father: "Henry", mother: "Juliette" },
	{
		father: "Mattieu",
		mother: "Lolita",
		daughter: {
			son: "Marc",
			firstnameDaugther: "Vanessa",
		},
	},
	{ father: "Paul", mother: "Lola" },
	{ father: "Mickael", mother: "Julie" },
	{ father: "Patrick", mother: "Amanda" },
];

console.log(arrayFam);
console.log(arrayFam[1].daughter.firstnameDaugther);

for (let i = 0; i < arrayFam.length; ++i) {
	console.log(arrayFam[i].father);
}
