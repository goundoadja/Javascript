const produits = [
    { product: "Ordinateur", price: 1000, category: "Electronique" },
    { product: "Téléphone", price: 600, category: "Electronique" },
    { product: "T-shirt", price: 20, category: "Vêtements" },
    { product: "Jeans", price: 40, category: "Vêtements" },
    { product: "Pantalon", price: 50, category: "Vêtements" },
];
console.log(produits);

function leila(){
    document.querySelector('#list').innerHTML = ''
    for(const produit of produits){
       document.querySelector('#list').innerHTML += `
        <ul>
            <li> ${produit.product} ${produit.price} ${produit.category}</li>

        </ul>
        `
    };
};

function leila2(category) {
    document.querySelector('#list').innerHTML = ''
    for(const produit of produits){
        if(produit.category == category){
            document.querySelector('#list').innerHTML += `
        <ul>
            <li> ${produit.product} ${produit.price} ${produit.category}</li>

        </ul>
        `
        };
    };
};