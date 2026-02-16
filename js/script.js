console.log("JS funcionando");

const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

nombre.addEventListener("invalid", function () {
  nombre.classList.add("error-input");
});

email.addEventListener("invalid", function () {
  email.classList.add("error-input");
});

mensaje.addEventListener("invalid", function () {
  mensaje.classList.add("error-input");
});

// Quitar rojo cuando se corrige
nombre.addEventListener("input", function () {
  if (nombre.checkValidity()) {
    nombre.classList.remove("error-input");
  }
});

email.addEventListener("input", function () {
  if (email.checkValidity()) {
    email.classList.remove("error-input");
  }
});

mensaje.addEventListener("input", function () {
  if (mensaje.checkValidity()) {
    mensaje.classList.remove("error-input");
  }
});
