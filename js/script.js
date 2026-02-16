const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (e) {
  let hayError = false;

  // Validar nombre
  if (nombre.value.trim() === "") {
    nombre.classList.add("error-input");
    hayError = true;
  } else {
    nombre.classList.remove("error-input");
  }

  // Validar email
  if (email.value.trim() === "" || !email.checkValidity()) {
    email.classList.add("error-input");
    hayError = true;
  } else {
    email.classList.remove("error-input");
  }

  // Validar mensaje
  if (mensaje.value.trim() === "") {
    mensaje.classList.add("error-input");
    hayError = true;
  } else {
    mensaje.classList.remove("error-input");
  }

  // Si hay error, no se envía el formulario
  if (hayError) {
    e.preventDefault();
  }
});
