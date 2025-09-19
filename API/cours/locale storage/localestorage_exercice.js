// =========================== OTHER VER. ===========================

// TABLEAU DE PHRASES  

const phrases = [
    { id: 0, text: "C'est une belle journée." },
    { id: 1, text: "J'aime apprendre de nouvelles choses." },
    { id: 2, text: "Le café est délicieux." },
    { id: 3, text: "Il fait beau aujourd'hui." },
    { id: 4, text: "Apprendre en groupe c'est fun !" },
];


let sentenceList = document.querySelector("#sentences-list")

let prhraseLoco = JSON.parse(localStorage.getItem("sentence"))
if(prhraseLoco.length == 0 || prhraseLoco == undefined){
    localStorage.setItem("sentence", JSON.stringify(phrases));
    prhraseLoco = phrases
}
console.log(prhraseLoco);
// BOUCLE POUR AFFICHER CHAQUE PHRASES AVEC BOUTON SUPPRIMER
function sen(){
sentenceList.innerHTML = "";
    for (const phrase of prhraseLoco ) {
    sentenceList.innerHTML += `<div id="${phrase.id}" style="padding: 1.5em; border : 1px grey solid; margin-bottom: 0.5em;"><h2>${phrase.text}</h2><button onclick="delElement(${phrase.id})" type="button" style="color: red;">Supprimer</button></div>`;
}
}

// FONCTION / FUNCTION SUPPRIMANT LA DIV PARENT AU BOUTON 
function delElement(num) {
    console.log(num);
    for(let i = 0; i < prhraseLoco.length; i++){
           console.log(i);
        if(prhraseLoco[i].id == num){
            prhraseLoco.splice(i,1)
            break
        } 
    }
    console.log(prhraseLoco.length);
    

    localStorage.setItem("sentence", JSON.stringify(prhraseLoco));
     sen()
              if(prhraseLoco.length == 0){
        sentenceList.innerHTML = "<p>y'a plus de phrases</p>";
    }
    // let dlt = document.getElementById(`${num}`)
    // console.log(dlt);
    // dlt.splice()
}
sen()