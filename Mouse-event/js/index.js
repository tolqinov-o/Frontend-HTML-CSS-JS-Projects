const main = document.querySelector("main");

window.addEventListener("mousemove", (event) => {
  main.innerHTML = `
    <div class="card border-0 rounded-3 shadow p-3">
      <h6>Mouse X Prosition(px)</h6>
      <h1 class="fw-bold">${event.clientX}</h1>
    </div>

    <div class="card border-0 rounded-3 shadow p-3 ms-3">
      <h6>Mouse Y Prosition(px)</h6>
      <h1 class="fw-bold">${event.clientY}</h1>
    </div>
  `;
});