import React, { useContext } from "react";
import "./Product.css";
import { StateContext, useStateValue } from "./StateProvider";
import profile from './userImg.jpg'

function Product({ id, title, image, price, rating, img }) {
  const { state, dispatch } = useContext(StateContext);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        img: image,
      },
    });
  };
  return (
    <div className="product">
       <img className="profile__img" src={profile} alt="" />
      <img src={image} alt="" className="main__img"/>
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <button onClick={addToBasket}>Add the basket</button>
    </div>
  );
}

export default Product;
