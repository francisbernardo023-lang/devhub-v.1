const STORAGE_KEY = "devhub_bugs";
function getBugs() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}
function saveBugs(bugs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bugs));
}
function addBug(error, component = "unknown", priority = "normal", project = "DevHub") {
    const bugs = getBugs();

    const bug = {
        id: Date.now().toString(),
        title: error.message || "Unknown error",
        type: error.name || "Error",
        component,
        priority,
        project,
        status: "Open",
        timestamp: new Date().toISOString()
    };

    bugs.push(bug);
    saveBugs(bugs);

    renderBug(bug);
    updateBugCount();
}
function addBug(error, component = "unknown", priority = "normal", project = "DevHub") {
    const bugs = getBugs();

    const bug = {
        id: Date.now().toString(),
        title: error.message || "Unknown error",
        type: error.name || "Error",
        component,
        priority,
        project,
        status: "Open",
        timestamp: new Date().toISOString()
    };

    bugs.push(bug);
    saveBugs(bugs);

    renderBug(bug);
    updateBugCount();
}
document.addEventListener("DOMContentLoaded", () => {
    const bugs = getBugs();

    const list = document.querySelector(".bugs-list");
    if (!list) return;

    list.innerHTML = ""; // 💥 important: prevents duplicates

    bugs.forEach(renderBug);

    updateBugCount();
});
function updateBugCount() {
    const bugs = getBugs();

    const open = bugs.filter(b => b.status === "Open").length;

    const title = document.querySelector(".bugs-section h3");
    if (title) {
        title.textContent = `🐛 Active Bugs (${open})`;
    }
}
function resolveBug(id) {
    const bugs = getBugs();

    const bug = bugs.find(b => b.id === id);
    if (!bug) return;

    bug.status = "Resolved";

    saveBugs(bugs);

    document.getElementById(`bug-${id}`)?.classList.add("resolved");

    updateBugCount();
}