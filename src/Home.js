import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        
        <img
          className="home_image"
          src="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/malcolm-lightbody-gPRvTP0sZ2M-unsplash.jpg?alt=media&token=1cb7a041-d948-4d53-a435-3fe625cb51b3"
          alt=""
        />

        <div className="home_row">
          <Product
            id="100"
            title="Panchi Petha Agra"
            price={280}
            image="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/new-panchi-petha-store-sadar-bazaar-agra-sweet-shops-28asrzh-250.jpg?alt=media&token=b724948c-7485-4735-b351-631916f4249c"
            rating={5}
            img="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/new-panchi-petha-store-sadar-bazaar-agra-sweet-shops-28asrzh-250.jpg?alt=media&token=b724948c-7485-4735-b351-631916f4249c"
          />
          <Product
            id="101"
            title="Karnataka Lambani craft"
            price={6199}
            image="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/karnataka.jpg?alt=media&token=6a26e41a-a435-4197-96b7-87bad693959c"
            rating={4}
          />
          <Product
            id="101"
            title="Goa's Feni"
            price={350}
            image="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/goa_feni.jpg?alt=media&token=d821ebd5-fe66-45a0-bed7-460b6d3bd3f7"
            rating={3}
          />
        </div>

        <div className="home_row">
          <Product
            id="102"
            title="Assam's jute work"
            price={1250}
            image="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/assam.jpg?alt=media&token=10c17994-ce44-482a-9dee-2348ffe66173"
            rating={4}
          />
          <Product
            id="103"
            title="Kerala's pottery"
            price={99}
            image="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/kerala.jpg?alt=media&token=c8402087-6e78-4a11-9ed6-1c8044e42c12"
            rating={2}
          />
          <Product
            id="104"
            title="Firozabad's bangle Work"
            price={30}
            image="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/chuddiya.jpg?alt=media&token=e6fd9ef9-fbee-4f86-ba9b-95404ac8c67e"
            rating={5}
          />
        </div>

        {/* <div className="home_row">
          <Product
            id="105"
            title="Kitchen's Special"
            price={29.99}
            image="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/MWO-420x420---tiles---2.jpg?alt=media&token=bf53ab27-6e33-41c6-b567-6b593ed87745"
            rating={5}
          />
          <Product
            id="101"
            title="Home Decoration"
            price={29.99}
            image="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/81Dhf4lTOYL._AC_SY200_.jpg?alt=media&token=89c20b20-d226-460e-879e-836eb9b611e4"
            rating={4}
          />
          <Product
            id="101"
            title="Home Decoration"
            price={29.99}
            image="https://firebasestorage.googleapis.com/v0/b/clone-df2be.appspot.com/o/81Dhf4lTOYL._AC_SY200_.jpg?alt=media&token=89c20b20-d226-460e-879e-836eb9b611e4"
            rating={4}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
