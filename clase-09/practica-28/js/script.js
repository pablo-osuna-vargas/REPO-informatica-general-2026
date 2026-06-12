// defino variables para inicializar las cantidades de cada menú elegido y un array con los 3 menúes //
let pasta = 0;
let pollo = 0;
let ensalada = 0;

// uso un FOR para pedir el menú porque son 12 invitados //
for (i=0;i<12;i++) {
	let menu = prompt("menú para invitado " + (i+1) + ": pasta, pollo o ensalada?", "");
	while(menu!="pasta" && menu!="pollo" && menu!="ensalada") {
		menu = prompt("por favor elegí uno de estos 3 menúes: pasta, pollo o ensalada", "");
	}

	if(menu=="pasta") {
		pasta++;
	} 
	if(menu=="pollo") {
		pollo++;
	} 
	if(menu=="ensalada") {
		ensalada++;
	}
}

// actualizo el array con los valores incrementados //
let menues = [pasta, pollo, ensalada];

// creo un array de nombres que coincida con el array de menues para poder indicar el "string" con el menu mas pedido //
let nombres = ["pasta","pollo","ensalada"]

// inicializo la comparacion para saber cual menu fue el mas pedido //
let masPedido = menues[0];

// creo una variable para indizar el nombre para mostrar en resultados // 
let indiceMasPedido = 0;

for (i=1;i<menues.length;i++) {
	if (menues[i]>masPedido) {
		masPedido = menues[i];
		indiceMasPedido = i;
	}
}

// creo una variable para mostrar el "string" con el nombre del menu mas pedido //
let nombreMasPedido = nombres[indiceMasPedido];

//capturo el boton masPedido y muestro en un parrafo el resultado //
let botonMasPedido = document.querySelector("#masPedido");
botonMasPedido.addEventListener("click", function() {
let mostrarMasPedido = document.querySelector("#mostrarMasPedido");
mostrarMasPedido.innerText = "el menú mas pedido fue: " + nombreMasPedido;
});


// NOTA: use una funcion para calcular porcentaje, pero era mas simple crear una variable para cada menu y hacer el calculo //

function porcentaje(a) {
	let porciento = a*100/12;
	return porciento;
}

let porcentajePasta = porcentaje(pasta);
let porcentajePollo = porcentaje(pollo);
let porcentajeEnsalada = porcentaje(ensalada);

/*
// defino variables y hago el calculo para porcentajes //
let porcentajePasta = pasta*100/12;
let porcentajePollo = pollo*100/12;
let porcentajeEnsalada = ensalada*100/12;
*/


//capturo el boton porcentaje y muestro en un parrafo el resultado //
let botonPorcentaje = document.querySelector("#porcentaje");
botonPorcentaje.addEventListener("click", function() {
	let mostrarPorcentaje = document.querySelector("#mostrarPorcentaje")
	mostrarPorcentaje.innerText = "pasta: %" + porcentajePasta + "\n" +
	"pollo: %" + porcentajePollo + "\n" +
	"ensalada: %" + porcentajeEnsalada;
});

/* NOTA: fue muy confuso resolver como mostrar el "string" del nombre del menu que fue mas pedido, termine resolviendolo con IA.
Comprendí finalmente lo que la variable índice hace, pero no creo que lo haya podido resolver solo */