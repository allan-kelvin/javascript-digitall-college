

function calc(){
    let num1 = Number(prompt('Digite primeiro numero'));
    let num2 = Number(prompt('Digite segundo numero'));
    let opCalc = prompt('Qual Operação Matematica Deseja Realizar? \n (1) Adição \n (2) Subtração \n (3) Multiplicação \n (4)   Divisão')

    if(opCalc == 1){
        let soma = num1 + num2;
        alert(`A soma é: ${soma}`);
    } else if(opCalc == 2){
        let subtracao = num1 - num2;
        alert(`A subtração é: ${subtracao}`);
    }else if(opCalc == 3){
        let mult = num1 * num2;
        alert(`A Multiplicação é: ${mult}`);
    }else if(opCalc == 4){
        let divisao = num1 / num2;
        alert(`A Divisão é: ${divisao}`);
    }else{
        alert('Não foi possivel calcular!! Desculpa')
    }
}

calc();