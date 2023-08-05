import React from "react";
import Classes from "../Sass/ItemsContainer.module.scss";
import Source from "../assets/source.svg";
import EmptyCart from "../assets/shop.svg";

const ItemsContainer = () => {
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
        <div className={Classes["showItemsInCart"]}>
          <p>No items</p>
          <img src={EmptyCart} alt="" />
        </div>
        <div className={Classes["enterFoodItem"]}>
          <input type="text" placeholder="Enter a name" />
          <button>Save</button>
        </div>
      </aside>
    </>
  );
};

export default ItemsContainer;
