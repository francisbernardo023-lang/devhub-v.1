document.querySelectorAll("[data-password-toggle]").forEach((toggle) => {
    const inputId = toggle.getAttribute("aria-controls");
    const passwordInput = inputId ? document.getElementById(inputId) : null;

    if (!(passwordInput instanceof HTMLInputElement)) {
        throw new Error(`Password toggle target "${inputId}" was not found.`);
    }

    toggle.addEventListener("click", () => {
        const isVisible = passwordInput.type === "password";
        passwordInput.type = isVisible ? "text" : "password";
        toggle.setAttribute("aria-pressed", String(isVisible));
        toggle.setAttribute("aria-label", isVisible ? "Hide password" : "Show password");
    });
});
