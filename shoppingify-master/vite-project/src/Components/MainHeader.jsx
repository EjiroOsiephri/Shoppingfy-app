import React from "react";
import Classes from "../Sass/MainHeader.module.scss";
import FoodArray from "./FoodLists/FoodArray";

const MainHeader = () => {
  return (
    <>
      <main>
        <header className={Classes["main-header"]}>
          <div className={Classes["texts"]}>
            <span>Shoppingify</span>
            <h1>allows you take your shopping list wherever you go</h1>
          </div>
          <div className={Classes["inputs"]}>
            <input placeholder="Search item" type="text" />
          </div>
        </header>
        <section>
          <FoodArray />
        </section>
      </main>
    </>
  );
};

export default MainHeader;
