// Definiciones y capturas asi lee al iniciar todo lo que va a usar en el orden correcto //
let legajos = [];
let capturaForm = document.querySelector("#legajo");
let enviar = document.querySelector("#enviar");
let boton1 = document.querySelector("#candidato1");
let boton2 = document.querySelector("#candidato2");
let boton3 = document.querySelector("#candidato3");
let cierre = document.querySelector("#cierre");
let resultados = document.querySelector("#resultados");

// array de objetos a ser actualizados en forEach //
let candidatos = [
  {
    candidato: 1,
    votos: 0,
    boton: boton1
  },

  {
    candidato: 2,
    votos: 0,
    boton: boton2
  },

  {
    candidato: 3,
    votos: 0,
    boton: boton3
  }
];

// cada objeto del array es recorrido por la funcion del forEach con sus propiedades como parametros (candidato) // 
// y su botón correspondiente //
candidatos.forEach(function(candidato, i) {
candidato.boton.addEventListener("click", function(e) {
  e.preventDefault();
    candidatos[i].votos++;
    boton1.disabled = true;
    boton2.disabled = true;
    boton3.disabled = true;
    recuento();
  });
});

function recuento() {
  for(i = 0; i < candidatos.length; i++) {
    console.log(`candidato: ${candidatos[i].candidato}, votos: ${candidatos[i].votos}`);
  };
}

// Ingreso de datos y validaciones //
enviar.addEventListener("click", function(e) {
  e.preventDefault();
  boton1.disabled = false;
  boton2.disabled = false;
  boton3.disabled = false;

  let numLegajo = Number(document.querySelector("#legajo").value);
  if(numLegajo == "" || isNaN(numLegajo)) {
    alert("por favor ingrese un número válido");
    return;
  }

  verificarPadron(numLegajo);
  legajos.push(numLegajo);
  document.querySelector("#legajo").value = "";
  console.log(legajos);
});

// funciones para validar y vaciar //
function verificarPadron(numLegajo) {
  let yaVoto = false;
  for(let i = 0; i < legajos.length; i++) {
      if(numLegajo == legajos[i]) {
        yaVoto = true;
      }
    }

    if(yaVoto) {
      alert("ud ya ha votado");
    }
  };

// Calcular y mostrar resultados //
cierre.addEventListener("click", function(e) {
  e.preventDefault();
  calcular();
});

function calcular() {
  let ganador = candidatos[0];
  let totalVotos = 0;

  for(let i = 0; i < candidatos.length; i++) {
    if(candidatos[i].votos > ganador.votos) {
      ganador = candidatos[i];
    }
    totalVotos += candidatos[i].votos;
  };


let porcentaje = (ganador.votos* 100) / totalVotos;

resultados.innerText += 
`El candidato ganador es: ${ganador.candidato}, con ${ganador.votos} votos
con un ${porcentaje}% de votos a favor.
${totalVotos} personas votaron en este comicio`

  console.log(resultados.innerText);
};