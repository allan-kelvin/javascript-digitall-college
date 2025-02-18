let qantAlunos = Number(prompt('Quantos alunos?'));

let notas = 0;
let somaNotas =0;


for (let i = 0; i < qantAlunos; i++) {
    
    notas = Number(prompt(`Digite a Nota do ${i+1} Aluno.`));

     somaNotas = somaNotas + notas;
}  
console.log(`soma: ${somaNotas} quantidade: ${qantAlunos}`);

let media = ((somaNotas) / qantAlunos).toFixed(1);

console.log(`A média da sala é de ${media}`);