function somar(num1,num2){
    return num1 + num2;
}

function subtrair(num1,num2){
    return num1 - num2;
}

function multiplicar(num1,num2){
    return num1 * num2;
}

function dividir(num1,num2){
    return num1 / num2;
}

function calcularAlert (num1,num2,funcaoOperacao){
    alert(funcaoOperacao(num1,num2));
}

calcularAlert(10,10,somar);
calcularAlert(10,10,subtrair);
calcularAlert(10,10,multiplicar);
calcularAlert(10,10,dividir);
