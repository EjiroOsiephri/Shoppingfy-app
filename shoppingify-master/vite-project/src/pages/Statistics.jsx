import React, { useState } from "react";
import Progress from "./Progress";
import ItemsContainer from "../Components/ItemsContainer";
import SideBar from "../Components/SideBar";

const Statistics = () => {
  const [cartItems, setCartItems] = useState(false);
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <main className="main">
        <SideBar setShowCart={setShowCart} />
        <Progress />
        <div>
          <ItemsContainer
            showCart={showCart}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </div>
      </main>
    </>
  );
};

export default Statistics;
