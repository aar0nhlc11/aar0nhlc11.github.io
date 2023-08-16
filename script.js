const modeToggle = document.getElementById("mode-toggle");
const content = document.querySelector(".content");

modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});