# devhub-v.1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="francis bernardo">
    <meta name="description" content="my first learning page">
    <title>my first website</title>
    <link rel="icon" href="html icon.jpg" type="image/x-icon">
    <link rel="stylesheet" href="script.css">
</head>
<body>
    <h1>Welcome to my First Website</h1>
    <P>This website is still under development and is a work in progress.</P>
    <hr>
    <h2>Press Button Below to get Started</h2>
    <a href="log in.html" class="btn">Keep Exploring! &GT;</a>
    <address>
    Zamboanga City, Bulahan Drive<br>
    Santa Clara, Naga, Zamboanga Sibugay
</address>
<img src="zamboanga.jpg" alt="Zamboanga City" class="city-image" id="city-img">
    <script>
const image = document.getElementById("city-img");
image.addEventListener("click", function() {
    image.style.transform = "scale(1.1)";
    image.style.transition = "0.3s ease";
});
</script>
    <a href="https://en.wikipedia.org/wiki/Zamboanga_City" target="_blank" class="city-link">
    Zamboanga City
</a>
<button id="theme-toggle" class="btn">Toggle Dark Mode</button>
<script>
const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
</script>

</body>
</html>
