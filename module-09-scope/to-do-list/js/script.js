// Step 6 of 6
// Practice Exercises: Scope

// Debugging

const todos = [
  "Walk dog",
  "Do laundry",
  "Call mom",
  "Finish paper",
  "Code a small project",
  "Read docs",
  "Grab food",
  "Go to the post office"
];

const button = document.querySelector(".show-todos");
const todoList = document.querySelector(".todos");

const showTodos = function () {
  todos.forEach(function (todo) {
    const li = document.createElement("li");
    li.innerHTML = todo;
    todoList.append(li);
  });
  todoList.classList.remove("hide");
  button.innerText = "Hide To-Dos";
};

button.addEventListener("click", function () {
  if (todoList.classList.contains("hide")) {
    showTodos();
  } else {
    button.innerText = "Show me!";
    todoList.classList.add("hide");
    todoList.innerHTML = "";
  }
});
