// VERSIÓN con op ternario y función flecha
let numAzar = Math.floor(Math.random()*10)+1;
let contenedor = document.querySelector("#numAzar");
contenedor.innerText = `número sorteado: ${numAzar}`;

let btnMayor = document.querySelector("#mayor");
let btnMenor = document.querySelector("#menor");
let btnReiniciar = document.querySelector("#reiniciar");

let apuesta;
let puntaje = 0;
let conteo = document.querySelector("#conteo");

function azar(){
	let numNuevo = Math.floor(Math.random()*10)+1;

//	operador ternario
	(apuesta === "mayor" && numNuevo > numAzar) || (apuesta === "menor" && numNuevo < numAzar) 
	? (puntaje++,
	  contenedor.innerText = `número sorteado: ${numNuevo}`,
	  conteo.innerText = `puntaje: ${puntaje}`,
	  numAzar = numNuevo)
	: (contenedor.innerText = "no acertaste, deberás reiniciar!", 
	  btnMayor.disabled = true, 
	  btnMenor.disabled = true); 

	console.log(`numero generado: ${numNuevo}, apuesta ${apuesta},  puntos: ${puntaje}`);
}

// funcion flecha
btnMayor.addEventListener("click", () => {apuesta = "mayor", azar()}); // al haber dos parámetros vuelven las llaves
btnMenor.addEventListener("click", () => {apuesta = "menor", azar()}); // idem línea anterior
btnReiniciar.addEventListener('click', () => location.reload());