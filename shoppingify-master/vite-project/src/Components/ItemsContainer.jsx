import React, { useEffect, useRef, useState } from "react";
import Classes from "../Sass/ItemsContainer.module.scss";
import Source from "../assets/source.svg";
import EmptyCart from "../assets/shop.svg";
import Pen from "../assets/pen.svg";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/CartSlice";
import { useContext } from "react";
import AppWideContext from "../Context/AppContext";
import AddNewItem from "./AddNewItem";
import { useNavigate } from "react-router-dom";
import { historyActions } from "../Store/HistorySlice";

const ItemsContainer = (props) => {
  const state = useSelector((state) => state.cart.items);

  const ctx = useContext(AppWideContext);

  const dispatch = useDispatch();

  const navigate = useNavigate();

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

  const showNewItemHandler = () => {
    ctx.setShowNewItem(true);
  };

  const handleCheckboxChange = (itemId, isChecked, itemName) => {
    console.log(!isChecked);
    dispatch(cartActions.toggleItemCheckbox(itemId));
    ctx.setItemName((prevArray) => [...prevArray, { itemName }]);
  };

  const historyNameHandler = useRef();

  const currentDate = new Date();

  const calender = currentDate.toDateString();

  const showHistory = () => {
    const newHistoryTitle = historyNameHandler?.current?.value;

    ctx.setHistoryTitle(newHistoryTitle);

    navigate("/shopping-history");

    dispatch(
      historyActions.allItemsArray({
        historyTitle: newHistoryTitle,
        calender: calender,
      })
    );
  };

  return (
    <>
      {ctx.showNewItem ? (
        <AddNewItem />
      ) : (
        <aside
          style={
            windowWidth <= 678 && props.showCart === true
              ? {
                  display: "block",
                  flex: "0 0 370px",
                }
              : {}
          }
          className={Classes["items-container"]}
        >
          <section className={Classes["AddItemToCartContainer"]}>
            <img src={Source} alt="img-source" />
            <div>
              <p>Didn’t find what you need?</p>
              <button onClick={showNewItemHandler}>Add item</button>
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
                          <input
                            checked={item.isChecked}
                            onChange={() =>
                              handleCheckboxChange(
                                item.id,
                                item.isChecked,
                                item.name
                              )
                            }
                            type="checkbox"
                          />
                          <h1
                            style={
                              item.isChecked
                                ? {
                                    textDecoration: "line-through",
                                  }
                                : {}
                            }
                          >
                            {item.name}
                          </h1>
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
          <div
            style={
              windowWidth <= 678 && props.showCart === true
                ? {
                    display: "block",
                    maxWidth: "100%",
                    marginInline: "auto",
                    marginLeft: "50px",
                  }
                : {}
            }
            className={Classes["enterFoodItem"]}
          >
            <input
              ref={historyNameHandler}
              style={
                props.cartItems
                  ? {
                      borderColor: "rgba(249, 161, 9, 1)",
                    }
                  : {}
              }
              disabled={!props.cartItems}
              type="text"
              placeholder="Enter a name"
            />
            <button
              onClick={showHistory}
              style={
                props.cartItems
                  ? {
                      background: "rgba(249, 161, 9, 1)",
                      color: "white",
                    }
                  : {}
              }
              disabled={!props.cartItems}
            >
              Save
            </button>
          </div>
        </aside>
      )}
    </>
  );
};

export default ItemsContainer;
