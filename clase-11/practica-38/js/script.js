// Definiciones y capturas asi lee al iniciar todo lo que va a usar en el orden correcto //
let equipamiento = [];
let form = document.querySelector("#carga");
let descripcion = document.querySelector("#descripcion");
let estado = document.querySelector("#estado");
let botonCargar = document.querySelector("#cargarEquipo");
let botonEnviar = document.querySelector("#enviarDatos");
let pedidos = document.querySelector("#pedidos");
pedidos.style.display = "none";
let listaDisponible = document.querySelector("#lista");
listaDisponible.style.display = "none";

let cargaFinalizada = false;

let recargar = document.querySelector("#recargar");
recargar.addEventListener("click", function(e){
  e.preventDefault();
  location.reload();
})

// 1er momento: carga de equipos y muestra disponibilidad //
botonCargar.addEventListener("click", function(e){
  e.preventDefault();

  let objetoEquipo = {
    descripcion: document.querySelector("#descripcion").value,
    estado: document.querySelector("#estado").value,
  }

  equipamiento.push(objetoEquipo);

  document.querySelector("#descripcion").value = "";
  document.querySelector("#estado").value = "";
  console.log(equipamiento);
})

botonEnviar.addEventListener("click", function(e){
  e.preventDefault();
  cargaFinalizada = true;
  pedidos.disabled = false;
  pedidos.style.display = "block";

  listaDisponible.disabled = false;
  listaDisponible.style.display = "block";
  listaDisponible.innerHTML = ""; // limpio la lista para cargar solo los datos nuevos ingresados //
    equipamiento.forEach(function(equipamiento){
    listaDisponible.innerHTML += `<li>${equipamiento.descripcion}, ${equipamiento.estado}</li>`;
  });
})


// 2do momento: pedido y validacion de disponibilidad //
let pedidosArray = [];
let cargarPedido = document.querySelector("#cargarPedido");
let enviarPedido = document.querySelector("#enviarPedido");
let prestado = false;
let cargaFinalizadaPedido = false;
let mostrarInfo = document.querySelector("#mostrarInfo");
mostrarInfo.style.display = "none";
let mas5 = 0;

cargarPedido.addEventListener("click", function(e){
  e.preventDefault();

  let objetoPedido = {
      equipoDescripcion: document.querySelector("#equipoDescripcion").value,
      dias: Number(document.querySelector("#prestamoTiempo").value)
    }

  pedidosArray.push(objetoPedido);

  document.querySelector("#equipoDescripcion").value = "";
  document.querySelector("#prestamoTiempo").value = "";
  console.log(pedidosArray);
});

enviarPedido.addEventListener("click", function(e){
  e.preventDefault();
  cargaFinalizadaPedido = true;
  mostrarInfo.disabled = false;
  mostrarInfo.style.display = "block";
  mostrarInfo.innerHTML = ""; // limpio la lista para cargar solo los datos nuevos ingresados //

// recorro array de pedidos y creo variable para buscar en el array de equipos declarados //
for(i = 0; i < pedidosArray.length; i++) {
  let buscado = pedidosArray[i];
  let encontrado = false;

    if(pedidosArray[i].dias > 5) {
      mas5++;
      console.log(mas5);
    }

    for(j = 0; j < equipamiento.length; j++) {
    // dos IF anidados para ejecutar una busqueda, y si se encuentra el item actualizar estado de inventario //
    if(equipamiento[j].descripcion === buscado.equipoDescripcion) {
      encontrado = true;
      if(equipamiento[j].estado === "no-prestado") {
        equipamiento[j].estado = "prestado";
      }
      console.log(`${buscado.equipoDescripcion} esta prestado por ${buscado.dias} días`);
    } 

    if(equipamiento[j].estado = "prestado") {
      alert("el equipo solicitado se encuentra prestado actualmente");
      return;
    } 
  }
};
    
  pedidosArray.forEach(function(pedidosArray){
  mostrarInfo.innerHTML += `<li>${pedidosArray.equipoDescripcion}, x ${pedidosArray.dias} días</li>
  <li>${mas5} equipos fueron pedidos x más de 5 días</li>
  <li>${pedidosArray[i].equipoDescripcion} fueron prestados`
  });
});