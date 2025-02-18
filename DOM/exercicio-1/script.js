
//Nesse exercicio é tirar a classe vermelho e add a classe azul
let itensLista = document.getElementsByClassName('lista');

console.log(itensLista);

itensLista[0].classList.remove('vermelho');
itensLista[0].classList.add('azul');