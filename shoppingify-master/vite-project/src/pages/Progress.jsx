import React from "react";
import Classes from "../Sass/progressbar.module.scss";
import { useSelector } from "react-redux";
import Charts from "./Chart";

const Progress = () => {
  const statisticsState = useSelector((state) => state.cart.items);

  const sortedItems = [...statisticsState].sort(
    (a, b) => b.quantity - a.quantity
  );

  const titleCounts = {};
  statisticsState.forEach((item) => {
    const title = item.title;
    if (titleCounts[title]) {
      titleCounts[title]++;
    } else {
      titleCounts[title] = 1;
    }
  });

  const sortedCategories = Object.keys(titleCounts)
    .map((title) => ({
      title,
      count: titleCounts[title],
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <>
      <main className={Classes["progress-main"]}>
        <div className={Classes["flex-progress-container"]}>
          <section className={Classes["topItems"]}>
            <h1>Top Items</h1>
            {sortedItems.slice(0, 3).map((item, index) => {
              return (
                <aside key={index} className={Classes["progress-container"]}>
                  <div className={Classes["progress-label"]}>
                    <p>{item.name}</p>
                    <p>{item.quantity}%</p>
                  </div>
                  <section className={Classes["progress-bar"]}>
                    <div
                      className={Classes["progress-bar-fill"]}
                      style={{ width: `${item.quantity * 3}%` }}
                    ></div>
                  </section>
                </aside>
              );
            })}
          </section>
          <section className={Classes["topCategories"]}>
            <h1>Top Categories</h1>
            {sortedCategories.slice(0, 3).map((item, index) => {
              return (
                <aside key={index} className={Classes["progress-container"]}>
                  <div className={Classes["progress-label"]}>
                    <p>{item.title}</p>
                    <p>{item.count * 10}%</p>
                  </div>
                  <section className={Classes["progress-bar"]}>
                    <div
                      style={{ width: `${item.count * 10}%` }}
                      className={Classes["progress-bar-fill-categories"]}
                    ></div>
                  </section>
                </aside>
              );
            })}
          </section>
        </div>
        <div className={Classes["chart"]}>
          <Charts />
        </div>
      </main>
    </>
  );
};

export default Progress;
