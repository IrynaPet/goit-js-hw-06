const inputRef = document.querySelector("#name-input");

const inputContentRef = document.querySelector("#name-output");

inputRef.addEventListener("input", ({ target: { value } }) => {
  inputContentRef.textContent = value.trim() || "Anonymous";
});
