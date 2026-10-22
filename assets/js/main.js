/* Relógios Esportivos — JS mínimo (aprimoramento progressivo). Todo conteúdo funciona sem JS. */
(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  };

  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });
})();

/* Mede cliques no botão de WhatsApp quando o GA4 estiver ativo (sem GA4, não faz nada) */
(() => {
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-wa-click]");
    if (a && typeof window.gtag === "function") window.gtag("event", "whatsapp_click", { page_path: location.pathname });
  });
})();
