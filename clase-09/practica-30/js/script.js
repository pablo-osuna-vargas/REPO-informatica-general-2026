// BLOQUE elegir numero //
/* capturo el formulario, defino la variable para el valor de numero elegido 
y luego capturo el botón que cliqueó el usuario con su valor */
let captura = document.querySelector("form");
let numeroElegido;

let uno = document.querySelector("#uno");
uno.addEventListener("click", function() {
numeroElegido = Number(uno.value);
console.log(numeroElegido);

if(numeroElegido) {

//BLOQUE azar //
// creo un array vacío que se va a llenar con los números tirados al azar // 
let dadosTirados = [];

// uso FOR para la tirada de 5 numeros al azar y los ingreso en un array //
for(i=0;i<5;i++) {
	let numAzar = Math.floor(Math.random()*6)+1;
	dadosTirados.push(numAzar);
};

// luego uso cada posicion "i" del array para cambiar el .src de cada imagen y así mostrar los números tirados al azar //
let imagen1 = document.querySelector("#imagen1");
	imagen1.src = "img/" + dadosTirados[0] + ".jpeg";

let imagen2 = document.querySelector("#imagen2");
	imagen2.src = "img/" + dadosTirados[1] + ".jpeg";

let imagen3 = document.querySelector("#imagen3");
	imagen3.src = "img/" + dadosTirados[2] + ".jpeg";

let imagen4 = document.querySelector("#imagen4");
	imagen4.src = "img/" + dadosTirados[3] + ".jpeg";

let imagen5 = document.querySelector("#imagen5");
	imagen5.src = "img/" + dadosTirados[4] + ".jpeg";


// BLOQUE coincidencias, se ejecuta luego de cliquear un numero //
// declaro una variable contador para contar cuantas coincidencias //
	let coincidencias = 0;

		// recorro el array de numeros al azar y actualizo cuantas coincidencias hay //
		for (i=0;i<dadosTirados.length;i++) {
			if(dadosTirados[i]===numeroElegido) {
				coincidencias++;
				console.log(coincidencias);

				let imagenCoincidencia = document.querySelector("#imagen" + (i+1));
				imagenCoincidencia.style.border = "1rem solid green";
			}
		}

			let mostrarCoincidencias = document.querySelector("#mostrarCoincidencias");

				if(coincidencias!=0) {
					mostrarCoincidencias.innerText = coincidencias + " dados coinciden con tu apuesta!";
				} else {
					mostrarCoincidencias.innerText = "ningún dado coincide con tu apuesta!";
				}
	}
});

let dos = document.querySelector("#dos");
dos.addEventListener("click", function() {
numeroElegido = Number(dos.value);
console.log(numeroElegido);

if(numeroElegido) {
let dadosTirados = [];

for(i=0;i<5;i++) {
	let numAzar = Math.floor(Math.random()*6)+1;
	dadosTirados.push(numAzar);
};

let imagen1 = document.querySelector("#imagen1");
	imagen1.src = "img/" + dadosTirados[0] + ".jpeg";

let imagen2 = document.querySelector("#imagen2");
	imagen2.src = "img/" + dadosTirados[1] + ".jpeg";

let imagen3 = document.querySelector("#imagen3");
	imagen3.src = "img/" + dadosTirados[2] + ".jpeg";

let imagen4 = document.querySelector("#imagen4");
	imagen4.src = "img/" + dadosTirados[3] + ".jpeg";

let imagen5 = document.querySelector("#imagen5");
	imagen5.src = "img/" + dadosTirados[4] + ".jpeg";


	let coincidencias = 0;

		for (i=0;i<dadosTirados.length;i++) {
			if(dadosTirados[i]===numeroElegido) {
				coincidencias++;
				console.log(coincidencias);

				let imagenCoincidencia = document.querySelector("#imagen" + (i+1));
				imagenCoincidencia.style.border = "1rem solid green";
			}
		}

			let mostrarCoincidencias = document.querySelector("#mostrarCoincidencias");

				if(coincidencias!=0) {
					mostrarCoincidencias.innerText = coincidencias + " dados coinciden con tu apuesta!";
				} else {
					mostrarCoincidencias.innerText = "ningún dado coincide con tu apuesta!";
				}

	}
});

let tres = document.querySelector("#tres");
tres.addEventListener("click", function() {
numeroElegido = Number(tres.value);
console.log(numeroElegido);

if(numeroElegido) {
let dadosTirados = [];

for(i=0;i<5;i++) {
	let numAzar = Math.floor(Math.random()*6)+1;
	dadosTirados.push(numAzar);
};

let imagen1 = document.querySelector("#imagen1");
	imagen1.src = "img/" + dadosTirados[0] + ".jpeg";

let imagen2 = document.querySelector("#imagen2");
	imagen2.src = "img/" + dadosTirados[1] + ".jpeg";

let imagen3 = document.querySelector("#imagen3");
	imagen3.src = "img/" + dadosTirados[2] + ".jpeg";

let imagen4 = document.querySelector("#imagen4");
	imagen4.src = "img/" + dadosTirados[3] + ".jpeg";

let imagen5 = document.querySelector("#imagen5");
	imagen5.src = "img/" + dadosTirados[4] + ".jpeg";


	let coincidencias = 0;

		for (i=0;i<dadosTirados.length;i++) {
			if(dadosTirados[i]===numeroElegido) {
				coincidencias++;
				console.log(coincidencias);

				let imagenCoincidencia = document.querySelector("#imagen" + (i+1));
				imagenCoincidencia.style.border = "1rem solid green";
			}
		}

		let mostrarCoincidencias = document.querySelector("#mostrarCoincidencias");

				if(coincidencias!=0) {
					mostrarCoincidencias.innerText = coincidencias + " dados coinciden con tu apuesta!";
				} else {
					mostrarCoincidencias.innerText = "ningún dado coincide con tu apuesta!";
				}
	}
});

