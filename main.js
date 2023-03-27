const emailMenu = document.querySelector(".account")
const desktopMenu = document.querySelector(".desktop-menu")

emailMenu.addEventListener("click", toggleDesktopMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive")
}