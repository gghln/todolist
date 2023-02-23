const toDoProperties = (title,description,dueDate,priority) => {
    return{ title,description,dueDate,priority }
}


const createToDo = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const content = document.getElementById("content")

        const toDocontainer = document.createElement('div')
        toDo.setAttribute('class','todo-container')

        const title = document.createElement('input')
        title.setAttribute('type','text')

        const description = document.createElement('input')
        description.setAttribute('type','text')

        const date = document.createElement('input')
        date.setAttribute('type','date')

        const priority = document.createElement('select')
        const lowPrio = document.createElement('option')

        content.appendChild(toDocontainer)
    })
}



export { createToDo };