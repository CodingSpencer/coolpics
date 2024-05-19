document.addEventListener("DOMContentLoaded", (event) => {
  const hide = document.querySelector("header ul");
  const menu = document.querySelector(".menu");

  //   menu.addEventListener("click", () => {
  //     if (hide.classList.contains("hide")) {
  //       hide.classList.replace("hide", "show");
  //     } else {
  //       hide.classList.replace("show", "hide");
  //     }
  menu.addEventListener("click", () => {
    hide.classList.toggle("hide");
  });
});

// const menuButton = document.querySelector(".menu");
// function toggleMenu() {
//   const menu = document.querySelector(".hide");
//   menu.classList.toggle("show");
// }

// menuButton.addEventListener("click", toggleMenu);

// window.addEventListener('resize', () => {
//     const width = window.innerWidth;

//     if (width < 800) {
//         document.querySelector
//     }
// })
