const main = document.querySelector("main");

const careers = ["T.Oqilbek", "Web Developer", "Fullstack Developer", "Freelancer"];

let careersIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    main.innerHTML = `<h1>I'm ${careers[careersIndex].slice(0,1) === "I" ? "an" : "a"} 
    ${careers[careersIndex].slice(0,characterIndex)}</h1>`;

    if(characterIndex === careers[careersIndex].length) {
        careersIndex++;
        characterIndex = 0;
    }

    if (careersIndex == careers.length) {
        careersIndex = 0;
    }

    setTimeout(updateText, 400)
}