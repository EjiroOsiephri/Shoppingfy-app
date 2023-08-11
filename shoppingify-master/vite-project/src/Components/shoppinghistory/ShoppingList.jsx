import React from "react";

const ShoppingList = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      <section>
        <header>
          <h1>Shopping History</h1>
        </header>
        <aside>
          <div className="date-container">
            {/* <span>{currentMonth}</span>,<span>{currentDay}</span>,
            <span>{currentYear}</span> */}
          </div>
        </aside>
      </section>
    </>
  );
};

export default ShoppingList;
