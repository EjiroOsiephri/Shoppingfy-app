import React, { useContext, useEffect } from "react";
import AppWideContext from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import "../Sass/learnmore.scss";

const LearnMore = () => {
  const ctx = useContext(AppWideContext);
  const navigate = useNavigate();

  useEffect(() => {
    ctx.setShowModal(false);
  }, []);

  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <>
      <main>
        <button className="learn-btn" onClick={navigateToHome}>
          Go back to home
        </button>
        <div className="text-section-learn">
          <h1>Thanks For checking out this page</h1>
          <p>
            Too add an item to the cart, you click on the plus(+) on the home
            page. if you do so, your item will be sucessfully added to the cart.
            The logo's on the left side of the page will determine which page
            you'd be on. The first logo is the logo of the website. The bar
            chart logo will take you to the chart component. Take note that this
            will only show when you have added items to the cart. The rotate img
            is to go to the shopping history page. to go to this page, after
            adding items to the cart , there's an input field right below the
            cart, enter the name you want to remember that shoppinglist as. In
            the shopping history page you can click on the greater than sign to
            see the items that are in the cart at the moment you created the
            shopping history. On mobile devices click on the cart section to
            show or hide the cart. And lastly when you stray away from the home
            section and you want to go back, click on the three lines on the
            side bar , it'll take you to the home page.
          </p>
          <h4>Follow all these steps and you're good to go.</h4>
        </div>
      </main>
    </>
  );
};

export default LearnMore;
