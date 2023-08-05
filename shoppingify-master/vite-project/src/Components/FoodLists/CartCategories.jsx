import React from "react";
import Classes from "../../Sass/ItemsContainer.module.scss";

const CartCategories = (props) => {
  return (
    <>
      <div className={Classes["enterFoodItem"]}>
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
