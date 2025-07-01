export { removeTask, editTaskName, tasksToComplete, checked };

function removeTask(ev) {
  const elementParent = ev.currentTarget.parentElement;
  const parentId = elementParent.id;
  const taskNumber = document.querySelectorAll(".task").length;

  if (parentId.length > 16) {
    const idNumber = [...parentId].splice(-2, 2);
    localStorage.removeItem(`task-${idNumber[0] + idNumber[1] + idNumber[2]}`);
    const taskToRemove = document.getElementById(
      `task-${idNumber[0] + idNumber[1]}`
    );

    document.getElementById("tasksQuantity").innerText = `You have ${
      taskNumber - 1
    } task(s)`;

    taskToRemove.remove();
    checked();
    return;
  }
  if (parentId.length > 17) {
    const idNumber = [...parentId].splice(-3, 3);
    localStorage.removeItem(`task-${idNumber[0] + idNumber[1] + idNumber[2]}`);
    const taskToRemove = document.getElementById(
      `task-${idNumber[0] + idNumber[1] + idNumber[2]}`
    );

    document.getElementById("tasksQuantity").innerText = `You have ${
      taskNumber - 1
    } task(s)`;

    taskToRemove.remove();
    checked();
    return;
  }

  document.getElementById("tasksQuantity").innerText = `You have ${
    taskNumber - 1
  } task(s)`;

  const idNumber = [...parentId].pop();
  localStorage.removeItem(`task-${idNumber}`);
  const taskToRemove = document.getElementById(`task-${idNumber}`);
  taskToRemove.remove();
  checked();
}

function editTaskName(ev) {
  const clickedBtn = ev.currentTarget;
  const elementParent = clickedBtn.parentElement;
  const parentId = elementParent.id;

  if (parentId.length > 16) {
    const idNumberArray = [...parentId].splice(-2, 2);
    const idNumber = idNumberArray[0] + idNumberArray[1];
    const taskToEdit = document.getElementById(`taskName-${idNumber}`);

    changeInputVisibility(taskToEdit, idNumber);
    return;
  }

  if (parentId.length > 17) {
    const idNumberArray = [...parentId].splice(-3, 3);
    const idNumber = idNumberArray[0] + idNumberArray[1] + idNumberArray[2];
    const taskToEdit = document.getElementById(`taskName-${idNumber}`);

    changeInputVisibility(taskToEdit, idNumber);
    return;
  }

  const idNumber = [...parentId].pop();
  const taskToEdit = document.getElementById(`taskName-${idNumber}`);

  changeInputVisibility(taskToEdit, idNumber);
}

function tasksToComplete() {
  const taskNumber = document.querySelectorAll(".task").length + 1;
  const completedTasks = document.querySelectorAll(
    ".taskCompletedInput:checked"
  ).length;

  document.getElementById("tasksToComplete").innerText = `${
    taskNumber - completedTasks - 1
  } task(s) to complete`;
}

function changeInputVisibility(taskToEdit, idNumber) {
  taskToEdit.classList.toggle("enabled");
  if (taskToEdit.classList.contains("enabled")) {
    taskToEdit.disabled = false;
    taskToEdit.focus();
    return;
  }
  taskToEdit.disabled = true;

  confirmEditedName(taskToEdit, idNumber);
}

function confirmEditedName(taskToEdit, idNumber) {
  console.log(taskToEdit, idNumber);
  localStorage.setItem(`task-${idNumber}`, taskToEdit.value);
}

function checked() {
  
}