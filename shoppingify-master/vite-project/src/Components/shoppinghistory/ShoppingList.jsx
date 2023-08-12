import React, { useContext } from "react";
import AppWideContext from "../../Context/AppContext";

const ShoppingList = (props) => {
  const currentDate = new Date();
  const calender = currentDate.toDateString();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDay();
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

  return (
    <>
      <section>
        <header>
          <h1>Shopping History</h1>
        </header>
        <aside>
          {ctx.allItemsInHistoryArray.map((item) => {
            return (
              <section>
                <div className="date-container">
                  <span>{monthToString}</span>,<span>{currentDay}</span>,
                  <span>{currentYear}</span>
                </div>
                <aside>
                  <div key={item.id}>
                    <h1>{item.historyTitle}</h1>
                  </div>
                  <div className="calender-container">
                    <p>{calender}</p>
                    <section className="statusDiv">
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
