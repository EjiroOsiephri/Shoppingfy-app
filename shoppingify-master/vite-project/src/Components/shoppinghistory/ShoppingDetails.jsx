import React, { useContext } from "react";
import AppWideContext from "../../Context/AppContext";
import { useSelector } from "react-redux";

const ShoppingDetails = (props) => {
  const totalState = useSelector((state) => state.cart.items || []);

  console.log(totalState);

  const ctx = useContext(AppWideContext);

  const goBack = () => {
    ctx.setShowHistoryDetails(false);
  };

  return (
    <>
      <section>
        <button onClick={goBack}>back</button>
        <main>
          <div className="mainheader-div">
            <h1>{props.historyTitle.historyTitle}</h1>
            <p>{props.calender.calender}</p>
          </div>
          <div className="main-items">
            {totalState?.map((item, index) => {
              return (
                <div key={index}>
                  <h3>{item.title}</h3>;<h3>{item.name}</h3>
                </div>
              );
            })}
          </div>
        </main>
      </section>
    </>
  );
};

export default ShoppingDetails;
