// let i = window.prompt(
// 	"Veuillez d'abord saisir des chiffres",
// );


// for (let i = 1; i <= 10; ++i) {
// 	document.write(`<h1>Nous avons le nombre ${i}</h1>`);
// }

// for (let i = 1; i <= prompt; ++i) {
// 	document.write(`<h1>Nous avons le nombre ${i}</h1>`);

// }

let y = prompt ("Veuillez mettre votre nombre") 

for (let i = 1; i <= y; ++i) {
    document.write(`<h1>Nous avons le nombre ${i}</h1>`);

 

}



let l = window.prompt("Veuillez entrer à quel tour de manège on commence :");
if (isNaN(l)) {
    location.reload()
} else {
    let uinput = window.prompt("Veuillez entrer le nombre de tours désiré :");
    if (isNaN(uinput)) {
    location.reload();
    } else if (uinput < 0) {
        alert("Valeur invalide");
        location.reload();
    } else {
        l = parseInt(l);
        uinput = parseInt(uinput);
        uinput = uinput + l;

        while (l <= uinput) {
            document.write(`<h2>C'est le tour de manège n°${l}</h2>`);
            ++l;
        } 
    }
}

