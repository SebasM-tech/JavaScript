function evaluate(){
    const getPrice = document.getElementsById("number");
    const getSalida = document.getElementById("salida");

    const pricevalue = getPrice.value; 

    if(pricevalue < 5){
        getSalida.textContent = "comprar 2 bolsas";

    } else {
        if(pricevalue < 8){
            getSalida.textContent = "comprar 1 bolsas";
        } else {
            getSalida.textContent = "no compres";
        }
    }

}