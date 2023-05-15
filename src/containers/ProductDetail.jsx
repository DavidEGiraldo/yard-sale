import React from 'react'
import ProductInfo from "../components/ProductInfo"
import "../styles/ProductDetail.scss"

const ProductDetail = () => {
  return (
    <aside className="product-detail">
      <div className="close">
        <img src="./icons/icon_close.png" alt="close" />
      </div>
      <img src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="book" />
      <div className="dots">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
      <ProductInfo />
    </aside>
  )
}

export default ProductDetail