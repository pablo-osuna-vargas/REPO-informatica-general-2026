// 1. Interacción con el título
const titulo = document.querySelector("h1");
titulo.addEventListener("click", function() {
  titulo.style.color = "red";
  titulo.innerText = "¡Título clickeado!";
});

// 2. Interacción con el primer párrafo
const parrafo = document.querySelector("p");
parrafo.addEventListener("dblclick", function() {
  parrafo.style.color = "black";
  parrafo.style.backgroundColor = "lightyellow";
  parrafo.innerText = "Texto cambiado con doble clic";
  parrafo.style.fontSize = "2rem";
});

// 3. Interacción con el primer bloque (ejemplo: el primer div)
const bloque = document.querySelector("div");
bloque.addEventListener("mouseover", function() {
  bloque.style.backgroundColor = "lightblue";
});

bloque.addEventListener("mouseout", function() {
  bloque.style.backgroundColor = "";
});
