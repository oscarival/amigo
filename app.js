// app.js

// 1.  Declarar una variable de tipo array para almacenar los nombres
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    //Validación para no agregar nombres vacíos
    if(nombreAmigo.trim() !== ""){
        amigos.push(nombreAmigo);
        document.getElementById('amigo').value = ''; // Limpiar el campo
        actualizarListaAmigos();
    } else{
        alert('Por favor, ingresa un nombre válido.');
    }   
}

//Función para actualizar visualmente la lista de amigos en el HTML
function actualizarListaAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";  //Limpiar la lista actual

    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    // 2.  Validar que haya amigos disponibles
    if (amigos.length === 0) {
        document.getElementById('resultado').innerHTML = '<li>No hay amigos para sortear.</li>';
        return;  // Importante: Salir de la función si no hay amigos.
    }

    // 3.  Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    //Explicación:
    // - Math.random() genera un número decimal entre 0 (incluido) y 1 (excluido).
    // - Multiplicamos por amigos.length para obtener un número entre 0 y la cantidad de amigos.
    // - Math.floor() redondea hacia abajo al entero más cercano.  Esto nos da un índice válido (0, 1, 2, ...).

    // 4.  Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // 5.  Mostrar el resultado
    document.getElementById('resultado').innerHTML = `<li>El amigo secreto sorteado es: ${amigoSorteado}</li>`;
}
