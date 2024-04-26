import React, { useState } from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.CartSlice.cartItems);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = () => {
    if (coupon === "oyeahdiscount001") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

  const totalAmount = cartItems?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  //   discount
  const discountAmount = totalAmount * discount;
  //   gst
  const gstAmount = totalAmount * 0.18;

  const finalAmount = totalAmount - discountAmount + gstAmount;

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <div>
        <label>Coupon Code:</label>
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <button onClick={handleApplyCoupon}>Apply Coupon</button>
        your coupon code is  : oyeahdiscount001
      </div>
      <div>
        <p>Total Amount: Rs.{totalAmount.toFixed(2)}</p>
        <p>Discount: Rs.{discountAmount.toFixed(2)}</p>
        <p>GST: Rs.{gstAmount.toFixed(2)}</p>
        <p>Final Amount: Rs.{finalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartSummary;
