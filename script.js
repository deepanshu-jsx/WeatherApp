'use strict'

const apiKey ="25c46e495ed504b72cdb6e382531d7cb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector('.search  input');
const searchBtn = document.querySelector('.btn');
const searchsub = document.querySelector('.sub');
const weatherImage = document.querySelector(".weather-img");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display= "block"
        
        document.querySelector(".weather").style.display ="none"
    }

    else{
        let data = await response.json();
        document.querySelector('.City').innerHTML=data.name;
        document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°c";
        document.querySelector('.humi').innerHTML=data.main.humidity+ "%";
        document.querySelector('.wind').innerHTML=data.wind.speed + " Km/hr";

        if(data.weather[0].main == "Clouds"){
            weatherImage.src = "images/cloud.png";
            document.querySelector(".know").innerHTML = "Cloudy";
            document.querySelector(".card").style.background= "linear-gradient(#005aa7,#fffde4)";
        }
       else if ( data.weather[0].main == "Rain"){
        weatherImage.src = "images/rain (2).png";
        document.querySelector(".know").innerHTML ="Rainy";
        document.querySelector(".card").style.background= "linear-gradient(#aa4b6b,#6b6b83,#3b8d99 )";
       }
       else if (data.weather[0].main == "Clear" ){
        weatherImage.src="images/lil.png";
        document.querySelector(".know").innerHTML ="Clear";
         document.querySelector(".card").style.background="linear-gradient(#a1c4fd,#c2e9fb)"
       }
       else if (data.weather[0].main=="Sunny"){
        weatherImage.src = "images/sunny.png";
        document.querySelector(".know").innerHTML="Sunny"
       }
       else if ( data .weather[0].main == "Haze"){
        weatherImage.src= "images/mist.png";
        document.querySelector(".know").innerHTML="Haze"
        document.querySelector(".card").style.background="linear-gradient(#c9d6ff,#e2e2e2)";
       }
       else if (data.weather[0].main=="Fog"){
        weatherImage.src ="images/foggy.png"
        document.querySelector(".know").innerHTML="Fog"
        document.querySelector(".card").style.background="linear-gradient(#e0eafc,#cfdef3 )";
       }
       document.querySelector(".weather").style.display= "block"
       document.querySelector(".error").style.display ="none"
    }
   
}


searchsub.addEventListener('submit',()=>{
    event.preventDefault()
    checkWeather(searchBox.value)
})


