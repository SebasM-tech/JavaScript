function consultarPrecio(){
    let elementoRespuesta = document.getElementById("textoPrecio");

    let elementoFruta = document.getElementById("numeroFruta");
    let fruta = elementoFruta.value;

    switch (fruta) {
        case "1":
            elementoRespuesta.textContent = "5 dolares"
            break;
    
        case "2":
            lementoRespuesta.textContent = "4 dolares"
            break;

        case "3":
            lementoRespuesta.textContent = "534 dolares"
            break;

        case "4":
            lementoRespuesta.textContent = "51 dolares"
            break;

        case "5":
            lementoRespuesta.textContent = "545 dolares"
            break;
    }
}