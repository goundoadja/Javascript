// # Phrases
 
// 1ÈRE PARTIE
// Dans votre script vous devrez mettre en place une série de phrases dans un tableau d'objets. Chaque phrase aura son id de type number; c'est à dire que chaque phrase sera numérotée.
 
// <code>
// const phrases = [
//     { id: 0, text: "C'est une belle journée." },
//     { id: 1, text: "J'aime apprendre de nouvelles choses." },
//     { id: 2, text: "Le café est délicieux." },
//     { id: 3, text: "Il fait beau aujourd'hui." },
//     { id: 4, text: "Apprendre en groupe c'est fun !" },
// ];
// </code>
 
// Suite à cette création de tableau, faites en sortes d'afficher ces phrases sur la page web en créant une div qui aura pour class "sentence-item". Cette div contiendra les paragraphes qui afficheront les phrases.
// De plus il faudra également un également qui indiquera que cette phrase est supprimable. Soit le mot "Supprimer" soit une croix "X".
// Cet élément aura pour class "remove-button"
 
// 2ÈME PARTIE
// Une fois la première étape faite, tenter de créer une fonction qui supprime une phrase quand on clique sur l'élément de suppression créé précédemment.
// Attention il faut supprimer la phrase grâce à son id 👍

const phrases = [
    { id: 0, text: "C'est une belle journée." },
    { id: 1, text: "J'aime apprendre de nouvelles choses." },
    { id: 2, text: "Le café est délicieux." },
    { id: 3, text: "Il fait beau aujourd'hui." },
    { id: 4, text: "Apprendre en groupe c'est fun !" },
];

let parent = document.getElementById("sentences-list");
for(let phrase of phrases){
    let div = document.createElement("div");
    div.setAttribute("id", phrase.id);
    div.setAttribute("class", "conteneur")
    let p = document.createElement("p");
    p.innerText = phrase.text;
    div.appendChild(p);
    let span = document.createElement("span");
    span.setAttribute("class", "remove-button")
    span.setAttribute("onclick", `remove(${phrase.id})`)
    span.innerText = "Supprimer";
    div.appendChild(span);
    parent.appendChild(div)
    // parent.innerHTML += `
    //                 <div id="${phrase.id}" class="conteneur">
    //                     <p>${phrase.text}</p>
    //                     <span class="remove-button" onclick="remove(${phrase.id})">Supprimer</span>
    //                 </div>
    //                 `
}

function remove(id){
    document.getElementById(id).remove()
}



// Le script s'éxécute au chargement complet du DOM
document.addEventListener("DOMContentLoaded", () => {
	// Tableau d'objets avec les phrases
	const phrases = [
		{ id: 0, text: "C'est une belle journée." },
		{ id: 1, text: "J'aime apprendre de nouvelles choses." },
		{ id: 2, text: "Le café est délicieux." },
		{ id: 3, text: "Il fait beau aujourd'hui." },
		{ id: 4, text: "Apprendre en groupe c'est fun !" },
	];

	const phraseList = document.getElementById("sentences-list");

	// Fonction pour afficher les phrases
	function displaySentences() {
		phraseList.innerHTML = ""; // Remise à zéro du contenu actuel, on évite les conflits avec le contenu précédent

		for (let i = 0; i < phrases.length; ++i) {
			console.log(i);

			const div = document.createElement("div");
			div.classList.add("sentence-item");
			div.innerHTML = `
                <p>${phrases[i].text}</p>
                <span class="remove-button">Supprimer</span>
            `;
			phraseList.appendChild(div);

			// Ajoute l'événement de suppression au bouton
			div
				.querySelector(".remove-button")
				.addEventListener("click", function () {
					removePhrase(i);
					console.log(i);
				});
		}

		// Méthode map()
		// phrases.map((phrase, id) => {
		// 	const div = document.createElement("div");
		// 	div.classList.add("sentence-item");
		// 	div.innerHTML = `
		//         <p>${phrase.text}</p>
		//         <span class="remove-button">Supprimer</span>
		//     `;
		// 	phraseList.appendChild(div);

		// 	// Ajoute l'événement de suppression au bouton
		// 	div.querySelector(".remove-button").addEventListener("click", () => {
		// 		removePhrase(id);
		// 	});
		// });
	}

	// Fonction pour supprimer une phrase
	function removePhrase(id) {
		phrases.splice(id, 1); // Supprime la phrase du tableau
		displaySentences(); // Réaffiche les phrases après suppression d'une phrase
	}

	// Affiche les phrases initialement
	displaySentences();
});
