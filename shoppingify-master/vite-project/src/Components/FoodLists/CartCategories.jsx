import React, { useEffect, useState } from "react";
import Classes from "../../Sass/ItemsContainer.module.scss";

const CartCategories = (props) => {
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

  return (
    <>
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
    </>
  );
};

export default CartCategories;
