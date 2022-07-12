// // Варіант 1
const categoryEl = document.querySelectorAll(".item");
const numberCategoryEl = categoryEl.length;
console.log("Number of categories:", numberCategoryEl);

categoryEl.forEach(function (el, index) {
  const numberOfElements = el.querySelectorAll("li");
  const nameOfElements = el.querySelector("h2");
  console.log(`Category: ${nameOfElements.textContent}`);
  console.log(`Elements: ${numberOfElements.length}`);
});

// Варіант 2
// const list = document.querySelector("#categories");
// const children = list.children;
// console.log(`Number of categories: ${children.length}`);
// [...children].forEach((el) => {
//   console.dir(`Category: ${el.children[0].textContent}`);
//   console.log(`Elements: ${el.children[1].children.length}`);
// });
