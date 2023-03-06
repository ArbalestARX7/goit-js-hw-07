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

galleryRef.addEventListener("click", onImageClicker);

function onImageClicker(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="1280" height="auto">`,
    {
      onShow: () => window.addEventListener("keydown", onEscKeyPress),
      onClose: () => window.removeEventListener("keydown", onEscKeyPress),
    }
  );

  instance.show();
}

// window.addEventListener("keydown", loger(e));

// function loger(e) {
//   console.log(e);
// }
