const todos = [];
const Select = document.getElementById("modal");
const input = document.getElementById("Input");
const EditModal = document.getElementById("EditModal");
const OptionModal = document.getElementById("option");
const newStatusValue = OptionModal.value;

function addOne(newToDo) {
  todos.push(newToDo);
}

function TaskAdd() {
  Select.style.display = "block";
}

function Save() {
  Select.style.display = "none";
  const inputValue = input.value;
  const selectedStatus = document.querySelector("select").value;

  if (inputValue) {
    addOne({ name: inputValue, status: selectedStatus });
    render();
  }
}

function Deletetask(index) {
  const newArray = [];

  for (let i = 0; i < todos.length; i++) {
    if (i !== index) {
      newArray.push(todos[i]);
    }
  }

  todos.length = 0;
  todos.push(...newArray);

  render();
}

function render() {
  const todoList = document.querySelector("#To-do");
  const inProgressList = document.querySelector("#in-progress");
  const doneList = document.querySelector("#Done");
  const blockedList = document.querySelector("#Blocked");

  todoList.innerHTML = "";
  inProgressList.innerHTML = "";
  doneList.innerHTML = "";
  blockedList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const item = todos[i];
    const element = document.createElement("div");
    element.classList.add("todo-item");

    const titleEl = document.createElement("p");
    titleEl.classList.add("title");
    titleEl.innerText = "Name: " + item.name;

    const statusEl = document.createElement("p");
    statusEl.classList.add("status");
    statusEl.innerText = "Status: " + item.status;

    const editStatusButton = document.createElement("button");
    editStatusButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>';
    editStatusButton.classList.add("editstatusbutton");

    editStatusButton.onclick = function () {
      EditModal.style.display = "Block";
    };
    const DeleteStatus = document.createElement("button");
    DeleteStatus.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
    DeleteStatus.onclick = function () {
      Deletetask(i);
    };

    element.appendChild(titleEl);
    element.appendChild(statusEl);
    element.appendChild(editStatusButton);
    element.appendChild(DeleteStatus);

    if (item.status === "To do") {
      todoList.appendChild(element);
    } else if (item.status === "In progress") {
      inProgressList.appendChild(element);
    } else if (item.status === "Done") {
      doneList.appendChild(element);
    } else if (item.status === "Blocked") {
      blockedList.appendChild(element);
    }
  }
}
