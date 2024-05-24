const apikey='d5b38686da4b1a11d24b2b901e6ada24';
const apiurl='https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=';

const searchBox=document.getElementById('cityInput');
const searchBtn=document.querySelector('.searchBtn');
const weatherIcon=document.getElementById('weather-icon')

 async function generateWeather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);

    if(response.status==404){
        document.querySelector('.weather').style.display="none";
    document.querySelector('.error').style.display="block";
    searchBox.addEventListener("focus",()=>{
        document.querySelector('.error').style.display="none";
        searchBox.value=" ";
    })
    }
    else{
        var data= await response.json();
        console.log(data)
    
        document.getElementById("temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.getElementById("city").innerHTML=data.name;
        document.getElementById("humid").innerHTML=data.main.humidity+"%";
        document.getElementById("wind").innerHTML=data.wind.speed+"Km/h";
    
        if(data.weather[0].main==="Clouds"){
            weatherIcon.src="img/clouds.png"
        }
        else if(data.weather[0].main==="Clear"){
            weatherIcon.src="img/clear.png"
        }
        else if(data.weather[0].main==="Rain"){
            weatherIcon.src="img/rain.png"
        }
        else if(data.weather[0].main==="Drizzle"){
            weatherIcon.src="img/drizzle.png"
        }
        else if(data.weather[0].main==="Mist"){
            weatherIcon.src="img/Mist.png"
        }
        else if(data.weather[0].main==="Haze"){
            weatherIcon.src="img/Haze.png"
        }
        
        document.querySelector('.weather').style.display="block";
    
    }
    }
    

searchBtn.addEventListener("click",()=>{
    generateWeather(searchBox.value);
})


