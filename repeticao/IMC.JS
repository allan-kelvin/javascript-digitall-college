let peso = Number(prompt('Digite seu peso!'));

while (isNaN(peso)) {
    alert('Peso Invalido! Digite sem virgula e apenas numeros Ex: 60');
    peso = Number(prompt('Digite seu peso!'));
}

let altura = Number(prompt('Digite sua altura!'));

while (isNaN(altura)) {
    alert('Altura Invalida! Digite sem virgula e apenas numeros Ex: 1.70');
    altura = Number(prompt('Digite sua Altura!'));
}

let imc = (peso / (altura) ** 2).toFixed(2);

if (imc <= 18.5 ) {
    alert(`Seu IMC é: ${imc} Você esta Abaixo do Peso!`);
} else if(imc <= 25) {
    alert(`Seu IMC é: ${imc} Você esta Normal! Parabéns`);
} else if( imc >=30 && imc <35){
     alert(`Seu IMC é: ${imc} Você esta Acima do Peso! CUIDADO!`);
} else{
    alert(`Seu IMC é: ${imc} Você esta Obeso !! Precisa emagrecer Urgente`);
}