import React, { useContext } from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { StateContext, useStateValue } from "./StateProvider";

function Checkout() {
  // eslint-disable-next-line
  const {state, dispatch} = useContext(StateContext);
  const { user, basket } = state;

  return (
    <div className="checkout">
      <div className="checkout_left">
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
