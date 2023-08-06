import SideBar from "./Components/SideBar";
import MainHeader from "./Components/MainHeader";
import "./app.scss";
import ItemsContainer from "./Components/ItemsContainer";
import { useState } from "react";
import CartCategories from "./Components/FoodLists/CartCategories";
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchInputItem, setSearchItem] = useState("");
  const [cartItems, setCartItems] = useState(false);

  function searchInput(item) {
    setSearchItem(item);
  }

  console.log(cartItems);
  return (
    <>
      <main className="main">
        <SideBar />
        <MainHeader
          searchInput={searchInput}
          searchInputItem={searchInputItem}
        />
        <Routes>
          <Route
            path="/"
            element={
              <div className="cart-categories">
                <ItemsContainer
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
                <CartCategories cartItems={cartItems} />
              </div>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
