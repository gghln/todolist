let projectsArray = JSON.parse(localStorage.getItem('projectsArray')) || []

const addProject = () => {
    projectsArray.push(document.getElementById('projectName').value)
    localStorage.setItem('projectsArray',JSON.stringify(projectsArray))
}

export{addProject}