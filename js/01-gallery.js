import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

function makeGallery(arr) {
  return arr
    .map(
      (item) =>
        `<div class="gallery__item">
           <a class="gallery__link" href="${item.original}">
               <img
                     class="gallery__image"
                     src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
             </a>
        </div>`
    )
    .join("");
}

galleryRef.insertAdjacentHTML("beforeend", makeGallery(galleryItems));
