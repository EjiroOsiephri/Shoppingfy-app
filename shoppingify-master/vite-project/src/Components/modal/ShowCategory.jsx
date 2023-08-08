import React, { useContext, useRef } from "react";
import Classes from "../../Sass/ShowCategory.module.scss";
import AppWideContext from "../../Context/AppContext";

const ShowCategory = () => {
  const ctx = useContext(AppWideContext);

  const getItemNameRef = useRef(null);

  const h2VegetableText = getItemNameRef?.current?.textContent;

  function getFoodAndVegetables() {
    ctx.setFocus(false);
    console.log(h2VegetableText);
  }

  function getMeatAndFish() {}
  function getPets() {}
  function getBeverages() {}

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
