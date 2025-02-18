// 1- uma turma tem 6 alunos
// 2- cada aluno tem 3 notas
// 3- todas essas informações devem ser armazenadas em um array
// 4- A primeira informação de cada aluno deve ser o nome, seguido pelas notas
// 5- você deverá calcular a média de cada aluno e adicionar como o 5º elemento do array
// 6- ao final você deverá calcular a média geral da turma e exibir o resultado no console

let alunos = [
    ['joao', 10, 8, 9],
    ['maria', 9, 7, 8],
    ['pedro', 8, 6, 7],
    ['ana', 7, 5, 6],
    ['carlos', 6, 4, 5],
    ['joana', 5, 3, 4]
]



let mediaIndividual=0;
let mediaGeral=[];
let media = 0;

for (let i = 0; i < alunos.length; i++) {
    mediaIndividual = (alunos[i][1] + alunos[i][2] + alunos[i][3]) / 3;
    alunos[i].push(mediaIndividual);
}

for (let j = 0; j < alunos.length; j++) {
    media += alunos[j][4];
    mediaGeral = media / alunos.length;

}
console.log(alunos)
console.log(mediaGeral);
