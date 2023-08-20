import React from "react";
import ReactDOM from "react-dom";
import Styled from "../../Sass/Modal.module.scss";
import { motion } from "framer-motion";

const BackDrop = () => {
  return <div className={Styled.backdrop}></div>;
};
const Modal = () => {
  return (
    <motion.div className={Styled.modal}>
      <div className={Styled.content}>
        <h1>Welcome To Shoppinify</h1>
        <p>
          Shoppingify is a website that allows users to add Items to food list,
          Check out your shopping history, create a new item and check your data
          in a chart section. If you haven't used a shoppinglist website
          beforehand, Click the learn more button to learnmore.
        </p>
      </div>
      <div className={Styled.button}>
        <button>Cancel</button>
        <button>Alright</button>
      </div>
    </motion.div>
  );
};

const Module = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(<Modal />, document.getElementById("modal-root"))}
    </React.Fragment>
  );
};

export default Module;
