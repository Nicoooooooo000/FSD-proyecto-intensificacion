# FSD – Proyecto de Intensificación  
## Cloudy – Single Page Application (Etapa 2)

Repositorio del proyecto **Cloudy**, desarrollado para la intensificación 2025 de
**Funcionamiento de los Sistemas Digitales**.

En esta etapa se implementa una **Single Page Application funcional**, incorporando
registro de usuarios, inicio de sesión, manejo de sesión y navegación sin recargar
la página.

---

## Nombre del proyecto
**Cloudy – Single Page Application**

---

## Descripción
Cloudy es una SPA desarrollada con HTML, CSS y JavaScript puro, con una estética
minimalista, clara y moderna.

La aplicación permite a los usuarios registrarse, iniciar sesión y acceder a un
panel privado, manteniendo una experiencia de navegación fluida sin recargar
la página. El diseño es responsive y se adapta tanto a dispositivos móviles como
a computadoras.

---

## Objetivos de la aplicación
Cloudy tiene como objetivo ofrecer una estructura clara y accesible de una
aplicación web tipo SPA, permitiendo a los usuarios:

- Registrarse mediante un formulario con validaciones.
- Iniciar sesión con usuario o email y contraseña.
- Acceder a un panel privado una vez autenticados.
- Mantener la sesión activa mediante localStorage.
- Cerrar sesión de forma segura.
- Navegar entre pantallas sin recargar la página.
- Utilizar la aplicación en dispositivos móviles y de escritorio.

La aplicación está diseñada para ser simple, intuitiva y escalable, dejando
preparado el espacio para incorporar nuevas funcionalidades en etapas
posteriores del desarrollo.

---

## Tecnologías utilizadas
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- LocalStorage

---

## Funcionalidades implementadas (Etapa 2)
- Navegación SPA sin recarga de página.
- Registro de usuarios con validaciones.
- Inicio de sesión con control de credenciales.
- Sesión persistente.
- Cierre de sesión (logout).
- Diseño responsive.
- Estructura preparada para la Etapa 3.

---

## Estructura del proyecto

<img width="300" height="278" alt="image" src="https://github.com/user-attachments/assets/ba226bec-e671-4097-8b96-c830a40c8d29" />

---

## Arquitectura de la aplicación
La aplicación está desarrollada como una Single Page Application (SPA).
Todas las vistas se encuentran en un único archivo HTML y la navegación
se realiza mediante JavaScript, mostrando y ocultando secciones sin
recargar la página.

La lógica se divide en módulos para mantener una estructura clara y
ordenada.

---

## Funciones principales
- showView(): controla la navegación entre pantallas.
- getUsers() / saveUsers(): gestión de usuarios en LocalStorage.
- findUser(): búsqueda de usuario por email o username.
- saveSession() / getSession(): manejo de sesión activa.
- clearSession(): cierre de sesión.

---

## Cómo ejecutar el proyecto
1. Abrir repositorio
2. Abrir el archivo `index.html` en un navegador web.
3. No se requiere servidor ni dependencias externas.

---

## Capturas de pantalla
![Home]
<img width="1149" height="495" alt="image" src="https://github.com/user-attachments/assets/09ea025d-b00b-4333-ad20-7b0fd07ccfc1" />
![Login]
<img width="1116" height="458" alt="image" src="https://github.com/user-attachments/assets/89b012e0-e3ed-4ba6-a860-99cb964be9df" />
![Registro]
<img width="1031" height="512" alt="image" src="https://github.com/user-attachments/assets/331481ed-f49a-45f0-a285-d7b63e541ae7" />
![Panel]
<img width="1366" height="603" alt="image" src="https://github.com/user-attachments/assets/dbe18976-140c-4ba6-997b-19d5f7b5e86a" />
![Logout]
<img width="1141" height="426" alt="image" src="https://github.com/user-attachments/assets/6316da8d-891e-4334-93e5-50f5007e2a38" />
![Vista móvil]
<img width="443" height="551" alt="image" src="https://github.com/user-attachments/assets/a4e99a09-6e18-48e7-a5bd-36df4e37489f" />


---

## Decisiones técnicas
Se decidió utilizar HTML, CSS y JavaScript puro para cumplir con la
consigna del proyecto y priorizar el aprendizaje de la lógica de una
SPA sin frameworks externos. El uso de LocalStorage permite simular
persistencia de datos de forma simple y clara. Ademas de facilitar al usuario con botones grandes y no tan complicados de entender para una comprensión mas fácil, ademas de colores claros para un ambiente más llamativo para el mismo.


## Autor
Nico Campos


