(()=>{"use strict";let e=[];document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("main-container").innerHTML+='<div id="taskForm">\n                <input type="sumbit" id="title">\n                <input type="text" id="description">\n                <input type="date" id="date">\n                <select id="priority">\n                    <option value="High">High</option>\n                    <option value="Middle">Middle</option>\n                    <option value="Low">Low</option>\n                </select>\n                <input type="submit" id="submitTask">\n                </div>',document.getElementById("taskForm").style.visibility="hidden",document.querySelector("#createForm").addEventListener("click",(()=>{(()=>{let e=document.getElementById("taskForm");"hidden"==e.style.visibility?e.style.visibility="visible":e.style.visibility="hidden"})()})),document.querySelector("#submitTask").addEventListener("click",(()=>{(()=>{let t={title:document.getElementById("title").value,description:document.getElementById("description").value,date:document.getElementById("date").value,priority:document.getElementById("priority").value};e.push(t),console.log(t)})()}))}))})();