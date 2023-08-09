import React, { useContext, useRef } from "react";
import Classes from "../../Sass/ShowCategory.module.scss";
import AppWideContext from "../../Context/AppContext";

const ShowCategory = () => {
  const ctx = useContext(AppWideContext);

  const getItemNameRef = useRef(null);
  const getBeveragesRef = useRef(null);
  const getMeatAndFishRef = useRef(null);
  const getPetRef = useRef(null);

  function setSelectedCategory(category) {
    ctx.setFocus(false);
    ctx.setSelectedCategory(category);
  }

  return (
    <>
      <div className={Classes["showCategory"]}>
        <h2
          onClick={() => setSelectedCategory("Food and vegetables")}
          ref={getItemNameRef}
        >
          Food and vegetables
        </h2>
        <h2
          onClick={() => setSelectedCategory("Meat and Fish")}
          ref={getMeatAndFishRef}
        >
          Meat and Fish
        </h2>
        <h2
          onClick={() => setSelectedCategory("Beverages")}
          ref={getBeveragesRef}
        >
          Beverages
        </h2>
        <h2 onClick={() => setSelectedCategory("Pets")} ref={getPetRef}>
          Pets
        </h2>
      </div>
    </>
  );
};

export default ShowCategory;
