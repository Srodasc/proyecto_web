import { cargarDatos } from "./Data.js";

let data = [];

function cargarInformacion() {
  if (window.localStorage.getItem("propiedadesData") === null) {
    data = cargarDatos(); // CORREGIDO: Asignar el resultado de la función
    console.log(data);
  } else {
    data = JSON.parse(window.localStorage.getItem("propiedadesData"));
    console.log(data);
  }
}

cargarInformacion();

const formatearPrecio = (precio) => {
  return '$' + precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

//Listado de Productos

const cuerpoCards = document.querySelector(".items");

//variables para la paginacion

let limite = 15;
let desde = 0;
let paginas = data.length / limite;
let paginaActiva = 1;

let arreglo = data.slice(desde, limite);
//console.log(arreglo);

const cargarInmuebles = () => {
  cuerpoCards.innerHTML = "";
  arreglo.map((item) => {
    const card = document.createElement("article");
    const cardHTML = `
    <article class="card">
      <div class="card-header">
        <img src="../img/${item.Imagen}" alt="${item.Nombre}">
      </div>
      <div class="card-body">
        <ul>
          <li><strong>Código:</strong> ${item.CodigoVivienda}</li>
          <li><strong>Nombre:</strong> ${item.Nombre}</li>
          <li><strong>Estrato:</strong> ${item.Estrato}</li>
          <li><strong>Barrio:</strong> ${item.Barrio}</li>
          <li><strong>Dirección:</strong> ${item.Direccion}</li>
          <li><strong>Precio:</strong>  ${formatearPrecio(item.Precio)}</li>
        </ul>
      </div>
    </article>
    `;
    card.innerHTML = cardHTML;
    cuerpoCards.appendChild(card);
  });
};

cargarInmuebles();

const cargarItemPaginacion = () => {
  document.querySelector("#items-pagination").innerHTML = "";
  for (let index = 0; index < paginas; index++) {
    const itemPaginacion = document.createElement("li");
    itemPaginacion.classList.add("page-item");
    itemPaginacion.innerHTML = `<a href="#" class="page-link" onclick="pasarPagina(${index})">${
      index + 1
    }</a>`;
    document.querySelector("#items-pagination").appendChild(itemPaginacion);
  }
};

const modificarArregloItems = () => {
  arreglo = data.slice(desde, desde + limite); // CORREGIDO: desde + limite, no limite * paginaActiva
  cargarInmuebles();
  cargarItemPaginacion(); // AGREGADO: Para actualizar el indicador de página activa
};

cargarItemPaginacion();

// Función para pasar de página
window.pasarPagina = (pagina) => {
  paginaActiva = pagina + 1;
  desde = pagina * limite;
  modificarArregloItems();
};

window.nextPage = () => {
  if (paginaActiva < paginas) {
    paginaActiva++;
    desde += limite;
    modificarArregloItems();
  }
};

window.prevPage = () => {
  if (paginaActiva > 1) {
    paginaActiva--;
    desde -= limite;
    modificarArregloItems();
  }
};

