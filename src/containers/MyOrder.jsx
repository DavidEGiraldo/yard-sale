import React, { useContext } from "react";

import ShoppingCartItem from "@components/ShoppingCartItem";

import AppContext from "@context/AppContext";

import "@styles/MyOrder.scss";

import arrow from "@icons/flechita.svg";

const MyOrder = (props) => {
  const { state } = useContext(AppContext);

  return (
    <aside>
      <div className="title">
        <img src={arrow} alt="arrow" onClick={() => props.setToggleOrder(false)}/>
        <h1>Shopping cart</h1>
      </div>
      <div className="shopping-cart-content">
        {state.cart.map((product) => (
          <ShoppingCartItem key={`orderItem-${product.id}`} product={product} />
        ))}
      </div>
      <div className="order">
        <p>Total</p>
        <p>${state.cart.reduce((a, b) => a + b.price, 0)}</p>
      </div>
      <button className="primary-button">Checkout</button>
    </aside>
  );
};

export default MyOrder;
