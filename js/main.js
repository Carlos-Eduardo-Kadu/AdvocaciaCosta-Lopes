// carregar componentes
async function carregarComponente(url, id) {
  try {
    const resp = await fetch(url);
    const html = await resp.text();
    document.getElementById(id).innerHTML = html;

    // inicializações específicas
    if (id === "atuacao") {
      initSwiper();
    }

  } catch (erro) {
    console.error("Erro ao carregar:", erro);
  }
}

// inicializar swiper
function initSwiper() {
  const container = document.querySelector(".atuacao-swiper");

  if (!container) return;

  new Swiper(container, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}

// 🔥 SOLUÇÃO DEFINITIVA — clique global (funciona em TODOS os slides)
document.addEventListener("click", function (e) {
  const link = e.target.closest(".card-link");

  if (!link) return;

  e.preventDefault();

  const card = link.closest(".card");
  if (!card) return;

  const msgBase = card.getAttribute("data-msg");
  if (!msgBase) return;

  const numero = "5561993069053";

  const mensagem = `Olá! Vim pelo site e gostaria de atendimento sobre ${msgBase}.`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
});

// iniciar tudo
document.addEventListener("DOMContentLoaded", () => {
  carregarComponente("./pages/header.html", "header");
  carregarComponente("./pages/slide.html", "slide");
  carregarComponente("./pages/sobre.html", "sobre");
  carregarComponente("./pages/atuacao.html", "atuacao");
  carregarComponente("./pages/artigos.html", "artigos");

});



