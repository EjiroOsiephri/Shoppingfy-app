import React, { useState } from "react";
import SideBar from "../SideBar";
import ItemsContainer from "../ItemsContainer";
import Classses from "../../Sass/ShoppingMain.module.scss";
import ShoppingList from "./ShoppingList";

const ShoppingMain = () => {
  const [cartItems, setCartItems] = useState(false);
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <main className={Classses["main-shopping"]}>
        <SideBar setShowCart={setShowCart} />
        <ShoppingList />
        <ItemsContainer
          showCart={showCart}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </main>
    </>
  );
};

export default ShoppingMain;
