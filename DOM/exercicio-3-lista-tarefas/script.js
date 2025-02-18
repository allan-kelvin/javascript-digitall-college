let getTarefa = document.getElementById('input-tarefa');
let buttonAdd = document.getElementById('buttonAddTarefa');
let olList = document.getElementById('listaDeTarefas');
const tarefas =[];
// funcao de add tarefa
function addTarefa(){
    const tarefaDigitada = getTarefa.value;

    if(tarefaDigitada !=='' || undefined){
        tarefas.push(tarefaDigitada);
        const li = document.createElement('li');
        li.classList.add('tarefa');

        const span = document.createElement('span');
        span.textContent = tarefaDigitada;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', () => {
            olList.removeChild(li);
            tarefas.splice(tarefas.indexOf(tarefaDigitada), 1);
            console.log(tarefas);
            
          });
        li.appendChild(span);
        li.appendChild(deleteButton);
      
        olList.appendChild(li);
        
        getTarefa.value = '';
        console.log(tarefas);
    }else {
        alert('Por favor, digite uma tarefa!');
    }
}

// Adicionar tarefa ao clicar no botão
buttonAdd.addEventListener('click', addTarefa);

// Adicionar tarefa ao pressionar Enter
getTarefa.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTarefa();
    }
});