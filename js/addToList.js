export { addToList };

function addToList() {
  const divOfTasks = document.getElementById("tasks");

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const taskInfosDiv = document.createElement("div");
  taskInfosDiv.classList.add("taskInfos");

  const completeInput = document.createElement("input");
  completeInput.type = "radio";
  completeInput.id = "taskCompleted";

  const taskName = document.createElement("p");
  taskName.id = "taskName";
  taskName.innerText = document.getElementById("addToListInput").value;

  const taskButtonsDiv = document.createElement("div");
  taskButtonsDiv.classList.add("taskButtonsDiv");

  const editTaskNameBtn = document.createElement("button");
  editTaskNameBtn.id = "editTaskNameBtn";

  const editIconImg = document.createElement("img");
  editIconImg.src = "/img/editIcon.svg";
  editIconImg.alt = "Edit name";
  editIconImg.classList.add("icon");

  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.id = "deleteTaskBtn";

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
}
