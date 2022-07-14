let burger = document.querySelector(".header__burger")
let nav = document.querySelector(".nav")
let lock = document.querySelector("body")
burger.addEventListener("click", function (){
   burger.classList.toggle("active")
   nav.classList.toggle("active")
   lock.classList.toggle("lock")
})