let Prenom = ["Issa", "Maël", "Goundo", "Saliha", "Ryan", "Ahmed", "Dylan", "Leila", "Ludovic", "Yassine (Joker)"];

function uchoice() {
    let marre = window.prompt("Veuillez entrer le nombre");
    marre = parseInt(marre);
    tirage(marre)
}

function tirage(marre) {

    let list = []
    
    while (0 < marre) {
        let pull = Math.floor(Math.random() * Prenom.length);
        
        if (list.includes(pull)) {
        document.querySelector("p").textContent += `${Prenom[pull]} a déjà ete selectionné ! `;

        }


        else {

        list.push(pull);
        --marre; 
        document.querySelector("h2").textContent += `${Prenom[pull]} `;


        }

        
        

        console.log (list)
        

    
        
        console.log(`${Prenom[pull]}`);
        
    }
    
    // document.querySelector("h2").textContent = `${Prenom[pull]}`;
}