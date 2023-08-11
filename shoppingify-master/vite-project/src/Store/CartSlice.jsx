import { createSlice } from "@reduxjs/toolkit";

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

let cartItems =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

let totalQuantity =
  localStorage.getItem("totalCartQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalCartQuantity"))
    : 0;

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: cartItems,
    totalCartQuantity: totalQuantity,
    foodAndVegetables,
    meatAndFish,
    beverages,
    Pets,
  },
  reducers: {
    toggleItemCheckbox(state, action) {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.isChecked = !item.isChecked;
      }
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalCartQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
          title: newItem.title,
          isChecked: false,
        });
      } else {
        existingItem.quantity++;
      }
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.items.map((item) => item))
      );
      localStorage.setItem(
        "totalCartQuantity",
        JSON.stringify(state.totalCartQuantity)
      );
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalCartQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.items.map((item) => item))
      );
      localStorage.setItem(
        "totalCartQuantity",
        JSON.stringify(state.totalCartQuantity)
      );
    },
    addToFoodAndVegetables(state, action) {
      state.foodAndVegetables.push(action.payload);
    },
    removeFoodAndVegetables(state, action) {
      state.foodAndVegetables.pop(action.payload);
    },
    addToMeatAndFish(state, action) {
      state.meatAndFish.push(action.payload);
    },
    removeMeatAndFish(state, action) {
      state.meatAndFish.pop(action.payload);
    },
    addToPets(state, action) {
      state.Pets.push(action.payload);
    },
    removePets(state, action) {
      state.Pets.pop(action.payload);
    },
    addToBeverages(state, action) {
      state.beverages.push(action.payload);
    },
    removeBeverages(state, action) {
      state.beverages.pop(action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
