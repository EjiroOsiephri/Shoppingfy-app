import React from "react";
import Classes from "../../Sass/FoodArray.module.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartActions } from "../../Store/CartSlice";

const FoodArray = () => {
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
    "Chicken 1kg",
    "Chicken leg box",
    "Pork fillets 450g",
    "Salmon 1kg",
  ];

  const state = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(cartActions.addItemToCart(item));
  };

  console.log(state);
  return (
    <>
      <main>
        <section className={Classes.foodArray}>
          {foodAndVegetables.map((item) => {
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
