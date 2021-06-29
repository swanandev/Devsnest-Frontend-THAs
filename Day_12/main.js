
const seperator = () => {
    let sep = document.createElement('div');
    sep.classList.add('sepr');
    return sep;
}
const addButton = document.querySelector('#add-bttn');
const clearButton = document.querySelector('#clear-bttn');
const newTodoInput = document.querySelector('.new-todo-input');
const taskList = document.querySelector('#todolist');
let tasks = [];

/**
 *          <div class="task">
                <div class="task-title">Task 1</div>
                <div class="task-options">
                    <div class="button">Delete</div>
                    <input type="checkbox" class="todo-cbx">
                </div>
            </div>
 */
//Following functions gives the above DOM tree.
const createTaskDiv = (inx, {id, title, isDone}) => {
    let buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button');
    buttonDiv.innerHTML = "Delete";
    buttonDiv.addEventListener('click', () => {
        deleteTask(inx, id);
        saveData();
    })
    
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('todo-cbx');
    checkBox.checked = isDone;
    checkBox.addEventListener('click', (e) => {
        console.log(e.target.checked);
        updateTask(inx, {id, title, isDone: e.target.checked});
    })

    let taskOptions = document.createElement('div');
    taskOptions.classList.add('task-options');
    taskOptions.appendChild(buttonDiv);
    taskOptions.appendChild(checkBox);

    let titleDiv = document.createElement('div');
    titleDiv.classList.add('task-title');
    titleDiv.innerHTML = title;

    let task = document.createElement('div');
    task.classList.add('task');
    task.appendChild(titleDiv);
    task.appendChild(taskOptions);
    task.id = id;
    return task;
}

const updateTask = (inx, newTask) => {
    tasks[inx] = newTask;
    console.log(tasks);
    saveData();
}

const saveData = () => {
    localStorage.setItem('TaskList', JSON.stringify(tasks));
}

const fetchData = () => {
    let tempTasks = JSON.parse(localStorage.getItem('TaskList'));
    tempTasks = tempTasks == null ? [] : tempTasks;
    //let tempTasks = [{id:1, title:"Task 1", isDone:false}, {id:2, title:"Task 2", isDone:true}];
    tasks.push(...tempTasks);
}

const loadData = () => {
    tasks.forEach((el, inx) => {
        taskList.appendChild(createTaskDiv(inx, el));
        taskList.appendChild(seperator());
    })
}

const deleteTask = (inx, id) => {
    tasks.splice(inx, 1);
    taskList.removeChild(document.getElementById(id));
    console.log(tasks);
}

const clearData = () => {
    localStorage.setItem('TaskList',JSON.stringify([]));
}

addButton.addEventListener('click', () => {
    let task = {id:Math.floor(999 * tasks.length * Math.random()), title: newTodoInput.value , isDone: false};
    taskList.appendChild(createTaskDiv(tasks.length, task));
    taskList.appendChild(seperator());
    tasks.push(task);
    newTodoInput.value = "";
    saveData();
});

clearButton.addEventListener('click', () => {
    clearData();
    fetchData();
    loadData();
})

fetchData();
loadData(); 


//Dummy Data
//taskList.appendChild(seperator);
//taskList.appendChild(createTaskDiv({id:0, title:"Mast", isDone:true}));