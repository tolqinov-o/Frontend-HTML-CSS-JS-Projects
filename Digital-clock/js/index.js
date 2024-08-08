const body = document.querySelector("body"),
    mode = document.getElementById("mode"),
    hour = document.getElementById("hour"),
    minutes = document.getElementById("minutes"),
    seconds = document.getElementById("seconds"),
    pm = document.getElementById("pm");

mode.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        mode.src = "./img/sun.png";
    } else {
        mode.src = "./img/moon.png";
    }
});

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = "AM";

    if (h > 12) {
        h = h - 12;
        am = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    pm, (innerText = am);

    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();