//import { array } from "./Tasks"
const createTask = () =>{
    let main_container = document.getElementById('main-container')
    let form =`<input type="sumbit" id="title">
                <input type="text" id="description">
                <input type="date" id="date">
                <select id="priority">
                    <option value="High">High</option>
                    <option value="Middle">Middle</option>
                    <option value="Low">Low</option>
                </select>
                <input type="submit" id="submitTask">`
    main_container.innerHTML = form
}
export {createTask}