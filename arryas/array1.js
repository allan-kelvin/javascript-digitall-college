let filaNormal = [ 'Ana', 'Bia', 'Cleitinho', 'Davi', 'Eliana', 'Fernanda', 'Gustavo', 'Helena', 'Isabela', 'Joaquim', 'Maria', 'João' ]

let filaPreferencial = [ 'Joaquina', 'Antônio', 'Cristina', 'Domingos', 'Eduardo', 'Fernando', 'Gustavo', 'Helena', 'Isabela', 'Joaquim', 'Maria', 'João' ]

let filaAtendidos = [];


for (let i = 0; i <8; i++) {
    filaAtendidos.push(filaNormal.shift());
}

for (let i = 0; i <3; i++) {
    filaAtendidos.push(filaPreferencial.pop())
}

console.log(filaNormal.length);
console.log(filaPreferencial.length);
console.log(filaAtendidos.length);