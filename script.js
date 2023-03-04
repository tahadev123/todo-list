// const todoInput = document.querySelector(".todo-input");
// const todoButton = document.querySelector(".todo-button")
// const todoList = document.querySelector(".todo-list")
// const todoOption = document.querySelector(".filter-todo")

// todoButton.addEventListener("click", addTodo)
// todoList.addEventListener("click", deletcompleteTodo)
// todoOption.addEventListener("click", filterTodo)
// document.addEventListener("DOMContentLoaded", getTodos)


// function addTodo(event) {
// event.preventDefault()

// saveLocalTodo(todoInput.value)

//     let todoDiv = document.createElement("div")
//     todoDiv.classList.add("todo")

//     let addTodoLi = document.createElement("li")
//     addTodoLi.innerText = todoInput.value
//     addTodoLi.classList.add("todo-item")
//     todoDiv.appendChild(addTodoLi)
//     todoInput.value = ""

//     let completedTodo = document.createElement("button")
//     completedTodo.innerHTML = "<i class='fas fa-check'></i>"
//     completedTodo.classList.add("complete-btn")
//     todoDiv.appendChild(completedTodo)

//     let trashTodo = document.createElement("button")
//     trashTodo.innerHTML = "<i class='fas fa-trash'></i>"
//     trashTodo.classList.add("trash-btn")
//     todoDiv.appendChild(trashTodo)

//     todoList.appendChild(todoDiv)
// }

// function deletcompleteTodo(event) {
//     const item = event.target;
//     if (item.classList[0] === "trash-btn") {
//         const todo = item.parentElement;
//         removeLocalTodo(todo);
//         todo.remove()
//     } if (item.classList[0] === "complete-btn") {
//         const todo = item.parentElement;
//         todo.classList.toggle("completed")
//     }
// }

// function filterTodo(event) {
//     const todo = todoList.childNodes;
//     todo.forEach(function(todo) {
//         switch (event.target.value) {
//             case "all":
//                 todo.style.display = "flex"
//                 break;
//             case "completed":
//                 if (todo.classList.contains("completed")) {
//                     todo.style.display = "flex"
//                 } else {
//                     todo.style.display = "none"
//                 }
//                 break;
//             case "uncompleted":
//                 if (todo.classList.contains("completed")) {
//                     todo.style.display = "none"
//                 } else {
//                     todo.style.display = "flex"
//                 }
//                 break;
//         }
//     })
// }

// function saveLocalTodo(todo) {
    // let todos;
    // if (localStorage.getItem("todos") === null) {
    //     todos = [];
    // } else {
    //     todos = JSON.parse(localStorage.getItem("todos"))
    // }
    // todos.push(todo);
    // localStorage.setItem("todos", JSON.stringify(todos))
// }

// function getTodos() {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"))
//     }
//     todos.forEach(function(todo) {
//         let todoDiv = document.createElement("div")
//     todoDiv.classList.add("todo")

//     let addTodoLi = document.createElement("li")
//     addTodoLi.innerText = todo
//     addTodoLi.classList.add("todo-item")
//     todoDiv.appendChild(addTodoLi)

//     let completedTodo = document.createElement("button")
//     completedTodo.innerHTML = "<i class='fas fa-check'></i>"
//     completedTodo.classList.add("complete-btn")
//     todoDiv.appendChild(completedTodo)

//     let trashTodo = document.createElement("button")
//     trashTodo.innerHTML = "<i class='fas fa-trash'></i>"
//     trashTodo.classList.add("trash-btn")
//     todoDiv.appendChild(trashTodo)

//     todoList.appendChild(todoDiv)
//     });
// }

// function removeLocalTodo(todo) {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"))
//     }
//     const todoIndex = todo.children[0].innerText;
//     todos.splice(todos.indexOf(todoIndex), 1);
//     localStorage.setItem("todos", JSON.stringify(todos))
// }


const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filtering = document.querySelector(".filter-todo")

todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCompleteTodo)
filtering.addEventListener("click", filterTodo)
document.addEventListener("DOMContentLoaded", getTodos)

function addTodo(event) {
    event.preventDefault()
    saveLocalTodo(todoInput.value)

    let todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")

    let newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)
    todoInput.value = "";

    let completedTodo = document.createElement("button")
    completedTodo.innerHTML = "<i class='fas fa-check'></i>"
    completedTodo.classList.add("complete-btn")
    todoDiv.appendChild(completedTodo)

    let trashTodo = document.createElement("button")
    trashTodo.innerHTML = "<i class='fas fa-trash'></i>"
    trashTodo.classList.add("trash-btn")
    todoDiv.appendChild(trashTodo)

    todoList.appendChild(todoDiv)
}

function deleteCompleteTodo(event) {
    let item = event.target;
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        removeLocalTodo(todo)
        todo.remove();
    } if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}

function filterTodo(event) {
    const todo = todoList.childNodes;
    todo.forEach(function(todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex"
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
                break;
            case "uncompleted":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "none"
                } else {
                    todo.style.display = "flex"
                }
        }
    })
}

function saveLocalTodo(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function removeLocalTodo(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.forEach(function(todo) {
    let todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")

    let newTodo = document.createElement("li")
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)

    let completedTodo = document.createElement("button")
    completedTodo.innerHTML = "<i class='fas fa-check'></i>"
    completedTodo.classList.add("complete-btn")
    todoDiv.appendChild(completedTodo)

    let trashTodo = document.createElement("button")
    trashTodo.innerHTML = "<i class='fas fa-trash'></i>"
    trashTodo.classList.add("trash-btn")
    todoDiv.appendChild(trashTodo)

    todoList.appendChild(todoDiv)
    })
}