# Proyecto Amigo Secreto

Este proyecto es una aplicación web simple para realizar un sorteo de "Amigo Secreto".

## Funcionalidades

*   **Agregar amigos:** Permite ingresar nombres de participantes en un campo de texto y agregarlos a una lista.
*   **Sortear amigo secreto:**  Selecciona aleatoriamente un amigo de la lista y lo muestra en pantalla.
*  **Validación de entrada:** Evita que se agreguen nombres vacíos o que se intente sortear sin participantes.

## Estructura del Proyecto

*   **`index.html`**:  Contiene la estructura HTML de la página, incluyendo el formulario, la lista de amigos y el área de resultados.
*   **`style.css`**:  Contiene los estilos CSS para la apariencia de la aplicación.
*   **`app.js`**:  Contiene la lógica JavaScript:
    *   `amigos`: Array que almacena los nombres de los participantes.
    *   `agregarAmigo()`:  Función para añadir amigos a la lista.
    *   `actualizarListaAmigos()`: Función para actualizar visualmente la lista de amigos en el HTML
    *   `sortearAmigo()`:  Función para realizar el sorteo aleatorio.

## Cómo usar la aplicación

1.  Abre el archivo `index.html` en un navegador web.
2.  Ingresa los nombres de los amigos en el campo "Escribe un nombre" y haz clic en "Añadir".
3.  Una vez que hayas agregado todos los amigos, haz clic en el botón "Sortear amigo".
4.  El nombre del amigo secreto seleccionado aparecerá en la sección de resultados.

## Dependencias

Este proyecto no tiene dependencias externas.  Utiliza HTML, CSS y JavaScript puro.

## Notas

*   Se ha incluido validación básica para evitar errores comunes.
*	El código JavaScript está comentado para mayor claridad.