const todoForm = document.querySelector('#toDo-form');
const todoList = document.querySelector('#todo-list');
const todoInput = todoForm.querySelector('input');

const toDo = [];


function HandleToDoForm(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    toDo.push(newTodo);
    paintTodo(newTodo);
    saveToDo();
};

function saveToDo() {
    localStorage.setItem("toDo", JSON.stringify(toDo));
};


function paintTodo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newTodo;
    const btn = document.createElement('button');
    btn.innerText = "📌";
    btn.addEventListener('click', removeList);
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
};

function removeList(event) {
    const li = event.target.parentElement;
    li.remove();
};

todoForm.addEventListener('submit', HandleToDoForm);

const savedToDo = localStorage.getItem('toDo');

if (savedToDo !== null) {
    const parsedTodo = JSON.parse(savedToDo);
    parsedTodo.forEach(paintTodo);
};