
let tasks = [];


function TaskAdd() {
  document.getElementById("modal").style.display = "block";
}


function Save() {
  let taskName = document.getElementById("Input").value;
  let taskStatus = document.getElementById("Select").value;

  if (taskName) {
   
    let task = {
      name: taskName,
      status: taskStatus,
    };

   
    tasks.push(task);

    
    addTaskToColumn(task);

    
    document.getElementById("modal").style.display = "none";

    
    document.getElementById("Input").value = "";
  }
}

function addTaskToColumn(task) {
  const taskElement = document.createElement("div");
  taskElement.classList.add("todo-item");
  taskElement.style.width="320px"
  taskElement.innerHTML = `
    <p>${task.name}</p>
    <button onclick="editTask(${tasks.length - 1})">Edit</button>
    <button onclick="deleteTask(${tasks.length - 1})">Delete</button>
  `;


  if (task.status === "To do") {
    document.getElementById("To-do").appendChild(taskElement);
  } else if (task.status === "In progress") {
    document.getElementById("in-progress").appendChild(taskElement);
  } else if (task.status === "Done") {
    document.getElementById("Done").appendChild(taskElement);
  } else if (task.status === "Blocked") {
    document.getElementById("Blocked").appendChild(taskElement);
  }
}


function editTask(index) {
 
  document.getElementById("EditModal").style.display = "block";

  
  document.getElementById("option").value = tasks[index].status;

  document.getElementById("Submit").onclick = function () {
    submitEdit(index);
  };
}


function submitEdit(index) {
  let newStatus = document.getElementById("option").value;
  tasks[index].status = newStatus;

  document.getElementById("To-do").innerHTML = "";
  document.getElementById("in-progress").innerHTML = "";
  document.getElementById("Done").innerHTML = "";
  document.getElementById("Blocked").innerHTML = "";

  tasks.forEach(task => {
    addTaskToColumn(task);
  });

 
  document.getElementById("EditModal").style.display = "none";
}

function deleteTask(index) {
  tasks.splice(index, 1);  


  document.getElementById("To-do").innerHTML = "";
  document.getElementById("in-progress").innerHTML = "";
  document.getElementById("Done").innerHTML = "";
  document.getElementById("Blocked").innerHTML = "";

 
  tasks.forEach(task => {
    addTaskToColumn(task);
  });
}
