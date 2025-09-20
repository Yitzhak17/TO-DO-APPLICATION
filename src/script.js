let globalId = 0;
let todos = []


const todoListElement = document.getElementById("to-do-list")
const inputElement = document.querySelector("input");

const renderTodoList = () => {
  let todoComponents = '';
  todos.forEach(todo => {
    todoComponents += createTodoCompenents(todo);
  })
  console.log(`todoComponents:${todoComponents}`)
  todoListElement.innerHTML = todoComponents
}

const createTodoCompenents = (todo) => {
  const date = new Date(todo.created).toLocaleDateString('he-IL')
  const time = new Date(todo.created).toLocaleTimeString('he-IL')

  return `
      <figure>
        <h3 class="${todo.isCompleted ? "completed" : ''}" >${todo.text}</h3>
        <p class="${todo.isCompleted ? "completed" : ''}">${date} ${time}</p>
        <button onclick="toggleTodoItem(${todo.id})" class="toggle-todo">${todo.isCompleted ? `Completed` : `Checked`}</button>
        <div onclick="removeTodoById(${todo.id})" class="remove-todo">X</div>
      </figure>`

}

const toggleTodoItem = (id) => {
  const idx = todos.findIndex(todo => todo.id === id)
  console.log(`the todo taht was clicked:`, idx);
  todos[idx].isCompleted = !todos[idx].isCompleted;
  renderTodoList();
}

const createToDoItem = () => {
  const text = inputElement.value;
  if (!text) return;
  const todoItem = {
    id: generationNanoId(),
    text: text,
    created: Date.now(),
    isCompleted: false
  }
  todos.push(todoItem);
  inputElement.value = '';
  renderTodoList();
}

const removeTodoById = (id) => {
  todos = [...todos.filter(todo => todo.id !== id)]
  renderTodoList();
}

const generationNanoId = (length = 8) => {
  let id = '';
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];
  }

  return id;
};
renderTodoList();