import React from "react";
import SideBar from "../SideBar";
import ItemsContainer from "../ItemsContainer";
import Classses from "../../Sass/ShoppingMain.module.scss";

const ShoppingMain = () => {
  return (
    <>
      <main className={Classses["main-shopping"]}>
        <SideBar></SideBar>
        <section></section>
        <ItemsContainer />
      </main>
    </>
  );
};

export default ShoppingMain;
