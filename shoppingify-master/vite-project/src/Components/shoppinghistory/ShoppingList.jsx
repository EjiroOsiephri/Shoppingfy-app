import React, { useContext } from "react";
import Classes from "../../Sass/ShoppingList.module.scss";
import AppWideContext from "../../Context/AppContext";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const ShoppingList = (props) => {
  const currentDate = new Date();
  const calender = currentDate.toDateString();
  const currentMonth = currentDate.getMonth();

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

  const ctx = useContext(AppWideContext);

  const historyState = useSelector(
    (state) => state.history.allItemsInHistoryArray
  );

  return (
    <>
      <section className={Classes["shoppingHistory"]}>
        <header>
          <h1>Shopping History</h1>
        </header>
        <aside>
          {historyState?.map((item, index) => {
            return (
              <section key={item.currentDate}>
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
                    <section className={Classes["statusDiv"]}>
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
    </>
  );
};

export default ShoppingList;
