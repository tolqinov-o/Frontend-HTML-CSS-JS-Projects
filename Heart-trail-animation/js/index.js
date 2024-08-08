const main = document.querySelector("main");

main.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const span = document.createElement("span");
    span.style.left = xPos + "px";
    span.style.top = yPos + "px";
    const size = Math.random()*100;
    span.style.width = size + "px"
    span.style.height = size + "px"
    main.appendChild(span);
    setTimeout(() => {
        span.remove();
    }, 3000);
});