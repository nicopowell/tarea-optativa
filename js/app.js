let temaConfigurado = JSON.parse(localStorage.getItem("tema")) || "dark";
let iconoTheme = document.getElementById("iconoTheme");
cambiarTema(temaConfigurado);

let btnThemeDark = document.querySelector("#btnThemeDark");
let btnThemeLight = document.querySelector("#btnThemeLight");
let buscador = document.querySelector("input");

buscador.addEventListener("keyup", filtrar);
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

function filtrar() {
  let busqueda = buscador.value.toLowerCase();
  let resultados = 0;
  let articulos = document.querySelectorAll(".articulos");
  let sinResultados = document.getElementById('mensajeError');

  articulos.forEach((articulo) => {
    let titulo = articulo.querySelector(".card-title").textContent.toLowerCase();
    if (titulo.includes(busqueda)) {
      articulo.style.display = "block";
      resultados++;
    } else {
      articulo.style.display = "none";
    }
  });

  if (resultados === 0 && sinResultados.className === "d-none") {
    sinResultados.className = "text-center";
  } else if (resultados > 0 && sinResultados.className === "text-center") {
    sinResultados.className ="d-none";
  }
}
