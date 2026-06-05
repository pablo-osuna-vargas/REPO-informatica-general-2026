// defino constantes de precio y descuento //
const precioProye = 45000;
const precioCompu = 50000;
const precioPant = 35000;
const descuento = 10;

// creo la función para calcular el monto por cada ítem //
function item (a,b,c) {
	let calculo = (a*b)*c;
	return calculo;
}

// capturo el form para usar los datos ingresados por el usuario //
let capturar = document.querySelector("form");

// uso un Listener para escuchar cuando cliqueen el submit //
// TODA CAPTURA, CALCULO Y MUESTRA DEBE ESTAR DENTRO DEL LISTENER, SINO AL CARGAR LA PAGINA CALCULA COSAS QUE NO SON //
capturar.addEventListener("submit", function(e) {
	e.preventDefault();

	//capturo los datos ingresados //
	let cantProye = Number(document.querySelector("#proyectores").value);
	let cantCompu = Number(document.querySelector("#computadoras").value);
	let cantPant = Number(document.querySelector("#pantallas").value);
	let cantDias = Number(document.querySelector("#alquiler").value);

	// creo las variables para sumar el total //
	// llamo a la función para calcular todo //
	let itemProye = item(cantProye, precioProye, cantDias);
	let itemCompu = item(cantCompu, precioCompu, cantDias);
	let itemPant = item(cantPant, precioPant, cantDias);

	let mostrarTotal = document.querySelector("#total");
	let total = itemProye + itemCompu + itemPant;
	mostrarTotal.innerText = "presupuesto total: $" + total;

	// uso IF para aplicar descuento si pasa los 500000 //
	let mostrarTotalDesc = document.querySelector("#totalDescuento");
	if (total>500000) {
		let totalDesc = total - ((descuento*total)/100);
		mostrarTotalDesc.innerText = "total con descuento: $" + totalDesc;

	}

	console.log(total);
});


/* DECLARACIÓN USO DE IA:

La IA sugiere capturar los valores de los inputs (.value) dentro del listener para que reflejen lo ingresado al momento del submit.
Recomienda mantener las constantes y funciones fuera, y los cálculos y condiciones (if) dentro del bloque del listener.
Señala que no se debe mezclar variables de elementos del DOM con números: cada uno debe tener su propio nombre y orden claro.

Si bien el script lo realicé completo antes de preguntar y tenía todos los elementos (constantes, variables, funcion,
estructura condicional y resultados) Básicamente me ayudó a comprender un poco mejor la lógica de orden que deben tener para poder
procesar los datos que pido en el formulario. */