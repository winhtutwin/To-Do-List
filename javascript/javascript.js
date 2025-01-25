const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');
const searchInput = document.getElementById('searchInput');

let todos = [];

// Function to add a new task
function addTodo() {
  const task = todoInput.value.trim();
  if (task) {
    todos.push(task);
    todoInput.value = '';
    renderTodos();
  }
}

// Function to delete a task
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

// Function to render the tasks (filtered by search)
function renderTodos() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const filteredTodos = todos.filter(todo => todo.toLowerCase().includes(searchTerm));

  todoList.innerHTML = '';
  filteredTodos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${todo}</span>
      <i class="trash-icon" onclick="deleteTodo(${index})">🗑️</i>
    `;
    todoList.appendChild(li);
  });
}

// Event listener for adding a task
addButton.addEventListener('click', addTodo);

// Add task with Enter key
todoInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});

// Event listener for search functionality
searchInput.addEventListener('input', renderTodos);
