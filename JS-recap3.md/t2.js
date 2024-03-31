// array for todo list
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

// add your code here

// etitään ul-elementti html dokumentista
const lista = document.querySelector("ul");

// käydään todoList läpi ja luodaan li-elementti jokaiselle todoListin alkioille
todoList.forEach((todo) => {
  const Lielementti = document.createElement("li");

  // listään li-elementtiin input-elementti ja label-elementti
  const inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = `todo-${todo.id}`;
  inputElement.checked = todo.completed;
  // lisätään input-elementti li-elementtiin
  Lielementti.appendChild(inputElement);

  // luodaan label-elementti ja lisätään se li-elementtiin
  const labelElement = document.createElement("label");
  labelElement.htmlFor = `todo-${todo.id}`;
  labelElement.textContent = `${todo.task}`;
  labelElement.checked = `${todo.completed}`;

  // lisätään label-elementti li-elementtiin
  Lielementti.appendChild(labelElement);

  // lisätään li-elementti ul-elementtiin
  lista.appendChild(Lielementti);
});
