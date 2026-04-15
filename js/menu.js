// MENU RESPONSIVO - FUNCIONA COM FETCH DINÂMICO

document.addEventListener("click", function (e) {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  // evita erro se ainda não carregou o header
  if (!toggle || !nav) return;

  // 🔥 ABRIR / FECHAR MENU (BOTÃO HAMBÚRGUER)
  if (e.target.closest(".menu-toggle")) {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
    return;
  }

  // 🔥 FECHAR AO CLICAR EM UM LINK
  if (e.target.closest(".link")) {
    nav.classList.remove("active");
    toggle.classList.remove("active");
    return;
  }

  // 🔥 FECHAR AO CLICAR FORA DO MENU
  const clicouForaDoMenu = !e.target.closest(".main-nav") && !e.target.closest(".menu-toggle");

  if (clicouForaDoMenu) {
    nav.classList.remove("active");
    toggle.classList.remove("active");
  }
});