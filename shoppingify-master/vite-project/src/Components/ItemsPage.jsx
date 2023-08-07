import React from "react";
import AppWideContext from "../Context/AppContext";
import { useContext } from "react";
import Classes from "../Sass/itemPage.module.scss";

const ItemsPage = () => {
  const ctx = useContext(AppWideContext);
  console.log(ctx.randomImage);
  return (
    <>
      <section className={Classes["itemsPage"]}>
        <button>go back</button>
        <div className="nameItemImage">
          <img src={ctx.randomImage} alt="" />
        </div>
        <div className="category">
          <label>Category</label>
          <h1></h1>
        </div>
        <div className="buttonComponent">
          <button>delete</button>
          <button>Add to lists</button>
        </div>
      </section>
    </>
  );
};

export default ItemsPage;
