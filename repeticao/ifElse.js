function ParImpar() {
    let num1 = Number(prompt("Digite um valor"));

    while (isNaN(num1)) {
        alert('Você não digitou um numero!')
        num1 = Number(prompt("Digite um valor"));
    }

    let num2 = Number(prompt("Digite um valor"));

    while (isNaN(num2)) {
        alert('Você não digitou um numero!')
        num2 = Number(prompt("Digite um valor"));
    }

    var soma = num1 + num2;

    alert(`A soma é: ${soma}`);
}

ParImpar();

let resposta = prompt('Deseja verificar outro numero? 1 - Sim / 2 - Não');

switch (resposta) {
    case 1:
        ParImpar();
    break;

    case 2:
        alert('Obrigado por brincar');
    break;
    
    default:
        alert('Valor Invalido');
    break;
}