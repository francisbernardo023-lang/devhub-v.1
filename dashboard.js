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



welcomeText.textContent = greeting + ", Developer.";
let projects = localStorage.getItem("projectsCount");

if (!projects) {
    projects = 3;
    localStorage.setItem("projectsCount", projects);
}

document.querySelector(".card:nth-child(1) p").textContent =

    projects + " ongoing";
