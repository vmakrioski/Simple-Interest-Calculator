let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");
let resetBtn = document.getElementById("reset-btn");

const reset = () => {
  location.reload()
}

const calculate = () => {
  let principal = Number(document.getElementById("principal").value);
  let rate = Number(document.getElementById("rate").value);
  let time = Number(document.getElementById("time").value);
  let duration = document.getElementById("duration").value;
  let simpleInterest =
    duration === "year"
      ? (principal * rate * time) / 100
      : (principal * rate * time) / 1200;
  let amount = principal + simpleInterest;

  result.innerHTML = `<div>Principal Amount: <span>${principal.toFixed(2)} MKD</span></div>
  <div>Total Interest: <span>${simpleInterest.toFixed(2)} MKD</span></div>
  <div>Total Amount: <span>${amount.toFixed(2)} MKD</span></div>`;
};

calculateBtn.addEventListener("click", calculate);
resetBtn.addEventListener("click", reset)
window.addEventListener("load", calculate);
