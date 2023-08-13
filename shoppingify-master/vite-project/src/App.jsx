import SideBar from "./Components/SideBar";
import MainHeader from "./Components/MainHeader";
import "./app.scss";
import ItemsContainer from "./Components/ItemsContainer";
import { useEffect, useState } from "react";
import AppWideContext from "./Context/AppContext";
import { Routes, Route } from "react-router-dom";
import ShoppingList from "./Components/shoppinghistory/ShoppingList";

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
  const [historyTitle, setHistoryTitle] = useState("");
  const [showShoppingList, setShowShoppingList] = useState(true);

  const [allItemsInHistoryArray, setAllItemsInHistoryArray] = useState([]);

  const history =
    localStorage.getItem("history") !== null
      ? JSON.parse(localStorage.getItem("history"))
      : [];

  const date = new Date();

  const currentDate = date.toISOString();

  useEffect(() => {
    if (historyTitle !== "") {
      setAllItemsInHistoryArray((prevArray) => [
        ...prevArray,
        {
          historyTitle,
          currentDate,
        },
      ]);
      localStorage.setItem("history", JSON.stringify(allItemsInHistoryArray));
    }
  }, [historyTitle]);

  function searchInput(item) {
    setSearchItem(item);
  }
  console.log(history);

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
    setHistoryTitle,
    allItemsInHistoryArray,
    setAllItemsInHistoryArray,
    history,
    showShoppingList,
    setShowShoppingList,
  };

  return (
    <>
      <AppWideContext.Provider value={AddNewItemObj}>
        <Routes>
          <Route
            path="/"
            element={
              <main className="main">
                <SideBar setShowCart={setShowCart} />
                {showShoppingList ? (
                  <MainHeader
                    showCart={showCart}
                    searchInput={searchInput}
                    searchInputItem={searchInputItem}
                  />
                ) : (
                  <ShoppingList />
                )}

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
        </Routes>
      </AppWideContext.Provider>
    </>
  );
}

export default App;
