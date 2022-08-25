function onClick (event) {
    event.preventDefault();
    this.style.backgroundColor = "black";
    console.log("click...");
    console.log(event);
  
  
    const mensaje = {
      comercio: document.getElementById('comercio').value,
      titular: document.getElementById('titular').value,
      celular: document.getElementById('celular').value,
      message: document.getElementById('message').value
    }
    console.log(mensaje);
  
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => { 
          console.log(json);
          Swal.fire(
              'Enviado',
              'Gracias por tu comentario',
              'success'
          );
          cleanForm();
          /* redirectUrl(); */
      })
      .catch((err) => console.log(err));
  
  }
  
  function cleanForm() {
      let formulario = document.getElementById('formulario');    
      formulario.reset();    
  }
  function redirectUrl(){
      window.location.href = "https://google.com";    
  }
  
  let boton = document.getElementById("enviar");
  boton.addEventListener("click", onClick);

  async function consultarAPIClima() {

     try {

     const lat =-24.183133853538152;//'-24.1852569';
     const lon =-65.33130863194877;//'-65.2994789';
     const apiKey='cde7752e19e499353694a0182f226be2';
     //const url= `api.openweathermap.org/data/2.5/weather?q=Jujuy,AR&appid=${apiKey}`;
     const url= `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=c7eb81a7e5dabe1d37507274a340061b`;
     console.log(url);
      fetch(url).then(response =>response.json())
      .then(data=> setWeatherData(data))
     const response =await response.json();
     console.log(response);
        
     } catch (error) {
        
      }
  }

  const setWeatherData = data =>{
    console.log(data);
    const weatherData = {
        location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp,
        date: getDate(),
        }
        Object.keys(weatherData).forEach (key => {
            document.getElementById(key).textContent = weatherData [key];
        });
  }

    const getDate = () => {
        let date = new Date(); 
         return `${date.getDate()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;}
      


/* Async - Await */
/*
async function getIp() {
try {
let response = await fetch("https://api.ipify.org/?format=json");
let ipResponse = await response.json();
console.log(ipResponse);
let responseLocation = await fetch("http://ip-api.com/json/" + ipResponse.ip);
let locationResponse = await responseLocation.json();
console.log(locationResponse);
} catch {
console.log("Algo paso, no se pudo resolver...");
}
}
getIp();
async function getWt() {
try {
let response = await
fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&lat=35&lon=1
39&appid=c7eb81a7e5dabe1d37507274a340061b");
let WeatherResponse = await response.json();
console.log(WeatherResponse);
} catch {
console.log("Algo paso, no se pudo resolver...");
}
}
getWt(); */
/*fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&lat=-24.183133853538152&lon=-65.33130863194877&appid=c7eb81a7e5dabe1d37507274a340061b")
.then(response => response.json())
.then(json => setdata(json))
const setdata = json => {
console.log(json)
const weatherdata = {
location: json.name,
description: json.weather[0].main,
humidity: json.main.humidity,
pressure: json.main.pressure,
temperature: json.main.temp,
date: getDate(),
}
Object.keys(weatherdata).forEach(key => {document.getElementById(key).textContent = weatherdata[key];});}
const getDate = () => {let date = new Date();  return `${date.getDate()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;}
  }*/