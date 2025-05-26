import { cargarDatos } from "./Data.js";

let propiedadesTodas = [];
let propiedadesFiltradas = [];

let limite = 10;
let desde = 0;
let paginas = 0;
let paginaActiva = 1;
let arreglo = [];

function inicializar() {
    if (!localStorage.getItem("propiedadesData")) {
        propiedadesTodas = cargarDatos();
    } else {
        propiedadesTodas = JSON.parse(localStorage.getItem("propiedadesData"));
    }
    
    propiedadesFiltradas = [...propiedadesTodas];
    reiniciarPaginacion();
    mostrarResultados();
    configurarBotones();
}

function reiniciarPaginacion() {
    desde = 0;
    paginaActiva = 1;
    paginas = Math.ceil(propiedadesFiltradas.length / limite);
    arreglo = propiedadesFiltradas.slice(desde, limite);
}

function configurarBotones() {
    const btnBuscar = document.querySelector('#buscar');
    btnBuscar.addEventListener('click', buscarConLoading);
    
    const btnLimpiar = document.querySelector('#limpiar');
    btnLimpiar.addEventListener('click', limpiarFiltros);
    
    const inputBuscar = document.querySelector('input[name="buscador"]');
    inputBuscar.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            buscarConLoading();
        }
    });
}

function buscarConLoading() {
    mostrarLoading();
    
    const promesaBusqueda = new Promise((resolve) => {
        setTimeout(() => {
            const resultados = hacerBusqueda();
            resolve(resultados);
        }, 2000);
    });
    
    promesaBusqueda.then((resultados) => {
        propiedadesFiltradas = resultados;
        reiniciarPaginacion();
        mostrarResultados();
        ocultarLoading();
    });
}

function hacerBusqueda() {
    const categoria = document.querySelector('select[name="categoria"]').value;
    const estrato = document.querySelector('#estrato').value;
    const textoBusqueda = document.querySelector('input[name="buscador"]').value;
    
    let resultados = [...propiedadesTodas];
    
    if (categoria !== 'seleccione') {
        resultados = resultados.filter(propiedad => {
            return propiedad.Categoria.toLowerCase() === categoria.toLowerCase();
        });
    }
    
    if (estrato !== 'seleccione') {
        const numeroEstrato = parseInt(estrato.replace('Estrato ', ''));
        resultados = resultados.filter(propiedad => {
            return propiedad.Estrato === numeroEstrato;
        });
    }
    
    if (textoBusqueda.trim() !== '') {
        const texto = textoBusqueda.toLowerCase();
        resultados = resultados.filter(propiedad => {
            return propiedad.Nombre.toLowerCase().includes(texto) ||
                   propiedad.Barrio.toLowerCase().includes(texto) ||
                   propiedad.Direccion.toLowerCase().includes(texto) ||
                   propiedad.CodigoVivienda.toLowerCase().includes(texto);
        });
    }
    
    return resultados;
}

const cargarItemPaginacion = () => {
    document.querySelector("#items-pagination").innerHTML = "";
    for (let index = 0; index < paginas; index++) {
        const itemPaginacion = document.createElement("li");
        itemPaginacion.classList.add("page-item");
        
        if (index + 1 === paginaActiva) {
            itemPaginacion.classList.add("active");
        }
        
        itemPaginacion.innerHTML = `<a href="#" class="page-link" onclick="pasarPagina(${index})">${
            index + 1
        }</a>`;
        document.querySelector("#items-pagination").appendChild(itemPaginacion);
    }
};

const modificarArregloItems = () => {
    arreglo = propiedadesFiltradas.slice(desde, desde + limite);
    cargarInmuebles();
    cargarItemPaginacion();
};

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

function mostrarLoading() {
    const contenedor = document.querySelector('.items-table');
    contenedor.innerHTML = `
        <div style="text-align: center; padding: 50px;">
            <div style="
                width: 40px; 
                height: 40px; 
                border: 4px solid #f3f3f3; 
                border-top: 4px solid #007bff; 
                border-radius: 50%; 
                animation: girar 1s linear infinite;
                margin: 0 auto 20px;
            "></div>
            <h3>Cargando...</h3>
            <p>Buscando propiedades...</p>
        </div>
        <style>
            @keyframes girar {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;
    document.querySelector('.nav-pagination').style.display = 'none';
}

function ocultarLoading() {
    document.querySelector('.nav-pagination').style.display = 'block';
}

function cargarInmuebles() {
    const contenedor = document.querySelector('.items-table');
    
    if (arreglo.length === 0) {
        contenedor.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h3>No se encontraron propiedades</h3>
                <p>Intente con otros filtros</p>
            </div>
        `;
        return;
    }
    
    let tablaHTML = `
        <article class="table-result">
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Categoría</th>
                        <th>Estrato</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    arreglo.forEach(propiedad => {
        tablaHTML += `
            <tr>
                <td>${propiedad.CodigoVivienda}</td>
                <td>${propiedad.Nombre}</td>
                <td>
                    <img src="../img/${propiedad.Imagen}" 
                         alt="${propiedad.Nombre}" 
                         style="width: 150px; height: 100px;">
                </td>
                <td>${propiedad.Categoria}</td>
                <td>Estrato ${propiedad.Estrato}</td>
                <td>${formatearPrecio(propiedad.Precio)}</td>
            </tr>
        `;
    });
    
    tablaHTML += `
                </tbody>
            </table>
        </article>
    `;
    
    contenedor.innerHTML = tablaHTML;
}

function mostrarResultados() {
    cargarInmuebles();
    cargarItemPaginacion();
}

function formatearPrecio(precio) {
    return '$' + precio.toLocaleString('es-CO');
}

function limpiarFiltros() {
    document.querySelector('select[name="categoria"]').value = 'seleccione';
    document.querySelector('#estrato').value = 'seleccione';
    document.querySelector('input[name="buscador"]').value = '';
    
    propiedadesFiltradas = [...propiedadesTodas];
    reiniciarPaginacion();
    mostrarResultados();
}

document.addEventListener('DOMContentLoaded', inicializar);
