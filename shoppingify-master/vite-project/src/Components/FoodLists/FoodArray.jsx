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

  const beverages = [
    {
      title: "Beverages",
      name: "Green tea",
      id: "b1",
    },
    {
      title: "Beverages",
      name: "Cola",
      id: "b2",
    },
    {
      title: "Beverages",
      name: "Skotch blended brandi",
      id: "b3",
    },
    {
      title: "Beverages",
      name: "Heineken",
      id: "b4",
    },
    {
      title: "Beverages",
      name: "Coffee",
      id: "b5",
    },
    {
      title: "Beverages",
      name: "Mocktails",
      id: "b6",
    },
  ];

  const Pets = [
    {
      title: "Pets",
      name: "Pet grooming bed",
      id: "p1",
    },
    {
      title: "Pets",
      name: "Chicken cage",
      id: "p2",
    },
    {
      title: "Pets",
      name: "Dog milk and sugar",
      id: "p3",
    },
    {
      title: "Pets",
      name: "Dog bowl and clean water",
      id: "p4",
    },
    {
      title: "Pets",
      name: "Collar and leash",
      id: "p5",
    },
    {
      title: "Pets",
      name: "Chicken feed 1kg",
      id: "p6",
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
        <h1>Beverages</h1>
        <section className={Classes.foodArray}>
          {beverages.map((item) => {
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
        <h1>Pets</h1>
        <section className={Classes.foodArray}>
          {Pets.map((item) => {
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
