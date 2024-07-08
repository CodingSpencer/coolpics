const menu_opt = document.querySelector("header ul");
const menu = document.querySelector(".menu");
const gallery = document.querySelector(".gallery");

menu.addEventListener("click", () => {
  menu_opt.classList.toggle("hide");
});

function handleResize() {
  if (window.innerWidth > 1000) {
    menu_opt.classList.remove("hide");
  } else {
    menu_opt.classList.add("hide");
  }
}

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
  <button id="close-viewer">X</button>
  <img src="${pic}" alt="${alt}" />
  </div>`;
}

function viewHandler(event) {
  const img = event.target;
  const src = img.getAttribute("src");
  const splitSrc = src.split("-");
  const newImg = splitSrc[0] + "-full.jpeg";

  const body = document.querySelector("body");
  body.insertAdjacentHTML("afterbegin", viewerTemplate(newImg, "pic"));

  const close = document.getElementById("close-viewer");
  close.addEventListener("click", () => {
    document.querySelector("viewer").remove();
  });
}

handleResize();
window.addEventListener("resize", handleResize);

gallery.addEventListener("click", viewHandler);
