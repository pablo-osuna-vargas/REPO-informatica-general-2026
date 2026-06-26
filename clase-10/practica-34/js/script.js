// DEFINICIONES y CAPTURAS //
let obras = [
	
	{
		autor: "Guillermo Kuitca",
		titulo: "15 January 2015 – 7 January 2016",
		año: 2016,
		imagen: "img/kuitca-1.jpg"
	},

	{
		autor: "Guillermo Kuitca",
		titulo: "Bayreuth Festspielhaus",
		año: 2013,
		imagen: "img/kuitca-2.jpg"
	},

	{
		autor: "Guillermo Kuitca",
		titulo: "Nocturnes (Left-handed School Desks)",
		año: 2002,
		imagen: "img/kuitca-3.jpg"
	},

	{
		autor: "Guillermo Kuitca",
		titulo: "Untitled (Teatro Real)",
		año: 2013,
		imagen: "img/kuitca-4.jpg"
	},

	{
		autor: "Guillermo Kuitca",
		titulo: "Double Eclipse",
		año: 2013,
		imagen: "img/kuitca-5.jpg"
	},
]

let galeria1 = document.querySelector("#galeria1");

for (let i=0;i<obras.length;i++) {
	let exhibit = "<div><p>" + obras[i].titulo + "<br>";
	exhibit += "<img src=" + obras[i].imagen + " " + "alt=" + "kuitca-" + i + ">";
	exhibit += "</p></div>";
	
	galeria1.innerHTML += exhibit;

	console.log(obras);
}


let botonMostrar = document.querySelector("#mostrarMas");
botonMostrar.addEventListener("click", function() {
	mostrarMas();
})


// agrego al array nuevos objetos //
function mostrarMas() {
	let nueva1 = {
		autor: "Guillermo Kuitca",
		titulo: "The Family Idiot (Sleeper in the mirror)",
		año: 2019,
		imagen: "img/kuitca-6.jpg"
	}

	let nueva2 = {
		autor: "Guillermo Kuitca",
		titulo: "Pintura sin muros",
		año: 2023,
		imagen: "img/kuitca-7.jpg"
	}

	let nueva3 = {
		autor: "Guillermo Kuitca",
		titulo: "Untitled (covent Garden)",
		año: 2018,
		imagen: "img/kuitca-8.jpg"
	}

	let nueva4 = {
		autor: "Guillermo Kuitca",
		titulo: "Missing Pages",
		año: 2018,
		imagen: "img/kuitca-9.jpg"
	}

	let nueva5 = {
		autor: "Guillermo Kuitca",
		titulo: "The family idiot",
		año: 2019,
		imagen: "img/kuitca-10.jpg"
	}

	obras.push(nueva1,nueva2,nueva3,nueva4,nueva5);

for(i=5;i<obras.length;i++) {
	exhibit = "<div><p>" + obras[i].titulo + "<br>";
	exhibit += "<img src=" + obras[i].imagen + " " + "alt=" + "kuitca-" + i + ">";
	exhibit += "</p></div>";
	
	galeria2.innerHTML += exhibit;
	console.log(obras);
}

}