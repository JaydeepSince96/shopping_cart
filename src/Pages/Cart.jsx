import React from "react";
import { remove } from "../Store/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cardWrapper">
        {products.map((product) => (
          <div className="cartCard">
            <img src={product.image} alt="" />
            <h4>{product.title} </h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleRemove(product.id)} className="btn">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
