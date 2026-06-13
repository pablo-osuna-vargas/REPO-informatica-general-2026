// defino los dos arrays de preguntas y respuestas //
let preguntas = ["pregunta1?","pregunta2?","pregunta3?","pregunta4?","pregunta5?","pregunta6?","pregunta7?","pregunta8?","pregunta9?","pregunta10?",]
let respuestas = ["r1","r2","r3","r4","r5","r6","r7","r8","r9","r10"]

let correctas = 0;
let incorrectas = 0;

for(i=0;i<10;i++) {
	let respuesta = prompt(preguntas[i]);
	while(!isNaN(respuesta) || respuesta==" ") {
		respuesta = prompt("por favor ingresa un texto válido", preguntas[i]);
	}

	if(respuesta!=respuestas[i]) {
		incorrectas++;
	} else {
		correctas++;
	}
}

let botonCorrectas = document.querySelector("#botonCorrectas");
botonCorrectas.addEventListener("click", function() {
let totalCorrectas = document.querySelector("#mostrarCorrectas");
totalCorrectas.innerText = "el total de respuestas correctas es: " + correctas;
});

console.log(correctas, incorrectas);