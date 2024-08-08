const textarea = document.getElementById("textarea");
const character = document.getElementById("character");
const remaining = document.getElementById("remaining");

textarea.addEventListener("keyup", () => {
    updateCounter();
});

function updateCounter() {
    character.innerText = textarea.value.length;
    remaining.innerText = textarea.getAttribute("maxLength") - textarea.value.length;
}