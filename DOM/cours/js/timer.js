// setInterval : Exécute une fonction de manière répétée à un intervalle de temps spécifié

let intervalId;
let counter = 0;

const startIntervalButton = document.getElementById("startInterval");
const stopIntervalButton = document.getElementById("stopInterval");
const intervalCount = document.getElementById("intervalCount");

// Fonction pour démarrer l'intervalle
startIntervalButton.addEventListener("click", () => {
	// setInterval appelle la fonction chaque seconde (1000 ms)
	intervalId = setInterval(() => {
		counter++;
		intervalCount.textContent = `Compteur : ${counter}`;
	}, 1000);
});

// Fonction pour arrêter l'intervalle
stopIntervalButton.addEventListener("click", () => {
	clearInterval(intervalId); // clearInterval arrête l'exécution répétée
});

// setTimeout : Exécute une fonction une seule fois après un délai spécifié

const startTimeoutButton = document.getElementById("startTimeout");
const timeoutCount = document.getElementById("timeoutCount");

// Fonction pour démarrer le délai
startTimeoutButton.addEventListener("click", () => {
	timeoutCount.textContent = "Le délai est lancé...";

	// setTimeout exécute la fonction après 3 secondes (3000 ms)
	setTimeout(() => {
		timeoutCount.textContent = "Le délai de 3 secondes est écoulé !";
	}, 3000);
});

// requestAnimationFrame : Utilisé pour créer des animations fluides en synchronisant l'exécution avec le rafraîchissement de l'écran

const animationBox = document.getElementById("animationBox");
let animationId;
let position = 0;
let animationRunning = false;

// Fonction pour animer la boîte
function animate() {
	if (position < 300) {
		// Limite du mouvement
		position += 2; // Incrémente la position
		animationBox.style.left = `${position}px`; // Met à jour la position de la boîte
		animationId = requestAnimationFrame(animate); // Requête la prochaine image d'animation
	}
}

// Démarre l'animation
document.getElementById("startAnimation").addEventListener("click", () => {
	if (!animationRunning) {
		// Évite de lancer l'animation plusieurs fois
		animationRunning = true;
		animate();
	}
});

// Arrête l'animation
document.getElementById("stopAnimation").addEventListener("click", () => {
	cancelAnimationFrame(animationId); // Annule la prochaine image d'animation
	animationRunning = false;
});
