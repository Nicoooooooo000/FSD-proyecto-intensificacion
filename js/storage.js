// ================= CLAVES DE LOCALSTORAGE =================
const USERS_KEY = "cloudy_users";
const SESSION_KEY = "cloudy_session";

// ================= USUARIOS =================

// Obtener usuarios guardados
function getUsers() {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
}

// Guardar lista de usuarios
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Buscar usuario por username o email
function findUser(identifier) {
  const users = getUsers();
  return users.find(
    user => user.username === identifier || user.email === identifier
  );
}

// ================= SESIÓN =================

// Guardar sesión activa
function saveSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

// Obtener sesión activa
function getSession() {
  const session = localStorage.getItem(SESSION_KEY);
  return session ? JSON.parse(session) : null;
}

// Cerrar sesión
function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}
