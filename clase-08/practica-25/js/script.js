// capturo el elemento HTML que voy a usar //
let mostrar = document.querySelector("form");

// uso un Listener para escuchar cuando cliqueen el submit //
mostrar.addEventListener("submit", function(e) {
	e.preventDefault();

// capturo los datos que necesito //
	let nombre = document.querySelector("#nombre").value; 
	let edad = document.querySelector("#edad").value;
	let genero = document.querySelector("#genero").value;

// capturo dos párrafos e ingreso un texto interno para recomendar y despedir // 
	let recomendacion = document.querySelector("#recomendacion");
	let despedida = document.querySelector("#despedida");

	let suspensoMayor = "A"; 
	let comediaMayor = "B";
	let dramaMayor = "C";
	let accionMayor = "D";
	let cienciaMayor = "E";

	let suspensoMenor = "1"; 
	let comediaMenor = "2";
	let dramaMenor = "3";
	let accionMenor = "4";
	let cienciaMenor = "5";

	if(edad>18) {
		switch(genero) {
		case "suspenso":
			recomendacion.innerText = "Nuestra selección de hoy para vos es: " + suspensoMayor;
			despedida.innerText = "Gracias " + nombre + " por confiar en nuestra web" + "\n" + "Te esperamos de vuelta!"
			break;
		case "comedia":
			recomendacion.innerText = "Nuestra selección de hoy para vos es: " + comediaMayor;
			despedida.innerText = "Gracias " + nombre + " por confiar en nuestra web" + "\n" + "Te esperamos de vuelta!"
			break;
		case "drama":
			recomendacion.innerText = "Nuestra selección de hoy para vos es: " + dramaMayor;
			despedida.innerText = "Gracias " + nombre + " por confiar en nuestra web" + "\n" + "Te esperamos de vuelta!"
			break;
		case "accion":
			recomendacion.innerText = "Nuestra selección de hoy para vos es: " + accionMayor;
			despedida.innerText = "Gracias " + nombre + " por confiar en nuestra web" + "\n" + "Te esperamos de vuelta!"
			break;
		case "ciencia":
			recomendacion.innerText = "Nuestra selección de hoy para vos es: " + cienciaMayor;
			despedida.innerText = "Gracias " + nombre + " por confiar en nuestra web" + "\n" + "Te esperamos de vuelta!"
			break;
		default:
			recomendacion.innerText = "por favor ingresá un número para tu edad";
			despedida.innerText = "Gracias por confiar en nuestra web" + "\n" + "Te esperamos de vuelta!"
		}
	} else if(edad<18) {
		switch(genero) {
		case "suspenso":
			recomendacion.innerText = "Nuestra selección de hoy para vos es: " + suspensoMayor;
			despedida.innerText = "Gracias " + nombre + " por confiar en nuestra web" + "\n" + "Te esperamos de vuelta!"
			break;
		case "comedia":
			recomendacion.innerText = "Nuestra selección de hoy para vos es: " + comediaMayor;
			despedida.innerText = "Gracias " + nombre + " por confiar en nuestra web" + "\n" + "Te esperamos de vuelta!"
			break;
		case "drama":
			recomendacion.innerText = "Nuestra selección de hoy para vos es: " + dramaMayor;
			despedida.innerText = "Gracias " + nombre + " por confiar en nuestra web" + "\n" + "Te esperamos de vuelta!"
			break;
		case "accion":
			recomendacion.innerText = "Nuestra selección de hoy para vos es: " + accionMayor;
			despedida.innerText = "Gracias " + nombre + " por confiar en nuestra web" + "\n" + "Te esperamos de vuelta!"
			break;
		case "ciencia":
			recomendacion.innerText = "Nuestra selección de hoy para vos es: " + cienciaMayor;
			despedida.innerText = "Gracias " + nombre + " por confiar en nuestra web" + "\n" + "Te esperamos de vuelta!"
			break;
		default:
			recomendacion.innerText = "por favor ingresá un número para tu edad";
			despedida.innerText = "Gracias por confiar en nuestra web" + "\n" + "Te esperamos de vuelta!"
		}
	}
})