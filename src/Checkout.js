import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  // eslint-disable-next-line
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/XCM_Manual_1312033_1602487_in_overallla_banner_1500x300_in-en_3a63b2ec-bc35-4ced-8413-0824d36aa082.jpg?alt=media&token=bfb5803d-6f4e-4670-a469-26cc6fbe169b"
          alt=""
        />
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
