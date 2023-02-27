const Task = (project,title,description,date,priority) => {
    return{project,title,description,date,priority}
}

let tasksArray = JSON.parse(localStorage.getItem('tasksArray')) || []

const addTask = (project,title,description,date,priority) =>{
    project = document.getElementById('nikolas').innerHTML
    title= document.getElementById('title').value
    description = document.getElementById('description').value
    date = document.getElementById('date').value
    priority = document.getElementById('priority').value
    let task = Task(project,title,description,date,priority)
    tasksArray.push(task)
    localStorage.setItem('tasksArray',JSON.stringify(tasksArray))
}
export {addTask}