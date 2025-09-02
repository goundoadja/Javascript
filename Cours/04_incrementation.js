// Incrémentation => ajouter 1
let nb1 = 1;
nb1 = nb1 + 1; // 2
console.log(nb1);

nb1++; // +1 soit = 3
console.log(nb1);

console.log(nb1++);
console.log(nb1);

console.log(++nb1); // préférence sur cette syntaxe pour éviter une petite surcharge au niveau du navigateur mais ça ne change rien au resultat !

// Décrémentation => retirant 1

let nb2 = 10;
nb2 = nb2 - 1; // 9
console.log(nb2);

nb2--;
console.log(nb2);

console.log(--nb2);