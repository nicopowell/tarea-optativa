let temaConfigurado = JSON.parse(localStorage.getItem("tema")) || "dark";
let iconoTheme = document.getElementById("iconoTheme");
cambiarTema(temaConfigurado);

let btnThemeDark = document.querySelector("#btnThemeDark");
let btnThemeLight = document.querySelector("#btnThemeLight");

let contenedorComentarios = document.getElementById("contenedorComentarios")
let formularioComentario = document.getElementById("formularioComentario")

btnThemeDark.addEventListener("click", () => cambiarTema("dark"));
btnThemeLight.addEventListener("click", () => cambiarTema("light"));
formularioComentario.addEventListener("submit", agregarComentario)

function cambiarTema(color) {
  document.querySelector("html").setAttribute("data-bs-theme", color);
  localStorage.setItem("tema", JSON.stringify(color));

  if (color === "dark") {
    iconoTheme.className = "bi bi-moon-stars-fill";
  } else {
    iconoTheme.className = "bi bi-sun-fill";
  }
}

function agregarComentario(e){
  e.preventDefault();
  let inputNombre = document.getElementById("nombre").value;
  let inputComentario = document.getElementById("comentario").value;

  let comentario = document.createElement("li")
  comentario.className = "list-group-item d-flex align-items-center"
  comentario.innerHTML = `<i class="bi bi-person-circle fs-1 me-3"></i>
  <div>
    <p class="fw-bold m-0">${inputNombre}</p>
    <p class="m-0 lead fs-6">${inputComentario}</p>
  </div>`
  contenedorComentarios.appendChild(comentario)
}

