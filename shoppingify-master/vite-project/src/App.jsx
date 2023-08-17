import "./app.scss";
import React, { Suspense, useEffect, useState } from "react";
import AppWideContext from "./Context/AppContext";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "./Components/UI/LoadingSpinner";

const ShoppingMain = React.lazy(() =>
  import("./Components/shoppinghistory/ShoppingMain")
);
const Statistics = React.lazy(() => import("./pages/Statistics"));

const SideBar = React.lazy(() => import("./Components/SideBar"));

const MainHeader = React.lazy(() => import("./Components/MainHeader"));

const ItemsContainer = React.lazy(() => import("./Components/ItemsContainer"));

function App() {
  const [searchInputItem, setSearchItem] = useState("");
  const [cartItems, setCartItems] = useState(false);
  const [showNewItem, setShowNewItem] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [randomImage, setRandomImage] = useState("");
  const [newPage, setNewPage] = useState(false);
  const [focus, setFocus] = useState(null);
  const [beverages, setBeverages] = useState("");
  const [vegetables, setVegetables] = useState("");
  const [MeatAndFish, setMeatAndFish] = useState("");
  const [pets, setpets] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryError, setCategoryError] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [allItemsInHistoryArray, setAllItemsInHistoryArray] = useState([]);
  const [historyTitle, setHistoryTitle] = useState("");
  const [showHistoryDetails, setShowHistoryDetails] = useState(false);
  const [itemName, setItemName] = useState([]);
  const [completionState, setCompletionState] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

  const date = new Date();

  const currentDate = date.toISOString();

  useEffect(() => {
    if (historyTitle !== "") {
      const newItem = {
        historyTitle,
        currentDate,
      };
      setAllItemsInHistoryArray((prevArray) => [...prevArray, newItem]);
    }
  }, [historyTitle]);

  function searchInput(item) {
    setSearchItem(item);
  }

  const AddNewItemObj = {
    showNewItem: showNewItem,
    setShowNewItem: setShowNewItem,
    setRandomImage: setRandomImage,
    randomImage: randomImage,
    newPage: newPage,
    setNewPage: setNewPage,
    setFocus: setFocus,
    focus: focus,
    setBeverages,
    beverages,
    MeatAndFish,
    setMeatAndFish,
    setpets,
    pets,
    setVegetables,
    vegetables,
    selectedCategory,
    setSelectedCategory,
    categoryError,
    setCategoryError,
    isChecked,
    setIsChecked,
    historyTitle,
    allItemsInHistoryArray,
    setHistoryTitle,
    setShowHistoryDetails,
    showHistoryDetails,
    itemName,
    setItemName,
    completionState,
    setCompletionState,
    setShowCompletion,
    showCompletion,
  };

  return (
    <>
      <AppWideContext.Provider value={AddNewItemObj}>
        <Suspense
          fallback={<div className="spinner">{<LoadingSpinner />}</div>}
        >
          <Routes>
            <Route
              path="/"
              element={
                <main className="main">
                  <SideBar setShowCart={setShowCart} />
                  <MainHeader
                    showCart={showCart}
                    searchInput={searchInput}
                    searchInputItem={searchInputItem}
                  />
                  <div className="cart-categories">
                    <ItemsContainer
                      showCart={showCart}
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                    />
                  </div>
                </main>
              }
            />
            <Route element={<ShoppingMain />} path="/shopping-history" />
            <Route element={<Statistics />} path="/statistics" />
          </Routes>
        </Suspense>
      </AppWideContext.Provider>
    </>
  );
}

export default App;
