let cont = 0;
let numDigitado = Number(prompt('Digite Um numero'));
let qantPares = 0;
let qantImpares =0;

while (cont <= numDigitado) {
    if(cont % 2 === 0) {
        console.log(`Numeros Pares ${cont}`);
        qantPares ++;
    } else{
        qantImpares ++;
    }
    cont ++;
}

alert(`De 0 até ${numDigitado} Possuem ${qantPares} de Numeros Pares`);

let res = Number(prompt('Deseja Saber os Impares 1- Sim | 2 - Não'));

if (res === 1 ) {
    alert(`De 0 até ${numDigitado} Possuem ${qantImpares} de Numeros Impares`)
} else if (res === 2){
    alert('Obrigado por Participar');
}else{
    alert('Valor Invalido! Programa fechado!')
}