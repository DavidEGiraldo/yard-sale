import React from 'react'
import ShoppingCartItem from "@components/ShoppingCartItem"
import "@styles/MyOrder.scss"

import arrow from "@icons/flechita.svg"

const MyOrder = () => {
  return (
    <aside className="shopping-cart">
      <div className="title">
        <img src={arrow} alt="arrow" />
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