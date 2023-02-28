import {addTask} from './Tasks'
import {addProject} from './Projects'
import {toggleForm,loadUI,newProject,refreshTaskView,showTasks} from './UI.js'


document.addEventListener('DOMContentLoaded', () => {
    loadUI()

    let toggleTaskForm = document.querySelector('#createTask')
    toggleTaskForm.addEventListener('click', () =>{
        toggleForm()  
    })

    let submitTask = document.querySelector('#submitTask')
    submitTask.addEventListener('click', () => {
        addTask()
    }) 

    let createProject = document.querySelector('#createProject')
    createProject.addEventListener('click', () => {
        newProject()
        createProject.style.display = 'none'
    }) 

    let addNewProject = document.querySelector('#addProject')
    addNewProject.addEventListener('click', () => {
        addProject()
        window.location.reload()
    })

    let chooceProject = document.querySelectorAll('.project')
    chooceProject.forEach((e) =>{
        e.addEventListener('click', () =>{
            let currentProject = e.innerHTML
            refreshTaskView()
            showTasks(currentProject)
        })
    })
})