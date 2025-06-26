import { addToList } from "./addToList.js";

const nameInput = document.getElementById("nameInput");
const userNameSection = document.getElementById("userNameSection");
const toDoListSection = document.getElementById("toDoListSection");
const ownersName = document.getElementById("ownersName");

hasUsername();

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
  if (!username) {
    userNameSection.classList.remove("disabled");
    toDoListSection.classList.add("disabled");
    return;
  }
  if (username !== "") {
    userNameSection.classList.add("disabled");
    toDoListSection.classList.remove("disabled");
    ownersName.innerText = `${username}'s TO-DO LIST`;
    return;
  }
}

document.getElementById("addToListBtn").addEventListener("click", addToList);
