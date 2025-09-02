let nom = window.prompt(
	"Veuillez d'abord saisir votre nom ",
);

console.log(nom);

document.write(`<h1>La réponse de l'utilisateur: ${nom}</h1>`);


let prénom = window.prompt(
	"Veuillez d'abord saisir votre prénom ",
);

console.log(prénom);

document.write(`<h1>La réponse de l'utilisateur: ${prénom}</h1>`);

alert(nom    + "     " + prénom);

// Correction 

let name;
let firstname;

name = prompt("Entrez votre nom : ");
firstname = prompt("Entrez votre prénom :");

// Concaténation
alert("Bonjour, " + firstname + " " + name);

/* Revient à faire
   alert(`Bonjour, ${firstname} ${name}`);
*/
