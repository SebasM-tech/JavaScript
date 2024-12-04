function submit(){
    const SaveAge = document.getElementById("getAge")
    const salida1 = document.getElementById("out1")
    const salida2 = document.getElementById("out2")
    const salida3 = document.getElementById("out3")

    const Drink = +SaveAge.value >= 18;
    salida1.textContent = Drink;

    const GetIn = +SaveAge.value >= 18 && +SaveAge.value <= 30;
    salida2.textContent = GetIn;

    const Free = +SaveAge.value == 20  || +SaveAge.value == 25;
    salida3.textContent = Free;
}