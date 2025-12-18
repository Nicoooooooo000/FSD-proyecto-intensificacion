// ================= REFERENCIAS =================
const btnLogout = document.getElementById("btnLogout");
const logoutTitle = document.getElementById("logoutTitle");
const welcomeMessageSession = document.getElementById("welcomeMessage");

// ================= AL CARGAR LA APP =================
document.addEventListener("DOMContentLoaded", () => {
  const session = getSession();

  if (session) {
    // Si hay sesión activa, ir directo al panel
    welcomeMessageSession.textContent = `¡Hola ${session.name}! ¡Qué bueno verte!`;
    showView("panel");
  } else {
    // Si no hay sesión, ir al home
    showView("home");
  }
});

// ================= LOGOUT =================
btnLogout.addEventListener("click", () => {
  const session = getSession();

  if (session) {
    logoutTitle.textContent = `¡Hasta luego ${session.name}! ¡Te esperamos!`;
  }

  clearSession();

const taskList = document.getElementById("taskList");
if (taskList) {
  taskList.innerHTML = "";
}

  showView("logout");
});
