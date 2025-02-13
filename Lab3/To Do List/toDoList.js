function addTask(){
    let input = document.getElementById("task");
    if(input.value == ""){
        alert("Empty task? it's NOT allowed!");
    }else {
        
    let ul = document.getElementById("tasksList");
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = input.value;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function(){
        span.classList.toggle("done" , this.checked);
    };

    let taskContainer = document.createElement("div");
    taskContainer.className = "task-container";


    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "🗑";
    deleteBtn.className = "delete";
    deleteBtn.onclick = function(){
        ul.removeChild(li);
    }

    let delCon = document.createElement("div");
    delCon.className="delCon";
    delCon.appendChild(deleteBtn);
    
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(span);

    li.appendChild(taskContainer);
    li.appendChild(delCon);
    ul.appendChild(li);

    input.value = "";
    }

}
