import React, { useContext, useState } from "react";
import Classes from "../Sass/AddNewItem.module.scss";
import AppWideContext from "../Context/AppContext";

const AddNewItem = () => {
  const [name, setName] = useState("");
  const ctx = useContext(AppWideContext);

  const cancelPageHandler = () => {
    ctx.setShowNewItem(false);
  };
  function handleNameChangeHandler(e) {
    setName(e.target.value);
  }
  console.log(name);
  return (
    <>
      <section className={Classes["addewItemContainerSection"]}>
        <h1>Add a new item</h1>
        <div className={Classes["nameItemContainer"]}>
          <label>Name</label>
          <input
            onChange={handleNameChangeHandler}
            type="text"
            placeholder="Enter a name"
          />
        </div>
        <div className={Classes["noteItemContainer"]}>
          <label>Note(optional)</label>
          <textarea type="text" placeholder="Enter a note" />
        </div>
        <div className={Classes["imageItemContainer"]}>
          <label>Image(optional)</label>
          <input type="text" placeholder="Enter a image" />
        </div>
        <div className={Classes["categoryItemContainer"]}>
          <label>Category</label>
          <input type="text" placeholder="Enter a Category" />
        </div>
        <div className={Classes["goBackContainer"]}>
          <button onClick={cancelPageHandler} className={Classes["cancel"]}>
            cancel
          </button>
          <button className={Classes["save"]}>Save</button>
        </div>
      </section>
    </>
  );
};

export default AddNewItem;
