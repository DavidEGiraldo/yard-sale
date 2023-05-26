import React from 'react'
import "@styles/ShoppingCartItem.scss"

import iconClose from "@icons/icon_close.png"

const ShoppingCartItem = () => {
  return (
    <div className="item">
      <figure>
        <img src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Book" />
      </figure>
      <p>Book</p>
      <p>$100.00</p>
      <img src={iconClose} alt="close" />
    </div>
  )
}

export default ShoppingCartItem