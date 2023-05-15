import React from 'react'
import "../styles/Header.scss"

const Header = () => {
  return (
    <nav className="navbar">
      <img src="./icons/icon_menu.svg" alt="menu-mobile" className="menu" />
      <img src="./logos/logo_yard_sale.svg" alt="logo yard sale" className="logo" />
      <ul className="categories">
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furniture</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
      <ul className="right-menu">
        <li className="account">
          <p>example@mail.com</p>
          <img src="./icons/flechita.svg" alt="menu-desktop" />
        </li>
        <li className="shopping-cart">
          <img src="./icons/icon_shopping_cart_notification.svg" alt="shopping cart" />
        </li>
      </ul>
    </nav>

  )
}

export default Header