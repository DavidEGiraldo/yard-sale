import React, { useContext } from "react";
import AppContext from "@context/AppContext"
import "@styles/ShoppingCartItem.scss";

import iconClose from "@icons/icon_close.png";

const ShoppingCartItem = ({ product }) => {

  const {removeFromCart} = useContext(AppContext)

  return (
    <div className="item">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={iconClose} alt="close" onClick={() => removeFromCart(product)}/>
    </div>
  );
};

export default ShoppingCartItem;
