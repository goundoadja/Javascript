// Déclaration d'une variable

var number; // version ancienne
let number2;

// ; permet d'arrêter une instruction

let formation; // let oblige à déclarer les variables en début de script avant de les utiliser ce qui n'est pas le cas de var qui peut être déclaré bien après l'utilisation de la variable

// Assignation d'une valeur

formation = "Javascript"; // = c'est l'assignation d'une valeur

// Types de valeurs

// a- string = chaines de caractères
let string = "Je suis un string malgré le 6855";
let string2 = "Je suis un string2 malgré le 6855";
let string3 = `Aujourd'hui on commence ${formation}`; //récupération de la variable formation dans un autre string

// b- number = nombres
let numberBis = 54647; // entier = integer = int
let numberTrois = 3.5; // décimal = float

/* variable = classique
   maVariable = camelCase
   MaVariable = PascalCase
   ma-variable = kebab-case
   ma_variable = snake_case
*/

console.log(string3);

// c- boolean = booléen

let vrai = true;
let faux = false;
// idéal pour faire des conditions !

// d- objects = objets

let chest = {
	1: "voiture",
	2: "moto",
	nom: "Olivier",
};

// e- array = tableaux
let array = ["Lundi", 6876, true, { chest }];

console.log(array);

// Vérifier le type de mes valeurs
console.log(typeof chest);

chest = "n'est plus un objet"; // on ré-affecte une autre valeur à la variable "chest"
// console.log(`${chest}: ${typeof chest}`);
console.log(chest, typeof chest);

//console.log(typeof chest);

// CONSTANTE
const TVA = 20; // Permet d'assigner une valeur fixe qui ne sera jamais modifiable

// BOITE DE DIALOGUE
//alert("Je viens vous dire bonjour !"); // Boite de dialogue

let resultat = window.prompt(
	"Est-ce que vous pensez que vous allez kiffer le JS ? Oui ou non",
);

console.log(resultat);

document.write(`<h1>La réponse de l'utilisateur: ${resultat}</h1>`);

// NUMBER => STRING
console.log(typeof numberBis.toString()); // 54647 => "54647";

// STRING => NUMBER
let stringConvert = "123";
let stringConvert2 = parseInt(stringConvert);
console.log(typeof stringConvert2);

let stringConvert3 = "12.5";
let stringConvert4 = parseFloat(stringConvert3);
console.log(typeof stringConvert4);

// EXEMPLES
let i = 500;
let x = 100;

let result = i + x;
console.log(result);

let i_bis = i.toString();
let x_bis = x.toString();
let result2 = i_bis + x_bis;
console.log(result2);
