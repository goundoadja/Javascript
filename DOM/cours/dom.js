/*
ATTENTION À L'ENDROIT À ON LINK LE JS
si c'est dans le head il faut attendre que le DOM soit chargé avant de lancer le script js
 
*/
 
document.addEventListener("DOMContentLoaded", function () {
    // 1-SÉLECTION DES ÉLÉMENTS DANS LE DOM
 
    let title = document.getElementById("title");
    console.log(title);
 
    let rice = document.querySelector("ul > li:nth-of-type(3)");
    console.log(rice);
 
    let li = document.querySelectorAll("li");
    console.log(li);
 
    console.log(li[2]);
 
    // 2- MANIPULATION DU CONTENU HTML ET TEXTUEL
 
    let div = document.querySelector("div");
    console.log(div);
 
    //Modification du contenu HTML avec prise de compte des balises HTML
    //div.innerHTML = "<p>Hey guys!</p>";
 
    //Modification du contenu HTML sans prise de compte des balises HTML
    //div.innerText = "Whats up ?";
 
    // propriété textContent plus utilisé pour faire des conditions
    if (div.textContent === "Hello") {
        alert("C'est pas ok");
    }
 
    // 3- MODIFICATION DE STYLES CSS
 
    function addStyle() {
        // appel de la class existante dans le css
        rice.classList.add("modif");
    }
 
    addStyle();
 
    function removeStyle() {
        // appel de la class existante dans le css
        rice.classList.remove("modif");
    }
 
    removeStyle();
 
    // 4- AFFICHER ET MASQUER DES ÉLÉMENTS
 
    let btn = document.querySelector("button");
    function disappear() {
        if (div.style.display == "none") {
            div.style.display = "";
        } else if (div.style.display == "") {
            div.style.display = "none";
        }
    }
    // addEventListener() => ajouter un évènement sur écoute
    btn.addEventListener("click", disappear);
 
    // 5- AJOUTER ET SUPPRIMER DES ÉLÉMENTS
 
    // a) Ajouter
    let btnAdd = document.querySelector("#add");
    let btnDel = document.querySelector("#delete");
 
    function addElement() {
        let newEl = document.createElement("p");
        newEl.innerHTML = "C'est comment pour le parc Astérix ?";
        console.log(newEl);
        let bodyPart = document.querySelector("body");
        bodyPart.appendChild(newEl);
    }
 
    btnAdd.addEventListener("click", addElement);
 
    // b) Supprimer
    function delElement() {
        rice.remove();
    }
 
    btnDel.addEventListener("click", delElement);
 
    function imageSet() {
        let img = document.querySelector("img");
        img.setAttribute(
            "src",
            "https://www.parcasterix.fr/sites/default/files/styles/hero_special_event_perso/public/2024-08/logo-mascottes-12x_0.png.webp?itok=-dczl6lt",
        );
        img.setAttribute(
            "alt",
            "Astérix et Obélix qui incitent Ryan à aller au parc avec les garçons !",
        );
 
        // img.src = "";
        // img.alt = "";
    }
 
    imageSet();
});
 
// function leila() {
//     console.log("réveille toi !!!!");
 
// }
 
// // leila();
// // leila();
 
// document.querySelector("button").addEventListener("click", leila);
// document.querySelector("button").addEventListener("click", function () {
//      console.log("réveille toi !!!!");
 
// });


