const iconHamburger = document.querySelector(".icon_hamburger");
const iconHamburgerClose = document.querySelector(".icon_hamburger_close");
const menuMobile = document.querySelector(".menu");

const btnArrowLeft = document.querySelector(".btn_arrow_left");
const btnArrowRight = document.querySelector(".btn_arrow_right");
const slideImg = document.querySelectorAll(".slide");
const slidePara = document.querySelectorAll(".slide_para");
let count = 0;

iconHamburger.addEventListener("click", menu);
iconHamburgerClose.addEventListener("click", menu);

btnArrowLeft.addEventListener("click", slidePrev);
btnArrowRight.addEventListener("click", slideNext);

function menu() {
    iconHamburgerClose.classList.toggle("icon_hamburger_close_open");
    iconHamburger.classList.toggle("icon_hamburger_delete");
    menuMobile.classList.toggle("menu_mobile");
}

function slidePrev() {
    slideImg[count].classList.remove("active");
    slidePara[count].classList.remove("active");
    count = (count + 1) % slideImg.length;
    slideImg[count].classList.add("active");
    slidePara[count].classList.add("active");
}

function slideNext() {
    slideImg[count].classList.remove("active");
    slidePara[count].classList.remove("active");
    count = (count - 1 + slideImg.length) % slideImg.length;
    slideImg[count].classList.add("active");
    slidePara[count].classList.add("active");
}
