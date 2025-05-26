# Stone Buldings SAS - Sistema de Gestión Inmobiliaria

![Logo de Stone Buldings SAS](img/logo.png)

## Descripción

Stone Buldings SAS es una aplicación web para la gestión de propiedades inmobiliarias. Permite a los usuarios visualizar, buscar y registrar propiedades de diferentes categorías, como apartamentos, casas, oficinas, locales comerciales, entre otros.

La aplicación está diseñada para facilitar la administración de un catálogo de propiedades inmobiliarias, proporcionando una interfaz intuitiva y funcional tanto para administradores como para clientes potenciales.

## Características Principales

- **Listado de Propiedades**: Visualización de todas las propiedades disponibles con paginación.
- **Búsqueda Avanzada**: Filtrado de propiedades por nombre, categoría, estrato y otros criterios.
- **Registro de Propiedades**: Formulario para añadir nuevas propiedades al sistema con validación de datos.
- **Información Detallada**: Visualización de detalles completos de cada propiedad, incluyendo imágenes, precio, ubicación, etc.
- **Interfaz Responsiva**: Diseño adaptable a diferentes dispositivos (escritorio, tablet, móvil).

## Tecnologías Utilizadas

- **HTML5**: Estructura de las páginas web.
- **CSS3**: Estilos y diseño responsivo (Grid, Flexbox).
- **JavaScript**: Funcionalidad dinámica del lado del cliente.
- **LocalStorage**: Almacenamiento de datos en el navegador.

## Estructura del Proyecto

```
/
├── index.html                  # Página principal con listado de propiedades
├── css/
│   ├── style.css               # Estilos generales
│   └── forms.css               # Estilos específicos para formularios
├── js/
│   ├── Data.js                 # Datos de propiedades y función para cargarlos
│   ├── listados.js             # Funcionalidad para el listado de propiedades
│   ├── buscador.js             # Funcionalidad para la búsqueda de propiedades
│   └── registro.js             # Funcionalidad para el registro de propiedades
├── img/
│   ├── logo.png                # Logo de la empresa
│   ├── img1.png                # Imágenes de propiedades
│   ├── img2.png
│   └── ...
└── pages/
    ├── buscadorInmuebles.html  # Página de búsqueda de propiedades
    ├── registroInmuebles.html  # Página de registro de propiedades
    └── IndicacionesDeInmuebles.html # Página de información y guías
```

## Instalación y Uso

1. **Clonar o descargar el repositorio**:
   ```
   git clone [URL del repositorio]
   ```

2. **Abrir el proyecto**:
   - Navegar hasta la carpeta del proyecto
   - Abrir el archivo `index.html` en un navegador web moderno

3. **Navegación**:
   - Usar los enlaces en la barra de navegación para acceder a las diferentes secciones
   - Explorar propiedades en la página principal
   - Utilizar la función de búsqueda para filtrar propiedades
   - Registrar nuevas propiedades mediante el formulario de registro

## Funcionalidades Detalladas

### Listado de Propiedades

- Muestra todas las propiedades disponibles en tarjetas con información básica
- Implementa paginación para navegar entre grupos de propiedades
- Cada tarjeta muestra imagen, código, nombre, estrato, barrio, dirección y precio

### Búsqueda de Propiedades

- Permite buscar por texto (nombre, barrio, dirección, código)
- Filtrado por categoría de propiedad
- Filtrado por estrato socioeconómico
- Resultados mostrados en formato de tabla con paginación
- Animación de carga durante la búsqueda

### Registro de Propiedades

- Formulario completo para ingresar todos los datos de la propiedad
- Validación de campos:
  - Nombre (no vacío, máximo 20 caracteres)
  - Categoría (selección obligatoria)
  - Estrato (entre 1 y 5)
  - Código (mínimo 8 caracteres, al menos una minúscula, una mayúscula y 2 números)
  - Precio (número mayor a 0)
  - Dirección (mínimo 5 caracteres)
  - Barrio (no vacío)
- Almacenamiento en LocalStorage para persistencia de datos

## Categorías de Propiedades

- Casas
- Apartamentos
- Penthouse
- Finca
- Oficina
- Local Comercial
- Bodega
- Lote
- Edificio
- Consultorio

## Requisitos para Publicar una Propiedad

Para registrar una propiedad en el sistema, se requiere la siguiente información:

- Nombre del Conjunto o Referencia
- Tipo de inmueble (categoría)
- Código único de la vivienda
- Dirección
- Barrio
- Estrato socioeconómico
- Precio
- Imagen de referencia

## Desarrollo

El proyecto está estructurado siguiendo buenas prácticas de desarrollo web:

- Separación de responsabilidades (HTML para estructura, CSS para estilos, JS para funcionalidad)
- Código modular y organizado
- Diseño responsivo para adaptarse a diferentes dispositivos
- Validación de datos en el lado del cliente
- Persistencia de datos mediante LocalStorage

## Licencia

© 2025 Stone Buldings SAS. Todos los derechos reservados.

---

Desarrollado como proyecto para Fundamentos Web.