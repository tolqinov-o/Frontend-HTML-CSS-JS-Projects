const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("amount");
const tipInput = document.getElementById("percentage");
const totalSpan = document.getElementById("result");

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 + tipValue / 100);
  totalSpan.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);