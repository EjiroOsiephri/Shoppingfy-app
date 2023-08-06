import React, { useState } from "react";
import Classes from "../Sass/SideBar.module.scss";
import appLogo from "../assets/logo.svg";
import poll from "../assets/poll.svg";
import rotate from "../assets/rotate.svg";
import lists from "../assets/list.svg";
import Cart from "../assets/cart.png";
import { useSelector } from "react-redux";

const SideBar = (props) => {
  const state = useSelector((state) => state.cart.totalCartQuantity);

  const cartRenderHandler = () => {
    props.setShowCart((prevCart) => !prevCart);
  };

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
        <div onClick={cartRenderHandler} className={Classes.cartItems}>
          <img src={Cart} alt="cart" />
        </div>
        <section className={Classes.count}>
          <p>{state}</p>
        </section>
      </nav>
    </>
  );
};

export default SideBar;
