const emailMenu = document.querySelector(".account")
const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const iconMenu = document.querySelector(".menu")

emailMenu.addEventListener("click", toggleDesktopMenu)
iconMenu.addEventListener("click", toggleMobileMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive")
}