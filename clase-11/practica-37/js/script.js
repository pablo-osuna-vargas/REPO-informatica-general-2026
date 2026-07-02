// Definiciones y capturas //
const votos = [candidato1, candidato2, candidato3];
let legajos = [];
let capturaForm = document.querySelector("#legajo");
let enviar = document.querySelector("#enviar");
let boton1 = document.querySelector("#candidato1");
let boton2 = document.querySelector("#candidato2");
let boton3 = document.querySelector("#candidato3");
let cierre = document.querySelector("#cierre");
let resultados = document.querySelector("#resultados");

let voto1 = 0;
let voto2 = 0;
let voto3 = 0;

// Ingreso de datos y validaciones //
enviar.addEventListener("click", function(e) {
  e.preventDefault();
  boton1.disabled = false;
  boton2.disabled = false;
  boton3.disabled = false;

  let numLegajo = Number(document.querySelector("#legajo").value);

  if(numLegajo == "" || isNaN(numLegajo)) {
    alert("por favor ingrese un número válido");
  }

  legajos.push(numLegajo);

  verificarPadron();

  console.log(legajos);
});

boton1.addEventListener("click", function(e) {
  e.preventDefault();
  voto1++;
  boton1.disabled = true;
  boton2.disabled = true;
  boton3.disabled = true;

  
  vaciar();
  console.log(candidato1);
});

function verificarPadron() {
  for(let i = 0; i < legajos.length; i++) {
      if(numLegajo === legajos[i]) {
        alert("ud ya ha votado");
      }
    }
}

/*

});

boton2.addEventListener("click", function(e) {
  e.preventDefault();
  boton2.disabled = false;
});

boton3.addEventListener("click", function(e) {
  e.preventDefault();
  boton3.disabled = false;
});

function ingresarDatos() {
  let titulo = document.querySelector("#titulo").value;
  let autor = document.querySelector("#autor").value;
  let año = Number(document.querySelector("#año").value);
  let prestamo = document.querySelector("#prestamo").value;
  
    if(titulo == "") {
      alert("ingresá un título");
      return;
    }

    if(autor == "") {
      alert("ingresá un autor");
      return;
    }

    if(isNaN(año) || año <= 0 || año >2026) {
      alert("ingresá un año válido");
      return;
    }

    if(prestamo == "") {
      alert("por favor indica Si o No");
      return;
    }

    let objetoLibro = {
      titulo: titulo,
      autor: autor,
      año: año,
      prestamo: prestamo,
    }

    libros.push(objetoLibro);

    console.log(libros);

    vaciar();
}
*/
function vaciar() {
  document.querySelector("#legajo").value = "";
}

/*
// Calcular y mostrar resultados //
botonCalcular.addEventListener("click", function(e) {
  e.preventDefault();
  calcular();
});

function calcular() {
  let masAntiguo = libros[0];
  let enPrestamo = 0;
  let mas100 = 0;

  for(let i = 0; i < libros.length; i++) {
    let antiguedad = (2026 - libros[i].año);
    if(libros[i].año < masAntiguo.año) {
      masAntiguo = libros[i];
    }

    if(antiguedad > 100) {
      mas100++;
    }
    
    if(libros[i].prestamo === "si") {
      enPrestamo++;
    }
  }

    let mayores = (mas100 * 100) / libros.length;

  resultados.innerText += 
`El libro mas antiguo es ${masAntiguo.titulo}, ${masAntiguo.año}
Hay actualmente ${enPrestamo} libros en préstamo
${mayores}% de libros tienen mas de 100 años`;

  console.log(resultados);
}
*/