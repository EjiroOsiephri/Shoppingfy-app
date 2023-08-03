import React from "react";
import Classes from "../Sass/SideBar.module.scss";
import appLogo from "../assets/logo.svg";
import poll from "../assets/poll.svg";
import rotate from "../assets/rotate.svg";
import lists from "../assets/list.svg";
import Cart from "../assets/cart.png";

const SideBar = () => {
  return (
    <>
      <nav className={Classes.navigation}>
        <div className={Classes.logoDiv}>
          <img src={appLogo} alt="" />
        </div>
        <div className={Classes.navigatePages}>
          <img src={poll} alt="" />
          <img src={rotate} alt="" />
          <img src={lists} alt="" />
        </div>
        <div className={Classes.cartItems}>
          <img src={Cart} alt="cart" />
          <p>0</p>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
