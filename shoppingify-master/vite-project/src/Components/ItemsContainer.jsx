import React, { useEffect, useState } from "react";
import Classes from "../Sass/ItemsContainer.module.scss";
import Source from "../assets/source.svg";
import EmptyCart from "../assets/shop.svg";
import Pen from "../assets/pen.svg";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/CartSlice";

const ItemsContainer = (props) => {
  const state = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (state.length > 0) {
      props.setCartItems(true);
    } else {
      props.setCartItems(false);
    }
  }, [state]);

  function removeItemFromCart(id) {
    dispatch(cartActions.removeItemFromCart(id));
  }

  return (
    <>
      <aside
        style={
          windowWidth <= 678 && props.showCart === true
            ? {
                display: "block",
              }
            : {}
        }
        className={Classes["items-container"]}
      >
        <section className={Classes["AddItemToCartContainer"]}>
          <img src={Source} alt="img-source" />
          <div>
            <p>Didn’t find what you need?</p>
            <button>Add item</button>
          </div>
        </section>
        {!props.cartItems ? (
          <div className={Classes["showItemsInCart"]}>
            <p>No items</p>
            <img src={EmptyCart} alt="" />
          </div>
        ) : (
          <section className={Classes["products-container"]}>
            <div className={Classes["AddToCategories"]}>
              <h1>Shopping Lists</h1>
              <div>
                <img src={Pen} alt="" />
              </div>
            </div>
            <aside>
              {state.map((item) => {
                return (
                  <aside key={item.id}>
                    <h1>{item.title}</h1>
                    <div className={Classes["item-container-name"]}>
                      <div className={Classes["item-name"]}>
                        <input type="checkbox" />
                        <h1>{item.name}</h1>
                      </div>
                      <h2>
                        {`${item.quantity}pcs`}{" "}
                        <span
                          onClick={() => {
                            removeItemFromCart(item.id);
                          }}
                        >
                          -
                        </span>
                      </h2>
                    </div>
                  </aside>
                );
              })}
            </aside>
          </section>
        )}
      </aside>
    </>
  );
};

export default ItemsContainer;
