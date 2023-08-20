import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Styled from "../../Sass/Modal.module.scss";
import { motion } from "framer-motion";
import AppWideContext from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

const BackDrop = () => {
  return <div className={Styled.backdrop}></div>;
};
const Modal = () => {
  const ctx = useContext(AppWideContext);
  const navigate = useNavigate();

  const cancelModal = () => {
    ctx.setShowModal(false);
  };
  const learnMore = () => {
    navigate("/learnmore");
    ctx.setShowModal(false);
  };
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
        <button onClick={cancelModal}>Cancel</button>
        <button onClick={learnMore}>Learn more</button>
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
