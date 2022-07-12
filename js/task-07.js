// * варіант 1
// const textInput = document.querySelector("input");
// const textEl = document.querySelector("#text");

// console.log(textInput);
// textInput.addEventListener("input", (event) => {
//   textEl.style.fontSize = `${event.currentTarget.value}px`;
// });

// * варіант 2
const slider = document.getElementById("font-size-control");
const span = document.getElementById("text");

slider.addEventListener("input", handleInputRange);

function handleInputRange(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}

(function () {
  const range = document.querySelector("#font-size-control");
  const text = document.querySelector("#text");
  range.addEventListener("input", function () {
    text.style.fontSize = range.value + "px";
  });
})();
