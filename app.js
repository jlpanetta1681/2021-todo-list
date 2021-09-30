//selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

//event listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

//functions
function addTodo (event) {
  //stop the form from submitting
  event.preventDefault()

  // todoDiv
  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')

  //create list item
  const newTodo = document.createElement('li')
  newTodo.innerText = todoInput.value
  newTodo.classList.add('todo-item')
  todoDiv.appendChild(newTodo)

  //checked item button

  const completedButton = document.createElement('button')
  completedButton.innerHTML = '<i class="fa fa-check"></i>'
  completedButton.classList.add('complete-btn')

  todoDiv.appendChild(completedButton)

  //trash button
  const trashButton = document.createElement('button')
  trashButton.innerHTML = '<i class="fa fa-trash"></i>'
  trashButton.classList.add('trash-btn')
  todoDiv.appendChild(trashButton)

  //add to list

  todoList.appendChild(todoDiv)
  //clear input field
  todoInput.value = ''
}

function deleteCheck (e) {
  const item = e.target
  //delete the todo
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement
    todo.remove()
  }
}
//check mark

if (item.classList[0] === 'complete-btn') {
  const todo = item.parentElement
  todo.classList.toggle('completed')
}
