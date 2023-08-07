import SideBar from "./Components/SideBar";
import MainHeader from "./Components/MainHeader";
import "./app.scss";
import ItemsContainer from "./Components/ItemsContainer";
import { useState } from "react";
import AppWideContext from "./Context/AppContext";
import CartCategories from "./Components/FoodLists/CartCategories";
import AddNewItem from "./Components/AddNewItem";

function App() {
  const [searchInputItem, setSearchItem] = useState("");
  const [cartItems, setCartItems] = useState(false);
  const [showNewItem, setShowNewItem] = useState(false);
  const [showCart, setShowCart] = useState(false);

  function searchInput(item) {
    setSearchItem(item);
  }

  const AddNewItemObj = {
    showNewItem: showNewItem,
    setShowNewItem: setShowNewItem,
  };

  return (
    <>
      <AppWideContext.Provider value={AddNewItemObj}>
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
            <CartCategories showCart={showCart} cartItems={cartItems} />
          </div>
        </main>
      </AppWideContext.Provider>
    </>
  );
}

export default App;
