let temps = document.getElementById("temp");
let feels = document.getElementById("feels");
let humidity= document.getElementById("humidity");
let wind = document.getElementById("wind");
 
 
 
function meteo (city){
let CLE_API = '9d14fab5293af26cf8dc10b7ff26e891';
const API =
`https://api.themoviedb.org/3/trending/movie/week?api_key=682e092936d2a61a00df86a83d88f574`
 
    fetch(API)
        .then((response)=>{
           
            return response.json();
        }).then((response)=>{
            console.log(response);
            temps.innerHTML= `${ response.main.temp} degrés`;
            feels.innerHTML=  response.main.feels_like;
            humidity.innerHTML=  response.main.temp_min;
            wind.innerHTML=  response.wind.speed;   
           
     })



}
 
meteo("gonesse");


// 


// const APIKEY = "9d14fab5293af26cf8dc10b7ff26e891";

// let city;
// let input = document.querySelector("#city");

// input.addEventListener("input", function (e) {
// 	city = e.target.value;
// 	console.log(city);
// 	console.log(e);
// 	weather();
// });

// const weather = () => {
// 	const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;

// 	fetch(URL)
// 		.then((response) => response.json())
// 		.then((data) => {
// 			console.log(data);
// 			document.querySelector("#temp").innerHTML = `${data.main.temp} °`;
// 			document.querySelector("#feels").innerHTML = `${data.main.feels_like} °`;
// 			document.querySelector("#humidity").innerHTML = `${data.main.humidity} %`;
// 			document.querySelector("#wind").innerHTML = `${data.wind.speed} km/h`;
// 		})
// 		.catch((err) => {
// 			console.log(`Échec de récupération: ${err}`);
// 		});
// };
