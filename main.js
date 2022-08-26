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

     const lat =-24.183133853538152;
     const lon =-65.33130863194877;
     const apiKey='cde7752e19e499353694a0182f226be2';
     const url= `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`;
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
      