let cuatro = document.querySelector("#cuatro");
cuatro.addEventListener("click", function() {
numeroElegido = Number(cuatro.value);
console.log(numeroElegido);

if(numeroElegido) {
let dadosTirados = [];

for(i=0;i<5;i++) {
	let numAzar = Math.floor(Math.random()*6)+1;
	dadosTirados.push(numAzar);
};

let imagen1 = document.querySelector("#imagen1");
	imagen1.src = "img/" + dadosTirados[0] + ".jpeg";

let imagen2 = document.querySelector("#imagen2");
	imagen2.src = "img/" + dadosTirados[1] + ".jpeg";

let imagen3 = document.querySelector("#imagen3");
	imagen3.src = "img/" + dadosTirados[2] + ".jpeg";

let imagen4 = document.querySelector("#imagen4");
	imagen4.src = "img/" + dadosTirados[3] + ".jpeg";

let imagen5 = document.querySelector("#imagen5");
	imagen5.src = "img/" + dadosTirados[4] + ".jpeg";


	let coincidencias = 0;

		for (i=0;i<dadosTirados.length;i++) {
			if(dadosTirados[i]===numeroElegido) {
				coincidencias++;
				console.log(coincidencias);

				let imagenCoincidencia = document.querySelector("#imagen" + (i+1));
				imagenCoincidencia.style.border = "1rem solid green";
			}
		}

		let mostrarCoincidencias = document.querySelector("#mostrarCoincidencias");

				if(coincidencias!=0) {
					mostrarCoincidencias.innerText = coincidencias + " dados coinciden con tu apuesta!";
				} else {
					mostrarCoincidencias.innerText = "ningún dado coincide con tu apuesta!";
				}
	}
});

let cinco = document.querySelector("#cinco");
cinco.addEventListener("click", function() {
numeroElegido = Number(cinco.value);
console.log(numeroElegido);

if(numeroElegido) {
let dadosTirados = [];

for(i=0;i<5;i++) {
	let numAzar = Math.floor(Math.random()*6)+1;
	dadosTirados.push(numAzar);
};

let imagen1 = document.querySelector("#imagen1");
	imagen1.src = "img/" + dadosTirados[0] + ".jpeg";

let imagen2 = document.querySelector("#imagen2");
	imagen2.src = "img/" + dadosTirados[1] + ".jpeg";

let imagen3 = document.querySelector("#imagen3");
	imagen3.src = "img/" + dadosTirados[2] + ".jpeg";

let imagen4 = document.querySelector("#imagen4");
	imagen4.src = "img/" + dadosTirados[3] + ".jpeg";

let imagen5 = document.querySelector("#imagen5");
	imagen5.src = "img/" + dadosTirados[4] + ".jpeg";


	let coincidencias = 0;

		for (i=0;i<dadosTirados.length;i++) {
			if(dadosTirados[i]===numeroElegido) {
				coincidencias++;
				console.log(coincidencias);

				let imagenCoincidencia = document.querySelector("#imagen" + (i+1));
				imagenCoincidencia.style.border = "1rem solid green";
			}
		}

		let mostrarCoincidencias = document.querySelector("#mostrarCoincidencias");

				if(coincidencias!=0) {
					mostrarCoincidencias.innerText = coincidencias + " dados coinciden con tu apuesta!";
				} else {
					mostrarCoincidencias.innerText = "ningún dado coincide con tu apuesta!";
				}
	}
});

let seis = document.querySelector("#seis");
seis.addEventListener("click", function() {
numeroElegido = Number(seis.value);
console.log(numeroElegido);

if(numeroElegido) {
let dadosTirados = [];

for(i=0;i<5;i++) {
	let numAzar = Math.floor(Math.random()*6)+1;
	dadosTirados.push(numAzar);
};

let imagen1 = document.querySelector("#imagen1");
	imagen1.src = "img/" + dadosTirados[0] + ".jpeg";

let imagen2 = document.querySelector("#imagen2");
	imagen2.src = "img/" + dadosTirados[1] + ".jpeg";

let imagen3 = document.querySelector("#imagen3");
	imagen3.src = "img/" + dadosTirados[2] + ".jpeg";

let imagen4 = document.querySelector("#imagen4");
	imagen4.src = "img/" + dadosTirados[3] + ".jpeg";

let imagen5 = document.querySelector("#imagen5");
	imagen5.src = "img/" + dadosTirados[4] + ".jpeg";

	
	let coincidencias = 0;

		for (i=0;i<dadosTirados.length;i++) {
			if(dadosTirados[i]===numeroElegido) {
				coincidencias++;
				console.log(coincidencias);

				let imagenCoincidencia = document.querySelector("#imagen" + (i+1));
				imagenCoincidencia.style.border = "1rem solid green";
			}	
		}

		let mostrarCoincidencias = document.querySelector("#mostrarCoincidencias");

				if(coincidencias!=0) {
					mostrarCoincidencias.innerText = coincidencias + " dados coinciden con tu apuesta!";
				} else {
					mostrarCoincidencias.innerText = "ningún dado coincide con tu apuesta!";
				}
	}
});


// agrego un boton de reset para volver a apostar y que limpie estilos, array y parrafos //
let reset = document.querySelector("#borrar");
reset.addEventListener("click", function() {
	dadosTirados = [];
	mostrarCoincidencias.innerText = "";
	
	// uso "i" como contador para capturar imagenes para "limpiar" el estilo de borde // 
	for(i=0;i<5;i++) {
		let imagenReset = document.querySelector("#imagen" + (i+1));
		imagenReset.style.border = "none";
	}
});