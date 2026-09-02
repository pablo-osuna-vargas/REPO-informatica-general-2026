let contCuadrados = document.querySelector("#cuadrados");
let btnR = document.querySelector("#botonRojo");
let btnG = document.querySelector("#botonVerde");
let btnB = document.querySelector("#botonAzul");
let btnBorrar = document.querySelector("#borrar");
let btnNegro = document.querySelector("#negro");

let cuadrados = [];

function crearCuadrado(color) {
	nuevoCuadrado = document.createElement("div");
	nuevoCuadrado.classList.add(color);
	contCuadrados.append(nuevoCuadrado);
	cuadrados.push(nuevoCuadrado);
}

// funcion con funcion flecha interna EJEMPLO:
function todoNegro(){
	cuadrados.forEach(cuadrado => cuadrado.classList.add("todoNegro"));
}

btnR.addEventListener("click", () => crearCuadrado("rojo"));
btnG.addEventListener("click", () => crearCuadrado("verde"));
btnB.addEventListener("click", () => crearCuadrado("azul"));
btnBorrar.addEventListener("click", () => contCuadrados.remove());
btnNegro.addEventListener("click", todoNegro);