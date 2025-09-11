// ---- 1. Événement de clic -----
let clickBtn = document.querySelector("#clickBtn")
let output = document.querySelector("#output")

clickBtn.addEventListener("click", function () {
    output.innerHTML = "Voilà le bouton a été cliqué";
});
 
// ---- 2. Événement de survol (mouse over) -----
 let hoverBtn = document.querySelector("#hoverBtn")

 hoverBtn.addEventListener("mouseover", function () {
    output.innerHTML = "Voilà le bouton a été survolé";
});
 
// ---- 3. Événement de focus (focus) -----
 let focusBtn = document.querySelector("#focusBtn")

 focusBtn.addEventListener("focus", function () {
    output.innerHTML = "Voilà le bouton a été focus";
});
 
// ---- 4. Événement d'entrée de texte (input) -----
 let inputField = document.querySelector("#inputField")

 inputField.addEventListener("input", function () {
    output.innerHTML = `input utilisé avec succès: ${inputField.value}`;
 })
 
 
// ---- 5. Événement au clavier (keydown) -----
// inputField.addEventListener("keydown", function () {
//     output.innerHTML = `Touche pressé`;
// })
 
// Ajout d'un événement au clavier sur le document entier
document.addEventListener("keydown", function (ArrowDown) {
    output.innerHTML = `Touche pressé ${ArrowDown.code}`;
    console.log(ArrowDown);

    if (ArrowDown.code == "ArrowDown") {
        alert("On va au parc...")
    } 
})
 
// ---- 6. Supprimer un gestionnaire d'événement -----

 
// Ajout d'un gestionnaire d'événement
 function handleClick() {
    output.innerHTML = `Ryan a dit qu'il irait au parc Asterix!!!`
}
 
 clickBtn.addEventListener("click", handleClick)
 
// Suppression du gestionnaire d'événement après un certain temps
setTimeout(function () {
    clickBtn.removeEventListener("click", handleClick)
    output.innerHTML = `Ryan nous a fait une feinte !!!!`
}, 5000) 
 
 
// ---- 7. Événement au chargement de la page -----
/* Cet événement se déclenche après le chargement complet de la page, y compris toutes les ressources
    externes comme les images, les styles CSS et les scripts.
*/
window.addEventListener("load", function () {
    output.innerHTML = `La page est complètement chargée`
})
 
 
 
 
// ---- 8. Événement au chargement du DOM -----
 
/* Cet événement se déclenche lorsque le DOM (Document Object Model) est complètement chargé et analysé,
    c'est-à-dire que tous les éléments HTML sont accessibles et peuvent être manipulés par JavaScript.
*/
window.addEventListener("DOMContentLoaded", function () {
    output.innerHTML = `Le DOM est complètement chargé et analysé`
})