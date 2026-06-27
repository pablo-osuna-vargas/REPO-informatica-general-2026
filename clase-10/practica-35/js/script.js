
// COMO LOGRO ESTO SÓLO EN LA PAGINA PRINCIPAL ????? //
// publicidad si, publicidad no //
alert("bienvenido a nuestra página!");
let siNo = confirm("este sitio puede mantenerse gracias a nuestros anunciantes, por favor confirmá si querés mantener la publicidad en vista");
 
if(siNo != false) {
  let publicidadNo = document.querySelector("#fijo");
  let publicidadNo2 =document.querySelector("#fijo2");
  publicidadNo.style.visibility = "hidden";
  publicidadNo2.style.visibility = "hidden";
}


// COMO LOGRO ESTO SÓLO EN PÁGINAS SECUNDARIAS ????? //
// Interacción con el article de páginas secundarias //
const fondoArticle = document.querySelector(".secundaria");
fondoArticle.addEventListener("mouseover", function() {
  fondoArticle.style.backgroundColor = "lightblue";
});

fondoArticle.addEventListener("mouseout", function() {
  fondoArticle.style.backgroundColor = "";
});