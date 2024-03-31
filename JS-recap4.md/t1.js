// Array for the todo list
const todoList = [
  {
    id: 1,
    task: "Learn HTML",
    completed: true,
  },
  {
    id: 2,
    task: "Learn CSS",
    completed: true,
  },
  {
    id: 3,
    task: "Learn JS",
    completed: false,
  },
  {
    id: 4,
    task: "Learn TypeScript",
    completed: false,
  },
  {
    id: 5,
    task: "Learn React",
    completed: false,
  },
];

const ULelement = document.querySelector("#todoList");

todoList.forEach((todo) => {
  const HTML = `
    <li>
        <input type="checkbox" id="todo-${todo.id}" ${todo.completed ? "checked" : ""}></input>
        <label for="todo-${todo.id}">${todo.task}</label>
        <button class="Delete" id="delete-${todo.id}">Delete</button>
    </li>
  `;
  ULelement.insertAdjacentHTML("beforeend", HTML);
});

// Add event listeners to handle changes
ULelement.addEventListener("change", (e) => {
  if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
    const todoid = parseInt(e.target.id.replace("todo-", ""), 10);
    const todo = todoList.find((t) => t.id === todoid);
    if (todo) {
      todo.completed = e.target.checked;
    }
  }
});

ULelement.addEventListener("click", (event) => {
  if (event.target.classList.contains("Delete")) {
    const itemId = parseInt(event.target.id.replace("delete-", ""), 10);
    const itemIndex = todoList.findIndex((item) => item.id === itemId);
    if (itemIndex > -1) {
      todoList.splice(itemIndex, 1);
      event.target.parentElement.remove();
    }
  }
});

let dialog = document.querySelector("dialog");
let addButton = document.querySelector(".add-btn");

addButton.onclick = function () {
  dialog.showModal();
};

var form = dialog.querySelector("form");
form.onsubmit = function (e) {
  e.preventDefault();

  const input = dialog.querySelector('input[type="text"]');
  const newTask = input.value.trim();

  if (newTask) {
    const newTodoItem = {
      id:
        todoList.length > 0
          ? Math.max(...todoList.map((item) => item.id)) + 1
          : 1,
      task: newTask,
      completed: false,
    };
    todoList.push(newTodoItem);
    input.value = "";

    dialog.close();
    const newHTML = `
            <li>
                <input type="checkbox" id="todo-${newTodoItem.id}"></input>
                <label for="todo-${newTodoItem.id}">${newTodoItem.task}</label>
                <button class="Delete" id="delete-${newTodoItem.id}">Delete</button>
            </li>
        `;
    ULelement.insertAdjacentHTML("beforeend", newHTML);
  }
};
