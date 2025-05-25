// Registro de Productos

function verificarNombre(nombre) {
  if (nombre.length == 0) {
    window.alert("El nombre del Inmueble no puede estar vacío");
    return false;
  } else if (nombre.length > 20) {
    window.alert("El nombre del Inmueble no puede tener más de 20 caracteres");
    return false;
  } else {
    return true;
  }
}

// FUNCIÓN DE VALIDACIÓN COMPLETA
function validarTodosLosCampos( nombre, categoria, estrato,precio, direccion, barrio, imagen) {
  // Validar nombre
  if (!verificarNombre(nombre)) {
    return false;
  }

  // Validar categoría
  if (!categoria || categoria === "seleccione") {
    window.alert("Debe seleccionar una categoría");
    return false;
  }

  // Validar Imagen
  if (!imagen || imagen === "seleccione") {
    window.alert("Debe seleccionar una imagen");
    return false;
  }

  // Validar estrato
  if (!estrato || estrato < 1 || estrato > 5 || estrato=== "seleccione") {
    window.alert("El estrato debe ser entre 1 y 5");
    return false;
  }

  // Validar precio
  if (!precio || isNaN(precio) || parseInt(precio) <= 0) {
    window.alert("El precio debe ser un número mayor a 0");
    return false;
  }

  // Validar dirección
  if (!direccion || direccion.trim().length < 5) {
    window.alert("La dirección debe tener al menos 5 caracteres");
    return false;
  }

  // Validar barrio
  if (!barrio || barrio.trim().length === 0) {
    window.alert("El barrio no puede estar vacío");
    return false;
  }

  return true;
}

function validarCodigoProducto(codigo) {
    // Limpiar espacios en blanco
    codigo = codigo.trim();
    
    // 1. Validar que no esté vacío
    if (codigo.length === 0) {
        window.alert("El código del producto no puede estar vacío");
        return false;
    }
    
    // 2. Validar mínimo 8 caracteres
    if (codigo.length < 8) {
        window.alert("El código debe tener mínimo 8 caracteres");
        return false;
    }
    
    // 3. Validar que tenga al menos una minúscula
    if (!/[a-z]/.test(codigo)) {
        window.alert("El código debe tener al menos una letra minúscula");
        return false;
    }
    
    // 4. Validar que tenga al menos una mayúscula  
    if (!/[A-Z]/.test(codigo)) {
        window.alert("El código debe tener al menos una letra mayúscula");
        return false;
    }
    
    // 5. Validar que tenga mínimo 2 números
    const numeros = codigo.match(/\d/g);
    if (!numeros || numeros.length < 2) {
        window.alert("El código debe tener mínimo 2 números");
        return false;
    }
    
    const productos = JSON.parse(localStorage.getItem("propiedadesData")) || [];
    if (productos.some(p => p.CodigoVivienda === codigo)) {
        window.alert("Ya existe una propiedad con ese código");
        return false;
    }
    
    return true; 
}


function registrar() {
  // Prevenir el comportamiento por defecto del formulario (que recargue la página)
  event.preventDefault();

  const nombreProducto = document.querySelector(
    'input[name="nombre_producto"]'
  ).value;
  const categoria = document.getElementById("categoria").value;
  const estrato = document.getElementById("estrato").value;
  const imagen = document.getElementById("imagen").value;
  const codigo = document.querySelector('input[name="Codigo"]').value;
  const precio = document
    .querySelector('input[name="precio"]')
    .value.replace(/\./g, "")
    .replace(/,/g, "");
  // Eliminar los puntos y comas del precio
  const direccion = document.querySelector('input[name="dirrecion"]').value;
  const barrio = document.querySelector('input[name="barrio"]').value;

  const producto = {
    Nombre: nombreProducto,
    Categoria: categoria,
    Estrato: estrato,
    Imagen: imagen,
    CodigoVivienda: codigo,
    Precio: precio,
    Direccion: direccion,
    Barrio: barrio,
  };

  if(!validarTodosLosCampos( nombreProducto, categoria, estrato,precio, direccion, barrio, imagen)){
    window.location.replace("../index.html");
    return; // Si la validación falla, no continuar con el registro
  } else{
    window.location.replace("../pages/listadoDeProductos.html");
  }

  if(!validarCodigoProducto(codigo)){
    return;
  }

  // Guardar el producto en el localStorage
  let productos = JSON.parse(localStorage.getItem("propiedadesData")) || [];
  productos.push(producto);
  localStorage.setItem("propiedadesData", JSON.stringify(productos));
  window.alert("Producto registrado correctamente");
  // Limpiar el formulario
  limpiar();
  console.log(producto);
}

function limpiar() {
  document.querySelector('input[name="nombre_producto"]').value = "";
  document.getElementById("categoria").value = "";
  document.getElementById("estrato").value = "";
  document.getElementById("imagen").value = "";
  document.querySelector('input[name="Codigo"]').value = "";
  document.querySelector('input[name="precio"]').value = "";
  document.querySelector('input[name="dirrecion"]').value = "";
  document.querySelector('input[name="barrio"]').value = "";
}
