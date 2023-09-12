import React from "react";
import "./Cart.css";

function Cart({ cart }) {
  return (
    <div>
      <h4>Cart :{cart.length}</h4>
      <div className="bottle-arranging">
        {cart.map((bottle) => (
          <img src={bottle.img}></img>
        ))}
      </div>
    </div>
  );
}

export default Cart;
