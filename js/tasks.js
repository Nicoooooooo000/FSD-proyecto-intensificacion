// ================= USUARIO ACTUAL =================

// Devuelve el usuario logueado usando tu sesión existente
function getCurrentUser() {
  return getSession(); // viene de storage.js
}

// ================= CLAVE DE TAREAS =================

// Cada usuario tiene su propia lista
function getTasksKey() {
  const user = getCurrentUser();
  if (!user) return null;

  return `cloudy_tasks_${user.username}`;
}

// ================= OBTENER / GUARDAR TAREAS =================

// Obtener tareas del usuario actual
function getTasks() {
  const key = getTasksKey();
  if (!key) return [];

  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

// Guardar tareas del usuario actual
function saveTasks(tasks) {
  const key = getTasksKey();
  if (!key) return;

  localStorage.setItem(key, JSON.stringify(tasks));
}

// ================= RENDERIZAR TAREAS =================

function renderTasks() {
  const taskList = document.getElementById("taskList");
  if (!taskList) return;

  taskList.innerHTML = "";

  const tasks = getTasks();

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    // Marcar como completada
    li.addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks(tasks);
      renderTasks();
    });

    // Botón eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // evita marcar como completada
      tasks.splice(index, 1);
      saveTasks(tasks);
      renderTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// ================= AGREGAR TAREA =================

document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskInput = document.getElementById("taskInput");

  if (!addTaskBtn || !taskInput) return;

  addTaskBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text === "") return; // no permitir vacías

    const tasks = getTasks();

    tasks.push({
      text: text,
      completed: false
    });

    saveTasks(tasks);
    renderTasks();
    taskInput.value = "";
  });

// ================= INICIALIZAR =================
function initTasks() {
  const taskList = document.getElementById("taskList");
  if (!taskList) return;

  renderTasks();
}
});
