import React from "react";
import Classes from "../../Sass/FoodArray.module.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartActions } from "../../Store/CartSlice";

const FoodArray = (props) => {
  const foodAndVegetables = [
    {
      name: "Avocado",
      id: "a1",
    },
    {
      name: "Banana",
      id: "a2",
    },
    {
      name: "Bunch of carrots 5pcs",
      id: "a3",
    },
    {
      name: "Chicken 1kg",
      id: "a4",
    },
    {
      name: "Precooked corn 450g",
      id: "a5",
    },
    {
      name: "Mandarin Nadorcott",
      id: "a6",
    },
    {
      name: "Piele De Sapo Melon",
      id: "a7",
    },
    {
      name: "Water melon",
      id: "a8",
    },
  ];

  const meatAndFish = [
    {
      name: "Chicken 1kg",
      id: "m1",
    },
    {
      name: "Chicken leg box",
      id: "m2",
    },
    {
      name: "Pork fillets 450g",
      id: "m3",
    },
    {
      name: "Salmon 1kg",
      id: "m4",
    },
  ];

  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(cartActions.addItemToCart(item));
  };

  const foodFilterArray = foodAndVegetables.filter((item) =>
    item.name.toLowerCase().includes(props.searchInputItem.toLowerCase())
  );

  const chickenFiterArray = meatAndFish.filter((item) =>
    item.name.toLowerCase().includes(props.searchInputItem.toLowerCase())
  );

  return (
    <>
      <main>
        <h1>Food and Vegetables</h1>
        <section className={Classes.foodArray}>
          {foodFilterArray.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => {
                  addItemToCart(item);
                }}
                className={Classes["foodAndVegetables"]}
              >
                <p>{item.name}</p>
                <p>+</p>
              </div>
            );
          })}
        </section>
        <h1>Meat and Fish</h1>
        <section className={Classes.foodArray}>
          {chickenFiterArray.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => {
                  addItemToCart(item);
                }}
                className={Classes["foodAndVegetables"]}
              >
                <p>{item.name}</p>
                <p>+</p>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default FoodArray;
