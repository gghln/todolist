const loadUI = () => {
    let mainContainer = document.getElementById('main-container')
    //Create Task 
    let taskForm =`<div id="taskForm">
                <input type="sumbit" id="title">
                <input type="text" id="description">
                <input type="date" id="date">
                <select id="priority">
                    <option value="High">High</option>
                    <option value="Middle">Middle</option>
                    <option value="Low">Low</option>
                </select>
                <input type="submit" id="submitTask">
                </div>`
    mainContainer.innerHTML += taskForm
    let toggleForm = document.getElementById('taskForm')
    toggleForm.style.visibility = 'hidden'

    showTasks()
}

const toggleForm = () =>{
    let toggleForm = document.getElementById('taskForm')
    if(toggleForm.style.visibility == 'hidden'){
        toggleForm.style.visibility = 'visible';
    }else{
        toggleForm.style.visibility = 'hidden';
    }
}

//Show all tasks in local storage
const showTasks = () =>{
    const storedTasks = JSON.parse(localStorage.getItem('tasksArray'))
        for(let i = 0; i < storedTasks.length; i++)
        {   
            let taskContainer = document.getElementById('taskView-container')
            const newTask = `<div class="task">
                                <div id="task-title">${storedTasks[i].title}</div>
                                <div id="task-description">${storedTasks[i].description}</div>
                                <div id="task-date">${storedTasks[i].date}</div>
                                <div id="task-priority">${storedTasks[i].priority}</div>
                            </div>`
            taskContainer.innerHTML += newTask
        }
}

const updateTasks = () =>{
    showTasks()
}

export {toggleForm,loadUI,updateTasks}