
// Seleção de elementos
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Função para adicionar uma tarefa à lista
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.classList.add('task');

    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = ''; // Limpar campo de input após adicionar
  } else {
    alert('Por favor, digite uma tarefa!');
  }
}

// Adicionar tarefa ao clicar no botão
addButton.addEventListener('click', addTask);

// Adicionar tarefa ao pressionar Enter
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});