const tasks = [{ name: "name", status: "status" }];

function render() {
  const output = document.getElementById("tasks");
  output.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    output.innerHTML += "<div id=tasks class=tasked>" + tasks[i].name + "<div>";
  }
}
function addTask() {
  const names = prompt();
  tasks.push({ name: names, status: "todo" });
  render();
}
function deleteOne() {
  const b = prompt();
  let newArray = [];
  for (let i = 0; i < tasks.length; i++) {
    if (i !== b) {
      newArray.push(tasks[i]);
    }
  }

  tasks = newArray;
  render();
}
console.log(tasks);
