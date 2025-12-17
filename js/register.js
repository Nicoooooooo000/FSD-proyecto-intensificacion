// ================= REFERENCIAS =================
const registerForm = document.getElementById("registerForm");
const registerError = document.getElementById("registerError");

// ================= EVENTO SUBMIT =================
registerForm.addEventListener("submit", function (event) {
  event.preventDefault(); // 🚫 evita recargar la página

  // Obtener valores
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value;
  const confirmPassword = document.getElementById("regPasswordConfirm").value;

  // Ocultar error por defecto
  registerError.classList.add("hidden");
  registerError.textContent = "";

  // ================= VALIDACIONES =================
  if (!name || !email || !username || !password || !confirmPassword) {
    showRegisterError("Todos los campos son obligatorios");
    return;
  }

  if (password.length < 6) {
    showRegisterError("La contraseña debe tener al menos 6 caracteres");
    return;
  }

  if (password !== confirmPassword) {
    showRegisterError("Las contraseñas no coinciden");
    return;
  }

  // Verificar si el usuario o email ya existe
  if (findUser(username) || findUser(email)) {
    showRegisterError("El usuario o email ya está registrado");
    return;
  }

  // ================= CREAR USUARIO =================
  const newUser = {
    name,
    email,
    username,
    password
  };

  const users = getUsers();
  users.push(newUser);
  saveUsers(users);

  // ================= REGISTRO EXITOSO =================
  alert("Cuenta creada correctamente");

  // Ir al login
  showView("login");
});

// ================= FUNCIÓN ERROR =================
function showRegisterError(message) {
  registerError.textContent = message;
  registerError.classList.remove("hidden");
}
