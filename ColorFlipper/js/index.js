const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const background = document.getElementById("simply");
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

background.addEventListener("click", function() {
    let bgColor = "#fff";
    color.textContent = bgColor;
    document.body.style.backgroundColor = bgColor;
});

btn.addEventListener("click" , function() {
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}