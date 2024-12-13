const socket = new WebSocket('ws//localhost: 5500');
const mensajeIngresado = document.getElementById("mensajeIngresado");
const botonEnviar = document.getElementById("botonEnviar");

function mostrarMensaje(contenido){
    let contenedorMensajes = document.getElementById("mensajeChat");
    let elementoMensajes = document.createElement("p");
    elementoMensajes.innerText = contenido;
    contenedorMensajes.appendChild(elementoMensajes)
}

botonEnviar.onclick = function(){
    let mensaje = mensajeIngresado.value;
    mostrarMensaje(mensaje);
    socket.send(mensaje);
};

socket.onmessage = function(event){
    let mensaje = event.data;
    mostrarMensaje(mensaje);
}