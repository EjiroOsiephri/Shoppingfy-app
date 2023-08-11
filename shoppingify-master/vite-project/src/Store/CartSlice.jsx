import { createSlice } from "@reduxjs/toolkit";

const foodAndVegetables = [
  {
    title: "Food and vegetables",
    name: "Avocado",
    id: "a1",
    checked: false,
  },
  {
    title: "Food and vegetables",
    name: "Banana",
    id: "a2",
    checked: false,
  },
  {
    title: "Food and vegetables",
    name: "Bunch of carrots 5pcs",
    id: "a3",
    checked: false,
  },
  {
    title: "Food and vegetables",
    name: "Chicken 1kg",
    id: "a4",
    checked: false,
  },
  {
    title: "Food and vegetables",
    name: "Precooked corn 450g",
    id: "a5",
    checked: false,
  },
  {
    title: "Food and vegetables",
    name: "Mandarin Nadorcott",
    id: "a6",
    checked: false,
  },
  {
    title: "Food and vegetables",
    name: "Piele De Sapo Melon",
    id: "a7",
    checked: false,
  },
  {
    title: "Food and vegetables",
    name: "Water melon",
    id: "a8",
    checked: false,
  },
];

const meatAndFish = [
  {
    title: "Meat and Fish",
    name: "Chicken 1kg",
    id: "m1",
    checked: false,
  },
  {
    title: "Meat and Fish",
    name: "Chicken leg box",
    id: "m2",
    checked: false,
  },
  {
    title: "Meat and Fish",
    name: "Pork fillets 450g",
    id: "m3",
    checked: false,
  },
  {
    title: "Meat and Fish",
    name: "Salmon 1kg",
    id: "m4",
    checked: false,
  },
];

const beverages = [
  {
    title: "Beverages",
    name: "Green tea",
    id: "b1",
    checked: false,
  },
  {
    title: "Beverages",
    name: "Cola",
    checked: false,
    id: "b2",
  },
  {
    title: "Beverages",
    name: "Skotch blended brandi",
    id: "b3",
    checked: false,
  },
  {
    title: "Beverages",
    name: "Heineken",
    id: "b4",
    checked: false,
  },
  {
    title: "Beverages",
    name: "Coffee",
    id: "b5",
    checked: false,
  },
  {
    title: "Beverages",
    name: "Mocktails",
    id: "b6",
    checked: false,
  },
];

const Pets = [
  {
    title: "Pets",
    name: "Pet grooming bed",
    id: "p1",
    checked: false,
  },
  {
    title: "Pets",
    name: "Chicken cage",
    id: "p2",
    checked: false,
  },
  {
    title: "Pets",
    name: "Dog milk and sugar",
    id: "p3",
    checked: false,
  },
  {
    title: "Pets",
    name: "Dog bowl and clean water",
    id: "p4",
    checked: false,
  },
  {
    title: "Pets",
    name: "Collar and leash",
    id: "p5",
    checked: false,
  },
  {
    title: "Pets",
    name: "Chicken feed 1kg",
    id: "p6",
    checked: false,
  },
];

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    totalCartQuantity: 0,
    foodAndVegetables,
    meatAndFish,
    beverages,
    Pets,
  },
  reducers: {
    toggleCheckbox(state, action) {
      const itemId = action.payload;
      const { foodAndVegetables, meatAndFish, beverages, Pets } = state;

      const allItems = [
        ...foodAndVegetables,
        ...meatAndFish,
        ...beverages,
        ...Pets,
      ];

      const itemToUpdate = allItems.find((item) => item.id === itemId);

      if (itemToUpdate) {
        itemToUpdate.checked = !itemToUpdate.checked;
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
        });
      } else {
        existingItem.quantity++;
      }
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
