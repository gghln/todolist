const loadUI = () => {
    let mainContainer = document.getElementById('main-container')
    let form =`<div id="taskForm">
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
    mainContainer.innerHTML += form
    let toggle = document.getElementById('taskForm')
    toggle.style.visibility = 'hidden'
}

const toggleForm = () =>{
    let toggle = document.getElementById('taskForm')
    if(toggle.style.visibility == 'hidden'){
        toggle.style.visibility = 'visible';
    }else{
        toggle.style.visibility = 'hidden';
    }
}
export {toggleForm,loadUI}