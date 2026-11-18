const startButton = document.getElementById("startButton");
const startMenu = document.getElementById("startMenu");
const clockButton = document.getElementById("clockButton");
const quickPanel = document.getElementById("quickPanel");
const toast = document.getElementById("toast");

function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});

    document.getElementById("topClock").textContent =
        now.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});

    document.getElementById("date").textContent =
        now.toLocaleDateString([], {day: "2-digit", month: "short", year: "numeric"});
}

updateClock();
setInterval(updateClock, 1000);

startButton.addEventListener("click", () => {
    startMenu.classList.toggle("hidden");
    quickPanel.classList.add("hidden");
});

clockButton.addEventListener("click", () => {
    quickPanel.classList.toggle("hidden");
    startMenu.classList.add("hidden");
});

function showToast(message) {
    toast.textContent = message;
    toast.classList.remove("hidden");

    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
        toast.classList.add("hidden");
    }, 2500);
}

document.querySelectorAll("[data-app]").forEach(button => {
    button.addEventListener("click", () => {
        const app = button.dataset.app;

        startMenu.classList.add("hidden");

        if (app === "About TigerOS") {
            showToast("TigerOS 1.0.0 Alpha — Original desktop prototype");
        } else {
            showToast(app + " launcher is coming soon.");
        }
    });
});

document.getElementById("appSearch").addEventListener("input", event => {
    const search = event.target.value.toLowerCase();

    document.querySelectorAll(".app-grid button").forEach(button => {
        button.style.display =
            button.textContent.toLowerCase().includes(search) ? "grid" : "none";
    });
});

document.getElementById("themeButton").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    showToast("Theme setting changed.");
});

document.getElementById("accentButton").addEventListener("click", () => {
    const root = document.documentElement;
    const current = getComputedStyle(root).getPropertyValue("--blue").trim();

    root.style.setProperty(
        "--blue",
        current === "#008CFF" ? "#00C2FF" : "#008CFF"
    );

    showToast("Accent color changed.");
});

document.addEventListener("click", event => {
    if (!event.target.closest("#startMenu") &&
        !event.target.closest("#startButton")) {
        startMenu.classList.add("hidden");
    }

    if (!event.target.closest("#quickPanel") &&
        !event.target.closest("#clockButton")) {
        quickPanel.classList.add("hidden");
    }
});
