const toDoForm = document.getElementById('todo-form');
const toDoList = document.getElementById('todo-list');
const toDoInput = toDoForm.querySelector('input');

const TODOS_KEY = 'todos';


let toDos =[];
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
function handleToDoSubmit (event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value='';
    const newTodoObj= {
        text:newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
function deleteToDo(event){
    const li =event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    saveToDos();
    li.remove();
}   
function paintToDo(newTodoObj){
    const li=document.createElement("li"); 
    li.id = newTodoObj.id;
    const span = document.createElement('span');
    span.innerText = newTodoObj.text;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.style.backgroundColor='transparent';
    button.style.outline='0';
    button.style.border='0';
    button.addEventListener('click',deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}