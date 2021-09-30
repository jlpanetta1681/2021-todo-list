//selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')+


//event listeners
todoButton.addEventListener('click', addTodo);




//functions
function addTodo(event){
    //stop the form from submitting
    event.preventDefault();
    // todoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create list item
    const newTodo = document.createElement("li");
    newTodo.innerText = ":hey";
    newTodo.classList.add("todo-item");

    
}