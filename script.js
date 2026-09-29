

async function funciona()
{
    let url = "https://localhost:7082/WeatherForecast";

    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    console.log(datos);
    const parrafo = document.querySelector(".Clase");
    parrafo.textContent = datos[0].temperatureC;
}

funciona();

