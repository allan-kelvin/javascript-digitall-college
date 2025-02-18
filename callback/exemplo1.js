function falarSaoPaulo(nome){
    return `Oi meu nome é: ${nome} e sou de são paulo`
}

function falarCidade(funcao,nome) {
    console.log('Oi fazendo teste de callback');
    console.log(funcao(nome));
}

falarCidade(falarSaoPaulo, 'Allan');