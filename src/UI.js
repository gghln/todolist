const loadUI = () => {
    let mainContainer = document.getElementById('main-container')
    //Create a Task 
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


    //Create a Project
    let project = document.getElementById('project-container')

    let newProject = `<div class="submitProject" id="submitProject">
                        <input type="sumbit" id="projectName" placeholder="Project Name">  
                        <input type="submit" id="addProject" value="Add Project">
                     </div>`
    project.innerHTML += newProject
    let toggleProject = document.getElementById('submitProject')
    toggleProject.style.visibility = 'hidden'

    // // //On load -> Default project
    let taskContainer = document.getElementById('taskView-container')
    const storedTasks = JSON.parse(localStorage.getItem('tasksArray'))
    const projectName = `<div id="mainTitle">
                            <h1 id="nikolas">Default</h1>
                            <button id="createTask">Add Task</button>
                        </div>`
    taskContainer.innerHTML += projectName
        for(let i = 0; i < storedTasks.length; i++){   
            if(storedTasks[i].project == 'Default'){
                const newTask = `
                            <div id="card-container">
                                <input id="checkbox" type="checkbox">
                                <div class="task">
                                    <div class="task-title">${storedTasks[i].title}</div>
                                    <div class="task-date">${storedTasks[i].date}</div>
                                    <div class="task-description">${storedTasks[i].description}</div>
                                    <div class="task-priority">${storedTasks[i].priority}</div>
                                </div>
                                <button class="Edit">Edit</button>
                                <button class="Delete">Delete</button>
                            </div>`
                taskContainer.innerHTML += newTask
            }
        }
    showProjects()
}

//Toggle create task form on and off
const toggleForm = () =>{
    let toggleForm = document.getElementById('taskForm')
    if(toggleForm.style.visibility == 'hidden'){
        toggleForm.style.visibility = 'visible';
    }else{
        toggleForm.style.visibility = 'hidden';
    }
}

//Show all tasks in local storage
const showTasks = (currentProject) =>{
    let taskContainer = document.getElementById('taskView-container')
    const storedTasks = JSON.parse(localStorage.getItem('tasksArray'))
    const projectName = `<div id="mainTitle">
                            <h1 id="nikolas">Default</h1>
                            <button id="createTask">Add Task</button>
                        </div>`
    taskContainer.innerHTML += projectName
        for(let i = 0; i < storedTasks.length; i++){   
            if(storedTasks[i].project == currentProject){
                const newTask = `<div id="card-container">
                                    <input id="checkbox" type="checkbox">
                                    <div class="task">
                                        <div class="task-title">${storedTasks[i].title}</div>
                                        <div class="task-date">${storedTasks[i].date}</div>
                                        <div class="task-description">${storedTasks[i].description}</div>
                                        <div class="task-priority">${storedTasks[i].priority}</div>
                                    </div>
                                    <button class="Edit">Edit</button>
                                    <button class="Delete">Delete</button>
                                </div>`
                taskContainer.innerHTML += newTask
            }
        }
}

//Create a project
const newProject = () =>{
    let toggleProject = document.getElementById('submitProject')
    if(toggleProject.style.visibility == 'hidden'){
        toggleProject.style.visibility = 'visible';
    }else{
        toggleProject.style.visibility = 'hidden';
    }
}

//Show all Projects from local storage
const showProjects = () =>{
    const storedProjects = JSON.parse(localStorage.getItem('projectsArray'))
    for(let i = 0; i < storedProjects.length; i++){
        const projectContainer = document.getElementById('projectList')
        const project = `<div class="project">${storedProjects[i]}</div>`

        projectContainer.innerHTML += project
    }
}

const refreshTaskView = () =>{
    let taskContainer = document.getElementById('taskView-container')
    taskContainer.innerHTML = ''
}
export {toggleForm,loadUI,showTasks,newProject,showProjects,refreshTaskView}