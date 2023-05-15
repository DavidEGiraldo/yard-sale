import React from 'react'
import "../styles/ProductItem.scss"

const ProductItem = () => {
  return (
    <div className="product-card">
      <img src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product image" className="product-img" />
      <div className="product-info">
        <div>
          <p>$100,00</p>
          <p>Book</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="add to cart icon" />
        </figure>
      </div>
    </div>
  )
}

export default ProductItem