const body = document.querySelector("body");
const modeSwitch = document.querySelector(".mode-switch");
const modeText = document.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if(body.classList.contains("dark")) {
        modeText.innerHTML = "🌞";
    } else {
        modeText.innerHTML = "🌛";
    }
});