let numAzar = Math.floor(Math.random()*10)+1;
let contenedor = document.querySelector("#numAzar");
contenedor.innerText = `número sorteado: ${numAzar}`;

let btnMayor = document.querySelector("#mayor");
let btnMenor = document.querySelector("#menor");
let btnReiniciar = document.querySelector("#reiniciar");

let apuesta; // variable para guardar que boton apretó el usuario
let puntaje = 0; // variable contador que suma puntos al acertar
let conteo = document.querySelector("#conteo"); // variable de captura para mostrar en pagina

function azar(){
	let numNuevo = Math.floor(Math.random()*10)+1; // genero numero al apostar
	
	// comparo la apuesta con el numero inicial
	if(apuesta === "mayor" && numNuevo > numAzar){
		puntaje++;
	} else if(apuesta === "menor" && numNuevo < numAzar){
		puntaje++;
	} else{
		contenedor.innerText = `no acertaste! lo siento... deberás reiniciar el juego!`;
		btnMayor.disabled = true;
		btnMenor.disabled = true;
		return;
	}

	contenedor.innerText = `número sorteado: ${numNuevo}`; // el numero nuevo es el numero de azar para la siguiente apuesta
	conteo.innerText = `puntaje: ${puntaje}`// actualizo el puntaje en pantalla
	numAzar = numNuevo;
	console.log(`numero generado: ${numNuevo}, apuesta ${apuesta},  puntos: ${puntaje}`);
}

// al apostar con boton mayor dispara la funcion azar y registra en la variable apuesta que boton apreto
btnMayor.addEventListener("click", function(){
	apuesta = "mayor"; azar();
});

// idem btnMayor
btnMenor.addEventListener("click", function(){
	apuesta = "menor"; azar();
});

// recarga la pagina para recomenzar desde 0
btnReiniciar.addEventListener('click', () => location.reload());