// Opérateurs arythmétiques

// déclaration de variables
let nb1, nb2, result;

// affection de valeurs
nb1 = 10;
nb2 = 5;

// Addition
result = nb1 + nb2;
console.log(result); // 15

// Soustraction
result = nb1 - nb2;
console.log(result); // 5

// Multiplication
result = nb1 * nb2;
console.log(result); // 50

// Division
result = nb1 / nb2;
console.log(result); // 2

// Modulo
result = nb1 % nb2;
console.log(result);

console.log(
	`Le reste de la division de ${nb1} par ${nb2} est égal à ${result}`,
);

// Écriture simplifiée
let nb3 = 20;
// nb3 = nb3 + 5;
console.log(nb3);
console.log((nb3 += 5));
console.log((nb3 *= 5));
