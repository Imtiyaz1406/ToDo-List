let tasks = [];

let taskContainer = document.getElementById('tasksContainer');

function renderTasks() {

    taskContainer.innerHTML = "";
    tasks.map((task) => {

        let input = document.createElement('input');
        input.setAttribute("id", "checkBox")
        input.setAttribute("type","checkbox")
        let myDiv = document.createElement('div');
        myDiv.classList.add('taskList');

        let p = document.createElement('p');
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        p.innerText = task.taskName; 
        p2.innerText = task.discName;
        p3.innerText = task.dateName;

        taskContainer.appendChild(input);
        taskContainer.appendChild(myDiv);
        myDiv.appendChild(p);
        myDiv.appendChild(p2);
        myDiv.appendChild(p3);


        let allCheckBox = document.querySelectorAll("div #checkBox")
        let allTasks = document.querySelectorAll(".taskList")

        allCheckBox.forEach((value,index) => {
            value.onclick = () => {
                allTasks[index].style.color = "red"
            }
        })
    })
}
function addTasks() {
    document.querySelector(".logo").classList.add("hide-logo")
    let taskName = document.getElementById('inputTask');
    let discName = document.getElementById('inputDiscription');
    let dateName = document.getElementById('inputDate');

    let tempTasks = {

        taskName: taskName.value,
        discName: discName.value,
        dateName: dateName.value,
    }
    tasks.push(tempTasks);
    console.log(tasks)
    renderTasks();

}