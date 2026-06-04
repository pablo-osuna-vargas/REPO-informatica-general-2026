let masPupitres = document.querySelector(".masPupitres");
let menosPupitres = document.querySelector(".menosPupitres");
let faltaComprar = document.querySelector(".faltaComprar");
let maxCantPupitres = 400;

let capturarElemento = document.querySelector("form");
let lecturaValores = capturarElemento.addEventListener("submit", function(e) {
	e.preventDefault();
	
	let cantidad001 = Number(document.querySelector("#aula001").value);
	let cantidad101 = Number(document.querySelector("#aula101").value);
	let cantidad201 = Number(document.querySelector("#aula201").value);
	let cantidad301 = Number(document.querySelector("#aula301").value);
	let cantidad501 = Number(document.querySelector("#aula501").value);

	let mayorCant = Math.max(cantidad001, cantidad101, cantidad201, cantidad301, cantidad501);
	let menorCant = Math.min(cantidad001, cantidad101, cantidad201, cantidad301, cantidad501);

	switch(mayorCant) {
		case cantidad001:
			masPupitres.innerHTML = "el aula con mas pupitres es: Aula 001 con " + mayorCant + " pupitres";
		break;
		case cantidad101:
			masPupitres.innerHTML = "el aula con mas pupitres es: Aula 101 con " + mayorCant + " pupitres";
		break;
		case cantidad201:
			masPupitres.innerHTML = "el aula con mas pupitres es: Aula 201 con " + mayorCant + " pupitres";
		break;
		case cantidad301:
			masPupitres.innerHTML = "el aula con mas pupitres es: Aula 301 con " + mayorCant + " pupitres";
		break;
		case cantidad501:
			masPupitres.innerHTML = "el aula con mas pupitres es: Aula 501 con " + mayorCant + " pupitres";
		break;
		default:
			masPupitres.innerHTML = "error";
	}


	switch(menorCant) {
		case cantidad001:
			menosPupitres.innerHTML = "el aula con menos pupitres es: Aula 001 con " + menorCant + " pupitres";
		break;
		case cantidad101:
			menosPupitres.innerHTML = "el aula con menos pupitres es: Aula 101 con " + menorCant + " pupitres";
		break;
		case cantidad201:
			menosPupitres.innerHTML = "el aula con menos pupitres es: Aula 201 con " + menorCant + " pupitres";
		break;
		case cantidad301:
			menosPupitres.innerHTML = "el aula con menos pupitres es: Aula 301 con " + menorCant + " pupitres";
		break;
		case cantidad501:
			menosPupitres.innerHTML = "el aula con menos pupitres es: Aula 501 con " + menorCant + " pupitres";
		break;
		default:
			menosPupitres.innerHTML = "error";
	}


	let totalCant = cantidad001 + cantidad101 + cantidad201 + cantidad301 + cantidad501;

	if(totalCant<maxCantPupitres) {
		let cantComprar = maxCantPupitres-totalCant;
		let faltaComprar = document.querySelector(".faltaComprar");
		faltaComprar.innerHTML = "para que todas las aulas tengan 80 pupitres hace falta comprar " + cantComprar + " pupitres más";
	}

});