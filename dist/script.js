function domLoaded() {
  let addBtn = document.getElementById("addBtn");
  let taskInput = document.getElementById("taskInput");

  addBtn.addEventListener("click", addBtnClick);

  taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      addBtnClick();
    }
  });

  let doneButtons = document.querySelectorAll(".done-btn");
  doneButtons.forEach(button => {
    button.addEventListener("click", removeTask);
  });
}

function addBtnClick() {
  let taskInput = document.getElementById("taskInput");
  let newTask = taskInput.value.trim();

  if (newTask === "") {
    return;
  }

  addTask(newTask);

  taskInput.value = "";
  taskInput.focus();
}

function addTask(taskText) {
  let newLi = document.createElement("li");
  newLi.innerHTML = `<span class="task-text">${taskText}</span><button class="done-btn">&#10006;</button>`;

  let ol = document.querySelector("#taskList");
  ol.appendChild(newLi);

  let doneButtons = document.querySelectorAll(".done-btn");
  let lastButton = doneButtons[doneButtons.length - 1];
  lastButton.addEventListener("click", removeTask);
}

function removeTask(event) {
  let li = event.target.parentNode;
  let ol = li.parentNode;
  ol.removeChild(li);
}

document.addEventListener("DOMContentLoaded", domLoaded);
