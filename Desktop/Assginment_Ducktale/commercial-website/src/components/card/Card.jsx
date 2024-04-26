import React, { useState } from "react";
import "./Card.css";
import { products } from "../../data";
import { addToCart } from "../../feature/CartSlice";
import { useAppDispatch } from "../../store/Store";
 import { toast } from "react-toastify";
 const Card = () => {
const dispatch = useAppDispatch();
const [quantity, setQuantity] = useState(1); 
 const handleAddToCart = (id, name, price) => {
  toast.dismiss()
  toast.success("Added to cart")
    dispatch(addToCart({ id, name, price, quantity }));
  };
  return (
    <div className="product-card">
      {products.map((item, index) => {
        return (
          <div classNameName="singleitem" key={index}>
            <div className="product-tumb">
              <img src={item.image} alt="" />
            </div>
            <div className="product-details">
              <p>{item.name}</p>
              <div className="product-bottom-details">
                <div className="product-price">RS. {item.price}</div>
                <div className="product-price" onClick={()=>{handleAddToCart( item.id, item.name, item.price )}} >Add to Cart</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
