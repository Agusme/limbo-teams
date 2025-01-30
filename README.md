# Prueba Técnica – Desarrollador React.js

## Descripción
Este proyecto fue desarrollado como parte de una prueba técnica para evaluar mis habilidades en **React.js**. La aplicación consume la API pública de **JSONPlaceholder** y permite mostrar posts con funcionalidades de búsqueda, paginación y un modal para ver los detalles completos de cada post. También se implementaron animaciones con **AOS** para mejorar la experiencia de usuario.

## Requisitos

1. **Consumo de API pública**: Se utiliza la API de **JSONPlaceholder** para obtener los datos de los posts desde:
   - [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)

2. **Listado de publicaciones**: Los posts se muestran en tarjetas, cada una con el título y un fragmento del contenido del post.

3. **Paginación**: Implementación de paginación para mostrar un número limitado de posts por página (10 por página). Permite navegar entre páginas con los botones “Anterior” y “Siguiente”.

4. **Búsqueda**: Se incluye un campo de búsqueda para filtrar los posts por su título en tiempo real.

5. **Modal de detalles**: Al hacer clic en un post, se muestra un modal con la información completa del post, incluyendo:
   - Título
   - Cuerpo del post
   - Nombre del autor (obtenido desde la API de usuarios).

## Requisitos Técnicos

- **React.js** con Hooks.
- **Vite** como bundler.
- **Bootstrap** para la maquetación y diseño.
- **AOS** para las animaciones.
- **SCSS** para los estilos.
- **JavaScript** para mayor seguridad en el código.
- Código limpio y bien organizado.

## Instalación

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/Agusme/limbo-teams.git

2. **Instalar las dependencias**:

   ```bash
   cd tu-repositorio
   npm install

3. **Ejecutar la aplicación**:

   ```bash
    npm run dev

## Funcionalidades

### Página Principal
En la página principal se muestran las publicaciones obtenidas de la API, con un diseño limpio gracias a **Bootstrap** y animaciones **AOS** al momento de cargar los elementos. También incluye un campo de búsqueda para filtrar las publicaciones por título.

### Detalles del Post
Cuando haces clic en un post, se abre un **modal** con la información completa del post, incluyendo:
- **Título**
- **Cuerpo del post**
- **Nombre del autor** (obtenido desde la API de usuarios).

### Paginación
Se implementó la funcionalidad de paginación con los botones "Anterior" y "Siguiente", de manera que solo se muestran 10 posts por página.

## Tecnologías Utilizadas
- **React.js** con **Hooks**
- **Vite** (Bundler)
- **Bootstrap** (CSS Framework)
- **AOS** (Animaciones)
- **SCSS**
- **JavaScript**

## Enlaces
- [Repositorio en GitHub](https://github.com/Agusme/limbo-teams.git)

## Autora:
- 👩🏽‍💻[Agustina Mena](https://www.linkedin.com/in/agustina-mena-169298204/)