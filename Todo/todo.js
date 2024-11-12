const todos = [];

function addOne(newToDo) {
  todos.push(newToDo);
}

function TaskAdd() {
  const addTask = prompt("Enter your new task");
  if (addTask) {
    addOne({ name: addTask, status: "Done" });
    render();
  }
}

function TaskDelete() {
  const deleteByIndex = prompt(
    "Enter the index of the task to delete (starting from 1):"
  );

  if (deleteByIndex !== "") {
    const index = deleteByIndex - 1;
    if (index > 0 && index < todos.length) {
      const Newtodo = [];
      for (let i = 0; i < todos.length; i++) {
        if (i !== index) {
          Newtodo.push(todos[i]);
        }
      }

      todos.length = 0;
      todos.push(...Newtodo);
      render();
    } else {
      alert("Invalid index. Please try again.");
    }
  }
}

function render() {
  const todoList = document.querySelector("#tasks");

  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const item = todos[i];
    const element = document.createElement("div");
    element.classList.add("todo-item");

    const titleEl = document.createElement("p");
    titleEl.classList.add("title");
    titleEl.innerText = "name" + ":" + " " + item.name;

    const statusEl = document.createElement("p");
    statusEl.classList.add("status");
    statusEl.innerText = "status" + ":" + " " + item.status;

    element.appendChild(titleEl);
    element.appendChild(statusEl);

    todoList.appendChild(element);
  }
}
