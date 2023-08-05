import React, { useEffect, useState } from "react";
import Classes from "../Sass/ItemsContainer.module.scss";
import Source from "../assets/source.svg";
import EmptyCart from "../assets/shop.svg";
import { useSelector } from "react-redux";

const ItemsContainer = () => {
  const state = useSelector((state) => state.cart.items);

  const [cartItems, setCartItems] = useState(false);

  useEffect(() => {
    if (state.length > 0) {
      setCartItems(true);
    } else {
      setCartItems(false);
    }
  }, [state]);

  return (
    <>
      <aside className={Classes["items-container"]}>
        <section className={Classes["AddItemToCartContainer"]}>
          <img src={Source} alt="img-source" />
          <div>
            <p>Didn’t find what you need?</p>
            <button>Add item</button>
          </div>
        </section>
        {!cartItems && (
          <div className={Classes["showItemsInCart"]}>
            <p>No items</p>
            <img src={EmptyCart} alt="" />
          </div>
        )}
        <div className={Classes["enterFoodItem"]}>
          <input type="text" placeholder="Enter a name" />
          <button>Save</button>
        </div>
      </aside>
    </>
  );
};

export default ItemsContainer;
