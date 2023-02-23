import {addTask} from './Tasks'
import {toggleForm, loadUI} from './UI.js'

document.addEventListener('DOMContentLoaded', () => {
    loadUI()

    let test = document.querySelector('#createForm')
    test.addEventListener('click', () =>{
        toggleForm()  
    })

    let submitTask = document.querySelector('#submitTask')
    submitTask.addEventListener('click', () => {
        addTask()
    }) 
})

