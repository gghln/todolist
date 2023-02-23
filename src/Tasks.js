const Task = (title,description,date,priority) => {
    return{title,description,date,priority}
}

let array = []

const addTask = () =>{
    let t1= document.getElementById('title').value
    let t2 = document.getElementById('description').value
    let t3 = document.getElementById('date').value
    let t4 = document.getElementById('priority').value
    let task = Task(t1,t2,t3,t4)
    array.push(task)
    console.log(task)
}

export {addTask,array}