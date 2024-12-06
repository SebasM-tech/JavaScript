function extraerNumeroDesdeElemento(elemento) {
    let miElemento = document.getElementById(elemento).value;
    let element = +miElemento
    return element;
}

function calcular(){
    let venta1, venta2, venta3, venta4, venta5, venta6;

    venta1 = extraerNumeroDesdeElemento("ventasTienda1");
    venta2 = extraerNumeroDesdeElemento("ventasTienda2");
    venta3 = extraerNumeroDesdeElemento("ventasTienda3");
    venta4 = extraerNumeroDesdeElemento("ventasTienda4");
    venta5 = extraerNumeroDesdeElemento("ventasTienda5");
    venta6 = extraerNumeroDesdeElemento("ventasTienda6");

    let total = venta1 + venta2 + venta3 + venta4 + venta5 + venta6;
    let mensaje = "Total vendido fue " + total;
    let salida = document.getElementById("parrafoSalida");

    salida.textContent = mensaje;
}