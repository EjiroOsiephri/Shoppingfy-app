import React from "react";
import Classes from "../../Sass/FoodArray.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Store/CartSlice";

const FoodArray = (props) => {
  const foodAndVegetables = useSelector(
    (state) => state.cart.foodAndVegetables || []
  );
  const meatAndFish = useSelector((state) => state.cart.meatAndFish || []);
  const beverages = useSelector((state) => state.cart.beverages || []);
  const Pets = useSelector((state) => state.cart.pets || []);

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
  const beveragesFiterArray = beverages.filter((item) =>
    item.name.toLowerCase().includes(props.searchInputItem.toLowerCase())
  );

  const petFiterArray = Pets.filter((item) =>
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
          {beveragesFiterArray.map((item) => {
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
          {petFiterArray.map((item) => {
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
