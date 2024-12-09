function crearTiendas(contenedorID, min, cantidadTienda){
    //encontrar contenedor por id
    let elementoContenedor = document.getElementById(contenedorID);

    //Loop para crear determinadas tiendas
    for(let conteoTiendas = 1; conteoTiendas <= cantidadTienda; conteoTiendas++) {

        //crear texto de label para poder llamar la funcion
        let textoEtiqueta = "tienda " + conteoTiendas;

        //crear tiendas con crearParrafoTienda()
        let ParrafoTienda = crearParrafoTienda(textoEtiqueta, min);

        //agregar el parrafo al contenedor
        elementoContenedor.appendChild(ParrafoTienda);
    }
}

function crearParrafoTienda(textoLabel, valorMIn){
    //se crean las etiquetas p y label
    let elementoParrafo = document.createElement("p");

    let elementoLabel = document.createElement("label");  //createelement("<>") para crear una etiqueta 
    elementoLabel.innerText = textoLabel + ": " ;
    
    //conectar con el input 
    elementoLabel.setAttribute("for", textoLabel) //establecer = set

    //crear input
    let elementoInput = document.createElement("input");
    

    //establecer atributos de input
    elementoInput.setAttribute("type", "number" );
    elementoInput.setAttribute("id", textoLabel);  // establece los atributos sean type, id, class, min, value etc..
    elementoInput.setAttribute("min", valorMIn);
    elementoInput.setAttribute("value", 0);

    //agregar label e input al parrafo
    elementoParrafo.appendChild(elementoLabel)
    elementoParrafo.appendChild(elementoInput)   // appendChild(elemento) = los agrega dentro de una etiqua

    //devolver parrafo
    return elementoParrafo;
}

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
