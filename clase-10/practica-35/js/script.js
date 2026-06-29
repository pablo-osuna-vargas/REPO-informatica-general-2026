// publicidad si, publicidad no //
alert("bienvenido a nuestra página!");
let siNo = confirm("este sitio puede mantenerse gracias a nuestros anunciantes, por favor confirmá si querés mantener la publicidad en vista");
 
if(siNo != false) {
  let publicidadNo = document.querySelector("#fijo");
  let publicidadNo2 =document.querySelector("#fijo2");
  publicidadNo.style.display = "none";
  publicidadNo2.style.display = "none";
}