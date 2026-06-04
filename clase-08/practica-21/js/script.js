// damos la bienvenida y preguntamos por personalizacion
alert ("Hola! Bienvenido a nuestra web sibarita!");
let bienvenida = confirm ("querés personalizar tu experiencia?");

// si dan aceptar agrega el parrafo de bienvenida con el nombre, sino uno genérico
if(bienvenida) {
	let nombre = prompt ("decime tu nombre, por favor","");
	bienvenida = document.querySelector(".bienvenida");
	bienvenida.innerHTML += "Bienvenidx " + nombre + "!"
} else {
	bienvenida = document.querySelector(".bienvenida");
	bienvenida.innerHTML += "Bienvenidx a nuestra web sibarita";
}


// preguntamos por el cambio de estilo
let darkMode = confirm ("preferís el dark mode?");

// si acepta, cambia a dark mode de contraste
if(darkMode) {
	darkMode = document.querySelector(".instrucciones");
	darkMode.style.backgroundColor = "black";
	darkMode.style.color = "whitesmoke";
}


// pregunto x despedida
let despedida = prompt ("qué hora es para tu café..?","");

if(despedida >0 && despedida<=12) {
	despedida = document.querySelector(".despedida");
	despedida.innerHTML += "disfrutá tu café, que tengas un buen día!";
} else if(despedida >12 && despedida<18) {
	despedida = document.querySelector(".despedida");
	despedida.innerHTML += "disfrutá tu café, que tengas una tarde productiva!";
} else {
	despedida = document.querySelector(".despedida");
	despedida.innerHTML += "disfrutá tu café, buenas noches!";
}