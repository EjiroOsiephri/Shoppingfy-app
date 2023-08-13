import React, { useState } from "react";
import SideBar from "../SideBar";
import ItemsContainer from "../ItemsContainer";
import Classses from "../../Sass/ShoppingMain.module.scss";
import ShoppingList from "./ShoppingList";

const ShoppingMain = (props) => {
  const [cartItems, setCartItems] = useState(false);
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <main className={Classses["main-shopping"]}>
        <SideBar setShowCart={setShowCart} />
        <ShoppingList allItemsInHistoryArray={props.allItemsInHistoryArray} />
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

export default ShoppingMain;
