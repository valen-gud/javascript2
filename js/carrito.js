let carrito = cargarCarrito();

//Secciones del HTML
let sectionArticulos= document.getElementById("section-articulos");
let sectionCarrito = document.getElementById("section-carrito");

//DOM
let totalCompra = document.createElement("div");
totalCompra.innerHTML = "<h2>Total: $</h2>";
sectionCarrito.appendChild(totalCompra);

let montoTotalCompra = document.createElement("h2");
montoTotalCompra.innerText = "0";
totalCompra.appendChild(montoTotalCompra);

let cantidadArticulos = document.createElement("div");
cantidadArticulos.innerHTML = "<h3>Articulos: </h3>";
sectionCarrito.appendChild(cantidadArticulos);

let cantArticulos = document.createElement("h3");
cantArticulos.innerText = "0";
cantidadArticulos.appendChild(cantArticulos);

let botonFinalizar = document.createElement("button");
botonFinalizar.innerText = "Comprar";
sectionCarrito.appendChild(botonFinalizar);
botonFinalizar.setAttribute("class", "boton");


//Boton de pago.
botonFinalizar.onclick = () => {
  const precioFinal = montoTotalCompra.innerText;
  //Estetica 
  Swal.fire({
    title: '¿Deseas finalizar tu compra?',
    text: `Total a pagar: $${precioFinal}`,
    showCancelButton: true,
    confirmButtonColor: '#008f39',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Compra confirmada',
        '¡Que lo disfrutes!',
        'success'
      )
      vaciarCarrito();
    }
  })
}


//Seccion de cartas
for (const Articulo of articulos) {
  let container = document.createElement("div");
  container.setAttribute("class", "cardArticulos");
  container.innerHTML = ` <div class="img-container">
                            <img src="${Articulo.foto}" alt="${Articulo.nombre}" class="imgArticulo"/>
                            </div>
                            <div class="infoArticulo">
                            <p class="font">${Articulo.nombre}</p>
                            <strong class="font">$${Articulo.precio}</strong>
                            <button class="boton" id="btn${Articulo.id}"> Agregar al carrito </button>
                            </div>`;
  sectionArticulos.appendChild(container);
  //Evento para que los articulos se agreguen al carrito al hacer click en el boton
  document.getElementById(`btn${Articulo.id}`).onclick = () => agregarAlCarrito(`${Articulo.id}`);
}



//Funciones
function agregarAlCarrito(id) {
  carrito.push(articulos.find(p => p.id == id));
  localStorage.setItem("carrito", JSON.stringify(carrito));
  calcularTotalCarrito();
}

function calcularTotalCarrito() {
  let total = 0;
  for (const Articulo of carrito) {
    total += Articulo.precio;
  }
  montoTotalCompra.innerText = total;
  cantArticulos.innerText = carrito.length;
}

function vaciarCarrito() {
  montoTotalCompra.innerText = "0";
  cantArticulos.innerText = "0";
  localStorage.clear();
  carrito = [];
}


function cargarCarrito() {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  if (carrito == null) {
    return [];
  } else {
    return carrito;
  }
}