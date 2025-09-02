function plats(plat) {
    let newtexte = document.getElementById("message")
    if(plat == "pizza") {
        newtexte.innerText = "la pizza tyèyrgtègyhèuhg"
    }
    else if(plat == "pasta"){
        newtexte.innerText = "la pasta"
    }
    else if(plat == "salad"){
        newtexte.innerText = "la salad"
    }

        else if(plat == "sushi"){
        newtexte.innerText = "les sushi"
    }
}











function txt(plat) {
    switch (plat) {
        case 'pizza' : 
            document.querySelector("#message").textContent = "Mmmmh... La pizza (sans ananas) c'est top !";
            break;
        case 'pates' :
            document.querySelector("#message").textContent = "Mmmmh... Les Pates c'est top !";
            break;
        case 'cesar' : 
            document.querySelector("#message").textContent = "CESAAAAAAAAAR !!!";
            break;
        case 'japan' : 
            document.querySelector("#message").textContent = "おいしい !!!";
            break;
        default : 
            document.querySelector("#message").textContent = "Que dalle";
            break;
    }
}

//========================== SWITCH ==========================

// switch (paramètre) { 
//  case 'élément à évaluer' : }
        // Instruction
        // break; (fin d'execution)
//  default (équivalent else) :
//      Instruction
        // break; (fin d'execution)
