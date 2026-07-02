// Definiciones y capturas //
const libros = [];
let captura = document.querySelector("#sistema");
let boton = document.querySelector("#ingresarDatos");
let botonCalcular = document.querySelector("#calcular")
let resultados = document.querySelector("#resultados");

// Ingreso de datos y validaciones //
boton.addEventListener("click", function(e) {
  e.preventDefault();
  ingresarDatos();
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

function vaciar() {
  document.querySelector("#titulo").value = "";
  document.querySelector("#autor").value = "";
  document.querySelector("#año").value = "";
  document.querySelector("#prestamo").value = "";
}


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