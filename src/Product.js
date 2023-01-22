import React, { useContext } from "react";
import "./Product.css";
import { StateContext, useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating,img }) {
  // eslint-disable-next-line
  // const [{}, dispatch] = useStateValue();
  const {state, dispatch} = useContext(StateContext);

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
      <div className="product_info">
      <img class="profile" src={img} alt="" />
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
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add the basket</button>
    </div>
  );
}

export default Product;
