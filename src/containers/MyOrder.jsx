import React from 'react'
import Order from "../components/Order"
import ShoppingCartItem from "../components/ShoppingCartItem"
import "../styles/MyOrder.scss"

const MyOrder = () => {
  return (
    <aside className="shopping-cart">
      <div className="title">
        <img src="./icons/flechita.svg" alt="arrow" />
        <h1>Shopping cart</h1>
      </div>
      <div className="shopping-cart-content">
        <ShoppingCartItem />
      </div>
      <div className="order">
        <p>Total</p>
        <p>$560.00</p>
      </div>
      <button className="primary-button">
        Checkout
      </button>
    </aside>
  )
}

export default MyOrder