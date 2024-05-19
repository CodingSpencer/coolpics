document.addEventListener("DOMContentLoaded", (event) => {
  const menu_opt = document.querySelector("header ul");
  const menu = document.querySelector(".menu");

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
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}" />
    </div>`;
  }

  function viewHandler() {}

  handleResize();
  window.addEventListener("resize", handleResize);
});
