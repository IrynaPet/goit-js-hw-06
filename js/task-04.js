// // Варіант 1

// const decrButton = document.querySelector(`[data-action='decrement']`);
// const incrButton = document.querySelector(`[data-action='increment']`);

// const counterValueEl = document.querySelector("#value");

// let counterValue = 0;

// decrButton.addEventListener("click", onClickDecrement);

// function onClickDecrement() {
//   counterValue -= 1;
//   counterValueEl.textContent = counterValue;
// }

// incrButton.addEventListener("click", onClickIncrement);
// function onClickIncrement() {
//   counterValue += 1;
//   counterValueEl.textContent = counterValue;
// }

// Варіант 2
const decrButton = document.querySelector(`[data-action='decrement']`);
const incrButton = document.querySelector(`[data-action='increment']`);

const counterValueEl = document.querySelector("#value");

decrButton.addEventListener("click", onClickDecrement);

function onClickDecrement() {
  counterValueEl.textContent -= 1;
}

incrButton.addEventListener("click", onClickIncrement);

function onClickIncrement() {
  counterValueEl.textContent = Number(counterValueEl.textContent) + 1;
}
