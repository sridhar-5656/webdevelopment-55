
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const clearCompletedBtn = document.getElementById('clear-completed');
const clearAllBtn = document.getElementById('clear-all');

let todos = [];

function createTodoNode(todo) {
  const li = document.createElement('li');
  li.className = 'todo-item';
  li.dataset.id = todo.id;

  const left = document.createElement('div');
  left.className = 'todo-left';

  const text = document.createElement('span');
  text.className = 'todo-text';
  text.textContent = todo.text;
  if (todo.completed) text.classList.add('completed');

 
  text.addEventListener('click', () => toggleComplete(todo.id));

  left.appendChild(text);

  const btns = document.createElement('div');
  btns.className = 'btns';

  const removeBtn = document.createElement('button');
  removeBtn.className = 'icon-btn remove';
  removeBtn.type = 'button';
  removeBtn.title = 'Remove task';
  removeBtn.innerHTML = '🗑️';

  // Remove on click
  removeBtn.addEventListener('click', () => removeTodo(todo.id));

  btns.appendChild(removeBtn);
  li.appendChild(left);
  li.appendChild(btns);

  return li;
}


function render() {
  list.innerHTML = '';
  for (const t of todos) {
    list.appendChild(createTodoNode(t));
  }
}

// Add a todo
function addTodo(text) {
  const todo = { id: Date.now().toString(), text: text.trim(), completed: false };
  todos.unshift(todo); // newest on top
  render();
}

function removeTodo(id) {
  todos = todos.filter(t => t.id !== id);
  render();
}

// Toggle complete state
function toggleComplete(id) {
  todos = todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
  render();
}

// Clear completed tasks
function clearCompleted() {
  todos = todos.filter(t => !t.completed);
  render();
}

// Clear all tasks
function clearAll() {
  todos = [];
  render();
}

// Form submit handler (Add)
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent page reload
  const value = input.value;
  if (!value.trim()) return; // ignore empty input
  addTodo(value);
  input.value = '';
  input.focus();
});

// Buttons
clearCompletedBtn.addEventListener('click', clearCompleted);
clearAllBtn.addEventListener('click', clearAll);

// initial focus
input.focus();
