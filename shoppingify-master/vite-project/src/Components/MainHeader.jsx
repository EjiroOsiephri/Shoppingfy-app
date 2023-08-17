import React from "react";
import Classes from "../Sass/MainHeader.module.scss";
import FoodArray from "./FoodLists/FoodArray";
import searchImg from "../assets/search.svg";
import { motion } from "framer-motion";

const MainHeader = (props) => {
  const handleInputValue = (e) => {
    props.searchInput(e.target.value);
  };

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={Classes.MainHeader}
      >
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
      </motion.main>
    </>
  );
};

export default MainHeader;
