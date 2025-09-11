let bouton = document.querySelector("button");
console.log(bouton);

let img = document.querySelector ("img")
console.log(img);

let body = document.querySelector ("body")

function changer () {
        
if (bouton.innerText=='Allumer la lumière') {

img.src= "on.png";
body.style.background = 'gray'; 
bouton.innerHTML = 'Eteindre la lumière';

}

else if( bouton.innerText == 'Eteindre la lumière') {
    
img.src= "off.png";
body.style.background = 'yellow'; 
bouton.innerHTML = 'Allumer la lumière';  

} 
}









bouton.addEventListener("click", changer);




