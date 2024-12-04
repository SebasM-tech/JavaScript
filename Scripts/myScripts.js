function calcularResultado(){
    const guardarKm = document.getElementById("Kilometros").value
    const salida = document.getElementById("output")

    ecuacion = +guardarKm / 8.8;

    salida.textContent = ecuacion;
}
