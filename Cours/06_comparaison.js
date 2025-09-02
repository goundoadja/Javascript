let nb1 = 123;
let nb2 = "123";

// Égale à
console.log(nb1 == nb2); // TRUE => comparaison des valeurs contenues dans les variables
console.log(nb1 === nb2); // FALSE => comparaison des valeurs ET des types de variables

/* l'opérateur de comparaisons === signifie "strictement égal à"
    si l'une des variables n'est pas égale en valeur ou en type alors la condition est retournée false
*/

// Différent de
console.log(nb1 != nb2); // FALSE => car les deux variables ont les mêmes valeurs donc elles ne sont pas différents
console.log(nb1 !== nb2); // VRAI => car les deux variables sont égales en valeurs mais différentes par le type donc renvoie true
