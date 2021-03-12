document.addEventListener("DOMContentLoaded", () => {
  const newTask = document.querySelector(`#create-task-form`)

  newTask.addEventListener("submit", createNewTask)
});

const createNewTask = event => {
  event.preventDefault()
}
