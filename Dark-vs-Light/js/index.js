const switchTheme = document.getElementById("switch_theme");
const title = document.getElementById("switch_title");

switchTheme.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    if (title.textContent === "Light Mode")
        title.innerHTML = "Dark Mode";
    else
        title.innerHTML = "Light Mode";
});
