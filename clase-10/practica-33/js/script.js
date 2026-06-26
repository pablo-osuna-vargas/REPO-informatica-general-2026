// DEFINICIONES y CAPTURAS //
let corredores = [];

let captura = document.querySelector("form");
captura.addEventListener("submit", function(e){
	e.preventDefault();

let nombre = document.querySelector("#nombre");
let nombreValor = nombre.value;
let apellido = document.querySelector("#apellido");
let apellidoValor = apellido.value;
let participante = document.querySelector("#participante");
let participanteValor = participante.value;
let tiempo = document.querySelector("#tiempo");
let tiempoValor = tiempo.value;

	// validaciones con if //
	if (!isNaN(nombre.value) || nombre.value === "") {
		alert("por favor ingresá un nombre válido");
	}

	if (!isNaN(apellido.value) || apellido.value === "") {
		alert("por favor ingresá un apellido válido");
	}

	if (isNaN(participante.value) || participante.value === "") {
		alert("por favor ingresá un número válido");
	}

	if (isNaN(tiempo.value) || tiempo.value === "") {
		alert("por favor ingresá un número válido");
	}

	corredores.push({
		nombre: nombre.value,
		apellido: apellido.value,
		participante: Number(participante.value),
		tiempo: Number(tiempo.value)
	})

	nombre.value = "";
	apellido.value = "";
	participante.value = "";
	tiempo.value = "";

console.log(corredores);
});


// segundo listener para resultados y comparaciones //
let boton = document.querySelector("#resultados");
boton.addEventListener("click", function() {
	
	let menorTiempo = corredores[0].tiempo;
	let ganador = corredores[0];

	//uso un For para recorrer propiedad .tiempo dentro del array y obtener resutados //
	for(i=1;i<corredores.length;i++) {
		if(corredores[i].tiempo<menorTiempo) {
			ganador=(corredores[i]);
		}
	}

	/*let mostrarGanador = document.querySelector("#ganador");
	mostrarGanador.innerText = "el ganador es " + "\n" +
	"Nombre: " + ganador.nombre + "\n" +
	"Apellido: " + ganador.apellido + "\n" +
	"participante No: " + ganador.participante + "\n" + 
	"tiempo: " + ganador.tiempo;*/

let sumaTiempo = 0;

	for(i=0;i<corredores.length;i++) {
		sumaTiempo +=corredores[i].tiempo;
	}

	let promedio = sumaTiempo/corredores.length;
	/*let mostrarPromedio = document.querySelector("#promedio");
	mostrarPromedio.innerText = "el tiempo promedio de llegada es: " + promedio;*/

let sumaMenoresPromedio = 0;

	for(i=0;i<corredores.length;i++) {
		if(corredores[i].tiempo<promedio) {
			sumaMenoresPromedio++;
		}
	}

	let porcentaje = (sumaMenoresPromedio*100)/corredores.length;
	/*let mostrarPorcentaje = document.querySelector("#porcentaje");
	mostrarPorcentaje.innerText = "el porcentaje de corredores menores al promedio es: %" + porcentaje;*/

	let resultados = "<div>" + 
	"<h1>" + "GANADOR" + "</h1>" + 
	"<p>" + "Nombre: " + ganador.nombre + "</p>" +
	"<p>" + "Apellido: " + ganador.apellido + "</p>" +
	"<p>" + "participante No: " + ganador.participante + "</p>" + 
	"<p>" + "tiempo: " + ganador.tiempo + "</p>" +
	"<br>" + 
	"<h2>" + "PROMEDIO" + "</h2>" + 
	"<p>" + "el tiempo promedio de llegada es: " + promedio + "</p>" +
	"<br>" +
	"<h3>" + "PORCENTAJES" + "</h3>" +
	"<p>" + "el porcentaje de corredores menores al promedio es: %" + porcentaje + "</p>" +
	"</div>";

	let mostrarResultados = document.querySelector("#mostrarResultados");
	mostrarResultados.innerHTML = resultados;

});