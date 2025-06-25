import { addToList } from "./addToList.js";
import { removeTask } from "./taskButtons.js";

const nameInput = document.getElementById("nameInput");
const userNameSection = document.getElementById("userNameSection");
const toDoListSection = document.getElementById("toDoListSection");
const ownersName = document.getElementById("ownersName");

document.getElementById("creatToDoList").addEventListener("click", (ev) => {
  ev.preventDefault();
  if (nameInput.value === "") {
    return alert("Choose a valid name");
  }
  localStorage.setItem("username", nameInput.value);
  hasUsername();
});

function hasUsername() {
  const username = localStorage.getItem("username");
  if (username !== "") {
    userNameSection.classList.remove("disabled");
    toDoListSection.classList.remove("disabled");
    ownersName.innerText = `${username}'s To-Do List`;
    return;
  }
  userNameSection.classList.remove("disabled");
  toDoListSection.classList.remove("disabled");
}

document.getElementById("addToListBtn").addEventListener("click", addToList);
