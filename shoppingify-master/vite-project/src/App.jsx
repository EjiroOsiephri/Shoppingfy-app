import SideBar from "./Components/SideBar";
import MainHeader from "./Components/MainHeader";
import "./app.scss";
import ItemsContainer from "./Components/ItemsContainer";
import { useEffect, useState } from "react";
import AppWideContext from "./Context/AppContext";
import { Routes, Route } from "react-router-dom";
import ShoppingMain from "./Components/shoppinghistory/ShoppingMain";

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

  const [allItemsInHistoryArray, setAllItemsInHistoryArray] = useState([]);

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
      setHistoryTitle("");
    }
  }, [historyTitle]);

  console.log(allItemsInHistoryArray);

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
    setHistoryTitle,
    allItemsInHistoryArray,
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
        </Routes>
      </AppWideContext.Provider>
    </>
  );
}

export default App;
