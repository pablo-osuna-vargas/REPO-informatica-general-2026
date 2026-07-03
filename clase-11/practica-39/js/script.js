let atletas = [];
let form = document.querySelector("#cargar");
let mostrarInfo = document.querySelector("#mostrarInfo");
mostrarInfo.style.display = "none";
mostrarInfo.disabled = true;

let botonCargarDatos = document.querySelector("#cargarDatos");
botonCargarDatos.addEventListener("click", function(e){
  e.preventDefault();

  let ejerciciosElegidos = [];
  if(document.querySelector("#fuerza").checked) {
    ejerciciosElegidos.push(document.querySelector("#fuerza").value)
  }
  if(document.querySelector("#flexibilidad").checked) {
    ejerciciosElegidos.push(document.querySelector("#flexibilidad").value)
  }
  if(document.querySelector("#resistencia").checked) {
    ejerciciosElegidos.push(document.querySelector("#resistencia").value)
  }

  let objetoAtleta = {
    nombre: document.querySelector("#nombre").value,
    edad: Number(document.querySelector("#edad").value),
    ejercicios: ejerciciosElegidos,
    minutos: Number(document.querySelector("#minutos").value),
  }

  atletas.push(objetoAtleta);
  vaciar();
})

let botonResumen= document.querySelector("#resumen");
botonResumen.addEventListener("click", function(e){
  e.preventDefault();
  calcular();
})

let botonRecargar = document.querySelector("#recargar");
botonRecargar.addEventListener("click", function(e){
  e.preventDefault();
  location.reload();
})

function vaciar() {
  document.querySelector("#nombre").value = "";
  document.querySelector("#edad").value = "";
  document.querySelector("#fuerza").checked = false;
  document.querySelector("#flexibilidad").checked = false;
  document.querySelector("#resistencia").checked = false;
  document.querySelector("#minutos").value = "";
}

function calcular() {
  let masEntrenado = atletas[0];
  let menosEntrenados = [];

  for(let i = 0; i < atletas.length; i++) {
    if(atletas[i].minutos > masEntrenado.minutos) {
      masEntrenado = atletas[i];
      console.log(masEntrenado.nombre);
    }
    if(atletas[i].minutos < 60) {
      let menos60 = atletas[i];
      menosEntrenados.push(menos60);
      console.log(menosEntrenados[i].nombre, menosEntrenados[i].minutos);
    }

    // creo una variable con un string vacío para concatenar un item con los nombres y tiempos del array //
    let infoAtletas = "";
    for(let i = 0; i < atletas.length; i++) {
      infoAtletas += `<li>${atletas[i].nombre} entrenó durante ${atletas[i].minutos} minutos</li>`;
    }

    let porcentaje = (menosEntrenados.length * 100) / atletas.length;
    console.log(porcentaje)

    mostrarInfo.disabled = false;
    mostrarInfo.style.display = "block";
    mostrarInfo.innerHTML = "";
    mostrarInfo.innerHTML += `<ul>
      ${infoAtletas}
      <li>${masEntrenado.nombre} entrenó mas tiempo que el resto</li>
      <li>${porcentaje}% entrenaron menos de 60 minutos</li>
    </ul>`;
  }
};