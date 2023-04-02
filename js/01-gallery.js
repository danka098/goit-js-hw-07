import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const images = galleryItems
  .map(
    (image) =>
      `<div class="gallery__item"><a class=gallery__link href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"></a></div>`
  )
  .join("");
gallery.insertAdjacentHTML("afterbegin", images);

function CreateModal(e) {
  e.preventDefault();
  if (e.target.classList.value === "gallery__image") {
    basicLightbox
      .create(`<img src="${e.target.dataset.source}" width="800" height="600">`)
      .show();
  } else {
    return;
  }
}
gallery.addEventListener("click", CreateModal);
