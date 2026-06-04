function precioDesc (a, b) {
	let precioFinal = a-(a*b/100);
	return precioFinal;
}

//capturo elementos HTML para hacer el calculo y mostrarlo //
let capturoElemento = document.querySelector("form");

let capturoSubmit = capturoElemento.addEventListener("submit", function() {
//dentro del Listener capturo los value del formulario para establecer los argumentos para a función creada //
	//convierto a número el string devuelto por el .value //
	let precio = Number(document.querySelector("#precio").value);
	let descuento = Number(document.querySelector("#descuento").value);

	//llamo a la función //
	let precioConDesc = precioDesc(precio, descuento);

//capturo el párrafo LUEGO del cálculo para mostrar el mensaje de precio final con descuento //
	let mostrarPrecioFinal = document.querySelector(".mostrarPrecioDesc");
	mostrarPrecioFinal.innerHTML = "Precio con descuento: $" + precioConDesc;

});













/*
console.log("Precio sin descuento es $" + precio + "\n" + 
	"El descuento es " + descuento + "% " + "\n" +
	"Precio con descuento" + precioDesc);*/