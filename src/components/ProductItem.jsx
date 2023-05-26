import React, { useState, useContext } from 'react'
import AppContext from '@context/AppContext'

import "@styles/ProductItem.scss"

import btAddToCart from "@icons/bt_add_to_cart.svg"
import btAddedToCart from "@icons/bt_added_to_cart.svg"

const ProductItem = ({product}) => {

  const { addToCart } = useContext(AppContext)

  const [cart, setCart] = useState(false)

  const handleClick = (item) => {
    setCart(!cart)
    addToCart(item)
  }

  return (
    <div className="product-card">
      <img src={product.images[0]} alt="product image" className="product-img" />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={!cart ? btAddToCart : btAddedToCart} alt="add to cart icon" />
        </figure>
      </div>
    </div>
  )
}

export default ProductItem