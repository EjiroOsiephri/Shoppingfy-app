import React from "react";
import Classes from "../../Sass/FoodArray.module.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/CartSlice";

const FoodArray = (props) => {
  const foodAndVegetables = [
    {
      title: "Food and vegetables",
      name: "Avocado",
      id: "a1",
    },
    {
      title: "Food and vegetables",
      name: "Banana",
      id: "a2",
    },
    {
      title: "Food and vegetables",
      name: "Bunch of carrots 5pcs",
      id: "a3",
    },
    {
      title: "Food and vegetables",
      name: "Chicken 1kg",
      id: "a4",
    },
    {
      title: "Food and vegetables",
      name: "Precooked corn 450g",
      id: "a5",
    },
    {
      title: "Food and vegetables",
      name: "Mandarin Nadorcott",
      id: "a6",
    },
    {
      title: "Food and vegetables",
      name: "Piele De Sapo Melon",
      id: "a7",
    },
    {
      title: "Food and vegetables",
      name: "Water melon",
      id: "a8",
    },
  ];

  const meatAndFish = [
    {
      title: "Meat and Fish",
      name: "Chicken 1kg",
      id: "m1",
    },
    {
      title: "Meat and Fish",
      name: "Chicken leg box",
      id: "m2",
    },
    {
      title: "Meat and Fish",
      name: "Pork fillets 450g",
      id: "m3",
    },
    {
      title: "Meat and Fish",
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
