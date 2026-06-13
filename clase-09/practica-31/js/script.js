// DEFINICIONES y CAPTURAS que usaré //
let capturaForm = document.querySelector("form");
let botonEnviar = document.querySelector("#enviarDatos"); 
botonEnviar.addEventListener("click", function(event) {
event.preventDefault();
llenarArrays();
})
let botonTotalClientesPromedio = document.querySelector("#totalClientesPromedio");
let botonDescuento = document.querySelector("#descuento");

let mostrarTotalClientesPromedio = document.querySelector("#mostrarTotalClientesPromedio");
let mostrarMayorCompraDescuento = document.querySelector("#mostrarMayorCompraDescuento");

let clientes = 0; // contador //
let arrayClientes = [];
let arrayMontos = [];


// FUNCIONES a usar una vez accionado el listener //
function llenarArrays() {
		let nombreCliente = document.querySelector("#nombre");
		let valorNombreCliente = nombreCliente.value;
		let montoCompra = document.querySelector("#monto");
		let valorMontoCompra = Number(montoCompra.value);

		clientes++;
		arrayClientes.push(valorNombreCliente);
		arrayMontos.push(valorMontoCompra);

		nombreCliente.value = "";
		montoCompra.value = "";

		console.log(arrayMontos,arrayClientes);

		return clientes;
}

function promediar() {
	let suma = 0;

	for(let i=0;i<arrayMontos.length;i++) {
		suma += Number(arrayMontos[i]);
	}

	let promedio = suma/arrayMontos.length;

	mostrarTotalClientesPromedio.innerText = "total de clientes: " + clientes + "\n";
	"la compra promedio es de: $" + promedio;
	
	return promedio;
}

function descuento() {
	let mayorCompra = arrayMontos[0];
	let montoFinal;

	for(let i=1;i<arrayMontos.length;i++) {
		if(Number(arrayMontos[i])>mayorCompra) {
			mayorCompra = arrayMontos[i];
		}
	}

	mostrarMayorCompraDescuento.innerText = "la mayor compra fue: $" + mayorCompra + "\n";

	if(mayorCompra>50000) {
			let descMayor = mayorCompra*30/100;
			montoFinal = mayorCompra - descMayor;
		} else {
			let descMenor = mayorCompra*15/100;
			montoFinal = mayorCompra - descMenor;
		}

	mostrarMayorCompraDescuento.innerText += "monto final con descuento: $" + montoFinal;

	return montoFinal;
}


// EVENTOS //
botonTotalClientesPromedio.addEventListener("click", promediar);
botonDescuento.addEventListener("click", descuento);