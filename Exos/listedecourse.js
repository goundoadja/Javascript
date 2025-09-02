let course = []; 
console.log(Array.isArray(course));


console.log(course);
console.log(typeof list);

while(true){
    let list = prompt("entrer vos courses");
    if(list){
     course.push(list)
     console.log(course);

    let continuer = prompt('si vous voulez continuer');
    if(continuer === "non"){
        document.write(`<h1>${course}</h1>`)
        break
    }
    else if(continuer === "oui"){


    } 
    else{
        alert('veuillez repondre par oui ou non')
    }
    }else{
        alert('veuillez entre un article')
    }
    

}