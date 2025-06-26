export { removeTask, editTaskName };

function removeTask(ev) {
  const elementParent = ev.currentTarget.parentElement;
  const parentId = elementParent.id;
  const idNumber = [...parentId].pop();
  const taskToRemove = document.getElementById(`task-${idNumber}`);

  taskToRemove.remove();
}

function editTaskName(ev) {
  const clickedBtn = ev.currentTarget;
  const elementParent = clickedBtn.parentElement;
  const parentId = elementParent.id;
  const idNumber = [...parentId].pop();
  const taskToEdit = document.getElementById(`taskName-${idNumber}`);

  taskToEdit.disabled = false;
  taskToEdit.focus();
}
