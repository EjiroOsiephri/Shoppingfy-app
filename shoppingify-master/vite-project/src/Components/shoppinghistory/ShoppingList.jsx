import React, { useContext } from "react";
import Classes from "../../Sass/ShoppingList.module.scss";
import AppWideContext from "../../Context/AppContext";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import ShoppingDetails from "./ShoppingDetails";
import { useState } from "react";

const ShoppingList = (props) => {
  const currentDate = new Date();
  const calender = currentDate.toDateString();
  const currentMonth = currentDate.getMonth();
  const [showHistoryDetails, setShowHistoryDetails] = useState(false);
  const [historyTitle, setHistoryTitle] = useState("");

  let monthToString;

  if (currentMonth === 1) {
    monthToString = "January";
  }
  if (currentMonth === 2) {
    monthToString = "February";
  }
  if (currentMonth === 3) {
    monthToString = "March";
  }
  if (currentMonth === 4) {
    monthToString = "April";
  }
  if (currentMonth === 5) {
    monthToString = "May";
  }
  if (currentMonth === 6) {
    monthToString = "June";
  }
  if (currentMonth === 7) {
    monthToString = "July";
  }
  if (currentMonth === 8) {
    monthToString = "August";
  }
  if (currentMonth === 9) {
    monthToString = "September";
  }
  if (currentMonth === 10) {
    monthToString = "October";
  }
  if (currentMonth === 11) {
    monthToString = "November";
  }
  if (currentMonth === 12) {
    monthToString = "December";
  }

  const historyState = useSelector(
    (state) => state.history.allItemsInHistoryArray
  );

  const statusDiv = (item) => {
    setHistoryTitle(item.historyTitle);
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
                    <p>{calender}</p>
                  </div>
                  <aside className={Classes["Shoppinglist-component"]}>
                    <div>
                      <h1>{item.historyTitle}</h1>
                    </div>
                    <div className={Classes["calender-container"]}>
                      <span>
                        <BsFillCalendar2CheckFill />
                      </span>
                      <p>{calender}</p>
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
