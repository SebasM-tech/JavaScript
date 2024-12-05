function verTabla(){
    //Get number
    const number = document.getElementById("getNum").value;
    const tableNumber = +number;

    //Get table
    const getTable = document.getElementById("table"); 

    //Show results
    for(i = 1; i <= 10 ; i++ ) {
        number1 = tableNumber * i;

        //create string 
        textResult = tableNumber + " por " + i + " es igual a " + number1;
    
    //Crea elemento li 
    const item = document.createElement("li");
    
    // es el elemento interno
    item.innerText = textResult;
    getTable.appendChild(item);
    }
}