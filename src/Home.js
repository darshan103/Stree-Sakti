import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/61oybxyYQIL._SX3000_.jpg?alt=media&token=6f2a61c5-e921-452c-a534-bd028ae8ada3"
          alt=""
        />

        <div className="home_row">
          <Product
            id="100"
            title="The lean Startup"
            price={29.99}
            image="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/81RCff1NpnL._AC_UY327_FMwebp_QL65_.webp?alt=media&token=0ee91a72-7036-41e5-a6f2-56317e22fd43"
            rating={5}
          />
          <Product
            id="101"
            title="Home Decoration"
            price={29.99}
            image="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/81Dhf4lTOYL._AC_SY200_.jpg?alt=media&token=89c20b20-d226-460e-879e-836eb9b611e4"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="102"
            title="Stationary"
            price={29.99}
            image="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/D14264916_IN_Printers_OP_GW_revamp_nov19_dashbord_Card_1x_4._SY304_CB667376048_.jpg?alt=media&token=d9a74254-08b1-4c97-8004-4e061129ed65"
            rating={5}
          />
          <Product
            id="103"
            title="Casual Shirts"
            price={29.99}
            image="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/mencombo_low._SY304_CB666768535_.jpg?alt=media&token=293c121b-bda1-4577-bcc7-cb5307766166"
            rating={5}
          />
          <Product
            id="104"
            title="Top Smartphones Brands"
            price={29.99}
            image="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/Laptops-Sept2019._CB436595915_.jpg?alt=media&token=fee9ac39-8092-4055-912c-6e9c9f858db6"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="105"
            title="Kitchen's Special"
            price={29.99}
            image="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/MWO-420x420---tiles---2.jpg?alt=media&token=bf53ab27-6e33-41c6-b567-6b593ed87745"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
