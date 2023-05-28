import React, { useState, useContext } from 'react'
import AppContext from '@context/AppContext'

import "@styles/ProductItem.scss"

import btAddToCart from "@icons/bt_add_to_cart.svg"
import btAddedToCart from "@icons/bt_added_to_cart.svg"

const ProductItem = ({product}) => {

  const { state, addToCart, removeFromCart } = useContext(AppContext)

  return (
    <div className="product-card">
      <img src={product.images[0]} alt="product image" className="product-img" />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        {!state.cart.includes(product) ? 
          <figure onClick={() => addToCart(product)}>
            <img src={btAddToCart} alt="add to cart icon" />
          </figure>
          :
          <figure onClick={() => removeFromCart(product)}>
            <img src={btAddedToCart} alt="remove from cart icon" />
          </figure>
        }
        
      </div>
    </div>
  )
}

export default ProductItem