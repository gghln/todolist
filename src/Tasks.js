const Task = (title,description,date,priority) => {
    return{title,description,date,priority}
}

let tasksArray = []

const addTask = (title,description,date,priority) =>{
    title= document.getElementById('title').value
    description = document.getElementById('description').value
    date = document.getElementById('date').value
    priority = document.getElementById('priority').value
    let task = Task(title,description,date,priority)
    tasksArray.push(task)
    localStorage.setItem('tasksArray',JSON.stringify(tasksArray))
}
export {addTask}