const myCar = {};
// const myCar = new Object(); syntaxe longue et ancienne.

// Création de propriétés dans l'objet.
myCar.brand = "Alfa Roméo";
myCar.buyDate = new Date("2013-06-20");
// myCar.passengers = new Array(); syntaxe longue et ancienne
myCar.passengers = [];
myCar.passengers[0] = "Nicolas";
myCar.passengers[1] = "Charlotte";
myCar.year = 2012;

console.log(myCar.passengers);

/*
 * Les lignes de code ci-dessus peuvent également être écrites comme ceci :
 *
 * myCar =
 * {
 *     brand      : 'Alfa Roméo',
 *     buyDate    : new Date('2013-06-20'),
 *     passengers : [ 'Nicolas', 'Charlo
 tte' ],
 *     year       : 2012
 * };
 */

// Affichage du contenu de l'objet directement dans la page HTML.
document.write(`<strong>Informations sur la voiture :</strong>
				<ul>
					<li>Marque : ${myCar.brand}</li>
					<li>Année de fabrication : ${myCar.year}</li>
					<li>Date de l'achat : ${myCar.buyDate.toLocaleDateString()}</li>
					<li>Passager 1 : ${myCar.passengers[0]}</li>
					<li>Passager 2 : ${myCar.passengers[1]}</li>
				</ul>
`);

/*
 * Utilisation de la méthode toDateString() des objets de la classe Date
 * afin d'obtenir une chaîne de caractères avec une date lisible.
 */

// myCar est un objet qui contient une propriété buyDate qui est un objet de la classe Date.

// myCar est un objet qui contient une propriété passengers qui est un tableau.