import React, { useState } from 'react'
import "@styles/Header.scss"

import Menu from "@components/Menu"

import logo from "@logos/logo_yard_sale.svg"
import iconMenu from "@icons/icon_menu.svg"
import iconArrow from "@icons/flechita.svg"
import iconShoppingCart from "@icons/icon_shopping_cart_notification.svg"

const Header = () => {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <nav className="navbar">
      <img src={iconMenu} alt="menu-mobile" className="menu" />
      <img src={logo} alt="logo yard sale" className="nav-logo" />
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
        <li className="account" onClick={handleToggle}>
          <p>example@mail.com</p>
          <img src={iconArrow} alt="menu-desktop" />
        </li>
        <li className="shopping-cart">
          <img src={iconShoppingCart} alt="shopping cart" />
        </li>
      </ul>
      {toggle && <Menu />}
    </nav>

  )
}

export default Header