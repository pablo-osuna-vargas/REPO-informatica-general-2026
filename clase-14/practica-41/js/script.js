let contCuadrados = document.querySelector("#cuadrados");
let btnR = document.querySelector("#botonRojo");
let btnG = document.querySelector("#botonVerde");
let btnB = document.querySelector("#botonAzul");
let btnBorrar = document.querySelector("#borrar");
let btnNegro = document.querySelector("#negro");

let cuadrados = [];

// función genérica con un parametro (color)
function crearCuadrado(color) {
	nuevoCuadrado = document.createElement("div"); // aca va lo que quiero crear (un div con cierto tamaño)
	nuevoCuadrado.classList.add(color); // acá hago el cambio de clase segun el valor que adquiere el parámetro "color"
	contCuadrados.append(nuevoCuadrado); // acá uso el elemento contenedor capturado y uso append para agregar uno despues del otro
	cuadrados.push(nuevoCuadrado); // agrego el cuadrado creado al array
}

function todoNegro() {
	cuadrados.forEach(function(cuadrado){ // forEach recorre todo el array con el parametro "cuadrado" para la funcion
		cuadrado.classList.add("todoNegro"); // al recorrer cada "cuadrado" intercambia su clase por "todoNegro"
	})
}

// funcion con funcion flecha interna EJEMPLO:
//function todoNegro(){
//	cuadrados.forEach(cuadrado => cuadrado.classList.add("todoNegro"));
//}

btnR.addEventListener("click", () => crearCuadrado("rojo"));
btnG.addEventListener("click", () => crearCuadrado("verde"));
btnB.addEventListener("click", () => crearCuadrado("azul"));
btnBorrar.addEventListener("click", () => contCuadrados.remove());
btnNegro.addEventListener("click", todoNegro);