// Alkuperäinen todoList-array (tämän haluat säilyttää ja käyttää)
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
    </li>
  `;

  ULelement.insertAdjacentHTML("beforeend", HTML);
});
