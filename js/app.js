let temaConfigurado = JSON.parse(localStorage.getItem("tema")) || "dark";
let iconoTheme = document.getElementById("iconoTheme");
cambiarTema(temaConfigurado);

let btnThemeDark = document.querySelector("#btnThemeDark");
let btnThemeLight = document.querySelector("#btnThemeLight");



btnThemeDark.addEventListener("click", () => cambiarTema("dark"));
btnThemeLight.addEventListener("click", () => cambiarTema("light"));

function cambiarTema(color) {
  document.querySelector("html").setAttribute("data-bs-theme", color);
  localStorage.setItem("tema", JSON.stringify(color));

  if (color === "dark") {
    iconoTheme.className = "bi bi-moon-stars-fill";
  } else {
    iconoTheme.className = "bi bi-sun-fill";
  }
}

