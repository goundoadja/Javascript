let images = ["js/img/bcg-0.jpg","js/img/bcg-1.jpg","js/img/bcg-2.jpg","js/img/bcg-3.jpg","js/img/bcg-4.jpg","js/img/bcg-5.jpg"];
let numero = 0;

function suivant(sens){
    numero = numero + sens;
    if (numero < 0) { 
     numero = images.length - 1;
    } 
    if (numero > images.length -1) {
        numero = 0;
      
    }

  document.querySelector(".images").style.background = `url(${images[numero]}) center/cover no-repeat`;
  console.log(images[numero]); }