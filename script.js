// ==== Todo CRUD Management ==== 
// Array to store todos

let todos = []

// DOM elements
const todoForm = document.getElementById('todo-form')
const todoInput = document.getElementById('todo-input')
const todoList = document.getElementById('todo-list')

// function to render todos
function renderTodos(){
  todoList.innerHTML = ''   // clear the list
  todos.forEach((todo, index) => {
    const li = document.createElement('li')
    li.className = 'todo-item'
    li.innerHTML = `
      <span>${todo}</span>
      <button onclick="editTodo(${index})">Edit</button>
      <button onclick="deleteTodo(${index})">Delete</button>
    `
    todoList.appendChild(li)
  })
}

// function to add a new todo
function addTodo(event){
  event.preventDefault()    // prevent form submissuoin
  const newTodo = todoInput.value.trim()
  if(newTodo){
    todos.push(newTodo)
    todoInput.value = ''      // clear the input
    renderTodos()
  }
}



// function to edit a todo
function editTodo(index){
  const updatedTodo = prompt('Edit your todo: ', todos[index])
  if(updatedTodo !== null){
    todos[index] = updatedTodo.trim()
    renderTodos()
  }
}


// function delete todo
function deleteTodo(index) {
  if(confirm('Are your sure you want to delete this todo?')){
    todos.splice(index, 1)
    renderTodos()
  }
}

// event listeners
todoForm.addEventListener('submit', addTodo)

// initial render
renderTodos()