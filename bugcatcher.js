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
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
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

    list.innerHTML = "";

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

async function scanFiles() {
    const files = await fetch("/api/files").then(r => r.json()).catch(() => []);

    files.forEach(file => {
        scanFile(file);
    });
}

function scanFile(file) {
    const issues = [];

    if (file.content.includes("console.log")) {
        issues.push({
            type: "console.log",
            message: "Debug console.log left in code",
            priority: "low"
        });
    }

    if (file.content.match(/TODO|FIXME|HACK/gi)) {
        issues.push({
            type: "comment",
            message: "TODO/FIXME/HACK comment found",
            priority: "medium"
        });
    }

    if (file.content.match(/\}\s*catch\s*\(\s*\)\s*\{/)) {
        issues.push({
            type: "error-handling",
            message: "Empty catch block - errors being silently ignored",
            priority: "high"
        });
    }

    if (file.content.match(/=\s*undefined/g)) {
        issues.push({
            type: "logic",
            message: "Variable explicitly set to undefined",
            priority: "medium"
        });
    }

    issues.forEach(issue => {
        const error = new Error(issue.message);
        error.name = issue.type;
        addBug(error, file.name, issue.priority);
    });
}

function startBugScanner() {
    scanFiles();
    setInterval(scanFiles, 24 * 60 * 60 * 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    const bugs = getBugs();

    const list = document.querySelector(".bugs-list");
    if (!list) return;

    list.innerHTML = "";

    bugs.forEach(renderBug);

    updateBugCount();
    startBugScanner();
});