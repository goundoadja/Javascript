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
