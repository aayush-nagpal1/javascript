function defineAVariable(){
    let input = window.prompt("Variable name"); //user defined variable name
    let value = window.prompt("Value"); //variable value
    this[input]= value;  //creation of variable
    alert("The value of your declared variable is "+this[input]); // use of that variable
}

