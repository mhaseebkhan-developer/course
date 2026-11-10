const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  });
}

const enrollForm = document.querySelector("#enrollForm");
if (enrollForm) {
  enrollForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const message = document.querySelector("#formMessage");
    message.textContent = `Thanks, ${name}! Your demo submission is complete.`;
    message.style.color = "#4b9b72";
    enrollForm.reset();
  });
}
