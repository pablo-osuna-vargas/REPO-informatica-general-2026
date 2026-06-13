// captura el parrafo de resultados //
let mostrarCoincidencias = document.querySelector("#mostrarCoincidencias");

// captura el boton apostar, le pone un listener al click //
// crea una variable para guardar el numero elegido y convierte a numero el string devuelto por la captura del value de la option seleccionada. Lo muestra en consola //
document.querySelector("#apostar").addEventListener("click", function() {
    let numeroElegido = Number(document.querySelector("#numero").value);
    console.log("Número elegido:", numeroElegido);

// si hay una selección genera un array vacio para llenar con un FOR la tirada de numeros al azar. Captura una imagen segun la posición "i+1" (arrays siempre empiezan en cero) y cambia su .src de acuerdo al valor al azar en dicha posición para mostrar una imagen de dicho numero. Limpia el estilo de borde que haya previamente (si lo hay) //  
    if (numeroElegido) {
        let dadosTirados = [];

        // Tirada de azar
        for (let i=0; i<5; i++) {
            let numAzar = Math.floor(Math.random()*6)+1;
            dadosTirados.push(numAzar);
            let img = document.querySelector("#imagen" + (i+1));
            img.src = "img/" + numAzar + ".jpeg";
            img.style.border = "none"; // limpiar estilos previos
        }

// inicia una variable contador, recorre el array de dados al azar y si alguna posición "i" contiene un valor estrictamente igual al numero elegido en select incrementa en 1 el contador. Captura una imagen de la misma forma que el FOR arriba y cambia su estilo de borde en la misma línea  //
        // Coincidencias
        let coincidencias = 0;
        for (let i=0; i<dadosTirados.length; i++) {
            if (dadosTirados[i] === numeroElegido) {
                coincidencias++;
                document.querySelector("#imagen" + (i+1)).style.border = "1rem solid green";
            }
        }

// usa la variable creada al inicio para poner el texto si las coincidencias son mayores que 0, de lo contrario significa que no hubo coincidencias //
        // Mostrar resultado
        if (coincidencias > 0) {
            mostrarCoincidencias.innerText = coincidencias + " dados coinciden con tu apuesta!";
        } else {
            mostrarCoincidencias.innerText = "ningún dado coincide con tu apuesta!";
        }

    // ELSE que se encuentra luego del IF de línea 11 (el que abre numero elegido, tirada y coincidencias), si no hubo selección pide nuevamente seleccionar una opción //
    } else {
        mostrarCoincidencias.innerText = "Por favor, selecciona un número antes de apostar.";
    }
});


// resetea todo con la captura del boton "borrar" y le agrega un listener al click para limpiar el innerText de coincidencias. Luego con un FOR recorre un contador de 5 posiciones, crea una variable que capture la imagen segun esta posición ("i+1"), limpia su .src y luego limpia su estilo de borde // 
// Reset
document.querySelector("#borrar").addEventListener("click", function() {
    mostrarCoincidencias.innerText = "";
    for (let i=0; i<5; i++) {
        let img = document.querySelector("#imagen" + (i+1));
        img.src = "";
        img.style.border = "none";
    }
});
