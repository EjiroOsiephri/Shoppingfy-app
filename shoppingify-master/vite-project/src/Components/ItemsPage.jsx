import React from "react";
import AppWideContext from "../Context/AppContext";
import { useContext } from "react";
import Classes from "../Sass/itemPage.module.scss";

const ItemsPage = (props) => {
  const ctx = useContext(AppWideContext);

  return (
    <>
      <section className={Classes["itemsPage"]}>
        <button>go back</button>
        <div className={Classes["nameItemImage"]}>
          <img src={ctx.randomImage} alt="" />
        </div>
        <div className={Classes["nameContainerDiv"]}>
          <label>name</label>
          <h1>{props.name}</h1>
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
