//TO DO LIST
let addToDoButton = document.getElementById("addToDo");
let toDoCointainer = document.getElementById("toDoContainer");
let input = document.getElementById("input");

addToDoButton.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.innerText = input.value;
  toDoCointainer.appendChild(paragraph);
  input.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
});
