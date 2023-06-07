const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
  document.body.classList.add("menu-open");
  document.body.style.overflow = "hidden";
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
  document.body.classList.remove("menu-open");
  document.body.style.overflow = "visible";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menu.classList.remove("active");
    document.body.classList.remove("menu-open");
    document.body.style.overflow = "visible";
  }
});
