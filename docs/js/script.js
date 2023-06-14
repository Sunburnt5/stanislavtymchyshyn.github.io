const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close");
menuLinks = document.querySelectorAll(".menu__link");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
  document.body.classList.add("menu-open");
  document.body.style.overflow = "hidden";
});

// menuLinks.addEventListener("click", () => {
//   menu.classList.remove("active");
//   document.body.classList.remove("menu-open");
//   document.body.style.overflow = "visible";
// });

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

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", (event) => {
    event.preventDefault(); // Забороняємо перехід за посиланням
    const target = document.querySelector(event.target.hash); // Отримуємо цільовий елемент за допомогою хеша посилання
    if (target) {
      target.scrollIntoView({ behavior: "smooth" }); // Плавно прокручуємо до цільового елемента
      menu.classList.remove("active"); // Закриваємо меню
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "visible";
    }
  });
});

const counters = document.querySelectorAll(".skills__item-percent"),
  lines = document.querySelectorAll(".skills__item-lines");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
