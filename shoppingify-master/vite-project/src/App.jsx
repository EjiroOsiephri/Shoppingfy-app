import SideBar from "./Components/SideBar";
import MainHeader from "./Components/MainHeader";
import "./app.scss";
import ItemsContainer from "./Components/ItemsContainer";
import { useState, useEffect } from "react";
import CartCategories from "./Components/FoodLists/CartCategories";

function App() {
  const [searchInputItem, setSearchItem] = useState("");
  const [cartItems, setCartItems] = useState(false);
  const [showCart, setShowCart] = useState(false);

  function searchInput(item) {
    setSearchItem(item);
  }

  return (
    <>
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
    </>
  );
}

export default App;
