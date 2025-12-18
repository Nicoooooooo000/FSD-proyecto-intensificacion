// ================= REFERENCIAS A VISTAS =================
const views = {
  home: document.getElementById("home"),
  login: document.getElementById("login"),
  register: document.getElementById("register"),
  panel: document.getElementById("panel"),
  logout: document.getElementById("logout")
};

// ================= FUNCIÓN SPA =================
function showView(viewName) {
  Object.values(views).forEach(view => {
    view.classList.remove("active");
  });

  views[viewName].classList.add("active");
}

// ================= BOTONES HOME =================
document.getElementById("btnGoLogin").addEventListener("click", () => {
  showView("login");
});

document.getElementById("btnGoRegister").addEventListener("click", () => {
  showView("register");
});

// ================= BOTONES LOGIN =================
document.getElementById("btnBackFromLogin").addEventListener("click", () => {
  showView("home");
});

document.getElementById("btnGoRegisterFromLogin").addEventListener("click", () => {
  showView("register");
});

// ================= BOTONES REGISTRO =================
document.getElementById("btnBackFromRegister").addEventListener("click", () => {
  showView("home");
});

document.getElementById("btnGoLoginFromRegister").addEventListener("click", () => {
  showView("login");
});

// ================= BOTÓN LOGOUT =================
document.getElementById("btnBackHomeFromLogout").addEventListener("click", () => {
  showView("home");
});
