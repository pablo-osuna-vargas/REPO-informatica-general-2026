// Captura de elementos globales
let mostrarCoincidencias = document.querySelector("#mostrarCoincidencias");
let selectNumero = document.querySelector("#numero");
let botonApostar = document.querySelector("#apostar");
let botonReset = document.querySelector("#borrar");

// Función para tirar los dados y mostrar imágenes
function tirarDados() {
    let dadosTirados = [];
    for (let i=0; i<5; i++) {
        let numAzar = Math.floor(Math.random()*6)+1;
        dadosTirados.push(numAzar);
        let img = document.querySelector("#imagen" + (i+1));
        img.src = "img/" + numAzar + ".jpeg";
        img.style.border = "none"; // limpiar estilos previos
    }
    return dadosTirados; // devuelve el array con los números
}

// Función para contar coincidencias y marcar imágenes
function contarCoincidencias(dadosTirados, numeroElegido) {
    let coincidencias = 0;
    for (let i=0; i<dadosTirados.length; i++) {
        if (dadosTirados[i] === numeroElegido) {
            coincidencias++;
            document.querySelector("#imagen" + (i+1)).style.border = "1rem solid green";
        }
    }
    return coincidencias; // devuelve el número de coincidencias
}

// Función principal de juego
function jugar() {
    let numeroElegido = Number(selectNumero.value);

    if (numeroElegido) {
        let dadosTirados = tirarDados();
        let coincidencias = contarCoincidencias(dadosTirados, numeroElegido);

        if (coincidencias > 0) {
            mostrarCoincidencias.innerText = coincidencias + " dados coinciden con tu apuesta!";
        } else {
            mostrarCoincidencias.innerText = "ningún dado coincide con tu apuesta!";
        }
    } else {
        mostrarCoincidencias.innerText = "Por favor, selecciona un número antes de apostar.";
    }
}

// Función de reset
function resetear() {
    mostrarCoincidencias.innerText = "";
    for (let i=0; i<5; i++) {
        let img = document.querySelector("#imagen" + (i+1));
        img.src = "";
        img.style.border = "none";
    }
}

// Listeners
botonApostar.addEventListener("click", jugar);
botonReset.addEventListener("click", resetear);


// NOTA IA: claramente ambas soluciones de IA son mas amables para el usuario y ademas el uso de funciones simplifica el script pero es necesario una abstracción mucho mayor del orden y ejecución de las mismas //