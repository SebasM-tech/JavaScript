function avanzafila(callbabck){
    setTimeout(function(){
        console.log("tu turno ya llego")
        callbabck();
    },5000);
}

function llamada(){
    console.log("presento al turno");
}

console.log('recepcion de fila')
avanzafila(llamada);
console.log("te vas a comprar cafe")