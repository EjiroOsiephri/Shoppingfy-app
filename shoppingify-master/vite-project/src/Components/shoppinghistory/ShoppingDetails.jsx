import React, { useContext } from "react";
import AppWideContext from "../../Context/AppContext";
import { useSelector } from "react-redux";
import Classes from "../../Sass/ShoppingDetails.module.scss";

const ShoppingDetails = (props) => {
  const totalState = useSelector((state) => state.cart.items || []);

  const ctx = useContext(AppWideContext);

  const goBack = () => {
    ctx.setShowHistoryDetails(false);
  };

  return (
    <>
      <section className={Classes["shopping-details-section"]}>
        <button onClick={goBack}>back</button>
        <main>
          <div className={Classes["mainheader-div"]}>
            <h1>{props.historyTitle.historyTitle}</h1>
            <p>{props.calender.calender}</p>
          </div>
          <div className={Classes["shoppingDetails-flex-container"]}>
            {totalState?.map((item, index) => {
              return (
                <aside key={index}>
                  <div className={Classes["shoppingDetails-name-div"]}>
                    <h4>{item.name}</h4>
                    <p>{item.quantity + "pcs"}</p>
                  </div>
                </aside>
              );
            })}
          </div>
        </main>
      </section>
    </>
  );
};

export default ShoppingDetails;
