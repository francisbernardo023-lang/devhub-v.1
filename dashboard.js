document.addEventListener("DOMContentLoaded", function () {

    const logoutBtn = document.querySelector(".logout-btn");

    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "log in.html"; 
    });

});
const welcomeText = document.querySelector(".welcome h2");

const hour = new Date().getHours();

let greeting;

if (hour < 12) {
    greeting = "Good Morning ☀️";
} else if (hour < 18) {
    greeting = "Good Afternoon 🌤️";
} else {
    greeting = "Good Evening 🌙";
}
const d = new Date();
const day = d.getDate();
const month = d.getMonth() + 1;
const year = d.getFullYear();

document.getElementById('current-date').textContent = `${day}/${month}/${year}`;
document.addEventListener("DOMContentLoaded", () => {
    const count = localStorage.getItem("projectsCount") || 0;
    
    document.getElementById("active-projects-count").textContent = count;
});
