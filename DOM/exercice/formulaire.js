// # Valider un formulaire
 
// Nous avons déjà vu comment récupérer des valeurs d'un champs de texte, comment ne pas laisser un champs vide mais comment
// réellement vérifier de manière concrète un formulaire à la soumission ?
 
// Ici il va falloir faire en sorte de créer un formulaire dans le html afin de permettre à l'utilisateur de faire ses informations (nom, âge et mot de passe).
 
// Vous aurez également besoin de 2 div pour gérer les messages d'erreurs. Les messages d'erreurs seront affichés en rouge, le message de formulaire envoyé
// avec succès sera quant à lui en vert.
 
// - Le nom ne doit être en aucun cas laissé vide
// - Il faut limiter l'âge de l'utilisateur (libre choix des limite)
// - Le format du mot de passe devra être vérifié également.
 
function getId(id){
    return document.getElementById(id);
}
 
let form = document.querySelector("#form")
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e);
    let pseudo = getId("pseudo").value;
    let age = getId("age").value;
    let pswd = getId("pswd").value;
    let error = getId("error");
    if(parseInt(age) < 13 || parseInt(age) > 30){
        error.innerText = "Age pas bon mec";
        error.style.display = "block";
        return;
    }
   
    const re = /[A-Z]/; //(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W]).*
    if(!re.test(pswd)){
        error.innerText = "Il manque une maj bro";
        error.style.display = "block";
        return;
    }
    const re1 = /[a-z]/;
    if(!re1.test(pswd)){
        error.innerText = "Il manque une minuscule bro";
        error.style.display = "block";
        return;
    }
    const re2 = /[0-9]/;
    if(!re2.test(pswd)){
        error.innerText = "Il manque un chiffre bro";
        error.style.display = "block";
        return;
    }
    const re3 = /\W/;
    if(!re3.test(pswd)){
        error.innerText = "Il manque un charactère spécial bro";
        error.style.display = "block";
        return;
    }
    error.style.display = "none";
    getId("gg").style.display = "block";
})

//



// <!DOCTYPE html>
// <html lang="fr">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Validation d'un formulaire</title>
// </head>
// <body>
 
//     <script>
//         const form = document.getElementById("form");
 
//         form.addEventListener("submit", function (event) {
//             event.preventDefault();
 
//             // Réinitialisation des messages
//             document.getElementById("errorMsg").innerHTML = "";
//             document.getElementById("successMsg").innerHTML = "";
 
//             // Récupération des valeurs du formulaire
//             let nom = document.querySelector("#name").value;
//             let age = document.querySelector("#age").value;
//             let motDePasse = document.querySelector("#password").value;
 
//             // Validation du nom
//             if (nom.trim() === "") {
//                 document.querySelector("#errorMsg").innerHTML =
//                     "Le nom ne doit pas être vide.";
//                 return false;
//             }
 
//             // Validation de l'âge
//             age = parseInt(age); // Convertir la chaîne en nombre entier
//             if (isNaN(age) || age < 18 || age > 120) {
//                 document.querySelector("#errorMsg").innerHTML =
//                     "L'âge doit être un nombre entre 18 et 120.";
//                 return false;
//             }
 
//             // Validation du mot de passe avec Regex
//             /**
//              * Regex (Expression régulière) :
//              * Un Regex est un modèle qui décrit une chaîne de caractères.
//              * Il est souvent utilisé pour valider des formats spécifiques comme les adresses email, les numéros de téléphone, ou les mots de passe.
//              * Ici, nous utilisons un regex pour vérifier que le mot de passe contient au moins 8 caractères, une majuscule, une minuscule, un chiffre, et un caractère spécial.
//              * Pour plus d'informations sur les regex : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Regular_Expressions
//              */
//             const motDePasseRegex =
//                 /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//             if (!motDePasseRegex.test(motDePasse)) {
//                 document.getElementById("errorMsg").innerHTML =
//                     "Le mot de passe doit contenir au moins 8 caractères, avec une majuscule, une minuscule, un chiffre, et un caractère spécial.";
//                 return false;
//             }
 
//             // Si tout est valide
//             document.getElementById("successMsg").innerHTML =
//                 "Formulaire validé avec succès !";
//             return true;
//         });
 
//     </script>
 
//     <h1>Formulaire d'inscription</h1>
//     <form id="form">
//         <label for="nom">Nom :</label>
//         <input type="text" id="name"><br><br>
 
//         <label for="age">Âge :</label>
//         <input type="number" id="age"><br><br>
 
//         <label for="password">Mot de passe :</label>
//         <input type="password" id="password"><br><br>
 
//         <button type="submit">S'inscrire</button>
//     </form>
 
//     <!-- Afficher le message d'erreur -->
//     <div id="errorMsg" style="color: red;"></div>
//     <!-- Afficher le message d'envoi avec succès -->
//     <div id="successMsg" style="color: green;"></div>
 
//     <script src="js/form.js"></script>
// </body>
// </html>