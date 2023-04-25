let buscador = document.querySelector("input");

buscador.addEventListener("keyup", filtrar);

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
