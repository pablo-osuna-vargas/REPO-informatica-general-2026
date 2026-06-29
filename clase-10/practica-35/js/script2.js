// Interacción con el article de páginas secundarias //
const fondoArticle = document.querySelector(".secundaria");
  fondoArticle.addEventListener("mouseover", function() {
  fondoArticle.style.backgroundColor = "lightblue";
});

  fondoArticle.addEventListener("mouseout", function() {
  fondoArticle.style.backgroundColor = "";
});