import React, { useState } from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../../feature/CartSlice";
import { useAppDispatch } from "../../store/Store";
import CartSummary from "./CartSummary";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartData = useSelector((state) => state.CartSlice);
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };
  const increaseQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const decreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };
  const totalSum = cartData?.cartItems?.reduce((total, item) => total + (item.price * item.quantity), 0);
  return (
    <div className="mainconatiner">
      <h1>Welcome to the Cart</h1>
      <div className="cart-header">
        <ul>
          <li>Name</li>
          <li>Quantity</li>
          <li>Price</li>
          <li>Total</li>
          <li>Remove</li>
        </ul>
      </div>
      {cartData?.cartItems?.map((item) => {
        return (
          <div className="product-info" key={item.id}>
            <div className="product-name">{item?.name}</div>

            <div className="product-name">
              <span onClick={() => increaseQuantity(item?.id, item?.quantity)}>
                +
              </span>
              {item?.quantity}
              <span onClick={() => decreaseQuantity(item?.id, item?.quantity)}>
                -
              </span>
            </div>
            <div className="product-name">{item?.price}</div>
            <div className="product-name">{item?.quantity * item?.price}</div>

            <div
              className="product-name"
              onClick={() => {
                handleRemoveFromCart(item.id);
              }}
            >
              Remove
            </div>
          </div>
        );
      })}
      <div className="totalSum">
       <CartSummary/>
      </div>
    </div>
  );
};

export default Cart;
