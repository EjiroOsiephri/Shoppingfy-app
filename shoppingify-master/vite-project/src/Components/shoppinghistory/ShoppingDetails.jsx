import React from "react";

const ShoppingDetails = (props) => {
  return (
    <>
      <section>
        <button>back</button>
        <main>
          <h1>{props.historyTitle}</h1>
        </main>
      </section>
    </>
  );
};

export default ShoppingDetails;
