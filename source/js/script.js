// function openMenu() {
//   var element = document.getElementById("mobile-menu");
//   element.classList.toggle("page-header__nav--open");
// }
var menuBurger = document.querySelector(".page-header__toggle");
var openMenu = document.querySelector(".page-header__nav");
var closeMenu = document.querySelector(".page-header__toggle");


if (openMenu.classList.contains("page-header__nav--open")) {
  openMenu.classList.remove("page-header__nav--open");
}

if (menuBurger.classList.contains("burger-button")) {
menuBurger.classList.remove("visually-hidden");
}


menuBurger.addEventListener("click", function (evt) {
  evt.preventDefault();
  openMenu.classList.toggle("page-header__nav--open");
  closeMenu.classList.toggle("burger-button--close");
});

// Закрытие меню по клаваише ESC
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (openMenu.classList.contains("page-header__nav--open")) {
      openMenu.classList.remove("page-header__nav--open");
    }
    if (closeMenu.classList.contains("burger-button--close")) {
      closeMenu.classList.remove("burger-button--close");
    }
  }
});
