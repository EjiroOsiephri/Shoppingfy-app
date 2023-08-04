import SideBar from "./Components/SideBar";
import MainHeader from "./Components/MainHeader";
import "./app.scss";
import ItemsContainer from "./Components/ItemsContainer";
import { useState } from "react";

function App() {
  const [searchInputItem, setSearchItem] = useState("");

  function searchInput(item) {
    setSearchItem(item);
  }

  return (
    <>
      <main className="main">
        <SideBar />
        <MainHeader
          searchInput={searchInput}
          searchInputItem={searchInputItem}
        />
        <ItemsContainer />
      </main>
    </>
  );
}

export default App;
