const main = document.querySelector("main");
const hireBtn = document.querySelector("#hire");
const closeBtn = document.querySelector(".close");

hireBtn.addEventListener("click", () => {
    main.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    main.classList.remove("show");
});