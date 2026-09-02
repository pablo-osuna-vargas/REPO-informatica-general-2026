let contCuadrados = document.querySelector("#cuadrados");
let btnR = document.querySelector("#botonRojo");
let btnG = document.querySelector("#botonVerde");
let btnB = document.querySelector("#botonAzul");
let btnBorrar = document.querySelector("#borrar");
let btnNegro = document.querySelector("#negro");

/*
// funcion basica
btnR.addEventListener("click", function(){
	let nuevoRojo = document.createElement("div");
	nuevoRojo.classList.add("rojo");
	contCuadrados.append(nuevoRojo);
})
*/

// función genérica con un parametro (color)
let cuadrados = [];

function crearCuadrado(color) {
	nuevoCuadrado = document.createElement("div"); // aca va lo que quiero crear (un div con cierto tamaño)
	nuevoCuadrado.classList.add(color); // acá hago el cambio de clase segun el valor que adquiere el parámetro "color"
	contCuadrados.append(nuevoCuadrado); // acá selecciono el contenedor capturado y uso append para agregar uno despues del otro

	cuadrados.push(nuevoCuadrado);

	return nuevoCuadrado; // devuelvo el resultado para poder usarlo con otra funcion fuera de esta
}

function todoNegro() {
	cuadrados.forEach(function(cuadrado){ // forEach recorre todo el array con el parametro "cuadrado" para la funcion
		cuadrado.classList.add("todoNegro"); // al recorrer cada "cuadrado" intercambia su clase por "todoNegro"
	})
}

btnR.addEventListener("click", () => crearCuadrado("rojo"));
btnG.addEventListener("click", () => crearCuadrado("verde"));
btnB.addEventListener("click", () => crearCuadrado("azul"));
btnBorrar.addEventListener("click", () => contCuadrados.remove());
btnNegro.addEventListener("click", todoNegro);