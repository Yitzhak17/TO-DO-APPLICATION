let todos = [
  { id: 1, text: "Go to buy some milk", created: Date.now(), isCompleted: false },

  { id: 2, text: "Go to buy some milk", created: Date.now(), isCompleted: false },

  { id: 3, text: "Go to buy some milk", created: Date.now(), isCompleted: false },

  { id: 4, text: "Go to buy some milk", created: Date.now(), isCompleted: true }
]

const todoListElement = document.getElementById("to-do-list")

const renderTodoList = () => {
  let todoComponets = '';
  todos.forEach(todo => {
    todoComponets += createTodoCompenets(todo);
  })
  console.log(`todoCompenetes:${todoComponets}`)
  todoListElement.innerHTML = todoComponets
}

const createTodoCompenents = (todo) => {
  const date = new Date(todo.created).toLocaleDateString('he-IL')
  const time = new Date(todo.created).toLocaleTimeString('he-IL')

  return `
      <figure>
        <h3 class="${todo.isCompleted ? "completed" : ''}" >${todo.text}</h3>
        <p class="${todo.isCompleted ? "completed" : ''}">${date} ${time}</p>
        <button onclick="toggleTodoItem(${todo.id})" class="toggle-todo">${todo.isCompleted ? `Completed` : `Checked`}</button>
        <div class="remove-todo">X</div>
      </figure>`

}

const toggleTodoItem = (id) => {
  const idx = todos.findIndex(todo => todo.id === id)
  console.log(`the todo taht was clicked:`, idx);
  todos[idx].isCompleted = !todos[idx].isCompleted;
  renderTodoList();
}
renderTodoList();