document.addEventListener("DOMContentLoaded", () => {
    const projectCount = document.querySelectorAll("#projects .project-card").length;
    localStorage.setItem("projectsCount", String(projectCount));
});
