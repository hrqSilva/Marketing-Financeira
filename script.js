// Menu responsivo
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const header = document.getElementById("header");

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

// Formulário com feedback
const form = document.getElementById("contact-form");
const msgSucesso = document.getElementById("msg-sucesso");
const emailInput = document.getElementById("email");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  if (!emailInput.value.includes("@")) {
    msgSucesso.style.color = "red";
    msgSucesso.textContent = "Digite um email válido ⚠️";
    return;
  }

  msgSucesso.style.color = "green";
  msgSucesso.textContent = "Mensagem enviada com sucesso! ✔️";
  form.reset();
});

// Navbar muda de cor ao rolar
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
