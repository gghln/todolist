import {addTask} from './Tasks'
import {createTask} from './UI.js'

document.addEventListener('DOMContentLoaded', () => {

    let createForm = document.querySelector('#createForm')
    createForm.addEventListener('click', () =>{
        createTask()
        
        let submitTask = document.querySelector('#submitTask')
        submitTask.addEventListener('click', () => {
        addTask()
    })   
    })
})

