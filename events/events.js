const boton = document.getElementById("miBoton");

function mostrarMensaje(){
    alert('el boton fue presionando')
};

function mensaje(){
    alert('flotar')
}

boton.addEventListener('click', mostrarMensaje)

boton.addEventListener('mouseover', mensaje)