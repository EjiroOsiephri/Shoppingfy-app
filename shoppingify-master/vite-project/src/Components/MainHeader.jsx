import React, { useState } from "react";
import Classes from "../Sass/MainHeader.module.scss";
import FoodArray from "./FoodLists/FoodArray";

const MainHeader = (props) => {
  const handleInputValue = (e) => {
    props.searchInput(e.target.value);
  };
  return (
    <>
      <main>
        <header className={Classes["main-header"]}>
          <div className={Classes["texts"]}>
            <span>Shoppingify</span>
            <h1>allows you take your shopping list wherever you go</h1>
          </div>
          <div className={Classes["inputs"]}>
            <input
              onChange={handleInputValue}
              placeholder="Search item"
              type="text"
            />
          </div>
        </header>
        <section>
          <FoodArray searchInputItem={props.searchInputItem} />
        </section>
      </main>
    </>
  );
};

export default MainHeader;
