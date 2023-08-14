import React, { useContext } from "react";
import Classes from "../../Sass/ShoppingList.module.scss";
import AppWideContext from "../../Context/AppContext";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import ShoppingDetails from "./ShoppingDetails";
import { useState } from "react";

const ShoppingList = () => {
  const [showHistoryDetails, setShowHistoryDetails] = useState(false);
  const [historyTitle, setHistoryTitle] = useState("");

  const historyState = useSelector(
    (state) => state.history.allItemsInHistoryArray
  );

  const statusDiv = (item) => {
    setHistoryTitle(item);
    setShowHistoryDetails(true);
  };

  return (
    <>
      {!showHistoryDetails ? (
        <section className={Classes["shoppingHistory"]}>
          <header>
            <h1>Shopping History</h1>
          </header>
          <aside>
            {historyState?.map((item, index) => {
              return (
                <section key={index}>
                  <div className={Classes["date-container"]}>
                    <p>{item.calender}</p>
                  </div>
                  <aside className={Classes["Shoppinglist-component"]}>
                    <div>
                      <h1>{item.historyTitle}</h1>
                    </div>
                    <div className={Classes["calender-container"]}>
                      <span>
                        <BsFillCalendar2CheckFill />
                      </span>
                      <p>{item.calender}</p>
                      <section
                        onClick={() => statusDiv(item)}
                        className={Classes["statusDiv"]}
                      >
                        <button>Pending</button>
                        <p>{">"}</p>
                      </section>
                    </div>
                  </aside>
                </section>
              );
            })}
          </aside>
        </section>
      ) : (
        <ShoppingDetails historyTitle={historyTitle} />
      )}
    </>
  );
};

export default ShoppingList;
