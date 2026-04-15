let artigos = [];

// carregar JSON
async function carregarArtigos() {
  const resp = await fetch("./data/data.json");
  artigos = await resp.json();
  renderizarArtigos(artigos);
}

// renderizar mantendo sua estrutura
function renderizarArtigos(lista) {
  const container = document.getElementById("lista-artigos");

  container.innerHTML = lista.map(artigo => `
    <div class="card-artigo">
      <a class="card-artigo1" href="${artigo.link}">
        <p>${artigo.titulo}</p>
        <p class="small">
          ${artigo.descricao}
        </p>
        <div class="go-corner">
          <div class="go-arrow">→</div>
        </div>
      </a>
    </div>
  `).join("");
}

// filtro


// iniciar
document.addEventListener("DOMContentLoaded", carregarArtigos);