const campo = document.getElementById("miCampo");

function verificarNumro(event){
    if(event.key < 48 || event.key > 57){
        event.preventDefault();
    };
};

campo.addEventListener('keydown', verificarNumro);

campo.addEventListener('keyup',function (event){
    console.log("entrada del usuario: " + event.target.value)
});

campo.addEventListener('keypress', function(event){
    console.log("caracter ingresado: " + event.key);
})