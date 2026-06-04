//capturo botón de tirar dado y la imagen a cambiar//
let tirarDado = document.querySelector("#tirarDado");
let dado = document.querySelector("#dado");

// al cliquear botón sale numero al azar del 1 al 6 //
tirarDado.addEventListener("click", function() {
	let numAzar = Math.floor(Math.random()*6)+1;	
	
	console.log(numAzar);
	
	switch(numAzar) {
		case 1:
		dado.src = "img/1.jpeg";
		break;

		case 2:
		dado.src = "img/2.jpeg";
		break;
		
		case 3:
		dado.src = "img/3.jpeg";
		break;
		
		case 4:
		dado.src = "img/4.jpeg";
		break;
		
		case 5:
		dado.src = "img/5.jpeg";
		break;
		
		case 6:
		dado.src = "img/6.jpeg";
		break;
		
		default:
		dado.src = "img/dados.jpeg";
	}

});