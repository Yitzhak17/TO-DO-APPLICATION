let todos = [
  { id: 1, text: "Go to buy some milk", created: Date.now(), isCompleted: false },

  { id: 1, text: "Go to buy some milk", created: Date.now(), isCompleted: false },

  { id: 1, text: "Go to buy some milk", created: Date.now(), isCompleted: false },

  { id: 1, text: "Go to buy some milk", created: Date.now(), isCompleted: true }
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

const createTodoCompenets = (todo) => {
  const date = new Date(todo.created).toLocaleString('he-IL')
  return `
      <figure>
        <h3 class="${todo.isCompleted ? "completed" : ''}" >${todo.text}</h3>
        <p class="${todo.isCompleted ? "completed" : ''}">${date}</p>
        <button class="toggle-todo">${todo.isCompleted ? `Completed` : `Checked`}</button>
        <div class="remove-todo">X</div>
      </figure>`

}
renderTodoList();