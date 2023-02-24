import {addTask} from './Tasks'
import {toggleForm,loadUI,updateTasks} from './UI.js'

document.addEventListener('DOMContentLoaded', () => {
    loadUI()

    let toggleTaskForm = document.querySelector('#createTask')
    toggleTaskForm.addEventListener('click', () =>{
        toggleForm()  
    })

    let submitTask = document.querySelector('#submitTask')
    submitTask.addEventListener('click', () => {
        addTask()
        updateTasks()
    }) 
})

