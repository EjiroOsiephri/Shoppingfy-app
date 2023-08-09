import React, { useContext, useRef, useState } from "react";
import Classes from "../../Sass/ShowCategory.module.scss";
import AppWideContext from "../../Context/AppContext";

const ShowCategory = () => {
  const ctx = useContext(AppWideContext);

  const getItemNameRef = useRef(null);
  const getBeveragesRef = useRef(null);
  const getMeatAndFishRef = useRef(null);
  const getPetRef = useRef(null);

  function getFoodAndVegetables() {
    ctx.setFocus(false);
    ctx.setVegetables(getItemNameRef.current.textContent);
  }

  function getMeatAndFish() {
    ctx.setFocus(false);
    ctx.setMeatAndFish(getMeatAndFishRef.current.textContent);
  }

  function getPets() {
    ctx.setFocus(false);
    ctx.setpets(getPetRef.current.textContent);
  }

  function getBeverages() {
    ctx.setFocus(false);
    ctx.setBeverages(getBeveragesRef.current.textContent);
  }

  return (
    <>
      <div className={Classes["showCategory"]}>
        <h2 onClick={getFoodAndVegetables} ref={getItemNameRef}>
          Food and vegetables
        </h2>
        <h2 onClick={getMeatAndFish} ref={getMeatAndFishRef}>
          Meat and Fish
        </h2>
        <h2 onClick={getBeverages} ref={getBeveragesRef}>
          Beverages
        </h2>
        <h2 onClick={getPets} ref={getPetRef}>
          Pets
        </h2>
      </div>
    </>
  );
};

export default ShowCategory;
