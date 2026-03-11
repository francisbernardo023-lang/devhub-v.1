const projects = document.querySelector(".projects");

projects.addEventListener("click", function () {
    window.location.href = "projects.html";
}); 
const about = document.querySelector(".about");
about.addEventListener("click", function () {
    window.location.href = "about.html";
});
localStorage.setItem("projectsCount", "1");
localStorage.setItem("projects", JSON.stringify([
  {
    name: "GAME DEVELOPMENT PLATFORMER",
    date: "2024-06-01",
    status: "In Progress"
  }
]));
document.addEventListener("DOMContentLoaded", () => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const container = document.getElementById("projects");

    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
            <h3>${project.name}</h3>
            <p>Last updated: ${project.date}</p>
            <p>Status: ${project.status}</p>
        `;

        container.appendChild(card);
    });
});