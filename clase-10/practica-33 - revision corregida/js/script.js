// DEFINICIONES y CAPTURAS //
let corredores = [];

let captura = document.querySelector("form");
captura.addEventListener("submit", function(e){
	e.preventDefault();
// llamo a la función que validará y cargará los datos en el mismo listener del botón para que se ejecute LUEGO de cargar datos //
	enviarDatos();
});


// FUNCIONES //
// funcion 1 validar y cargar //
function enviarDatos () {

// capturo y valido cada dato //
	let nombre = document.querySelector("#nombre");
	let nombreValor = nombre.value;
	if (!isNaN(nombreValor) || nombreValor === "") {
			alert("por favor ingresá un nombre válido");
			return
		}

	let apellido = document.querySelector("#apellido");
	let apellidoValor = apellido.value;
	if (!isNaN(apellidoValor) || apellidoValor === "") {
			alert("por favor ingresá un apellido válido");
			return
		}

	let participante = document.querySelector("#participante");
	let participanteValor = participante.value;
	if (isNaN(participanteValor) || participanteValor === "") {
			alert("por favor ingresá un número válido");
			return
		}

	let tiempo = document.querySelector("#tiempo");
	let tiempoValor = tiempo.value;
	if (isNaN(tiempoValor) || tiempoValor === "") {
			alert("por favor ingresá un número válido");
			return
		}


// creo OBJETO con los datos ingresados //
	let nuevoCorredor = {
			nombre: nombreValor,
			apellido: apellidoValor,
			participante: participanteValor,
			tiempo: tiempoValor
		}

// ingreso el OBJETO al ARRAY //
	corredores.push(nuevoCorredor);

// vacío los campos //
	document.querySelector("#nombre").value = "";
	document.querySelector("#apellido").value = "";
	document.querySelector("#participante").value = "";
	document.querySelector("#tiempo").value = "";
}




// función 2 mostrar resultados //
// segundo listener para funcion resultados //
let boton = document.querySelector("#resultados");
boton.addEventListener("click", function() {
	resultados();
});

function resultados() {

	let menorTiempo = corredores[0].tiempo;
	let ganador = corredores[0];

//uso un For para recorrer propiedad .tiempo dentro del array y obtener resutados //
	for(i=1;i<corredores.length;i++) {
		if(corredores[i].tiempo<menorTiempo) {
			ganador=(corredores[i]);
		}
	}

	let sumaTiempo = 0;
	for(i=0;i<corredores.length;i++) {
		sumaTiempo +=Number(corredores[i].tiempo);
		console.log(sumaTiempo);
	}

	let promedio = sumaTiempo/corredores.length;


	let sumaMenoresPromedio = 0;
	for(i=0;i<corredores.length;i++) {
		if(corredores[i].tiempo<promedio) {
			sumaMenoresPromedio++;
		}
	}

	let porcentaje = Number((sumaMenoresPromedio*100)/corredores.length);

	let verResultados = "<div>" + 
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
	mostrarResultados.innerHTML = verResultados;

}