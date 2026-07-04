// 1er MOMENTO //
// capturas iniciales de form, salida de datos y recarga //
let compras = [];

let form = document.querySelector("#form");
let salida = document.querySelector("#resultados");
let recargarPagina = document.querySelector("#recargarPagina");
recargarPagina.addEventListener("click", function(){
	location.reload();
});

// unico listener para carga, validación, pusheo y vaciamiento de campos //
let botonCargarItem = document.querySelector("#cargarItem");
botonCargarItem.addEventListener("click", function(e){
	e.preventDefault();

	let item = document.querySelector("#item").value;
	let precio = Number(document.querySelector("#precio").value);
	// como medio de pago es un radio, al ser varias opciones creo un array vacío para llenarlo con el valor elegido, luego recorro el array con forEach y asigno el valor checked true a la variable vacía //
	let medioDePago = "";
	let radios = [
			document.querySelector("#efectivo"),
			document.querySelector("#debito"),
			document.querySelector("#credito"),
			];

	radios.forEach(function(radio) {
		if(radio.checked) {
			medioDePago = radio.value;
			}
		});

// si no cumple alguna validación se corta el ingreso y devuelve false, si pasa validación devuelve true y pushea al array inicial compras//
	function validarCampos() {
		if(item === "" || !isNaN(item)) {
			alert("ingrese un item válido");
			return false;
		}
		if(precio <= 0 || isNaN(precio)) {
			alert("ingrese un precio válido");
			return false;
		}
		if(medioDePago === "") {
			alert("por favor seleccione una opción de pago");
			return false;
		}

		return true;
	}

// creo el objeto //
	let objetoCompra = {
		item: item,
		precio: precio,
		medioDePago: medioDePago
	};

// si pasó validación pushea //
	if(validarCampos()) {
		compras.push(objetoCompra);
	}
// muestro por consola el contenido del array inicial compras //
	console.log(compras);

// vaciar campos //
	document.querySelector("#item").value = "";
	document.querySelector("#precio").value = "";
	document.querySelector("#efectivo").checked = false;
	document.querySelector("#debito").checked = false;
	document.querySelector("#credito").checked = false;
});

// 2do MOMENTO //
// cálculos y muestra de resultados (3er MOMENTO incluido) //
// cálculos a) //

let calcularTotalCompra = document.querySelector("#calcularTotalCompra");
calcularTotalCompra.addEventListener("click", function(e){
	e.preventDefault();

	let totalEfectivo = 0;
	let totalDebito = 0;
	let totalCredito = 0;

	// cálculos b) //
	let masCaro = compras[0];
	let menosCaro = compras[0];

	// cálculos c) //
	let efectivoMayor20k = 0;

	// a) //
	compras.forEach(function(objeto) {
		if(objeto.medioDePago === "efectivo") {
			totalEfectivo += objeto.precio;
		} else if(objeto.medioDePago === "debito") {
			totalDebito += objeto.precio;
			} else if(objeto.medioDePago === "credito") {
				totalCredito += objeto.precio;
				}
	// b) //
		if(objeto.precio > masCaro.precio) {
			masCaro = objeto;
		} else if(objeto.precio < menosCaro.precio) {
			menosCaro = objeto;
		}

	// c) //
		if(objeto.medioDePago === "efectivo" && objeto.precio > 20000) {
			efectivoMayor20k ++;
		}
	});

// mostrar Resultados //
salida.innerHTML = `<p>Resumen de compras</p>
	<ul>
	<li>Total efectivo: $${totalEfectivo}</li>
	<li>Total débito: $${totalDebito}</li>
	<li>Total crédito: $${totalCredito}</li>
	<li>Item más caro: ${masCaro.item}, $${masCaro.precio}</li>
	<li>Item más barato: ${menosCaro.item}, $${menosCaro.precio}</li>
	<li>Compras mayores a $20000: ${efectivoMayor20k}</li>`
});