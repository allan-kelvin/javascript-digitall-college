let num1 = Number(prompt("Digite um Numero"));

while(isNaN(num1)){
    alert('Você não digitou numero. Digite Apenas Numeros');
    num1 = Number(prompt("Digite um Numero"));
}

if(num1 % 2 ===0) {
    let novoNumero = num1 + 5
    alert(`O numero Digitado é Par e + 5 fica: ${novoNumero}`)
} else{
    let  imparNovo = num1 + 8
    alert (`O numero Digitado é Impar e + 8 fica: ${imparNovo}`)
}