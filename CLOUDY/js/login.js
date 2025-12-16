// ================= REFERENCIAS =================
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const welcomeMessage = document.getElementById("welcomeMessage");

// ================= EVENTO SUBMIT =================
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // evita recargar la página

  const identifier = document.getElementById("loginUser").value.trim();
  const password = document.getElementById("loginPassword").value;

  // Ocultar error por defecto
  loginError.classList.add("hidden");
  loginError.textContent = "";

  // ================= VALIDACIONES =================
  if (!identifier || !password) {
    showLoginError("Todos los campos son obligatorios");
    return;
  }

  const user = findUser(identifier);

  if (!user || user.password !== password) {
    showLoginError("Usuario o contraseña incorrectos");
    return;
  }

  // ================= LOGIN CORRECTO =================
  saveSession(user);

  // Saludo personalizado
  welcomeMessage.textContent = `¡Hola ${user.name}! ¡Qué bueno verte!`;

  // Ir al panel
  showView("panel");
});

// ================= FUNCIÓN ERROR =================
function showLoginError(message) {
  loginError.textContent = message;
  loginError.classList.remove("hidden");
}
