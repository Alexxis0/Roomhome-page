let iconHamburger = document.querySelector('.icon_hamburger');
let iconHamburgerClose = document.querySelector('.icon_hamburger_close');
let menuMobile = document.querySelector('.menu')
console.log(menuMobile);
iconHamburger.addEventListener("click", menu);
iconHamburgerClose.addEventListener("click", menu);

function menu () {
    iconHamburgerClose.classList.toggle("icon_hamburger_close_open");
    iconHamburger.classList.toggle("icon_hamburger_delete");
    menuMobile.classList.toggle('menu_mobile')
}
