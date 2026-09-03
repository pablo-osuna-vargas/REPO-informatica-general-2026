// inicializo variables de juego
let puntos = 10;
let rondaN = 0;
let mostrarPuntaje = document.querySelector("#puntaje");
let rondaNum = document.querySelector("#ronda");
let record = document.querySelector("#record");

let accion;


// creo objeto img y capturo el div donde mostrarlo
let imgDado = document.createElement("img");
let mostrarDado = document.querySelector("#dado");


// capturo botones
let btnExplorar = document.querySelector("#explorar");
btnExplorar.addEventListener("click", () => {accion = "explorar"; jugar()});

let btnDescansar = document.querySelector("#descansar");
btnDescansar.addEventListener("click", () => {accion = "descansar";	jugar()});

let btnArriesgar = document.querySelector("#arriesgar");
btnArriesgar.addEventListener("click", () => {accion = "arriesgar";	jugar()});

let btnReiniciar = document.querySelector("#reiniciar");
	btnReiniciar.addEventListener("click", () => location.reload());



// lógica de juego
function jugar() {
	numDado = Math.floor(Math.random()*6)+1;
	console.log(numDado);

	if(accion === "explorar"){
		if(numDado % 2 === 0){
			puntos++;
		} else{
			puntos--;
		}
	}	
	
	if(accion === "descansar"){
		if(puntos <=8){
			puntos +=2;
		} else if(puntos === 9){
			puntos++;
			let maximo = document.querySelector("#record")
			maximo.innerHTML = `<p>sólo puedes sumar 1 punto hasta un máximo de 10</p>`
		}
	}
	
	if(accion === "arriesgar"){
		if(numDado >= 4){
			puntos +=3;
		} else if(numDado < 4){
			puntos -=3;
		}
	}

	imgDado.src = `img/${numDado}.jpeg`;
	mostrarDado.innerHTML = "",
	mostrarDado.append(imgDado)

	panel();
	rondaN++;
	rondaNum.innerText = `ronda No: ${rondaN}
						  puntos actuales: ${puntos}`
	//alert("te animás a otra ronda?");
}


function panel() {
	if( puntos <= 0){
		record.innerHTML = `<p>Lo siento... has perdido toda tu energía. Deberás reiniciar para jugar de nuevo!</p>`
		btnExplorar.disabled = true, 
		btnDescansar.disabled = true, 
		btnArriesgar.disabled = true;
		return;
	} else if(puntos >= 15){
		record.innerHTML = `<p>Lo lograste! has has alcanzado el máximo de energía!</p>`
		btnExplorar.disabled = true, 
		btnDescansar.disabled = true, 
		btnArriesgar.disabled = true;
		return;
	}
}