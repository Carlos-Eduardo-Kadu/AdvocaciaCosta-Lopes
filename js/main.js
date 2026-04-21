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

// iniciar tudo
document.addEventListener("DOMContentLoaded", () => {
  carregarComponente("./pages/header.html", "header");
  carregarComponente("./pages/slide.html", "slide");
  carregarComponente("./pages/sobre.html", "sobre");
  carregarComponente("./pages/atuacao.html", "atuacao");
  carregarComponente("./pages/artigos.html", "artigos");

});



