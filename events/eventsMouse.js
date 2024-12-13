const menu = document.getElementById("miMenu");
const boton = document.getElementById("miBoton");

boton.addEventListener('click' , function(){
    menu.style.display = 'block';
});

boton.addEventListener('mouseover' , function(){
    menu.style.display = 'block';
});

boton.addEventListener('mouseout' , function(){
    menu.style.display = 'none';
});

document.addEventListener('mousemove', function(event){
    console.log("posicion x: " + event.clientX + "posicion y: " + event.clientY)
});