// Wait for DOM load
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");

    // Get current theme
    const savedTheme = localStorage.getItem("theme");

    // Update theme
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        toggle.checked = true;
    } 
    else {
        document.documentElement.classList.remove("dark");
        toggle.checked = false;
    }

    // Toggle theme
    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    });
});