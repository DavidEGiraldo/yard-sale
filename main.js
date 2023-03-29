const emailMenu = document.querySelector(".account")
const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const iconMenu = document.querySelector(".menu")
const iconCart = document.querySelector(".shopping-cart-icon")
const shoppingCart = document.querySelector(".shopping-cart")
const cardsContainer = document.querySelector(".cards-container")

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

const productList = []
productList.push({
    name: "Book",
    price: 100,
    img: "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Book",
    price: 100,
    img: "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Book",
    price: 100,
    img: "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})


function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img")
        productImg.classList.add("product-img")
        productImg.setAttribute("src", product.img)
        productImg.setAttribute("alt", "product image")
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")
    
        const productPrice = document.createElement("p")
        productPrice.innerText = "$" + product.price
        const productName = document.createElement("p")
        productName.innerText = product.name
    
        const addProductFigure = document.createElement("figure")
    
        const addToCartIcon = document.createElement("img")
        addToCartIcon.setAttribute("src", "./icons/bt_add_to_cart.svg")
        addToCartIcon.setAttribute("alt", "add to cart icon")
    
        productInfoDiv.append(productPrice, productName)
        addProductFigure.append(addToCartIcon)
    
        productInfo.append(productInfoDiv, addProductFigure)
    
        productCard.append(productImg, productInfo)
    
        cardsContainer.append(productCard)
    }
}

renderProducts(productList)
