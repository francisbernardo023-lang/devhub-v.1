const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    const isLightMode = document.body.classList.toggle("light-mode");
    themeToggle.setAttribute("aria-pressed", String(isLightMode));
    themeToggle.setAttribute(
        "aria-label",
        isLightMode ? "Switch to dark theme" : "Switch to light theme"
    );
});
