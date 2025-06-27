import { checked, editTaskName, removeTask } from "./taskButtons.js";

export { addToList };

function addToList() {
  const addToListInput = document.getElementById("addToListInput");
  const divOfTasks = document.getElementById("tasks");
  const taskNumber = document.querySelectorAll(".task").length + 1;

  localStorage.setItem(`task-${taskNumber}`, addToListInput.value);

  document.getElementById(
    "tasksQuantity"
  ).innerText = `You have ${taskNumber} task(s)`;

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  taskDiv.id = `task-${taskNumber}`;

  const taskInfosDiv = document.createElement("div");
  taskInfosDiv.classList.add("taskInfos");

  const completeInput = document.createElement("input");
  completeInput.type = "checkbox";
  completeInput.classList.add("taskCompletedInput");
  completeInput.id = `task-${taskNumber}-completed`;

  completeInput.addEventListener("click", checked);

  const taskName = document.createElement("input");
  taskName.classList.add("taskNameInput");
  taskName.id = `taskName-${taskNumber}`;
  taskName.value = addToListInput.value;
  taskName.disabled = true;

  const taskButtonsDiv = document.createElement("div");
  taskButtonsDiv.classList.add("taskButtonsDiv");
  taskButtonsDiv.id = `taskButtonsDiv-${taskNumber}`;

  const editTaskNameBtn = document.createElement("button");
  editTaskNameBtn.classList.add("editTaskNameBtn");
  editTaskNameBtn.id = `editTaskNameBtn-${taskNumber}`;

  editTaskNameBtn.addEventListener("click", editTaskName);

  const editIconImg = document.createElement("img");
  editIconImg.src = "/img/editIcon.svg";
  editIconImg.alt = "Edit name";
  editIconImg.classList.add("icon");

  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.classList.add("deleteTaskBtn");
  deleteTaskBtn.id = `deleteTaskBtn-${taskNumber}`;

  deleteTaskBtn.addEventListener("click", removeTask);

  const trashCanImg = document.createElement("img");
  trashCanImg.src = "/img/trash-can-icon.svg";
  trashCanImg.alt = "Delete";
  trashCanImg.classList.add("icon");

  taskInfosDiv.append(completeInput, taskName);
  editTaskNameBtn.appendChild(editIconImg);
  deleteTaskBtn.appendChild(trashCanImg);
  taskButtonsDiv.append(editTaskNameBtn, deleteTaskBtn);
  taskDiv.append(taskInfosDiv, taskButtonsDiv);
  divOfTasks.appendChild(taskDiv);

  addToListInput.value = "";

  checked();
}
