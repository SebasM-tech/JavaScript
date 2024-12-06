function extraerNumeroDesdeElemento(elemento) {
    let miElemento = document.getElementById(elemento).value;
    let element = +miElemento
    return element;
}

function calcular(){
    let ventas = []

    ventas[0] = extraerNumeroDesdeElemento("ventasTienda1");
    ventas[1] = extraerNumeroDesdeElemento("ventasTienda2");
    ventas[2]= extraerNumeroDesdeElemento("ventasTienda3");
    ventas[3] = extraerNumeroDesdeElemento("ventasTienda4");
    ventas[4] = extraerNumeroDesdeElemento("ventasTienda5");
    ventas[5] = extraerNumeroDesdeElemento("ventasTienda6");

    let total = sumatoria(ventas);
    let ventaMayor = mayor(ventas);
    let ventaMenor = menor(ventas);
    let mensaje = "el total fue " + total + " el mayor fue " + ventaMayor + " el menor fue " + ventaMenor;
    let salida = document.getElementById("parrafoSalida");

    salida.textContent = mensaje;
}

function sumatoria(array){
    let total = 0
    

    for(let venta of array){
        total = total + venta
    }

    return total
}

function mayor(array){
    let maximo = array[0]

    for(let venta of array ){
        if (venta > maximo) {
            maximo = venta;
        }
    }

    return maximo;
}

function menor(array) {
    let minimo = array[0]

    for(let venta of array ){
        if (venta < minimo) {
            minimo = venta
        }
    }

    return minimo;
}