const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const makeGalleryItemMarkup = (acc, { url, alt }) => {
  return (
    acc +
    `<li><img scr="${url}" alt="${alt}" />
  </li>`
  );
};

const makeGalleryItems = images.reduce(makeGalleryItemMarkup, "");
const listEl = document.querySelector(".gallery");
listEl.insertAdjacentHTML("afterbegin", makeGalleryItems);

// const galleryFlex = document.querySelector("#gallery");
// const imagesEl = images.map(({ url, alt }) => {
//   return `<li><img src = "${url}" alt = "${alt}"  width = "150" height = "100" /></li>`;
// });
// galleryFlex.insertAdjacentHTML("beforeEnd", imagesEl.join(""));
// galleryFlex.setAttribute("style", "list-style-type:none; display: flex;");
