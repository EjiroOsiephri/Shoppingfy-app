import SideBar from "./Components/SideBar";
import MainHeader from "./Components/MainHeader";
import "./app.scss";
import ItemsContainer from "./Components/ItemsContainer";

function App() {
  return (
    <>
      <main className="main">
        <SideBar />
        <MainHeader />
        <ItemsContainer />
      </main>
    </>
  );
}

export default App;
