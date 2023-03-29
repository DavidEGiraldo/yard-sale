const emailMenu = document.querySelector(".account")
const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const iconMenu = document.querySelector(".menu")
const iconCart = document.querySelector(".shopping-cart-icon")
const shoppingCart = document.querySelector(".shopping-cart")

emailMenu.addEventListener("click", toggleDesktopMenu)
iconMenu.addEventListener("click", toggleMobileMenu)
iconCart.addEventListener("click", toggleShoppingCart)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive")
    shoppingCart.classList.add("inactive")
}

function toggleShoppingCart() {
    shoppingCart.classList.toggle("inactive")
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
}