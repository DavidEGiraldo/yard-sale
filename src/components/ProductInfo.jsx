import React from 'react'
import "@styles/ProductInfo.scss"

import btAddToCart from "@icons/bt_add_to_cart.svg"

const ProductInfo = () => {
  return (
    <div className="product-info">
      <p>$35,00</p>
      <p>Book</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus eos qui, pariatur alias distinctio reprehenderit saepe a perferendis cum est doloremque quaerat, dicta, earum quibusdam harum aspernatur! Harum, quisquam magnam?</p>
      <button className="primary-button add-to-cart-button">
        <img src={btAddToCart} alt="add to cart" />
        Add to cart
      </button>
    </div>

  )
}

export default ProductInfo