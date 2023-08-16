import React, { useState } from "react";
import Classes from "../Sass/progressbar.module.scss";
import { useSelector } from "react-redux";

const Progress = () => {
  const statisticsState = useSelector((state) => state.cart.items);

  const sortedItems = [...statisticsState].sort(
    (a, b) => b.quantity - a.quantity
  );

  return (
    <>
      <main className={Classes["progress-main"]}>
        <section className={Classes["topItems"]}>
          <h1>Top Items</h1>
          {sortedItems.slice(0, 3).map((item, index) => {
            return (
              <aside key={index} className={Classes["progress-container"]}>
                <div className={Classes["progress-label"]}>
                  <p>{item.name}</p>
                  <p>{100}</p>
                </div>
                <section className={Classes["progress-bar"]}>
                  <div className={Classes["progress-bar-fill"]}></div>
                </section>
              </aside>
            );
          })}
        </section>
        <section className="topCategories">
          <h1>Top Categories</h1>
        </section>
      </main>
    </>
  );
};

export default Progress;
