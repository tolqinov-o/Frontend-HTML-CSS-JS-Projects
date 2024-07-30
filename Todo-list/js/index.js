const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const lang = navigator.language;
const d = new Date();
let name = month[d.getMonth()];
let daynumber = d.getDate();
let dayname = d.toLocaleString(lang,{weekday: 'long'})
document.querySelector(".month").innerHTML = name;
document.querySelector(".date").innerHTML = dayname + ', ' + daynumber+'-day';

document.querySelector('.button_div').onclick = () => {
    if(document.querySelector('.search_input').value.length == 0) {
        alert('You need to mark something');
    }
    else {
        document.querySelector(".tasklist_div").innerHTML += `<div class="task_list">
        <input type="checkbox" id="check" class="checkbox" id="check">
        <h3 class="task" id="tasks"> ${document.querySelector(".search_input").value} </h3>
        <i style="cursor: pointer;" class="fa-solid fa-trash"><span class="material-symbols-outlined">
        delete
        </span></i>
    </div>`;
    document.querySelector('.search_input').value = '';

    var divlist = document.querySelectorAll('.task_list').length;
    document.querySelector('.numberof_tasks').innerHTML = divlist + ' The work you do';

    var current_tasks = document.querySelectorAll('.fa-trash');

    for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function() {
            this.parentNode.remove()
            var divlist = document.querySelectorAll('.task_list').length;
            document.querySelector('.numberof_tasks').innerHTML = divlist + ' Left';
        }
    }
    }
}