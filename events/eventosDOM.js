const boton = document.getElementById("miBoton");
const div = document.getElementById("miDiv");
const a = document.getElementById("miEnlace");

function mostrarMensaje(event){
    alert(event.target);
    alert(event.currentTarget);
}

function evitarEnlace(event){
    event.preventDefault();
    alert('no disponible')
}


div.addEventListener('click', mostrarMensaje)
a.addEventListener('click', evitarEnlace)