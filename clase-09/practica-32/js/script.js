// DEFINICIONES y CAPTURAS //
let numAzar = Math.floor(Math.random()*100)+1;
let mostrarNumeroAzar = document.querySelector("#mostrarNumeroAzar");
console.log(numAzar);

alert("adiviná el número sorteado!");

let intentos = 10;


// uso FOR porque se que tiene 10 intentos //
for(let i=0;i<10;i++) {

	// variable para contar intentos que se actualiza con "i" //
	let intentosRestantes = intentos-i;

	// pido el numero y le informo cuantos intentos quedan, ambos se actualizan en cada vuelta //
	let numUsuario = Number(prompt("ingresá un número del 1 al 100! tenés " + intentosRestantes + " intentos...",""));
	console.log(intentosRestantes);

	if(numUsuario===numAzar) {
		alert("felicitaciones! adivinaste el número!");
		break; // sale del juego si adivina //
	} else if(numUsuario>numAzar) {
		alert("el número ingresado es Mayor");
	} else {
		alert("el número ingresado es menor");
	}


	// si los intentos restantes llegan a 1 muestra el numero sorteado y pierde //
	if(intentosRestantes===1) {
		alert("lo siento... se acabaron tus intentos");
		mostrarNumeroAzar.innerText = "el número era: " + numAzar;
	}
}