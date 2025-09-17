// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Validação do formulário
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  message.textContent = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
  message.style.color = "green";

  form.reset();
});
