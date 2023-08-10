import React, { useContext, useRef, useState } from "react";
import Classes from "../../Sass/ShowCategory.module.scss";
import AppWideContext from "../../Context/AppContext";

const ShowCategory = () => {
  const ctx = useContext(AppWideContext);
  const [beverages, setBeverages] = useState(false);
  const [vegetables, setVegetables] = useState(false);
  const [MeatAndFish, setMeatAndFish] = useState(false);
  const [pets, setpets] = useState(false);

  const getItemNameRef = useRef(null);
  const getBeveragesRef = useRef(null);
  const getMeatAndFishRef = useRef(null);
  const getPetRef = useRef(null);

  function setSelectedCategory(category) {
    ctx.setFocus(false);
    ctx.setSelectedCategory(category);
  }

  function setDivVegetables() {
    setVegetables(true);
    ctx.setCategoryError(false);
  }

  function setDivMeat() {
    setMeatAndFish(true);
    ctx.setCategoryError(false);
  }

  function setDivBeverages() {
    setBeverages(true);
    ctx.setCategoryError(false);
  }

  function setDivPets() {
    setpets(true);
    ctx.setCategoryError(false);
  }

  return (
    <>
      <div className={Classes["showCategory"]}>
        <div
          style={
            vegetables
              ? {
                  width: "294.3620300292969px",
                  height: "46.78712844848633px",
                  borderRadius: "12px",
                  background: "rgba(242, 242, 242, 1)",
                }
              : {}
          }
          onClick={setDivVegetables}
          className={Classes["foodAndVegetables"]}
        >
          <h2
            onClick={() => setSelectedCategory("Food and vegetables")}
            ref={getItemNameRef}
          >
            Food and vegetables
          </h2>
        </div>
        <div
          style={
            MeatAndFish
              ? {
                  width: "294.3620300292969px",
                  height: "46.78712844848633px",
                  borderRadius: "12px",
                  background: "rgba(242, 242, 242, 1)",
                }
              : {}
          }
          onClick={setDivMeat}
          className={Classes["meatAndFish"]}
        >
          <h2
            onClick={() => setSelectedCategory("Meat and Fish")}
            ref={getMeatAndFishRef}
          >
            Meat and Fish
          </h2>
        </div>
        <div
          style={
            beverages
              ? {
                  width: "294.3620300292969px",
                  height: "46.78712844848633px",
                  borderRadius: "12px",
                  background: "rgba(242, 242, 242, 1)",
                }
              : {}
          }
          onClick={setDivBeverages}
          className={Classes["beverages"]}
        >
          <h2
            onClick={() => setSelectedCategory("Beverages")}
            ref={getBeveragesRef}
          >
            Beverages
          </h2>
        </div>
        <div
          style={
            pets
              ? {
                  width: "294.3620300292969px",
                  height: "46.78712844848633px",
                  borderRadius: "12px",
                  background: "rgba(242, 242, 242, 1)",
                }
              : {}
          }
          onClick={setDivPets}
          className={Classes["pets"]}
        >
          <h2 onClick={() => setSelectedCategory("Pets")} ref={getPetRef}>
            Pets
          </h2>
        </div>
      </div>
    </>
  );
};

export default ShowCategory;
