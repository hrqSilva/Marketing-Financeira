// Menu responsivo
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    navLinks.classList.remove("show");
  });
});

// Formulário fake (mostra mensagem de sucesso)
const form = document.getElementById("contact-form");
const msgSucesso = document.getElementById("msg-sucesso");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  msgSucesso.textContent = "Mensagem enviada com sucesso! ✔️";
  form.reset();
});
