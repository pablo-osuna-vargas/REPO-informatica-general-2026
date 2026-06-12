// defino variables de cantidad, total, mas caro, mas barato, array de libros y de precio //
let cantidad = Number(prompt("ingresá la cantidad de libros comprados", ""));

// valido con while si ingresa un numero //
while(isNaN(cantidad)) {
	cantidad = Number(prompt("por favor ingresá un número válido", ""));
}

let libros = [];
let precioXlibro = [];

for (i=0;i<cantidad;i++) {
	let precio = Number(prompt("por favor ingresá el precio del libro " + (i+1), ""));
	// vallido que ingrese un número //
	while(isNaN(precio)) {
		precio = Number(prompt("por favor ingresá un número válido"));
	}

	// agrego cada dato al array correspondiente //
	libros.push(i);
	precioXlibro.push(precio);
}

// inicializo un contador para la suma total //
let total = 0;

let botonTotal = document.querySelector("#total");
botonTotal.addEventListener("click", function() {
	for (i=0;i<libros.length;i++) {
		total += precioXlibro[i];

	let mostrarTotal = document.querySelector("#mostrarTotal");
	mostrarTotal.innerText = "el total de la compra es: $" + total;  
	}
});


// defino e inicializo variables para comparar // 
let masCaro = precioXlibro[0];
let masBarato = precioXlibro[0];

let botonCaroYbarato = document.querySelector("#caroYbarato");
botonCaroYbarato.addEventListener("click", function() {
	for (i=1;i<precioXlibro.length;i++) {
		if (precioXlibro[i]>masCaro) {
			masCaro = precioXlibro[i];

		let mostrarMasCaro = document.querySelector("#masCaro");
		mostrarMasCaro.innerText = "el precio del libro mas caro es: $" + masCaro;
		}

		if(precioXlibro[i]<masBarato) {
			masBarato = precioXlibro[i];
		}

		let mostrarMasBarato = document.querySelector("#masBarato");
		mostrarMasBarato.innerText = "el precio del libro mas barato es: $" + masBarato;
	}
});

// pregunta: no es más simple usar un Math.floor o un Math.ceil para averiguar el mas caro y el mas barato? //
// respuesta: NO. Porque Math.max y min solo pueden comparar ingresando los valores separados con coma //


let promedio = total / libros.length;

let botonPromedio = document.querySelector("#mostrarPromedio");
botonPromedio.addEventListener("click", function() {
	let mostrarPromedio = document.querySelector("#promedio");
	mostrarPromedio.innerText = "el promedio de tu compra es: $" + promedio;
});

console.log(total, masCaro, masBarato, promedio);