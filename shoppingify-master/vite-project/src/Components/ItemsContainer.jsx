import React, { useEffect, useState } from "react";
import Classes from "../Sass/ItemsContainer.module.scss";
import Source from "../assets/source.svg";
import EmptyCart from "../assets/shop.svg";
import Pen from "../assets/pen.svg";
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

  state.map((item) => {
    console.log(item.name);
  });
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
        {!cartItems ? (
          <div className={Classes["showItemsInCart"]}>
            <p>No items</p>
            <img src={EmptyCart} alt="" />
          </div>
        ) : (
          <section className={Classes["products-container"]}>
            <div className={Classes["AddToCategories"]}>
              <h1>Shopping Lists</h1>
              <div>
                <h3>Add categories</h3>
                <img src={Pen} alt="" />
              </div>
            </div>
            {state.map((item) => {
              return (
                <div className={Classes["item-container-name"]} key={item.id}>
                  <div className={Classes["item-name"]}>
                    <input type="checkbox" />
                    <h1>{item.name}</h1>
                  </div>
                  <h2>{`${item.quantity}pcs`}</h2>
                </div>
              );
            })}
          </section>
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
