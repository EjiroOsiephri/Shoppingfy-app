import SideBar from "./Components/SideBar";
import MainHeader from "./Components/MainHeader";
import "./app.scss";
import ItemsContainer from "./Components/ItemsContainer";
import { useState } from "react";
import AppWideContext from "./Context/AppContext";

function App() {
  const [searchInputItem, setSearchItem] = useState("");
  const [cartItems, setCartItems] = useState(false);
  const [showNewItem, setShowNewItem] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [randomImage, setRandomImage] = useState("");
  const [newPage, setNewPage] = useState(false);
  const [focus, setFocus] = useState(null);

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
          </div>
        </main>
      </AppWideContext.Provider>
    </>
  );
}

export default App;
